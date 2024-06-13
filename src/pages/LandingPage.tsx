import React from "react";
import { Card } from "antd";
import Hero from "../components/Hero";

const LandingPage: React.FC = () => {
  return (
    <>
      <Card bordered={false}>
        <Hero />
      </Card>
    </>
  );
};

export default LandingPage;
