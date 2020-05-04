import "./styles.scss";

import React, { Fragment } from "react";
import Link from "next/link";
import { List, Typography, Button, Card } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function ProjectListItem({
  description,
  projectName,
  logoUrl,
  approval,
}) {
  return (
    <List.Item className="project-list-item border-bottom-0 ">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <div className="project-list-item__image">
                <img src={logoUrl} alt="" />
              </div>
            </div>
            <div className="col-8">
              <div>
                <Text strong>{projectName}</Text>
              </div>
              <div className="py-2">
                <Text>{description}</Text>
              </div>

              <ul className="ant-list-item-action ml-0 mt-2">
                <li className="ml-2 ml-sm-0 mb-2 mb-sm-0">
                  <button className="btn btn-gradient btn-round">
                    Открыть
                  </button>
                </li>
                <li>
                  <button className="btn btn-outline-primary btn-round">
                    Аукцион
                  </button>
                </li>
                <li>
                  <button className="btn btn-outline-primary btn-round">
                    <HeartOutlined />
                    <Text>{approval}</Text>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </List.Item>
  );
}
