import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import store from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <div className="background" />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
