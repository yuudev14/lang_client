import type { GetServerSideProps, NextPage } from "next";
import { defaultGetServerSidePropFunc } from "../utils/common";
import PrivateRoute from "../utils/PrivateRoute";

const Home: NextPage = () => {
  return (
    <div className="">
      <h1></h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default Home;
