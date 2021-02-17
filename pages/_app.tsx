import React from 'react';
import { ThemeProvider } from 'belly-ui/identity';
import * as theme from '@theme';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme} vars={theme.vars}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
