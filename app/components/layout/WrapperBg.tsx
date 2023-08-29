import React from "react";

const WrapperBg = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-zinc-50 h-screen">{children}</div>;
};

export default WrapperBg;
