import React, { useState, useEffect } from 'react';
import { Descriptions, Avatar, Card, List, Statistic, Layout } from 'antd';
import { PLAYERS } from '../constants/users';
import Page from '../containers/Page';
import * as firebase from 'firebase';
import '../styles/main.scss';

const { Sider, Content } = Layout;
const { Countdown } = Statistic;

const TIMER_DEADLINE = Date.now() + 1000 * 60 * 60 * 2;

const topRaisedPlayer = PLAYERS.reduce(function (prev, current) {
  return prev.amount > current.amount ? prev : current;
});

const sortByAmount = (toSort) => toSort.sort((a, b) => (a.amount < b.amount ? 1 : -1));

const InvestorsList = ({ players }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={players}
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

const Auction = () => {
  const [topPlayer, setTopPlayer] = useState(topRaisedPlayer);
  const [players, setPlayers] = useState(sortByAmount(PLAYERS));

  let player = players.find((p) => p.title === 'Владимир Лунёв');

  useEffect(() => {
    setTimeout(() => {
      firebase
        .database()
        .ref('/users')
        .once('value')
        .then((snapshot) => {
          setPlayers(sortByAmount(snapshot.val()));
        });
    }, 10);
  }, []);

  useEffect(() => {
    setTopPlayer(players[0]);
  }, [players]);

  const onRaiseBet = () => {
    if (!player) return;
    player.amount += 1000;
    const newPlayers = [...players];
    setPlayers(sortByAmount(newPlayers));
  };

  return (
    <Page>
      <Layout className="bg-white">
        <Sider id="sidebar">
          <Card className="border-bottom-0 h-100 rounded-0">
            <h5 className="auction__sidebar_title">Инвесторы </h5>
            <InvestorsList players={players} />
          </Card>
        </Sider>

        <Content className="auction__top bg">
          <div className="row bets__card">
            <div className="col-8 bets__project">
              <div className="bets__project__info">
                <div className="row">
                  <div className="col-4">
                    <img width="150px" src="/icons/pizza.svg" />
                  </div>
                  <div className="col-8 text-left">
                    <b>Startup Bakery</b>
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
                <div className="row">
                  <div className="col-4">
                    <div className="bets__project__title">Статус проекта</div>
                  </div>
                  <div className="col-8">
                    Команда распределила <b>задачи</b>, проверила
                    <b> гипотезы</b> и приступает к разработке <b>прототипа</b>.
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="bets__project__title">Таймер</div>
                  </div>
                  <div className="col-8">
                    До следующего раунда осталось:
                    <span className="font-weight-bold">
                      <Descriptions.Item label="Таймер">
                        <small>
                          <Countdown
                            valueRender={(element) => {
                              return (
                                <div>
                                  <span className="font-weight-bold">{element}</span>
                                </div>
                              );
                            }}
                            valueStyle={{ fontSize: 'small' }}
                            value={TIMER_DEADLINE}
                            format="D дней H часов m минут s секунд"
                          />
                        </small>
                      </Descriptions.Item>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4">
                    <div className="bets__project__title">Команда</div>
                  </div>
                  <div className="col-8">
                    <b>Seals</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 bets__profile">
              <div className="bets__title">Топ инвестор</div>
              <Avatar src={topPlayer.avatar} size={156} />
              <div className="bets__profile__content">
                <h5>{topPlayer.title}</h5>
                <p>{topPlayer.role}</p>
                <div className="bets__max">
                  <b> Сумма инвестиций: </b> {topPlayer.amount}$
                </div>
              </div>
              <a
                onClick={onRaiseBet}
                className="btn btn-primary btn-gradient w-auto mb-4 px-lg-3 px-auto"
              >
                Поднять ставку
              </a>
            </div>
          </div>
        </Content>
      </Layout>
    </Page>
  );
};

export default Auction;
