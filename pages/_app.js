import '../styles/main.scss';

import React from "react";

import Page from "../containers/Page";

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}