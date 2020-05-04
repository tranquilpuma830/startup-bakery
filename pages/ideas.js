import React from "react";
import { PageHeader, Input, TimePicker, Select } from "antd";

import ProjectList from "../components/ProjectList";
import Page from "../containers/Page";

import { IDEAS_MOCK } from "../constants/ideas";

const { Search } = Input;
const { RangePicker } = TimePicker;
const { Option } = Select;

export default function Ideas() {
  return (
    <Page>
      <div className="container">
        <PageHeader
          className="site-page-header"
          title="Ideas"
          subTitle="This is a subtitle"
        >
          <div className="row">
            <div className="col-12 col-sm-4">
              <Select defaultValue="lucy" className="w-100">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="col-12 col-sm-4 mt-2 mt-sm-0">
              <RangePicker className="w-100" />
            </div>
            <div className="col-12 col-sm-4 mt-2 mt-sm-0">
              <Search
                placeholder="input search text"
                onSearch={(value) => console.log(value)}
              />
            </div>
          </div>
        </PageHeader>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 py-3">
            <ProjectList projects={IDEAS_MOCK} />
          </div>
        </div>
      </div>
    </Page>
  );
}
