import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import WithNavLayout from "../../components/Layout/WithNavLayout";
import { useAppSelector } from "../../hooks/reduxhook";
import { defaultGetServerSidePropFunc, languages } from "../../utils/constants";
import PrivateRoute from "../../utils/PrivateRoute";

const RandomPage: NextPage = () => {
  const [room, setRoom] = useState("");
  const [chooseState, setChooseState] = useState(false);
  const { user } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (
      user.language_to_study !== undefined &&
      user.language_to_study.length > 0
    ) {
      setRoom(user.language_to_study[0]);
    }
  }, [user]);

  useEffect(() => {
    console.log(room.replaceAll(" ", "-").toLowerCase());
  }, [room]);

  const chooseRoomHandler = (lang: string) => {
    setRoom(lang);
    setChooseState(false);
  };
  return (
    <MainLayout>
      <WithNavLayout>
        {room && (
          <div>
            <div className="flex gap-4 items-center">
              <div className="flex flex-col">
                <p>Room:</p>
                <span
                  onClick={() => setChooseState(true)}
                  className={
                    "mt-1 card p-2 cursor-pointer w-[150px] hover:bg-cyan-200 hover:border-cyan-300 transition"
                  }>
                  <Image
                    src={`/images/flags/${room}-flag-icon.png`}
                    alt=""
                    width={"150px"}
                    height={"100px"}
                    className="rounded-md"
                  />
                </span>
              </div>
              <Link href="/random/call">
                <a>
                  <button className="btn w-32">call</button>
                </a>
              </Link>
              <Link href="/random/chat">
                <a>
                  <button className="btn w-32">chat</button>
                </a>
              </Link>
            </div>
            <div
              className={`flex flex-wrap gap-6 w-[50%] mt-8 ${
                chooseState ? "h-max" : "h-0"
              } overflow-hidden`}>
              {languages.map((_data) => (
                <span
                  key={_data.name}
                  onClick={() => chooseRoomHandler(_data.language)}
                  className={
                    "mt-1 card p-2 cursor-pointer w-[150px] hover:bg-cyan-200 hover:border-cyan-300 transition"
                  }>
                  <Image
                    src={`/images/flags/${_data.name
                      .replaceAll(" ", "-")
                      .toLowerCase()}-flag-icon.png`}
                    alt=""
                    width={"150px"}
                    height={"100px"}
                    className="rounded-md"
                  />
                  <p className="text-center mt-2">{_data.language}</p>
                </span>
              ))}
            </div>
          </div>
        )}
      </WithNavLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default RandomPage;
