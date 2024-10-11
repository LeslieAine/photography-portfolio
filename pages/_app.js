import '../styles/core.css';
import '../styles/elements.css';
import Script from 'next/script';
// import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />

      <Script src="/js/vendor.js" strategy="beforeInteractive" />
      <Script src="/js/functions.js" strategy="afterInteractive" />
      <Script src="/modules/tera-lightbox/tera-lightbox.js" strategy="afterInteractive" />
      <Script src="/modules/titan-slider/titan-slider.js" strategy="afterInteractive" />

    </>
  );
}

export default MyApp;
