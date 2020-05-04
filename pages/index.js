import React from 'react';
import Link from 'next/link';
import Header from '../containers/Header/Header';
import '../styles/main.scss';
import { Input, Typography, Layout, Form } from 'antd';

const { Content } = Layout;
const { Text, Title } = Typography;

export default function Home() {
  return (
    <Layout className="d-flex mx-auto flex-column bg" style={{ height: '100vh' }}>
      <Header forLanding />
      <Content className="container-fluid d-flex px-5 align-items-center">
        <div className="my-auto mr-5 mh-100 w-50 p-5 card-empty">
          <Title className="font-weight-bold lead-land-title">
            Испеки свой проект
          </Title>

          <div className="lead-land-text">
            <p>
              <b>Startup Bakery</b> - уникальная площадка, где каждый может разместить свою проектную идею и довести ее
              результата.
            </p>
            <p>
              Присоединяйся к Startup Bakery, и с нашей помощью ты сможешь “выпечь” свой стартап, пройдя самые трудные
              этапы, на которых чаще всего перегорают проекты.
            </p>
          </div>

          <Link href="/login">
            <a
              className="btn-gradient btn btn-primary mt-lg-5 mt-md-3 w-lg-50 py-lg-3 py-2 d-block text-uppercase"
              style={{ fontWeight: 600 }}
            >
              Попробовать бесплатно
            </a>
          </Link>
        </div>
        <div className="my-auto w-50 bg-guy" style={{ height: '90vh' }} />
      </Content>
    </Layout>
  );
}
