import React from "react";
import Link from "next/link";
import { Layout } from "antd";

import Page from "../containers/Page";

export default function Login() {
  return (
    <Page>
      <Layout className="bg-white">
        <div className="container login">
          <div className="row">
            <div className="col login__img"></div>
            <div className="col form__block">
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
                <Link href="/ideas">
                  <button
                    type="submit"
                    className="btn btn-primary mb-3 float-right"
                  >
                    Войти
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  );
}
