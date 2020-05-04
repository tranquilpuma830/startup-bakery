import "./Header.scss";

import React, { Fragment } from "react";
import { Avatar, Typography, Menu, Dropdown } from "antd";
import Link from "next/link";

import { useUser } from "../UserContext";

const { Text } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        Профиль
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        Курсы
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Статьи
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Сообщество
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Вакансии
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        href="/api/auth/logout"
        className="text-danger"
        rel="noopener noreferrer"
      >
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

const Header = ({ forLanding }) => {
  const user = useUser();

  return (
    <nav
      className={`navbar ${
        forLanding ? "navbar-expand-sm" : "navbar-expand-md"
      }`}
    >
      <div className="container-fluid">
        <Link href="/">
          <img
            src="/logo.svg"
            className="mr-3 c-pointer"
            style={{ width: "20vw" }}
          />
        </Link>
        <button
          className="navbar-toggler btn"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/ideas">
                <a className="nav-link">
                  <img width="20px" src="/icons/menu.svg" className="mr-2" />
                  Меню <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/bakery">
                <a className="nav-link" href="#">
                  <img width="20px" src="/icons/bakery.svg" className="mr-2" />
                  Пекарня
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/degustation">
                <a className="nav-link" href="">
                  <img
                    width="20px"
                    src="/icons/degustation.svg"
                    className="mr-2"
                  />
                  Дегустация
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/auction">
                <a className="nav-link" href="#">
                  <img width="20px" src="/icons/bets.svg" className="mr-2" />
                  Аукцион
                </a>
              </Link>
            </li>
          </ul>
          {!forLanding && (
            <Fragment>
              {Boolean(user) ? (
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Avatar src={user.picture}>{user.name[0]}</Avatar>
                    <Text className="ml-1">{user.email}</Text>
                  </a>
                </Dropdown>
              ) : (
                <Link href="/login">
                  <button className="btn btn-outline-primary">Login</button>
                </Link>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
