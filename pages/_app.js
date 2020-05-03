import '../styles/main.scss';
import '../styles/antd-custom.less'

import * as NProgress from 'nprogress';
import { Router } from 'next/router';
import React from 'react';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
