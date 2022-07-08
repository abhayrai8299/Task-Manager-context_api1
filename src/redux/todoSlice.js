import { createSlice } from "@reduxjs/toolkit";

const initialState = { todolist: [] };
export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //Add
      const newItem = {
        id: Math.random() * 10000,
        title: action.payload.text,
      };
      state.todolist.push(newItem);
    },
    deleteTodo: (state, action) => {
      // Delete
      state.todolist = state.todolist.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editTodo: (state, action) => {
      // Edit
     if(action.payload.text==="")
     {
      alert("Please add a Todo")
     }
     else
     {
      const list = state.todolist.map((item) => {
        if (item.id === action.payload.id) {
          return { id: action.payload.id, title: action.payload.text };
        } else {
          return item;
        }
      });
      state.todolist = list;
    }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
