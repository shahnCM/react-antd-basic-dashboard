import React, { ReactNode } from "react";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../Partials/Sidebar";

interface LayoutProps {
  children?: ReactNode;
}

const { Content } = Layout;
const AuthenticatedLayout: React.FC<LayoutProps> = (/*{ children }*/) => {
  return (
    <Layout
      className="AuthenticatedLayout"
      style={{ overflow: "hidden", display: "flex", flexDirection: "row" }}
    >
      <Sidebar />
      <Content
        style={{
          margin: "15px 15px",
          padding: 25,
          minHeight: 280,
          background: "white",
          borderRadius: "8px",
        }}
      >
        {/* {children} */}
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AuthenticatedLayout;
