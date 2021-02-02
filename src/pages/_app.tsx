import React, { useEffect, useState } from 'react';

import { AppProps } from 'next/app';

import '../styles/main.css';

import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import { DEFAULT_THEME } from '../styles/themes';
import { applyTheme } from '../styles/themes/utils';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme] = useState(DEFAULT_THEME);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div>
      <Header theme={theme} />
      <Component {...pageProps} theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default MyApp;
