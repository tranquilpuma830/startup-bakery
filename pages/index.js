import React from "react";
import Link from "next/link";
import { Button, Typography, Layout } from "antd";

const { Content } = Layout;
const { Text, Title } = Typography;

export default function Home() {
  return (
    <Layout className="cover-container d-flex h-100 p-3 mx-auto flex-column bg-half">
      <header class="masthead mb-auto">
        <div class="inner">
          <nav class="d-flex nav nav-masthead justify-content-between align-items-center font-weight-bold">
            <a class="navbar-brand" href="#">
              <img
                src="/logo.svg"
                width="60"
                height="60"
                class="d-inline-block"
                alt="Startup bakery"
              />
              StartupBakery
            </a>
            <div className="d-flex w-auto float-right text-secondary">
              <a class="nav-link" href="#">
                Курсы
              </a>
              <a class="nav-link" href="#">
                Команды
              </a>
              <a class="nav-link" href="#">
                Новости
              </a>
              <a class="nav-link" href="#">
                Вакансии
              </a>
            </div>
          </nav>
        </div>
      </header>
      <Content className="d-flex inner cover align-items-center">
        <div className="my-auto">
          <Title>Title</Title>
          <Link href="#">
            <a className="btn btn-outline-primary">Дальше</a>
          </Link>
        </div>
      </Content>
    </Layout>
  );
}
