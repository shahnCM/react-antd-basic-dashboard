import React from "react";
import { Avatar, Dropdown, Space, Typography } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const AuthenticatedTopbarMenu: React.FC = () => {
  const nav = useNavigate();
  return (
    <div style={{ marginRight: "20px" }}>
      <Dropdown
        trigger={["click"]}
        menu={{
          items: [
            {
              key: "profile",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "settings",
              icon: <SettingOutlined />,
              label: "Settings",
            },
            {
              key: "logout",
              icon: <LogoutOutlined />,
              label: "Logout",
              onClick: () => nav("/"),
            },
          ],
        }}
      >
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "flex-between",
            alignItems: "center",
          }}
        >
          <Text>Username</Text>
          <Avatar icon={<UserOutlined />} style={{ marginLeft: "15px" }} />
        </div>
      </Dropdown>
    </div>
  );
};

export default AuthenticatedTopbarMenu;
