import React, { useState } from "react";
import "./Footer.scss";
const Footer = () => {
  let [lng, setLng] = useState(false);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="language">
            <p>Language</p>
            <button
              className={
                lng === false ? "language__type active" : "language__type"
              }
              onClick={() => setLng(!lng)}
            >
              no
            </button>
            <button
              className={
                lng === true ? "language__type active" : "language__type"
              }
              onClick={() => setLng(!lng)}
            >
              en
            </button>
          </div>
        </div>
        <div className="footer__content">
          <h4 className="title m-bold">Помощь пользователю</h4>
          <ul className="list">
            <li className="list__item">
              <a href="/#">Вопросы</a>
            </li>
            <li className="list__item">
              <a href="/#">Правила пользования</a>
            </li>
            <li className="list__item">
              <a href="/#">Политика конфиденциальности</a>
            </li>
            <li className="list__item">
              <a href="/#">Напиши нам</a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h4 className="title m-bold">Информация</h4>
          <ul className="list">
            <li className="list__item">
              <a href="/#">Как это работает</a>
            </li>
            <li className="list__item">
              <a href="/#">Как запустить стартап просто</a>
            </li>
            <li className="list__item">
              <a href="/#">Для инветсоров</a>
            </li>
            <li className="list__item">
              <a href="/#">Для стартаперов</a>
            </li>
            <li className="list__item">
              <a href="/#">Календарь проектов</a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h4 className="title m-bold">Контакты</h4>
          <ul className="list">
            <li className="list__item">
              <a href="/#">Instagram</a>
            </li>
            <li className="list__item">
              <a href="/#">Facebook</a>
            </li>
            <li className="list__item">
              <a href="/#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
