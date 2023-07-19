import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Pagelayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Pagelayout;
