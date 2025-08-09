import React from "react";
import "./Layout.scss";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="layout__header"></div>
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;
