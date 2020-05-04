import React from 'react';
import Link from 'next/link';
import Header from '../containers/Header/Header';
import { Input, Typography, Layout, Form } from 'antd';

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
    <Layout className='cover-container d-flex h-100 mx-auto flex-column bg-white-filled'>
      <Header />
      <Content className='d-flex px-4 align-items-center'>
        <div className='my-auto w-50 px-2'>
          <Title className=''>Lorem ipsum</Title>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac risus enim. Proin eu ornare quam. Proin et
            dui quam. Vivamus in malesuada nisl, vitae fermentum ligula. Vestibulum mollis ante tincidunt, facilisis
            risus et, pretium felis. Etiam ut est id risus tincidunt facilisis. Vestibulum viverra libero suscipit nisi
            tempus porta. Quisque ullamcorper in tortor id feugiat. Aliquam facilisis eu leo nec fermentum.
          </Text>
        </div>
        <div className='my-auto w-50 bg-guy' style={{ height: '90vh' }} />
      </Content>
    </Layout>
  );
}
