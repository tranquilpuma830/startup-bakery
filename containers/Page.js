import React from "react";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

export default function Page(props) {
  return (
    <Layout className="h-100">
      <Header className="bg-primary">Header</Header>
      <Content className="bg-white">{props.children}</Content>
      <Footer className="bg-primary">Footer</Footer>
    </Layout>
  );
}
