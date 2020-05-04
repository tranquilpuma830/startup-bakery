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
    amount: 2999980,
    rating: 'Advanced',
    role: 'CEO Seals',
    avatar: investor_avatars_path.don,
  },
  {
    title: 'Владимир Лунёв',
    amount: 2036200,
    rating: 'Advanced',
    role: 'CEO Microsoft',
    avatar: investor_avatars_path.vova,
  },
  {
    title: 'Даниил Рублёв',
    amount: 1006730,
    rating: 'Advanced',
    role: 'CEO Microsoft',
    avatar: investor_avatars_path.danil,
  }
];

module.exports = {
  PLAYERS,
  investor_avatars_path,
};
