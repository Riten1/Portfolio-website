import React from "react";

const SuperContainer = ({ children }) => {
  return (
    <div className="w-screen h-screen pl-10 pb-11 pr-10 overflow-hidden">
      {children}
    </div>
  );
};

export default SuperContainer;
