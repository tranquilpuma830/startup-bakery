import React from "react";
import { List, Select, Input, TimePicker, PageHeader } from "antd";

import ProjectListItem from "../components/ProjectListItem";
import LoadMoreSection from "../components/LoadMoreSection";
import Page from "../containers/Page";

import { IDEAS_MOCK } from "../constants/ideas";

const { Search } = Input;
const { RangePicker } = TimePicker;
const { Option } = Select;

export default function Ideas() {
  return (
    <Page>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 py-3 mb-3">
            <PageHeader title="Мeню" subTitle="">
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

            <List
              className="d-flex flex-column align-items-center"
              loadMore={<LoadMoreSection />}
              itemLayout="horizontal"
              dataSource={IDEAS_MOCK}
              renderItem={(item) => <ProjectListItem {...item} />}
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
