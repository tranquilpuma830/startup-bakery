import React, { useState } from "react";
import { Typography, Layout, Tabs, Divider, Button, Collapse, Col } from "antd";

import Page from "../../../containers/Page";

import { PROJECT_DATA } from "../../../constants/projects";
import "./styles.scss";
const projectLogosPath = "/project-logos/";
const { Content } = Layout;
const Project = () => {
  const [defaultTab, setDefaultTab] = useState("1");

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

  const comments = PROJECT_DATA.comments.map((comment) => (
    <div className="w-50 m-auto text-left">
      <Typography.Title level={4}>{comment.author}</Typography.Title>
      <Typography.Text
        style={{
          color: "#9B9E9E",
        }}
      >
        {comment.time}
      </Typography.Text>

      <br />
      <br />
      <Typography.Text>{comment.content}</Typography.Text>

      <Divider
        style={{
          backgroundColor: "#aeaeae",
        }}
      />
    </div>
  ));

  return (
    <Page>
      <Content className="project__bg">
        <div className="container project">
          <div
            className="text-center p-5 bg-white"
            style={{
              boxShadow: "10px 10px 20px -5px rgba(0, 0, 0, 0.75)",
              borderRadius: "10px",
            }}
          >
            <Layout.Content>
              <div className="d-flex align-items-center ">
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
                    <div>
                      <Divider
                        style={{
                          backgroundColor: "#aeaeae",
                        }}
                      />
                      <Typography.Title level={3}>
                        Questions about the project?
                        <br />
                        <Button type="link" onClick={() => setDefaultTab("3")}>
                          Check the FAQ section
                        </Button>
                      </Typography.Title>

                      <Divider
                        style={{
                          backgroundColor: "#aeaeae",
                        }}
                      />
                    </div>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Команда" key="2">
                  <Typography.Title level={3}>Команда</Typography.Title>
                  <div>{comments}</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Задачи" key="3">
                  <Typography.Title level={3}>Задачи</Typography.Title>
                  <div className="m-auto w-50 text-left">
                    <Collapse defaultActiveKey={[]} expandIconPosition="right">
                      {PROJECT_DATA.FAQ.map((item, i) => (
                        <Collapse.Panel key={i} header={item.header}>
                          {item.content}
                        </Collapse.Panel>
                      ))}
                    </Collapse>
                  </div>
                </Tabs.TabPane>
              </Tabs>
            </Layout.Content>
          </div>
        </div>
      </Content>
    </Page>
  );
};

export default Project;
