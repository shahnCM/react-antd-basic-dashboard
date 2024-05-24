import React, { ReactNode } from "react";

import { Layout } from "antd";
import Sidebar from "../Partials/Sidebar";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  children?: ReactNode;
}

const { Content } = Layout;
const AuthenticatedLayout: React.FC<MainLayoutProps> = (/*{ children }*/) => {

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Content
          style={{
            margin: "15px 15px",
            padding: 25,
            minHeight: 280,
            background: 'white',
            borderRadius: '8px',
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
