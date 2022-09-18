import { io } from "socket.io-client";

export const defaultGetServerSidePropFunc = async () => {
  return {
    props: {},
  };
};

export const socket = io(process.env.NEXT_PUBLIC_SERVER as string, {
  autoConnect: false,
});
