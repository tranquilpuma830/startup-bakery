import "./styles.scss";

import React, { useState } from "react";
import Link from "next/link";
import { List, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function ProjectListItem({
  description,
  projectName,
  logoUrl,
  approval,
  id,
  children
}) {

  
  const [approvs, setApprovs] = useState(approval);

  const incrementApproves = () => setApprovs((a) => ++a);

  return (
    <List.Item className="project-list-item px-4">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-4 d-flex justify-content-center align-items-center">
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

              {children}

              <ul className="ant-list-item-action ml-0 mt-2">
                <li className="ml-2 ml-sm-0 mb-2 mb-sm-0">
                  <Link href={`/projects/${id}`}>
                    <button className="btn btn-gradient btn-rounded btn-sm">
                      Открыть
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/auction">
                    <button className="btn btn-outline-primary btn-rounded btn-sm">
                      Аукцион
                    </button>
                  </Link>
                </li>
                <li>
                  <button
                    className="btn btn-outline-primary btn-rounded align-items-center d-flex btn-sm"
                    onClick={incrementApproves}
                  >
                    <HeartOutlined className="mr-1" />
                    {approvs}
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
