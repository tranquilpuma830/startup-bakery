import "../styles/main.scss";
import "../styles/antd-custom.less";

import React, { useEffect } from "react";
import * as firebase from "firebase";
import * as NProgress from "nprogress";
import { Router } from "next/router";

import _get from "lodash/get";

import { useUser } from "../containers/UserContext";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  const user = useUser();

  useEffect(() => {
    // Intialize the Firebase SDK
    if (firebase.apps.length < 1) {
      firebase.initializeApp({
        apiKey: process.env.FB_API_KEY,
        authDomain: process.env.FB_AUTH_DOMAIN,
        databaseURL: process.env.FB_DATABASE_URL,
        projectId: process.env.FB_PROJECT_ID,
        storageBucket: process.env.FB_STORAGE_BUCKET,
        messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
        appId: process.env.FB_APP_ID,
      });
      firebase.auth().languageCode = "ru";
      console.log("Firebase SDK has been intialize");
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

