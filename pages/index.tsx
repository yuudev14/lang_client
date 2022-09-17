import type { GetServerSideProps, NextPage } from "next";
import Header from "../components/common/Header";
import { defaultGetServerSidePropFunc } from "../utils/common";
import PrivateRoute from "../utils/PrivateRoute";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default Home;
