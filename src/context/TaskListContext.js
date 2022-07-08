import React, { createContext, useState, useEffect } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  const [title, setTitle] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [active, setactive] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: Math.random() }]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    console.log(item);
    setTitle(item.title);
    setactive(true);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        findItem,
        title,
        editTask,
        editItem,
        setTitle,
        active,
        setactive,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};
export default TaskListContextProvider;
