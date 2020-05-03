import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

export default function Page(props) {
  return (
    <Layout className='h-100'>
      <Header>Header</Header>
      <Content>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
