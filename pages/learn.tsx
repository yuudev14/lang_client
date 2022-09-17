import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../components/Layout/MainLayout";
import WithNavLayout from "../components/Layout/WithNavLayout";
import { defaultGetServerSidePropFunc } from "../utils/common";
import PrivateRoute from "../utils/PrivateRoute";

const Learn: NextPage = () => {
  return (
    <MainLayout>
      <WithNavLayout>
        <h1>learn</h1>
      </WithNavLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default Learn;
