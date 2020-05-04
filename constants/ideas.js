const projectLogosPath = '/project-logos/';

import { PLAYERS, investor_avatars_path } from "./users";

export const IDEAS_MOCK = [
  {
    id: 4,
    projectName: 'Startup Bakery',
    logoUrl: projectLogosPath + 'startup-bakery.svg',
    description: 'Уникальная площадка, где каждый может разместить свою проектную идею и довести ее результата. Здесь каждый сможет “выпечь” свой стартап-проект.',
    approval: 153,
    progress: 10,
    team: [
      ...PLAYERS,
      {
        title: 'Марк Поповиченко',
        amount: 30000000,
        rating: 'Advanced',
        avatar: investor_avatars_path.mark,
      },
    ],
  },
  {
    id: 1,
    projectName: 'Work Balance',
    logoUrl: projectLogosPath + 'work-balance.png',
    description: 'Уникальная платформа по анализу открытых данных для отображения вакансий по регионам. Сервис позволяет найти работу в другом регионе еще до переезда. ',
    approval: 202,
    progress: 30,
    team: PLAYERS,
  },
  {
    id: 2,
    projectName: 'CyberLexa',
    logoUrl: projectLogosPath + 'cyperlexa.png',
    description: 'Дружелюбный серсис по обучению кибербезопасности. Практические курсы, которые охватывают все сферы информационной безопасности.',
    approval: 993,
    progress: 50,
    team: [
      ...PLAYERS,
      {
        title: 'Марк Поповиченко',
        amount: 30000000,
        rating: 'Advanced',
        avatar: investor_avatars_path.mark,
      },
    ],
  },
  {
    id: 3,
    projectName: 'SaveNow',
    logoUrl: projectLogosPath + 'save-now.png',
    description: 'Сервис для прямой доставки товаров без посредников. Возможность найма исполнителя для доставки товара за плату.',
    approval: 47,
    progress: 80,
    team: PLAYERS,
  },
];
