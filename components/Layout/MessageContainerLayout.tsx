import React from "react";

const MessageContainerLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col h-full px-4 w-full gap-2">{children}</div>
  );
};

export default MessageContainerLayout;
