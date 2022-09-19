import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import WithNavLayout from "../../components/Layout/WithNavLayout";
import { defaultGetServerSidePropFunc, socket } from "../../utils/constants";
import PrivateRoute from "../../utils/PrivateRoute";

const RandomChatPage: NextPage = () => {
  useEffect(() => {
    socket.connect();
    socket.emit("join-random-chat", "english");
    socket.emit("find-random-chat-user", "english");
    socket.on("found-random-chat-user", () => {
      console.log("hello");
    });
  }, []);
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
export default RandomChatPage;
