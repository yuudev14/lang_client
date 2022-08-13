import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="background" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
