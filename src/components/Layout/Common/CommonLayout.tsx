// src/components/Layout/LandingLayout.tsx
import React, { ReactNode } from "react";
import { Layout } from "antd";
import Topbar from "../Partials/Topbar";
import { Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";

interface LayoutProps {
  children?: ReactNode;
}

const { Footer } = Layout;

const CommonLayout: React.FC<LayoutProps> = (/*{ children }*/) => {
  return (
    <Layout className="CommonLayout" style={{ minHeight: "50vh", maxHeight: "100vh"}}>
      <Topbar />
      <Content style={{ margin: 8 }}>
        <Outlet /> {/* {children} */}
      </Content>
      <Footer
        style={{ position: "absolute", bottom: 0, left: "46.2%", marginTop: "0", padding: "0 0 10px 0" }}
      >
        ©2024 My Application
      </Footer>
    </Layout>
  );
};

export default CommonLayout;
