import React, { useEffect } from "react";
import { Layout } from "antd";
import AuthenticatedTopbarMenu from "../Authenticated/TopbarMenu";
import { useLocation, useMatch,  } from "react-router-dom";

const { Header } = Layout;

const Topbar: React.FC = () => {
  const location = useLocation();
  const match = useMatch("/dashboard/*");
  console.log(location.pathname)
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
