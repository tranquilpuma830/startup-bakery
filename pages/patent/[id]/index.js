import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography, Layout, Divider, Col, Spin } from 'antd';
import * as firebase from 'firebase';

const { Content } = Layout;

const Patent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [idea, setIdea] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      firebase
        .database()
        .ref('ideas')
        .child(id || 0)
        .once('value')
        .then((snapshot) => {
          const i = snapshot.val();
          console.log(id, i);
          setIdea(i);
          setIsLoading(i ? false : true);
        });
    }, 10);
  }, []);

  return (
    <Layout className="bg-half-filled" style={{ minHeight: '100vh' }}>
      {isLoading ? (
        <Spin size="large" className="m-auto" />
      ) : (
        <Content className="m-auto p-4 w-75 text-center bg-white shadow">
          <div className="d-flex flex-row">
            <div className="w-50">
              <img src={idea.logoUrl} className="img-fluid" />
            </div>
            <div className="w-50 ">
              <Typography.Title className="">{idea.projectName}</Typography.Title>
              <Typography.Text>
                Дата регистрации стартапа: <u>{idea.createDate}</u>
              </Typography.Text>
            </div>
          </div>
          <Divider />

          <div className="w-100 text-left">
            <Typography.Text>{idea.techDescription}</Typography.Text>
          </div>
        </Content>
      )}
    </Layout>
  );
};

export default Patent;
