import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../components/Layout/MainLayout";
import WithNavLayout from "../components/Layout/WithNavLayout";
import { defaultGetServerSidePropFunc } from "../utils/constants";
import PrivateRoute from "../utils/PrivateRoute";

const MessagesPage: NextPage = () => {
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
export default MessagesPage;
