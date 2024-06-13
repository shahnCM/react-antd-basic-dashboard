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
          margin: "0 0 0 8px",
          padding: 8,
          background: "white",
          borderRadius: 8,
        }}
      >
        <div style={{ borderRadius: 8, paddingRight: 4, maxHeight: "calc(100vh - 130px)", overflow: "auto" }}>
          <Outlet /> {/* {children} */}
        </div>
      </Content>
    </Layout>
  );
};

export default AuthenticatedLayout;
