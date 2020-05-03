import React from 'react';
import { Typography, Input } from "antd";

import ProjectList from '../components/ProjectList';

import { IDEAS_MOCK } from '../constants/ideas';

export default function Ideas() {


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8">
          <ProjectList projects={IDEAS_MOCK}/>
        </div>
      </div>
    </div>
  );
};
