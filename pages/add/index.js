import React, { useState, useEffect } from 'react';
import { Layout, Spin, Alert, Input } from 'antd';
import Router from 'next/router';
import * as firebase from 'firebase';

import Page from '../../containers/Page';

const Add = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState();

  function addIdea() {
    setLoading(true);
    firebase
      .database()
      .ref('/ideas')
      .once('value')
      .then((snapshot) => {
        firebase
          .database()
          .ref('/ideas/' + snapshot.val().length)
          .set(
            {
              approval: 0,
              createDate: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
              description: form.description,
              logoUrl: form.logo,
              progress: 0,
              projectName: form.name,
              techDescription: form.description,
            },
            () => {
              setLoading(false);
              Router.push('/ideas');
            }
          );
      });
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Page>
      <Layout className="bg-white">
        <div className="container login">
          <div className="row">
            <div className="col bg-two-guys"></div>
            <div className="col form__block">
              <Spin spinning={loading}>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Название</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Название стартапа"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="logo">Логотип</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="logo"
                      placeholder="Ссылка на логотип"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Описание</label>
                    <Input.TextArea
                      onChange={handleChange}
                      rows={4}
                      id="description"
                      className="form-control"
                      placeholder="Описание идеи"
                    />
                  </div>
                  <button type="button" onClick={addIdea} className="btn btn-primary mb-3 float-right">
                    Добавить
                  </button>
                </form>
              </Spin>
            </div>
          </div>
        </div>
      </Layout>
    </Page>
  );
};

export default Add;
