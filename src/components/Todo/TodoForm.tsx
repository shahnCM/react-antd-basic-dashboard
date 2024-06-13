import React from "react";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  LoginOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addTodo } from "../../slices/todoSlice";

const TodoForm: React.FC = () => {
  const borderRadiusVal = "8px";
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      userid: "",
      title: "",
      completed: false,
    },
    validationSchema: Yup.object({
      userid: Yup.number().required("userid is required"),
      title: Yup.string().required("title is required").max(11),
      completed: Yup.bool(),
    }),
    onSubmit: async (values, { setErrors }) => {
      if (values.completed) {
        values.completed.toString() == "true"
          ? (values.completed = true)
          : (values.completed = false);
      }
      try {
        // const response = await fakeApiTodo(values);
        const response = dispatch(
          addTodo({
            id: Number(values.userid),
            title: values.title,
            completed: values.completed,
          })
        ).unwrap();

        // Handle successful todo (e.g., navigate to dashboard)
        console.log("Todo successful:", response);
      } catch (error: any) {
        if (error.response && error.response.errors) {
          // Assuming the API response contains an errors object with field-specific errors
          let formattedErrors: { [key: string]: string } = {};
          for (let obj of error.response.errors) {
            formattedErrors[obj.field] = obj.msg;
          }
          setErrors(formattedErrors);
        } else {
          // Handle generic error
          setErrors({ userid: "Todo failed. Please try again." });
        }
      }
    },
  });

  return (
    <Form
      name="todo_form"
      className="todo-form"
      initialValues={{ remember: false }}
      onFinish={formik.handleSubmit}
      style={{ maxWidth: "400px" }}
    >
      <Form.Item
        hasFeedback
        validateStatus={
          formik.touched.userid ? formik.errors.userid ? "error" : "success" : ""
        }
        help={
          formik.touched.userid && formik.errors.userid
            ? formik.errors.userid
            : ""
        }
      >
        <Input
          name="userid"
          prefix={<UserOutlined style={{ marginRight: 10 }} />}
          placeholder="userid"
          style={{ borderRadius: borderRadiusVal }}
          size="large"
          value={formik.values.userid}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        validateStatus={
          formik.touched.title ? formik.errors.title ? "error" : "success" : ""
        }
        help={
          formik.touched.title && formik.errors.title ? formik.errors.title : ""
        }
      >
        <Input
          name="title"
          prefix={<LockOutlined style={{ marginRight: 10 }} />}
          placeholder="title"
          style={{ borderRadius: borderRadiusVal }}
          size="large"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        validateStatus={
          formik.touched.completed ? formik.errors.completed ? "error" : "success" : ""
        }
        help={
          formik.touched.completed && formik.errors.completed
            ? formik.errors.completed
            : ""
        }
      >
        <Input
          name="completed"
          prefix={
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              style={{ marginRight: 10 }}
            />
          }
          placeholder="completed"
          style={{ borderRadius: borderRadiusVal }}
          size="large"
          value={formik.values.completed.toString()}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item>
        <Button
          size={"large"}
          type="default"
          htmlType="submit"
          className="todo-form-button"
          style={{ float: "right", borderRadius: borderRadiusVal }}
        >
          <LoginOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
};

// Simulated API request function
const fakeApiTodo = (values: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        typeof values.userid !== "number" ||
        values.title === "test task" ||
        typeof values.completed !== "boolean"
      ) {
        resolve({ data: null, message: "Todo successful" });
      } else {
        reject({
          response: {
            errors: [
              {
                msg: "Invalid UserId",
                field: "userid",
                value: values.userid,
              },
              {
                msg: "Invalid Title",
                field: "title",
                value: values.title,
              },
              {
                msg: "Invalid Status",
                field: "completed",
                value: values.completed,
              },
            ],
          },
        });
      }
    }, 1000);
  });
};

export default TodoForm;
