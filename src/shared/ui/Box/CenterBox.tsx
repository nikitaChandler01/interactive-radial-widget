import React from "react";
import "./CenterBox.scss";

interface ICenterBox {
  children: React.ReactNode;
}

const CenterBox = ({ children }: ICenterBox) => {
  return <div className="center-box">{children}</div>;
};

export default CenterBox;
