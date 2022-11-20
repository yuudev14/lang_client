import React from "react";

const MessageBox = ({ data, matchUser }: any) => {
  return (
    <div
      className={data.id === matchUser.current ? "user-chat" : "sender-chat"}>
      <p>{data.id === matchUser.current ? "me" : "stranger"}:</p>
      <div>{data.msg}</div>
    </div>
  );
};

export default MessageBox;
