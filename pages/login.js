import React, { useState, useEffect } from "react";
import { Layout, Spin, Alert } from "antd";
import Router from "next/router";
import * as firebase from "firebase";

import Page from "../containers/Page";
import { useUser } from "../containers/UserContext";

const login = (idToken) =>
  fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idToken: idToken,
    }),
  });

export default function Login() {
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const provider = new firebase.auth.GoogleAuthProvider();

  if (process.browser && user) {
    Router.push("/ideas");
  }

  const signInWithGoogle = () => {
    setLoading(true);
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => user.getIdToken())
      .then(login)
      .then((response) => response.json())
      .then(() => Router.push("/ideas"))
      .catch(({ code, message }) => {
        if (code !== "auth/popup-closed-by-user") {
          setErrorMessage(message);
        }
        setLoading(false);
      });
  };

  return (
    <Page>
      <Layout className="bg-white">
        <div className="container login">
          <div className="row">
            <div className="col login__img"></div>
            <div className="col form__block">
              <Spin spinning={loading}>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control login__data"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input
                      type="password"
                      className="form-control login__data"
                      id="password"
                      placeholder="password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary mb-3 float-right"
                  >
                    Войти
                  </button>
                  <div className="google-btn" onClick={signInWithGoogle}>
                    <div className="google-icon-wrapper">
                      <img
                        className="google-icon-svg"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      />
                    </div>
                    <p className="btn-text">
                      <b>Sign in with Google</b>
                    </p>
                  </div>
                </form>
                {Boolean(errorMessage) && (
                  <Alert
                    message="Authentication error"
                    description={errorMessage}
                    type="error"
                  />
                )}
              </Spin>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  );
}
