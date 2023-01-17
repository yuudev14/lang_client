/* eslint-disable react/no-unescaped-entities */
import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../components/Layout/MainLayout";
import WithNavLayout from "../components/Layout/WithNavLayout";
import { defaultGetServerSidePropFunc } from "../utils/constants";
import PrivateRoute from "../utils/PrivateRoute";
import MeetupSearchForm from "../components/pages/meetup/index/MeetupSearchForm";
import TagSearch from "../components/pages/meetup/index/TagSearch";

const MeetupPage: NextPage = () => {
  return (
    <MainLayout>
      <WithNavLayout>
        <div className="flex gap-10">
          <MeetupSearchForm />
          <TagSearch />
        </div>
      </WithNavLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default MeetupPage;
