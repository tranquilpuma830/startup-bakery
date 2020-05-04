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

        <Content className="container auction__top">
          <div class="row bets__card">
            <div class="col-8 bets__project">
              <div className="bets__project__info">
                <div class="row">
                  <div class="col-4">
                    <img width="150px" src="/icons/pizza.svg" />
                  </div>
                  <div class="col-8 text-left">
                    <p>Startup Bakery</p>
                    <p>
                      Startup Bakery - уникальная площадка, где каждый может
                      разместить свою проектную идею и довести ее результата.
                      Присоединяйся к Startup Bakery, и с нашей помощью ты
                      сможешь “выпечь” свой стартап, пройдя самые трудные этапы,
                      на которых чаще всего перегорают проекты.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container bets__project__menu">
                <div class="row">
                  <div class="col-4">
                    <div className="bets__project__title">Статус проекта</div>
                  </div>
                  <div class="col-8">
                    Команда распределила <b>задачи</b>, проверила
                    <b>гипотезы</b> и приступает к разработке <b>прототипа</b>.
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <div className="bets__project__title">Таймер</div>
                  </div>
                  <div class="col-8">
                    <p>
                      До следующего раунда осталось:
                      <span className="font-weight-bold">
                        <Descriptions.Item label="Таймер">
                          <small>
                            <Countdown
                              valueRender={(element) => {
                                return (
                                  <div>
                                    <span className="font-weight-bold">
                                      {element}
                                    </span>
                                  </div>
                                );
                              }}
                              valueStyle={{ fontSize: "small" }}
                              value={TIMER_DEADLINE}
                              format="D дней H часов m минут s"
                            />
                          </small>
                        </Descriptions.Item>
                      </span>
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <div className="bets__project__title">Команда</div>
                  </div>
                  <div class="col-8">
                    <b>Seals</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 bets__profile">
              <div class="bets__title">Топ инвестор</div>
              <Avatar
                src="https://www.tourdom.ru/upload/iblock/e46/e469d6c078fdc6d46886f51c3d8f0737.jpeg"
                size={156}
              />
              <div className="bets__profile__content">
                <h5>Билл Гейтс</h5>
                <p>CEO Microsoft</p>
                <div className="bets__max">
                  <b> Сумма инвестиций: </b> {topPlayer.amount}$
                </div>
              </div>
              <a className="btn btn-primary mb-4">Поднять ставку</a>
            </div>
          </div>
        </Content>
      </Layout>
    </Page>
  );
};

export default Auction;
