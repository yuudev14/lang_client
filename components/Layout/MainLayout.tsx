import React from "react";
import Header from "../common/Header";

const MainLayout = ({ children }: any) => {
  return (
    <div className="pt-[100px]">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
