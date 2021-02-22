import React from 'react';

import { AppProps } from 'next/app';
import Layout from '@components/Layout';
import 'tailwindcss/tailwind.css';
import '@theme/styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
