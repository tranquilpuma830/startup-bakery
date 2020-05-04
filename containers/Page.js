import React from "react";
import { Layout } from "antd";
import Footer from "../containers/Footer/Footer";
import Navbar from "./Header/Header";

const { Content } = Layout;

export default function Page(props) {
  return (
    <div>
      <Layout>
        <Navbar />
        <Content className="bg-white">{props.children}</Content>
        <Footer />
      </Layout>
    </div>
  );
}
