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
        border: 0,
        paddingTop: 3,
        borderRadius: '8px',
        maxHeight: "calc(100vh - 113px)",
        backgroundColor: '#F4FBF9'
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          border: 0,
          padding: 0,
          overflowY: 'auto',
          overflowX: 'clip',
          borderRadius: '8px',
          position: "relative",
          backgroundColor: '#F4FBF9'
        }}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard 1",
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
                label: "Dashboard 2",
                onClick: () => nav('/dashboard/2')
              },
              {
                key: "2.2",
                icon: <MailOutlined />,
                label: "Nested 2.2"
              },
            ],
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Todo",
            onClick: () => nav('/dashboard/todos')
          },
          {
            key: "4",
            icon: <UserOutlined />,
            label: "nav 4",
          },
          {
            key: "5",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
            children: [
              {
                key: "5.1",
                icon: <MailOutlined />,
                label: "Nested 5.1",
              },
              {
                key: "5.2",
                icon: <MailOutlined />,
                label: "Nested 5.2",
              },
            ],
          },
          {
            key: "6",
            icon: <UploadOutlined />,
            label: "nav 6",
          },
          {
            key: "7",
            icon: <UploadOutlined />,
            label: "nav 7",
          },
          {
            key: "8",
            icon: <UploadOutlined />,
            label: "nav 8",
          },
          {
            key: "9",
            icon: <UploadOutlined />,
            label: "nav 9",
          },
          {
            key: "10",
            icon: <UploadOutlined />,
            label: "nav 10",
          },
          {
            key: "11",
            icon: <UploadOutlined />,
            label: "nav 11",
          },
          {
            key: "12",
            icon: <UploadOutlined />,
            label: "nav 12",
          },
          {
            key: "13",
            icon: <UploadOutlined />,
            label: "nav 13",
          },
          {
            key: "14",
            icon: <UploadOutlined />,
            label: "nav 14",
          },
          {
            key: "15",
            icon: <UploadOutlined />,
            label: "nav 15",
          },
          {
            key: "16",
            icon: <UploadOutlined />,
            label: "nav 16",
          },
          {
            key: "17",
            icon: <UploadOutlined />,
            label: "nav 17",
          },
          {
            key: "18",
            icon: <UploadOutlined />,
            label: "nav 18",
          },
          {
            key: "19",
            icon: <UploadOutlined />,
            label: "nav 19",
          },
          {
            key: "20",
            icon: <UploadOutlined />,
            label: "nav 20",
          },
          {
            key: "21",
            icon: <UploadOutlined />,
            label: "nav 21",
          },
          {
            key: "22",
            icon: <UploadOutlined />,
            label: "nav 22",
          },
          {
            key: "23",
            icon: <UploadOutlined />,
            label: "nav 23",
          },
          {
            key: "24",
            icon: <UploadOutlined />,
            label: "nav 24",
          },
          {
            key: "25",
            icon: <UploadOutlined />,
            label: "nav 25",
          },
          {
            key: "26",
            icon: <UploadOutlined />,
            label: "nav 26",
          },
          {
            key: "27",
            icon: <UploadOutlined />,
            label: "nav 28",
          },
          {
            key: "29",
            icon: <UploadOutlined />,
            label: "nav 29",
          },
          {
            key: "30",
            icon: <UploadOutlined />,
            label: "nav 30",
          },
          {
            key: "31",
            icon: <UploadOutlined />,
            label: "nav 31",
          },
          {
            key: "32",
            icon: <UploadOutlined />,
            label: "nav 32",
          },
          {
            key: "33",
            icon: <UploadOutlined />,
            label: "nav 33",
          },
          {
            key: "34",
            icon: <UploadOutlined />,
            label: "nav 34",
          },
          {
            key: "35",
            icon: <UploadOutlined />,
            label: "nav 35",
          },
          {
            key: "36",
            icon: <UploadOutlined />,
            label: "nav 36",
          },
        ]}
      />
      <div className="demo-logo-vertical" style={{alignSelf: 'end', margin: "0 0 5px 5px",}}>
        <Button
          type="text"
          shape="circle"
          size={"large"}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            border: 0,
            // width: 40,
            // height: 35,
            fontSize: "10px",
          }}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
