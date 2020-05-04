import React from "react";
import Page from "../containers/Page";
import "../styles/main.scss";
import { Layout } from "antd";
import Link from "next/link";

const Login = () => {
  return (
    <Page>
      <Layout className="bg-white">
        <div className="container login">
          <div className="row">
            <div className="col login__img"></div>
            <div className="col form__block">
              <form>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control login__data"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Пароль</label>
                  <input
                    type="password"
                    className="form-control login__data"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <Link href="/ideas">
                  <a className="btn btn-primary mb-3 float-right">Войти</a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  );
};

export default Login;
