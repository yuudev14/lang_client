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
    socket.emit("waiting random chat match", "english");
    socket.on("found-random-chat-user", (id) => {
      if (id) {
        socket.off("found-random-chat-user");
      } else {
        socket.emit("waiting random chat match", "english");
      }
    });

    return () => {
      socket.off("found-random-chat-user");
      socket.emit("disconnect-random-chat", "english");
      socket.disconnect();
    };
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
