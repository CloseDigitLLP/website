import { useEffect } from "react";
import Head from "next/head";

// font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import '../styles/globals.scss';
// import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name='keywords' content='closedigit, closedigitllp, llp, closedigit llp, close digit, close digit llp, close, digit, app, application, web, ui, ux, node, react, website, webapp, mobile, mobileapp, software, development, coding, building, javascript, 8780595907, rajan, rajan vasani, aditi, aditi makadiya, rajanvasani9@gmail.com' />
      </Head>
      <Header></Header>
      <Component {...pageProps} />
      {/* <SpeedInsights /> */}
      <Analytics />
      <Footer></Footer>
    </>
  )
}

export default MyApp
