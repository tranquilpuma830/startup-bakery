import React from 'react';
import Link from 'next/link';
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
    <Layout className='cover-container d-flex h-100 mx-auto flex-column bg-white bg-half-filled'>
      <header className='masthead mb-auto'>
        <div className='inner bg-white p-3 mb-2'>
          <nav className='d-flex nav nav-masthead justify-content-between align-items-center font-weight-bold'>
            <a className='navbar-brand' href='#'>
              <img src='/logo.svg' width='60' height='60' className='d-inline-block' alt='Startup bakery' />
              StartupBakery
            </a>
            <div className='d-flex w-auto float-right text-secondary'>
              <a className='text-secondary nav-link' href='#'>
                Курсы
              </a>
              <a className='text-secondary nav-link' href='#'>
                Команды
              </a>
              <a className='text-secondary nav-link' href='#'>
                Новости
              </a>
              <a className='text-secondary nav-link' href='#'>
                Вакансии
              </a>
            </div>
          </nav>
        </div>
      </header>
      <Content className='d-flex p-4 ml-2 align-items-center bg-guy'>
        <div className='my-auto w-25'>
          <Title className=''>Lorem ipsum</Title>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac risus enim. Proin eu ornare quam. Proin et
            dui quam. Vivamus in malesuada nisl, vitae fermentum ligula. Vestibulum mollis ante tincidunt, facilisis
            risus et, pretium felis. Etiam ut est id risus tincidunt facilisis. Vestibulum viverra libero suscipit nisi
            tempus porta. Quisque ullamcorper in tortor id feugiat. Aliquam facilisis eu leo nec fermentum.
          </Text>
        </div>
      </Content>
    </Layout>
  );
}
