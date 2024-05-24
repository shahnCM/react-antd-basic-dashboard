import React from "react";
import { Layout } from "antd";
import AuthenticatedTopbarMenu from "../Authenticated/AuthenticatedTopbarMenu";
import { useMatch,  } from "react-router-dom";

const { Header } = Layout;

const Topbar: React.FC = () => {
  const match = useMatch("/dashboard/*");
  return (
    <Header
      style={{
        padding: 0,
        background: "#fff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        margin: '15px 15px 0 15px',
        borderRadius: '8px'
      }}
    >
      { match ? <AuthenticatedTopbarMenu/> : <div style={{marginRight: "20px"}}>Sample Menu</div>}
    </Header>
  );
};

export default Topbar;
