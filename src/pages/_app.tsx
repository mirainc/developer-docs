import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css';
import 'react-medium-image-zoom/dist/styles.css';

import { ColorSchemeProvider } from '../components/ColorSchemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorSchemeProvider>
        <Component {...pageProps} />
      </ColorSchemeProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
