import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BannerProvider } from '../context/BannerContext';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ad Banner Manager</title>
        <meta name="description" content="Manage and edit ad banners easily" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BannerProvider>
          <Component {...pageProps} />
        </BannerProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;