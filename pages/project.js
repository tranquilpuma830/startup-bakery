import React, { useState } from "react";
import { Typography, Layout, Tabs, Divider, Button } from "antd";

const PROJECT_OVERVEIW = [
  {
    type: "text",
    content: `
        Three years ago, we launched our first product on Kickstarter:
        an expressive and modular MIDI controller for seasoned
        musicians, which is used today by many artists around the
        world.`,
  },
  {
    type: "text",
    content: `
      But lots of amateur musicians wanted to get their hands on it
      as well, and we felt frustrated that we couldn’t satisfy them,
      as current music software remains too complex to be
      apprehended easily. So we decided to create a new instrument
      that would enable anyone to start making music.`,
  },
  {
    type: "text",
    content: `
      An instrument that’s really easy to use and fun, while being
      sufficiently powerful and evolutive to take you far into your
      music creation. Introducing the Joué Play.`,
  },
  {
    type: "image",
    content:
      "https://ksr-ugc.imgix.net/assets/028/865/455/3e068f371806f85bde338d0f9aa7a439_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1587973373&auto=format&frame=1&q=92&s=cc2736db205c26d86ce8120ff31210e9",
  },
];

const Project = () => {
  const [defaultTab, setDefaultTab] = useState("1");
  return (
    <div className="container">
      <div className="text-center">
        <Layout.Content>
          <Typography.Title className="mt-5">
            Joué Play - Everyone can play music
          </Typography.Title>
          <Typography.Text>
            make a beat, play a melody and build chords naturally on a digital
            yet expressive music instrument.
          </Typography.Text>

          <div className="m-5">
            <div>
              <img src="https://ksr-ugc.imgix.net/assets/028/891/063/7728109c7056da046134bed4de4ca578_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1588138264&auto=format&frame=1&q=92&s=11ed4fa59a43dc1da233e5b706e8ff24" />
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
                <Typography.Text>
                  {PROJECT_OVERVEIW.map((node) => {
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
                  })}
                </Typography.Text>

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
            </Tabs.TabPane>
            <Tabs.TabPane tab="Comments" key="2">
              Comments
            </Tabs.TabPane>
            <Tabs.TabPane tab="FAQ" key="3">
              FAQ
            </Tabs.TabPane>
          </Tabs>
        </Layout.Content>
      </div>
    </div>
  );
};

export default Project;
