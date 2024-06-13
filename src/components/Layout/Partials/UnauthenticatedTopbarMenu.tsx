import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const UnauthenticatedTopbarMenu: React.FC = () => {
  const nav = useNavigate();
  return (
    <Menu
      className="UnauthenticatedTopbarMenu"
      mode="horizontal"
      items={[
        {
          label: "Home",
          key: "home",
          icon: <HomeOutlined />,
          onClick: () => nav('/')
        },
        {
          label: "About",
          key: "about",
          icon: <UserOutlined />,
        },
        {
          label: "Contact",
          key: "contact",
          icon: <UserOutlined />,
        },
        {
          label: "Let's Start",
          key: "signin",
          icon: <LoginOutlined />,
          onClick: () => nav('/auth')
        },
      ]}
      style={{
        background: "transparent",
        border: "none",
        marginRight: "20px",
        lineHeight: "64px",
        flex: 1,
        minWidth: 0,
        justifyContent: "flex-end",
      }}
    />
  );
};

export default UnauthenticatedTopbarMenu;
