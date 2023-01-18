/* eslint-disable react/no-unescaped-entities */
import type { GetServerSideProps, NextPage } from "next";

import MainLayout from "../components/Layout/MainLayout";
import WithNavLayout from "../components/Layout/WithNavLayout";
import MeetUpPost from "../components/pages/meetup/index/MeetUpPost";
import MeetupSearchForm from "../components/pages/meetup/index/MeetupSearchForm";
import TagSearch from "../components/pages/meetup/index/TagSearch";

import { defaultGetServerSidePropFunc } from "../utils/constants";
import PrivateRoute from "../utils/PrivateRoute";

const MeetupPage: NextPage = () => {
  return (
    <MainLayout>
      <WithNavLayout>
        <div className="flex gap-10 md:flex-row flex-col">
          <MeetupSearchForm />
          <TagSearch />
        </div>
        <div className="mt-10 w-full md:w-[55%]">
          {[1, 2, 3, 4, 5].map((i) => (
            <MeetUpPost key={i} />
          ))}
        </div>
      </WithNavLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default MeetupPage;
