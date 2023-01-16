/* eslint-disable react/no-unescaped-entities */
import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../components/Layout/MainLayout";
import WithNavLayout from "../components/Layout/WithNavLayout";
import { defaultGetServerSidePropFunc } from "../utils/constants";
import PrivateRoute from "../utils/PrivateRoute";

const MeetupPage: NextPage = () => {
  return (
    <MainLayout>
      <WithNavLayout>
        <div className="flex gap-2">
          <div>
            <h2>Meet and learn with someone!</h2>
            <form>
              <div>
                <input type="text" placeholder="Search for keywords" />
                <input type="text" placeholder="Neighborhood or city" />
              </div>
              <button className="btn">Search</button>
            </form>
          </div>
          <div>
            <h2>See what's happening</h2>
            <ul className="flex flex-nowrap gap-1">
              <li className="">Starting soon</li>
              <li>Today</li>
              <li>Tomorrow</li>
              <li>This week</li>
              <li>Online</li>
              <li>In Person</li>
            </ul>
          </div>
        </div>
      </WithNavLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default MeetupPage;
