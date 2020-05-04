import "../styles/main.scss";
import "../styles/antd-custom.less";

import React, { useEffect } from "react";
import * as firebase from "firebase/app";
import * as NProgress from "nprogress";
import { Router } from "next/router";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
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
      console.log("Firebase SDK has been intialize");
    }
  }, []);

  return <Component {...pageProps} />;
}
