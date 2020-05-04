import React from "react";
import {
  List,
  PageHeader,
  Typography,
  Avatar,
  Tooltip,
  Select,
  Input,
  TimePicker,
} from "antd";

import ProjectListItem from "../components/ProjectListItem";
import LoadMoreSection from "../components/LoadMoreSection";
import Page from "../containers/Page";

import { IDEAS_MOCK } from "../constants/ideas";

const { Search } = Input;
const { RangePicker } = TimePicker;
const { Text } = Typography;
const { Option } = Select;

export default function Bakery() {
  return (
    <Page className="bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 py-3 mb-3">
            <PageHeader
              title="Пекарня"
              subTitle="Sollicitant homines non sunt nisi quam formae rerum principiis opiniones."
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

            <List
              className="d-flex flex-column align-items-center"
              loadMore={<LoadMoreSection />}
              itemLayout="horizontal"
              dataSource={IDEAS_MOCK}
              renderItem={(item) => (
                <ProjectListItem {...item}>
                  <div className="py-3">
                    <Text className="d-block" strong>
                      Progress
                    </Text>
                    <div className="progress my-1" style={{ height: 20 }}>
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ width: item.progress + "%" }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {item.progress}%
                      </div>
                    </div>
                    <Text className="d-block" strong>
                      Teams
                    </Text>
                    <div className="d-flex mt-1">
                      {item.team.map((user) => (
                        <Tooltip placement="top" title={user.title}>
                          <Avatar
                            className="mx-1"
                            src={user.avatar}
                            size="large"
                          >
                            {user.title}
                          </Avatar>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </ProjectListItem>
              )}
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
