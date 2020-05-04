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
  },
  {
    title: 'Билл Гейтс',
    amount: 3000000,
    rating: 'Advanced',
    role: 'CEO Microsoft',
    avatar: 'https://www.tourdom.ru/upload/iblock/e46/e469d6c078fdc6d46886f51c3d8f0737.jpeg',
  },
];

module.exports = {
  PLAYERS,
  investor_avatars_path,
};
