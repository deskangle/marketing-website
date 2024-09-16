import React, { ReactNode } from "react";

type BodyWrapperType = {
  children: ReactNode;
};

const BodyWrapper = ({ children }: BodyWrapperType) => {
  return <div className="relative pt-[102px]">{children}</div>;
};

export default BodyWrapper;
