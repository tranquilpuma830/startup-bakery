import React from "react";
import Page from "../containers/Page";
import Link from "next/link";
import "../styles/main.scss";

import {
  Descriptions,
  Avatar,
  Card,
  List,
  Statistic,
  Layout,
  Skeleton,
} from "antd";

const Degustation = () => {
  return (
    <Page>
      <div className="degustation bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 degustation__result">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <div className="degustation__card">
                      <img src="/project-logos/startup-bakery.svg" />
                      <div className="degustation__card_footer">
                        <b>Текущий статус:</b>

                        <div className="progress my-1" style={{ height: 20 }}>
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            style={{ width: 75 + "%" }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            75%
                          </div>
                        </div>
                        <div className="degustaion__card_menu">
                          <Link href="/auction">
                            <button className="btn btn-outline-primary btn-rounded btn-sm">
                              Сайт проекта
                            </button>
                          </Link>
                          <Link href="/auction">
                            <button className="btn btn-outline-primary btn-rounded btn-sm">
                              Аукцион
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="degustation__card">
                      <img
                        src="/project-logos/work-balance.png"
                        width="200px"
                        height="110px"
                      />
                      <div className="degustation__card_footer">
                        <b>Текущий статус:</b>

                        <div className="progress my-1" style={{ height: 20 }}>
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            style={{ width: 65 + "%" }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            65%
                          </div>
                        </div>
                        <div className="degustaion__card_menu">
                          <Link href="/auction">
                            <button className="btn btn-outline-primary btn-rounded btn-sm">
                              Сайт проекта
                            </button>
                          </Link>
                          <Link href="/auction">
                            <button className="btn btn-outline-primary btn-rounded btn-sm">
                              Аукцион
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="degustation__card">
                      <img src="/project-logos/cyperlexa.png" width="110" />
                      <div className="degustation__card_footer">
                        <b>Текущий статус:</b>

                        <div className="progress my-1" style={{ height: 20 }}>
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            style={{ width: 95 + "%" }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            95%
                          </div>
                        </div>
                        <div className="degustaion__card_menu">
                          <Link href="/auction">
                            <button className="btn btn-outline-primary btn-rounded btn-sm">
                              Сайт проекта
                            </button>
                          </Link>
                          <Link href="/auction">
                            <button className="btn btn-outline-primary btn-rounded btn-sm">
                              Аукцион
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 degustation__menu">
              <div className="degustation__menu_block">
                <div className="degustation__menu_title">Акселераторы</div>
              </div>
              <div className="degustation__menu_block">
                <div className="degustation__menu_title">Инвесторы</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Degustation;
