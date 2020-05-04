import React from "react";
import Link from "next/link";
import { Typography, Layout } from "antd";

import Header from "../containers/Header/Header";

const { Content } = Layout;
const { Title } = Typography;

export default function Home() {
  return (
    <Layout
      className="d-flex mx-auto flex-column bg"
      style={{ height: "100vh" }}
    >
      <Header forLanding />
      <Content className="container-fluid d-flex align-items-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-md-6 col-lg-5">
                <div className="w-100 p-5 card-empty">
                  <Title className="font-weight-bold lead-land-title">
                    Испеки свой проект
                  </Title>

                  <div className="lead-land-text">
                    <p>
                      <b>Startup Bakery</b> - уникальная площадка, где каждый
                      может разместить свою проектную идею и довести ее
                      результата.
                    </p>
                    <p>
                      Присоединяйся к Startup Bakery, и с нашей помощью ты
                      сможешь “выпечь” свой стартап, пройдя самые трудные этапы,
                      на которых чаще всего перегорают проекты.
                    </p>
                  </div>

                  <div className="mt-lg-5 mt-md-3">
                    <Link href="/login">
                      <a
                        className="btn-gradient btn btn- w-lg-50 py-lg-3 py-2 d-block text-uppercase"
                        style={{ fontWeight: 600 }}
                      >
                        Попробовать бесплатно
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5">
                <div className="w-100 bg-guy" style={{ height: "90vh" }} />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
