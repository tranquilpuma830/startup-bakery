import React, { useState } from 'react';
import { Button, Descriptions, Avatar, Card, Divider, List, Typography, Statistic, Layout } from 'antd';
import { PLAYERS } from '../constants/users';

const { Sider, Content } = Layout;
const { Text, Title } = Typography;
const { Countdown } = Statistic;

const TIMER_DEADLINE = Date.now() + 1000 * 60 * 60 * 24 * 2;

const topRaisedPlayer = PLAYERS.reduce(function (prev, current) {
  return prev.amount > current.amount ? prev : current;
});

const InvestorsList = ({ players }) => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={PLAYERS}
      renderItem={(item, idx) => (
        <List.Item>
          <List.Item.Meta title={item.title} description={item.amount + '$'} />
        </List.Item>
      )}
    />
  );
};

const Auction = ({ ...props }) => {
  const [topPlayer, setTopPlayer] = useState(topRaisedPlayer);
  // TODO: Raise bet

  const onRaiseBet = () => {};

  return (
    <Layout>
      <Sider id='sidebar'>
        <Card title='Инвесторы' className='h-100 rounded-0'>
          <InvestorsList players={PLAYERS} />
        </Card>
      </Sider>
      <Content className='container-fluid mt-4'>
        <div className=' d-flex flex-column justify-content-center align-items-center'>
          <Title>ТОП ИНВЕСТОР</Title>
          <Avatar src={topPlayer.avatar} size={256} />
          <div className='mt-4 text-center'>
            <Title level={4} className='text-primary'>
              {topPlayer.title}
            </Title>
            <span className='text-primary'>adasdsd</span>
            <h6>{topPlayer.rating}</h6>
          </div>

          <Divider />
          <Descriptions size='medium' column={1}>
            <Descriptions.Item label='Максимальная инвестиция'>
              <span className='font-weight-bold'>{topPlayer.amount}$</span>
            </Descriptions.Item>
            <Descriptions.Item label='Таймер'>
              <Countdown className='text-sm' value={TIMER_DEADLINE} format='D дней H часов m минут s' />
            </Descriptions.Item>
          </Descriptions>
          <div className='mt-4 d-flex justify-content-center'>
            <Button type='primary' shape='round' className='float-left' ghost>
              Поднять
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Auction;
