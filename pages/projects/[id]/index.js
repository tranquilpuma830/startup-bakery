import React, { useState, useEffect } from "react";
import { Typography, Layout, Tabs, Progress, Checkbox, Button } from "antd";
import r from "next/router";

import Page from "../../../containers/Page";

import { PROJECT_DATA } from "../../../constants/projects";
import { IDEAS_MOCK } from "../../../constants/ideas";
import "./styles.scss";
const projectLogosPath = "/project-logos/";

const Project = () => {
  const [projectID, setProjectID] = useState("");
  const [projectIdea, setProjectIdea] = useState(null);

  const [defaultTab, setDefaultTab] = useState("3");

  useEffect(() => {
    if (r.router?.query.id) {
      setProjectID(r.router?.query.id);
    }
  }, [r.router?.query.id]);

  useEffect(() => {
    setProjectIdea(IDEAS_MOCK.find((idea) => String(idea.id) === projectID));
  }, [projectID]);

  const projectOverview = PROJECT_DATA.overview.map((node) => {
    if (node.type === "text") {
      return (
        <>
          {node.content}
          <br />
          <br />
        </>
      );
    }
    if (node.type === "title") {
      return (
        <div className="m-3">
          <Typography.Title level={3}>{node.content}</Typography.Title>
        </div>
      );
    }
  });

  const team = projectIdea?.team.map((man) => (
    <div className="team">
      <div className="team-avatar">
        <img className="" src={man.avatar} />
      </div>
      <div className="w-50 text-left">
        <Typography.Title level={4}>{man.title}</Typography.Title>
        {man.role && (
          <Typography.Text
            style={{
              color: "#9B9E9E",
            }}
          >
            {man.role}
          </Typography.Text>
        )}
      </div>
    </div>
  ));

  return (
    <Page className="bg-white">
      <div className="container project">
        <div
          className="text-center p-5"
          style={{
            boxShadow: "0px 0px 10px 5px #e3e3e3",
            borderRadius: "10px",
          }}
        >
          <Layout.Content>
            <div className="d-flex align-items-center">
              <div className="flex-1">
                <img
                  src={`${projectLogosPath}startup-bakery.svg`}
                  className="w-50"
                />
              </div>
              <div className="flex-1 text-left">
                <Typography.Title className="mt-5">
                  {PROJECT_DATA.title}
                </Typography.Title>
                <Typography.Text>{PROJECT_DATA.subtitle}</Typography.Text>
              </div>
            </div>

            <div className="m-5">
              <div>
                <img
                  className="w-auto"
                  style={{
                    height: "400px",
                  }}
                  src={PROJECT_DATA.cover_img}
                />
              </div>
            </div>

            <Tabs
              defaultActiveKey={defaultTab}
              activeKey={defaultTab}
              onChange={setDefaultTab}
            >
              <Tabs.TabPane tab="Обзор" key="1">
                <div className="w-50 m-auto text-left">
                  <Typography.Text>{projectOverview}</Typography.Text>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Команда" key="2">
                <Typography.Title level={3}>Команда</Typography.Title>
                <div className="team-container">{team}</div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Задачи" key="3">
                <Typography.Title level={3}>Вы почти у цели!</Typography.Title>
                <div className="m-auto w-50 text-left">
                  <Progress
                    strokeColor={{
                      "0%": "rgba(253, 177, 93, 1)",
                      "100%": "rgba(222, 106, 30, 1)",
                    }}
                    percent={45}
                  />

                  <div className="m-3">
                    <div>
                      <Checkbox className="check" checked>
                        Сформировать команду
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox className="check" checked>
                        Поставить цели
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox className="check" checked>
                        Распределить задачи
                      </Checkbox>
                    </div>
                    <div>
                      <Checkbox className="check">Проверить гипотезы</Checkbox>
                    </div>
                  </div>
                </div>
                <Button
                  type="primary"
                  size="large"
                  className="m-2"
                  style={{ borderRadius: "5px", fontWeight: "700" }}
                >
                  Перейти в менеджер задач
                </Button>
              </Tabs.TabPane>
            </Tabs>
          </Layout.Content>
        </div>
      </div>
    </Page>
  );
};

export default Project;
