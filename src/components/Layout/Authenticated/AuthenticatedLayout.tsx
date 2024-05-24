import React, { ReactNode } from "react";

import { Layout, theme } from "antd";
import Sidebar from "../Partials/Sidebar";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  children?: ReactNode;
}

const { Content } = Layout;
const AuthenticatedLayout: React.FC<MainLayoutProps> = (/*{ children }*/) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Content
          style={{
            margin: "15px 15px",
            padding: 25,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* {children} */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AuthenticatedLayout;
