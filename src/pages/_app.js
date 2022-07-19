import { useEffect } from "react";

// font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <>
      <Header></Header>
        <Component {...pageProps} />
      <Footer></Footer>  
    </>
  ) 
}

export default MyApp
