import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, SignatureOutlined } from "@ant-design/icons";

const RegistrationForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    // You can handle registration logic here, e.g., call an API endpoint
  };

  const borderRadiusVal = "8px";

  return (
    <Form
      name="registration_form"
      className="registration-form"
      initialValues={{ remember: false }}
      onFinish={onFinish}
      style={{ maxWidth: "400px", margin: "auto" }}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input
          prefix={<UserOutlined style={{ marginRight: 10 }} />}
          placeholder="Name"
          style={{ borderRadius: borderRadiusVal }}
          size="large"
          variant="filled"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input a valid email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined style={{ marginRight: 10 }} />}
          placeholder="Email"
          style={{ borderRadius: borderRadiusVal }}
          size="large"
          variant="filled"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined style={{ marginRight: 10 }} />}
          placeholder="Password"
          style={{ borderRadius: borderRadiusVal }}
          size="large"
          variant="filled"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="default"
          htmlType="submit"
          className="registration-form-button"
          style={{float: "right", borderRadius: borderRadiusVal }}
        >
          <SignatureOutlined/>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
