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
        {"translation" in data && data.sender === matchUser.current && (
          <p className="mt-3 italic text-sm">{data.translation}</p>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
