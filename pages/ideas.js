import React from "react";

import ProjectList from "../components/ProjectList";
import Page from "../containers/Page";

import { IDEAS_MOCK } from "../constants/ideas";

export default function Ideas() {
  return (
    <Page className="bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 py-3">
            <ProjectList projects={IDEAS_MOCK} />
          </div>
        </div>
      </div>
    </Page>
  );
}
