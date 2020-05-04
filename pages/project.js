import React, { useState } from "react";
import { Typography, Layout, Tabs, Divider, Button, Collapse, Col } from "antd";
import { PROJECT_DATA } from "../constants/projects";
import Page from "../containers/Page";

const Project = () => {
  const [defaultTab, setDefaultTab] = useState("2");

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
    if (node.type) {
      return (
        <div className="m-3">
          <img className="w-100 m-auto" src={node.content} />
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
    <Page className="bg-white">
      <div className="container project">
        <div className="text-center">
          <Layout.Content>
            <Typography.Title className="mt-5">
              {PROJECT_DATA.title}
            </Typography.Title>
            <Typography.Text>{PROJECT_DATA.subtitle}</Typography.Text>

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
              <Tabs.TabPane tab="Overview" key="1">
                <div className="w-50 m-auto text-left">
                  <Typography.Title level={3}>Overview</Typography.Title>
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
              <Tabs.TabPane tab="Comments" key="2">
                <Typography.Title level={3}>Comments</Typography.Title>
                <div>{comments}</div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="FAQ" key="3">
                <Typography.Title level={3}>FAQ</Typography.Title>
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
    </Page>
  );
};

export default Project;
