import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

const LogIn: React.FC = () => {
  const borderRadiusVal = "8px";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setErrors }) => {
      try {
        // Simulate an API request
        const response = await fakeApiLogin(values);

        // Handle successful login (e.g., navigate to dashboard)
        console.log("Login successful:", response);
      } catch (error: any) {
        if (error.response && error.response.data) {
          // Assuming the API response contains an errors object with field-specific errors
          setErrors(error.response.data.errors);
        } else {
          // Handle generic error
          setErrors({ email: "Login failed. Please try again." });
        }
      }
    },
  });

  return (
    <Form
      name="login_form"
      className="login-form"
      initialValues={{ remember: false }}
      onFinish={formik.handleSubmit}
      style={{ maxWidth: "400px", margin: "auto" }}
    >
      <Form.Item
        validateStatus={
          formik.touched.email && formik.errors.email ? "error" : ""
        }
        help={
          formik.touched.email && formik.errors.email ? formik.errors.email : ""
        }
      >
        <Input
          name="email"
          prefix={<UserOutlined style={{ marginRight: 10 }} />}
          placeholder="Email"
          style={{ borderRadius: borderRadiusVal }}
          size="large"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="filled"
        />
      </Form.Item>
      <Form.Item
        validateStatus={
          formik.touched.password && formik.errors.password ? "error" : ""
        }
        help={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : ""
        }
      >
        <Input.Password
          name="password"
          prefix={<LockOutlined style={{ marginRight: 10 }} />}
          placeholder="Password"
          style={{ borderRadius: borderRadiusVal }}
          size="large"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="filled"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="default"
          htmlType="submit"
          className="login-form-button"
          style={{ float: "right", borderRadius: borderRadiusVal }}
        >
          <LoginOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
};

// Simulated API request function
const fakeApiLogin = (values: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        values.email === "test@example.com" &&
        values.password === "password"
      ) {
        resolve({ message: "Login successful" });
      } else {
        reject({
          response: {
            data: {
              errors: {
                email: "Invalid email or password",
              },
            },
          },
        });
      }
    }, 1000);
  });
};

export default LogIn;
