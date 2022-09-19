import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import MainLayout from "../../components/Layout/MainLayout";
import WithNavLayout from "../../components/Layout/WithNavLayout";
import { defaultGetServerSidePropFunc } from "../../utils/constants";
import PrivateRoute from "../../utils/PrivateRoute";

const RandomPage: NextPage = () => {
  return (
    <MainLayout>
      <WithNavLayout>
        <div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col">
              <p>Room:</p>
              <span
                className={
                  "mt-1 card p-2 cursor-pointer w-[150px] hover:bg-cyan-200 hover:border-cyan-300 transition"
                }>
                <Image
                  src={`/images/flags/${"japan"
                    .replaceAll(" ", "-")
                    .toLowerCase()}-flag-icon.png`}
                  alt=""
                  width={"150px"}
                  height={"100px"}
                  className="rounded-md"
                />
              </span>
            </div>
            <button className="btn w-32">call</button>
            <button className="btn w-32">chat</button>
          </div>
        </div>
      </WithNavLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default RandomPage;
