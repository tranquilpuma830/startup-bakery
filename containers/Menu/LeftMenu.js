import React from "react";
import { Menu } from "antd";
import "./LeftMenu.scss";

const LeftMenu = () => {
  return (
    <Menu className="menu" mode="vertical">
      <Menu.Item className="menu__item" key="1">
        Menu
      </Menu.Item>
      <Menu.Item className="menu__item" key="2">
        Bakery
      </Menu.Item>
      <Menu.Item className="menu__item" key="3">
        Degustation
      </Menu.Item>
      <Menu.Item className="menu__item" key="4">
        Bets
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
