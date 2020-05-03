import React from "react";
import { Layout, Row, Col } from "antd";
import LeftMenu from "./Menu/LeftMenu";

const { Header, Footer, Content } = Layout;

export default function Page(props) {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Row>
          <Col span={4}>
            <LeftMenu />
          </Col>
          <Col span={20}>
            <Content>{props.children}</Content>
          </Col>
        </Row>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
