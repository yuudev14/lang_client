import React from "react";
import Header from "../common/Header";

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
