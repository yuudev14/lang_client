import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import WithNavLayout from "../../components/Layout/WithNavLayout";
import { useAppSelector } from "../../hooks/reduxhook";
import { defaultGetServerSidePropFunc, socket } from "../../utils/constants";
import PrivateRoute from "../../utils/PrivateRoute";

const RandomChatPage: NextPage = () => {
  const user = useAppSelector((state) => state.userReducer.user);
  const [findingRandomUser, setFindingRandomUser] = useState(true);
  const [matchUser, setMatchUser] = useState("");
  const [messages, setMessages] = useState<any>([]);
  const [inputMsg, setInputMsg] = useState("");
  const [timeoutId, setTimeoutId] = useState<any>([]);
  const router = useRouter();
  const msgRef = useRef<HTMLDivElement>(null);
  const divBottomRef = useRef<HTMLDivElement>(null);
  const { room } = router.query;

  useEffect(() => {
    socket.connect();
    socket.emit("join-random-chat", room);
    socket.emit("find-random-chat-user", {
      room,
      user_id: user._id,
    });
    socket.emit("waiting random chat match", room);
    socket.on("found-random-chat-user", (id) => {
      if (id) {
        socket.off("found-random-chat-user");
        setFindingRandomUser(false);
        timeoutId.forEach((_id: any) => {
          clearTimeout(_id);
        });
        setMatchUser(id);
      } else {
        socket.emit("waiting random chat match", room);
      }
    });
    socket.on("receive-message-random-chat", (data) => {
      setMessages((messages: any) => [...messages, data]);
    });
    const timeout = setTimeout(() => {
      socket.off("found-random-chat-user");
      console.log("can't find user");
      setFindingRandomUser(false);
    }, 10000);
    setTimeoutId([...timeoutId, timeout]);
    return () => {
      socket.off("found-random-chat-user");
      socket.off("receive-message-random-chat");
      socket.emit("disconnect-random-chat", room);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    divBottomRef.current!.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessageHandler = () => {
    if (matchUser && inputMsg) {
      const msgData = {
        msg: inputMsg,
        id: matchUser,
      };
      setMessages((messages: any) => [...messages, msgData]);
      setInputMsg("");
      msgRef.current!.textContent = "";
      msgRef.current!.focus();
      socket.emit("send-message-random-chat", msgData);
    }
  };
  return (
    <MainLayout>
      <WithNavLayout>
        <div className="flex flex-col h-full p-4 w-full gap-2">
          <div className="overflow-auto px-2">
            {matchUser === "" && findingRandomUser && (
              <div className="absolute left-1/2 -translate-x-1/2 z-10 card px-5 py-2 w-max">
                <p>Finding someone. please wait ...</p>
              </div>
            )}
            {matchUser === "" && findingRandomUser === false && (
              <div className="absolute left-1/2 -translate-x-1/2 z-10 card px-5 py-2 w-max">
                <p>User disconnected</p>
              </div>
            )}
            {messages.map((data: any, i: number) => (
              <div
                className={data.id === matchUser ? "user-chat" : "sender-chat"}
                key={i}>
                <p>{data.id === matchUser ? "me" : "stranger"}:</p>
                <div>{data.msg}</div>
              </div>
            ))}
            <div ref={divBottomRef}></div>
          </div>
          <div className="flex gap-2 mt-auto items-end">
            <div
              className="max-h-36 outline-none overflow-auto flex-1 border-4 py-2 px-3 rounded-2xl"
              onInput={(e) =>
                setInputMsg(e.currentTarget.textContent!.toString())
              }
              suppressContentEditableWarning={true}
              ref={msgRef}
              contentEditable={true}
            />
            <button
              onClick={sendMessageHandler}
              className="btn"
              disabled={matchUser !== "" ? false : true}>
              send
            </button>
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
