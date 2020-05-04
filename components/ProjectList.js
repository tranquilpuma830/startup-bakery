import React from "react";
import { Button, List } from "antd";

import ProjectListItem from "./ProjectListItem";

function LoadMoreSection() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button>loading more</Button>
    </div>
  );
}

function ProjectList({ projects, count }) {
  return (
    <List
      loadMore={<LoadMoreSection />}
      itemLayout="horizontal"
      dataSource={projects}
      renderItem={(item) => <ProjectListItem {...item} />}
    />
  );
}

ProjectList.defaultProps = {
  projects: [],
  count: 3,
};

export default ProjectList;
