// src/views/ContentView.tsx
import React from "react";
// import CommonLayout from "../components/Layout/Common/CommonLayout";
import { Button, Typography, Layout, Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const ContentPage: React.FC = () => {
  const nav = useNavigate()
  return (
    // <CommonLayout>
      <Content style={{ padding: "15px", textAlign: "center" }}>
        <Card style={{ marginTop: "0px", width: "100%", height: "100%" }}>
          <Title>Discover Amazing Features</Title>
          <Paragraph>
            Explore the awesome functionalities of our application.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            style={{ border: 0, borderRadius: "0px" }}
            onClick={() => nav('/dashboard')}
          >
            Get Started
          </Button>
        </Card>
      </Content>
    // </CommonLayout>
  );
};

export default ContentPage;
