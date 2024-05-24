import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const nav = useNavigate()

  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="custom-sider"
      style={{
        borderRight: 0,
        display: 'grid',
        borderRadius: '8px',
        margin: '15px 0 15px 15px',
      }}
    >
      <Menu
        // theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          border: 0,
          overflowY: 'auto',
          maxHeight: '80vh',
          borderRadius: '8px',
          position: 'relative',
        }}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
            onClick: () => nav('/dashboard/1')
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
            children: [
              {
                key: "2.1",
                icon: <MailOutlined />,
                label: "Nested 1",
                onClick: () => nav('/dashboard/2')
              },
              {
                key: "2.2",
                icon: <MailOutlined />,
                label: "Nested 2",
              },
            ],
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
          {
            key: "4",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "5",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
            children: [
              {
                key: "5.1",
                icon: <MailOutlined />,
                label: "Nested 1",
              },
              {
                key: "5.2",
                icon: <MailOutlined />,
                label: "Nested 2",
              },
            ],
          },
          {
            key: "6",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
      <div className="demo-logo-vertical" style={{alignSelf: 'end', margin: "5px 0 5px 5px",}}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            border: 0,
            width: 70,
            height: 45,
            fontSize: "16px",
          }}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
