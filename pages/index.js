import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Input, Typography, Layout, Form } from "antd";

const { Content } = Layout;
const { Text, Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Home() {
  return (
    <Layout className="cover-container d-flex h-100 mx-auto flex-column bg-white bg-half-filled">
      <Head>
        <title>Startup | Bakery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="masthead mb-auto">
        <div className="inner  p-3">
          <nav className="d-flex nav nav-masthead justify-content-between align-items-center font-weight-bold">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img width="100px" src="/icons/logo.svg" />
              </a>
              <div className="d-flex w-auto float-right text-secondary">
                <a className="text-secondary nav-link" href="#">
                  Курсы
                </a>
                <a className="text-secondary nav-link" href="#">
                  Команды
                </a>
                <a className="text-secondary nav-link" href="#">
                  Новости
                </a>
                <a className="text-secondary nav-link" href="#">
                  Вакансии
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Content className="d-flex p-4 ml-2 align-items-center bg-guy">
        <div className="my-auto h-100">
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            className="my-auto"
          >
            <Title>Войти</Title>

            <Form.Item
              name="username"
              rules={[{ required: true, message: "Пожалуйста, введите email" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Пожалуйста, введите пароль" },
              ]}
            >
              <Input.Password placeholder="Пароль" />
            </Form.Item>

            <Form.Item>
              <Link href="ideas">
                <a className="btn btn-outline-primary">Дальше</a>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
}
