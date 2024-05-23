// src/components/Layout/LandingLayout.tsx
import React, { ReactNode } from "react";
import { Layout } from "antd";
import Topbar from "../Partials/Topbar";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  children?: ReactNode;
}

const { Footer } = Layout;

const CommonLayout: React.FC<MainLayoutProps> = (/*{ children }*/) => {
  return (
    <Layout className="CommonMainLayout" style={{minHeight: '100vh'}}>
      <Topbar />
      {/* {children} */}
      <Outlet/>
      <Footer style={{ textAlign: "center" }}>©2024 My Application</Footer>
    </Layout>
  );
};

export default CommonLayout;
