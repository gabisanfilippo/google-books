import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BOOKSTORE</title>
        <meta name="description" content="Bookstore page" />
        <meta name="keywords" content="Book, Books, Google Books, Library" />
        <meta name="author" content="Gabrielle Coelho Sanfilippo" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
