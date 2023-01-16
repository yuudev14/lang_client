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
        <div className="flex gap-16">
          <div>
            <h2>Meet and learn with someone!</h2>
            <form>
              <div>
                <input type="text" placeholder="Search for keywords" />
                <input type="text" placeholder="Neighborhood or city" />
              </div>
              <button className="btn w-full">Search</button>
            </form>
          </div>
          <div>
            <h2>See what's happening</h2>
            <ul className="flex flex-wrap gap-1">
              <li className="tags mt-1 cursor-pointer">Starting soon</li>
              <li className="tags mt-1 cursor-pointer">Today</li>
              <li className="tags mt-1 cursor-pointer">Tomorrow</li>
              <li className="tags mt-1 cursor-pointer">This week</li>
              <li className="tags mt-1 cursor-pointer">Online</li>
              <li className="tags mt-1 cursor-pointer">In Person</li>
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
