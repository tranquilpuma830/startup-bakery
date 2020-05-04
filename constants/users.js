const AVATARS_PATH = "/investors_avatars";
const investor_avatars_path = {
  vova: `${AVATARS_PATH}/vova.jpg`,
  don: `${AVATARS_PATH}/don.jpg`,
  mark: `${AVATARS_PATH}/mark.jpg`,
  danil: `${AVATARS_PATH}/danil.jpg`,
};

const PLAYERS = [
  {
    title: "Дон Хакатон",
    amount: 3000000,
    rating: "Advanced",
    avatar: investor_avatars_path.don,
  },
  {
    title: "Владимир Лунёв",
    amount: 2000000,
    rating: "Advanced",
    avatar: investor_avatars_path.vova,
  },
  {
    title: "Даниил Рублёв",
    amount: 1000000,
    rating: "Advanced",
    avatar: investor_avatars_path.danil,
  },
];

module.exports = {
  PLAYERS,
};
