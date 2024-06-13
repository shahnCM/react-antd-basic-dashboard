import React, { useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { fetchTodos } from "../../slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { CheckCircleTwoTone, FrownTwoTone } from "@ant-design/icons";

const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todo
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ marginTop: -10, overflowY: "auto" }}>
      <div style={{ margin: 0, maxHeight: "40vh", paddingRight: 20 }}>
        {todos.map((todo) => (
          <div
            style={{
              padding: "3px 0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
            key={todo.id}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <small style={{ minWidth: 30 }}>{todo.id}</small>
              <>{todo.title}</>
            </div>
            <div>
              {todo.completed === true ? (
                <CheckCircleTwoTone twoToneColor="#52c41a" />
              ) : (
                <FrownTwoTone />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
