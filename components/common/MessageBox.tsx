import React from "react";

const MessageBox = ({ data, matchUser }: any) => {
  return (
    <div
      className={
        data.sender === matchUser.current ? "sender-chat" : "user-chat"
      }>
      <p>{data.sender === matchUser.current ? "stranger" : "me"}:</p>
      <div>
        <p>{data.msg}</p>
        <p className="mt-3 italic text-sm">
          {"translation" in data && data.translation}
        </p>
      </div>
    </div>
  );
};

export default MessageBox;
