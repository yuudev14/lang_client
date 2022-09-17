import type { GetServerSideProps, NextPage } from "next";
import Header from "../components/common/Header";
import MainLayout from "../components/Layout/MainLayout";
import WithNavLayout from "../components/Layout/WithNavLayout";
import { defaultGetServerSidePropFunc } from "../utils/common";
import PrivateRoute from "../utils/PrivateRoute";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <WithNavLayout>
        <h1>hi</h1>
      </WithNavLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default Home;
