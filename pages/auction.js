import React, { useState } from 'react';
import { Button, Descriptions, Avatar, Card, Divider, List, Typography, Statistic, Layout } from 'antd';
import { PLAYERS } from '../constants/users';
import Page from '../containers/Page';

const { Sider, Content } = Layout;
const { Text, Title } = Typography;
const { Countdown } = Statistic;

const TIMER_DEADLINE = Date.now() + 1000 * 60 * 60 * 2;

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
          <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={item.title} description={item.amount + '$'} />
        </List.Item>
      )}
    />
  );
};

const Auction = ({ ...props }) => {
  const [topPlayer, setTopPlayer] = useState(topRaisedPlayer);
  // TODO: Raise bet

  const onRaiseBet = () => {
    const amount = topPlayer.amount + 1000;
    setTopPlayer({
      ...topPlayer,
      amount,
    });
  };

  return (
    <Page>
      <Layout className='bg-white'>
        <Sider id='sidebar'>
          <Card title='Инвесторы' className='border-bottom-0 h-100 rounded-0'>
            <InvestorsList players={PLAYERS} />
          </Card>
        </Sider>
        <Content className='container-fluid  shape-background'>
          <div className='mt-4 d-flex flex-column justify-content-center align-items-center'>
            <Title>ТОП ИНВЕСТОР</Title>
            <Avatar src={topPlayer.avatar} size={256} />
            <div className='mt-4 text-center'>
              <Title level={4}>{topPlayer.title}</Title>
              <h6>{topPlayer.rating}</h6>
            </div>

            <Divider className='bg-light' />

            <Descriptions size='medium' column={1}>
              <Descriptions.Item label='Максимальная инвестиция'>
                <span className='font-weight-bold'>{topPlayer.amount}$</span>
              </Descriptions.Item>
              <Descriptions.Item label='Таймер'>
                <small>
                  <Countdown
                    valueRender={(element) => {
                      return (
                        <div>
                          <span className='font-weight-bold'>{element}</span>
                        </div>
                      );
                    }}
                    valueStyle={{ fontSize: 'small' }}
                    value={TIMER_DEADLINE}
                    format='D дней H часов m минут s'
                  />
                </small>
              </Descriptions.Item>
            </Descriptions>
            <div className='my-4 mx-4 w-100 d-flex justify-content-start'>
              <Button onClick={onRaiseBet} type='primary' shape='round' className='float-right' ghost>
                <b>Поднять</b>
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
    </Page>
  );
};

export default Auction;
