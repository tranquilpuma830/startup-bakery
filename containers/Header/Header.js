import React from "react";
import "./Header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img width="100px" src="/icons/logo.svg" />
        </a>
        <button
          className="navbar-toggler"
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
                  <img width="20px" src="/icons/menu.svg" /> Меню
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#">
                <a className="nav-link" href="#">
                  <img width="20px" src="/icons/bakery.svg" /> Пекарня
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/ideas">
                <a className="nav-link" href="#">
                  <img width="20px" src="/icons/degustation.svg" />
                  Дегустация
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/auction">
                <a className="nav-link" href="#">
                  <img width="20px" src="/icons/bets.svg" /> Аукцион
                </a>
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Профиль
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
