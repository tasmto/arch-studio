import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='max-w-6xl px-2 m-auto text-slate-900'>
      <Head>
        <title>Arch</title>
        <link rel='shortcut icon' href='favicon.svg' />
      </Head>
      <Navbar />
      <main className='flex flex-col gap-y-16 lg:gap-y-24 mb-14 xl:mb-16 relative  '>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
