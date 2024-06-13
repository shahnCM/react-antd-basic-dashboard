import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todosk"
  );
  return response.data;
});

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (newTodo: Todo) => {
    try {
      const response = await axios.post("/api/todos", newTodo);
      return response.data;
    } catch (error) {
      return newTodo;
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/addTodo",
  async (updatedTodo: Todo) => {
    try {
      const response = await axios.post("/api/todos/update", updatedTodo);
      return response.data;
    } catch (error) {
      return updatedTodo;
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch todos";
      })
      .addCase(addTodo.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add todo";
      })
      .addCase(updateTodo.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        index !== 1 ? null : (state.todos[index] = action.payload);

        state.todos.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update todo";
      });
  },
});

export default todoSlice.reducer;
