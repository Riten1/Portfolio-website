import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className="flex w-full h-full bg-f5f0f0 overflow-hidden">{children}</div>
  );
};

export default MainContainer;
