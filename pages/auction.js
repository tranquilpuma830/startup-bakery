import React, { useState } from 'react';

const AVATARS_PATH = '/investors_avatars';
const investor_avatars_path = {
  vova: `${AVATARS_PATH}/vova.jpg`,
  don: `${AVATARS_PATH}/don.jpg`,
  mark: `${AVATARS_PATH}/mark.jpg`,
  danil: `${AVATARS_PATH}/danil.jpg`,
};

const PLAYERS = [
  {
    title: 'Дон Хакатон',
    amount: 30000000,
    rating: 'Advanced',
    avatar: investor_avatars_path.don,
  },
  {
    title: 'Владимир Лунёв',
    amount: 2000000,
    rating: 'Advanced',
    avatar: investor_avatars_path.vova,
  },
  {
    title: 'Даниил Рублёв',
    amount: 1000000,
    rating: 'Advanced',
    avatar: investor_avatars_path.danil,
  },
];

const TIMER_SEC = 360000; // 100h

const Player = ({ title, amount }) => {
  return (
    <>
      <dt>{title}</dt>
      <dd>${amount}</dd>
    </>
  );
};

const InvestorsList = ({ players }) => {
  return (
    <dl>
      {players.map((player, idx) => (
        <Player key={idx} title={player.title} amount={player.amount} />
      ))}
    </dl>
  );
};
const topRaisedPlayer = PLAYERS.reduce(function (prev, current) {
  return prev.amount > current.amount ? prev : current;
});
const Auction = ({ ...props }) => {
  const [topPlayer, setTopPlayer] = useState(topRaisedPlayer);
  // TODO: Timer

  return (
    <div className='container-fluid'>
      <main className='float-md-right col col-md-8'>
        <div className='row'>
          <div className='container-fluid'>
            <div className=' d-flex flex-column justify-content-center align-items-center'>
              <h2 className=''>ТОП ИНВЕСТОР</h2>
              <img src={topPlayer.avatar} className='d-block rounded-circle img-fluid w-50' />
              <div className='mt-4 text-center'>
                <h4 className='text-primary'>{topPlayer.title}</h4>
                <h6>{topPlayer.rating}</h6>
              </div>

              <hr className='devider w-100' />
              <div className='mt-4 text-center'>
                <p>
                  <span className='text-primary'>Максимальная инвестиция: </span>
                  {topPlayer.amount}$
                </p>
                <p>
                  <span className='text-primary'>Таймер </span>
                  1 день(-я) 20 часов(-а) до окончания
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section id='sidebar' className='float-md-left col col-md-4 col-sm-12'>
        <h4>Инвесторы</h4>
        <InvestorsList players={PLAYERS} />
      </section>
    </div>
  );
};

export default Auction;
