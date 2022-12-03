import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import MessageBox from "../../components/common/MessageBox";
import MainLayout from "../../components/Layout/MainLayout";
import WithNavLayout from "../../components/Layout/WithNavLayout";
import RandomChatOptions from "../../components/pages/random/chat/RandomChatOptions";
import { useAppSelector } from "../../hooks/reduxhook";
import {
  defaultGetServerSidePropFunc,
  langCode,
  socket,
} from "../../utils/constants";
import PrivateRoute from "../../utils/PrivateRoute";
import { post } from "../../utils/requests";

type messageType = {
  sender: string;
  msg: string;
  translation?: string;
};
const RandomChatPage: NextPage = () => {
  const user = useAppSelector((state) => state.userReducer.user);
  const [findingRandomUser, setFindingRandomUser] = useState(true);
  const matchUser = useRef<string>("");
  const [messages, setMessages] = useState<messageType[]>([]);
  const [inputMsg, setInputMsg] = useState("");
  const [timeoutId, setTimeoutId] = useState<any>([]);
  const router = useRouter();
  const msgRef = useRef<HTMLDivElement>(null);
  const divBottomRef = useRef<HTMLDivElement>(null);
  const { room } = router.query;
  const [language, setLanguage] = useState("");

  // language on mount
  useEffect(() => {
    // check if local storage exist
    const currTranslateLang = localStorage.getItem("translate");
    if (currTranslateLang) {
      setLanguage(currTranslateLang);
    }
  }, []);

  // socket action on mount
  useEffect(() => {
    socket.connect();
    socket.emit("join_random_chat", room);
    findRandomUserHandler();
    // find random user

    socket.on("receive-message-random-chat", async (data) => {
      if (language) {
        data = await translateMessage(data);
      }
      setMessages((messages: any) => [...messages, data]);
    });
    socket.on("random-user-left", () => {
      matchUser.current = "";
      setMessages([]);
    });

    return () => {
      // remove listeners
      socket.off("found-random-chat-user");
      socket.off("receive-message-random-chat");
      socket.off("random-user-left");
      socket.emit("disconnect_random_chat", {
        room,
        user: matchUser.current,
      });
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (language) {
      (async () => {
        try {
          const updatedMessages: messageType[] = await translateMessage(
            messages
          );
          setMessages(updatedMessages);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [language]);

  useEffect(() => {
    divBottomRef.current!.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const translateMessage = async (msg: messageType | messageType[]) => {
    const translateResponse = await post(
      `/api/translate/${langCode[language as keyof typeof langCode]}`,
      msg
    );
    return translateResponse.data;
  };

  const sendMessageHandler = () => {
    if (matchUser && inputMsg) {
      const msgData = {
        msg: inputMsg,
        id: matchUser.current,
        lang: language,
      };
      setMessages((messages: any) => [...messages, msgData]);
      setInputMsg("");
      msgRef.current!.textContent = "";
      msgRef.current!.focus();
      socket.emit("send_message_random_chat", msgData);
    }
  };

  const leftMessageHandler = () => {
    if (matchUser.current) {
      setMessages([]);
      socket.emit("disconnect_random_chat", {
        room: "",
        user: matchUser.current,
      });
      matchUser.current = "";
    }
  };

  const findRandomUserHandler = () => {
    setFindingRandomUser(true);
    socket.emit("find_random_chat_user", {
      room,
      user_id: user._id,
    });
    socket.emit("waiting_random_chat_match", room);
    // stop finding random user after 10 seconds of waiting
    const timeout = setTimeout(() => {
      socket.off("found-random-chat-user");
      setFindingRandomUser(false);
    }, 5000);
    setTimeoutId((timeouts: any) => [...timeouts, timeout]);

    socket.on("found-random-chat-user", (id) => {
      if (id) {
        // if user exist, set match user id and set finding random user to false
        socket.off("found-random-chat-user");
        setFindingRandomUser(false);

        // clear out all timeout ids
        timeoutId.forEach((_id: any) => {
          clearTimeout(_id);
        });
        matchUser.current = id;
      } else {
        socket.emit("waiting_random_chat_match", room);
      }
    });
  };

  return (
    <MainLayout>
      <WithNavLayout>
        <div className="flex flex-col h-full px-4 w-full gap-2">
          <RandomChatOptions language={language} setLanguage={setLanguage} />
          <div className="overflow-auto px-2">
            {matchUser.current === "" && findingRandomUser && (
              <div className="absolute left-1/2 -translate-x-1/2 z-10 card px-5 py-2 w-max">
                <p>Finding someone. please wait ...</p>
              </div>
            )}
            {matchUser.current === "" && findingRandomUser === false && (
              <div className="absolute left-1/2 -translate-x-1/2 z-10 card px-5 py-2 w-max">
                <p>User disconnected</p>
              </div>
            )}
            {messages.map((data: any, i: number) => (
              <MessageBox key={i} data={data} matchUser={matchUser} />
            ))}
            <div ref={divBottomRef}></div>
          </div>
          <div className="flex gap-2 mt-auto items-end">
            {matchUser.current === "" && !findingRandomUser ? (
              <button onClick={findRandomUserHandler} className="btn">
                Find
              </button>
            ) : (
              <button
                onClick={leftMessageHandler}
                className="btn"
                disabled={matchUser.current !== "" ? false : true}>
                Left
              </button>
            )}
            <p
              className="max-h-36 outline-none overflow-auto flex-1 border-4 py-2 px-3 rounded-2xl"
              onInput={(e) =>
                setInputMsg(e.currentTarget.textContent!.toString())
              }
              onKeyDownCapture={(e) => {
                console.log(msgRef.current!.textContent);
                if (e.keyCode === 13) {
                  sendMessageHandler();
                }
              }}
              onKeyUp={(e) => {
                console.log(msgRef.current!.textContent);
                if (e.keyCode === 13) {
                  const children = msgRef.current!.children;
                  console.log(children);
                  for (let node of children) {
                    msgRef.current!.removeChild(node);
                  }
                }
              }}
              suppressContentEditableWarning={true}
              ref={msgRef}
              contentEditable={
                matchUser.current !== "" && !findingRandomUser ? true : false
              }
            />

            {/* <button
              onClick={sendMessageHandler}
              className="btn"
              disabled={matchUser.current !== "" ? false : true}>
              Send
            </button> */}
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
