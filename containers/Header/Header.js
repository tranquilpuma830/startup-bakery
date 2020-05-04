import React from "react";
import "./Header.scss";
import Link from "next/link";

const Header = ({ forLanding }) => {
  return (
    <nav
      className={`navbar ${
        forLanding ? "navbar-expand-sm" : "navbar-expand-md"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/logo.svg" className="mr-3" style={{ width: "20vw" }} />
        </a>
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
                  <img width="20px" src="/icons/menu.svg" className="mr-2" />{" "}
                  Меню <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#">
                <a className="nav-link" href="#">
                  <img width="20px" src="/icons/bakery.svg" className="mr-2" />{" "}
                  Пекарня
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/ideas">
                <a className="nav-link" href="#">
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
                  <img width="20px" src="/icons/bets.svg" className="mr-2" />{" "}
                  Аукцион
                </a>
              </Link>
            </li>
          </ul>
          {!forLanding && (
            <span className="navbar-text">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img width="25px" src="/icons/profile.svg" className="mr-2" />
                Профиль
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
