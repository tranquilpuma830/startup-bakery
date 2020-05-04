import React from "react";
import { List } from "antd";

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
      <button className="btn btn-outline-primary btn-rounded">
        loading more
      </button>
    </div>
  );
}

function ProjectList({ projects }) {
  return (
    <List
      className="d-flex flex-column align-items-center"
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
