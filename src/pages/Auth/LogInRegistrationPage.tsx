import React from "react";
import { Layout, Card, Row, Col } from "antd";
import LogIn from "../../components/Auth/Login";
import RegistrationForm from "../../components/Auth/Registration";

const { Content } = Layout;

const LogInRegistrationPage: React.FC = () => {
  return (
    <Content style={{ textAlign: "center", border: "none" }}>
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={24} md={24} lg={15}>
          <Card
            bordered={false}
            style={{ height: 684 }}
            cover={
              <img
                height={650}
                alt="example"
                src="/images/vite.svg"
                style={{
                  padding: "50px 20px 0 20px",
                  overflow: "hidden",
                  borderRadius: 8,
                }}
              />
            }
          ></Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={9}>
          <Row gutter={[8, 8]}>
            <Col xs={24}>
              <Card hoverable bordered={false} style={{}}>
                <h4 style={{ paddingBottom: "15px" }}>Log In</h4>
                <LogIn />
              </Card>
            </Col>
            <Col xs={24}>
              <Card hoverable bordered={false} style={{}}>
                <h4 style={{ paddingBottom: "15px" }}>Register</h4>
                <RegistrationForm />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default LogInRegistrationPage;
