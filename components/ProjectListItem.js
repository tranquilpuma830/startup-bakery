import React, { Fragment } from "react";
import Link from "next/link";
import { List, Typography, Button } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";

const { Text } = Typography;

const ApprovalBtn = ({ count }) => {
  return (
    <div className="d-flex flex-column rounded border px-4 py-3">
      <CaretUpOutlined />
      <Text>{count}</Text>
    </div>
  );
};
ApprovalBtn.defaultProps = {
  count: 0,
};

export default function ProjectListItem({
  loadin,
  description,
  projectName,
  logoUrl,
}) {
  const ProjectItemAvatar = (
    <Fragment>
      <img className="project-list-item__image" src={logoUrl} />
      <style jsx>{`
        .project-list-item__image {
          width: 130px;
        }
      `}</style>
    </Fragment>
  );
  const ProjectDescription = (
    <Fragment>
      <div>
        <Text>{description}</Text>
      </div>

      <ul className="ant-list-item-action ml-0 mt-2">
        <li className="ml-2 ml-sm-0 mb-2 mb-sm-0">
          <Link href="/auction">
            <Button size="small">Аукцион</Button>
          </Link>
        </li>
        <li>
          <Button type="primary" size="small">
            Купить проект
          </Button>
        </li>
      </ul>
    </Fragment>
  );
  const ProjectTitle = <Text className="text-primary">{projectName}</Text>;

  return (
    <Fragment>
      <List.Item
        className="border-bottom-0"
        actions={[<ApprovalBtn count={34} />]}
      >
        <List.Item.Meta
          avatar={ProjectItemAvatar}
          title={ProjectTitle}
          description={ProjectDescription}
        />
      </List.Item>
    </Fragment>
  );
}
