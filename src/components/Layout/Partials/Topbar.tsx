import React from "react";
import { Layout } from "antd";
import AuthenticatedTopbarMenu from "./AuthenticatedTopbarMenu";
import { useMatch } from "react-router-dom";
import UnauthenticatedTopbarMenu from "./UnauthenticatedTopbarMenu";

const { Header } = Layout;

const Topbar: React.FC = () => {
  const match = useMatch("/dashboard/*");
  return (
    <Header
      style={{
        padding: 0,
        background: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "8px 8px 0 8px",
        borderRadius: "8px",
        maxWidth: "100%",
      }}
    >
      <div
        className="header-start"
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginLeft: "22px",
        }}
      >
        <img src="/images/react.svg" alt="" style={{ maxWidth: "3em" }} />
        <h4>React Template</h4>
      </div>
      {match ? <AuthenticatedTopbarMenu /> : <UnauthenticatedTopbarMenu />}
    </Header>
  );
};

export default Topbar;
