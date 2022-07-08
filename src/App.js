import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import TaskListContextProvider from "./context/TaskListContext";
function App() {
  return (
    <TaskListContextProvider>
      <div>
        <header>
           <h1>Task Manager</h1>
        </header>
        <Form/>
        <TodoList />
      </div>
    </TaskListContextProvider>
  );
}

export default App;
