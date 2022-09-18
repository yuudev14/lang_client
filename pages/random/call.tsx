import React, { useEffect } from "react";
import { socket } from "../../utils/constants";

const RandomCallPage = () => {
  useEffect(() => {
    socket.connect();
    console.log(1);
    socket.emit("join", "hello");
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div>
      <h1>random call</h1>
    </div>
  );
};

export default RandomCallPage;
