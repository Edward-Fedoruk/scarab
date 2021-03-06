/* eslint-disable react/jsx-props-no-spreading */
import 'styles/normalize.css';
import 'styles/global.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </main>
);

export default appWithTranslation(MyApp);
