import React from "react";
import { Menu } from "antd";
import Bakery from "../../assets/Icons/Bakery";
import Degustation from "../../assets/Icons/Degustation";
import MenuIcons from "../../assets/Icons/MenuIcons";
import Bets from "../../assets/Icons/Bets";

import "./LeftMenu.scss";

const LeftMenu = () => {
  return (
    <Menu className="menu" mode="vertical">
      <Menu.Item className="menu__item" key="1">
        <MenuIcons /> Меню
      </Menu.Item>
      <Menu.Item className="menu__item" key="2">
        <Bakery />
        Пекарня
      </Menu.Item>
      <Menu.Item className="menu__item" key="3">
        <Degustation />
        Дегустация
      </Menu.Item>
      <Menu.Item className="menu__item" key="4">
        <Bets />
        Аукцион
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
