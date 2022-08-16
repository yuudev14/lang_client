import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import store from "../store/store";
import { Provider, useDispatch } from "react-redux";
import { verifyTokenAction } from "../store/slicers/user/actions";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(verifyTokenAction());
  }, [dispatch]);
  return (
    <>
      <div className="background" />
      <Component {...pageProps} />
    </>
  );
}

const App = (props: AppProps) => {
  return (
    <Provider store={store}>
      <MyApp {...props} />
    </Provider>
  );
};

export default App;
