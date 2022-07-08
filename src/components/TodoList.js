import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Todo from "./Todo";
import "../App.css";

const TodoList = () => {
  const { tasks,EditItem,removeTask} = useContext(TaskListContext);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Todo
              task={task}
              EditItem={EditItem}
              removeTask={removeTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
