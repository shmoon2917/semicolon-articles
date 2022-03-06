import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import { GlobalStyle } from 'styles/globalStyles';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider attribute="class">
        <Head>
          <title>moonerd.dev</title>
          <meta name="description" content="frontend developer ans's blog" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="author" content="Sangho Moon" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ansblog" />
          <meta property="og:description" content="frontend developer ans's blog" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
