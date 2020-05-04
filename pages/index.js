import React from "react";
import Link from "next/link";
import Header from "../containers/Header/Header";
import "../styles/main.scss";
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
    <Layout className="cover-container d-flex h-100 mx-auto flex-column bg-white-filled">
      <Header />
      <Content className="container-fluid d-flex px-5 align-items-center">
        <div className="my-auto w-50 px-5 index__content">
          <Title className="font-weight-bold">Испеки свой проект</Title>

          <Text>
            <b>Startup Bakery</b> - уникальная площадка, где каждый может
            разместить свою проектную идею и довести ее результата.
            Присоединяйся к Startup Bakery, и с нашей помощью ты сможешь
            “выпечь” свой стартап, пройдя самые трудные этапы, на которых чаще
            всего перегорают проекты.
          </Text>
          <Link href="/login">
            <a className="index__btn btn btn-primary mt-4 d-block">
              Попробовать бесплатно
            </a>
          </Link>
        </div>
        <div className="my-auto w-50 bg-guy" style={{ height: "90vh" }} />
      </Content>
    </Layout>
  );
}
