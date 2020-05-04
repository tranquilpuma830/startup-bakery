import React, { useState } from "react";
import {
  Button,
  Descriptions,
  Avatar,
  Card,
  Divider,
  List,
  Typography,
  Statistic,
  Layout,
} from "antd";
import { PLAYERS } from "../constants/users";
import Page from "../containers/Page";
import "../styles/main.scss";

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
      itemLayout="horizontal"
      dataSource={PLAYERS}
      renderItem={(item, idx) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.title}
            description={item.amount + "$"}
          />
        </List.Item>
      )}
    />
  );
};

const Auction = ({ ...props }) => {
  const [topPlayer, setTopPlayer] = useState(topRaisedPlayer);

  const onRaiseBet = () => {
    const amount = topPlayer.amount + 1000;
    setTopPlayer({
      ...topPlayer,
      amount,
    });
  };

  return (
    <Page>
      <Layout className="bg-white">
        <Sider id="sidebar">
          <Card title="Инвесторы" className="border-bottom-0 h-100 rounded-0">
            <InvestorsList players={PLAYERS} />
          </Card>
        </Sider>
        <Content className="container">
          <div class="row bets__card">
            <div class="col bets__profile">
              <Avatar src={topPlayer.avatar} size={156} />
              <h3>Дон Хакатон</h3>
              <p>CEO</p>
            </div>
            <div class="col">
              <h3>StartupBakery</h3>
              <p>Описание проекта</p>
              <p>Кто делает проект</p>
              <p>Счетчки после старта реализации</p>

              <a className="btn btn-primary mb-3 float-right">Поднять ставку</a>
            </div>
          </div>
        </Content>
      </Layout>
    </Page>
  );
};

export default Auction;
