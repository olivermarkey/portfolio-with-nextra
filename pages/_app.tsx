import type { AppProps } from 'next/app';
import './globals.css';
import 'tailwindcss/tailwind.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel='icon' href='o.png' />
        <title>Oliver Markey</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;