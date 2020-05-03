import React from "react";
import { Layout, Row, Col } from "antd";
import LeftMenu from "./Menu/LeftMenu";
import Footer from "../containers/Footer/Footer";
import Navbar from "./Header/Header";

const { Content } = Layout;

export default function Page(props) {
  return (
    <div>
      <Layout>
        <Navbar />
        <Row>
          <Col span={4}>
            <LeftMenu />
          </Col>
          <Col span={20}>
            <Content>{props.children}</Content>
          </Col>
        </Row>
        <Footer />
      </Layout>
    </div>
  );
}
