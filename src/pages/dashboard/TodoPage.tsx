import React from "react";
import { Col, Row } from "antd";
import TodoForm from "../../components/Todo/TodoForm";
import TodoList from "../../components/Todo/TodoList";

const TodoPage: React.FC = () => {
  return (
    <>
      <h1>Todo with Redux Tool Kit</h1>

      <Row gutter={[8,8]}>
        <Col xl={12}>
          <div>
            <h3 style={{paddingBottom: 30}}>Todo Form</h3>
            <TodoForm />
          </div>
        </Col>
        <Col xl={12}>
          <div >
            <h3 style={{paddingBottom: 30}}>Todo List</h3>
            <TodoList />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TodoPage;
