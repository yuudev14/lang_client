import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import WithNavLayout from "../../components/Layout/WithNavLayout";
import { defaultGetServerSidePropFunc, socket } from "../../utils/constants";
import PrivateRoute from "../../utils/PrivateRoute";

const RandomChatPage: NextPage = () => {
  useEffect(() => {
    // socket.connect();
    // socket.emit("join-random-chat", "english");
    // socket.emit("find-random-chat-user", "english");
    // socket.emit("waiting random chat match", "english");
    // socket.on("found-random-chat-user", (id) => {
    //   if (id) {
    //     socket.off("found-random-chat-user");
    //   } else {
    //     socket.emit("waiting random chat match", "english");
    //   }
    // });
    // return () => {
    //   socket.off("found-random-chat-user");
    //   socket.emit("disconnect-random-chat", "english");
    //   socket.disconnect();
    // };
  }, []);
  return (
    <MainLayout>
      <WithNavLayout>
        <div className="flex flex-col h-full p-4 w-full gap-2">
          <div className="overflow-auto px-2">
            <div className="user-chat">
              <p className="px-2">You:</p>
              <div className="user-content">
                Aliqua ut sint veniam voluptate dolor cillum anim cillum
                voluptate. Sint mollit voluptate tempor consequat nulla irure
                laborum ad anim reprehenderit mollit magna est. Nostrud aliquip
                tempor veniam mollit adipisicing ullamco occaecat sit
                exercitation ullamco deserunt ullamco. Amet in voluptate
                cupidatat eiusmod culpa velit consequat nisi non. Ex officia
                deserunt consequat qui enim labore ea eu ullamco consectetur.
                Consequat nulla occaecat in do enim ipsum consectetur deserunt
                dolore mollit commodo. Amet eu id sit nulla proident duis.
                Incididunt excepteur sit sit ea. Officia ea in labore velit
                cillum fugiat nulla. Duis ex officia commodo id incididunt elit.
              </div>
            </div>
            <div className="user-chat">
              <p className="px-2">You:</p>
              <div className="user-content">
                Aliqua ut sint veniam voluptate dolor cillum anim cillum
                voluptate. Sint mollit voluptate tempor consequat nulla irure
                laborum ad anim reprehenderit mollit magna est. Nostrud aliquip
                tempor veniam mollit adipisicing ullamco occaecat sit
                exercitation ullamco deserunt ullamco. Amet in voluptate
                cupidatat eiusmod culpa velit consequat nisi non. Ex officia
                deserunt consequat qui enim labore ea eu ullamco consectetur.
                Consequat nulla occaecat in do enim ipsum consectetur deserunt
                dolore mollit commodo. Amet eu id sit nulla proident duis.
                Incididunt excepteur sit sit ea. Officia ea in labore velit
                cillum fugiat nulla. Duis ex officia commodo id incididunt elit.
              </div>
            </div>
            <div className="sender-chat">
              <p className="px-2 text-secondary">Stranger:</p>
              <div className="sender-content">
                Aliqua ut sint veniam voluptate dolor cillum anim cillum
                voluptate. Sint mollit voluptate tempor consequat nulla irure
                laborum ad anim reprehenderit mollit magna est. Nostrud aliquip
                tempor veniam mollit adipisicing ullamco occaecat sit
                exercitation ullamco deserunt ullamco. Amet in voluptate
                cupidatat eiusmod culpa velit consequat nisi non. Ex officia
                deserunt consequat qui enim labore ea eu ullamco consectetur.
                Consequat nulla occaecat in do enim ipsum consectetur deserunt
                dolore mollit commodo. Amet eu id sit nulla proident duis.
                Incididunt excepteur sit sit ea. Officia ea in labore velit
                cillum fugiat nulla. Duis ex officia commodo id incididunt elit.
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-auto items-end">
            <div
              className="max-h-36 outline-none overflow-auto flex-1 border-4 py-2 px-3 rounded-2xl"
              contentEditable={true}></div>
            <button className="btn">send</button>
          </div>
        </div>
      </WithNavLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = PrivateRoute(
  defaultGetServerSidePropFunc
);
export default RandomChatPage;
