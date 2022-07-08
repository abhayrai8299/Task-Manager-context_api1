import React from "react";
import Todo from "./Todo";
import "../App.css";

const TodoList = ({ todoitems,settext, setactive }) => {
  return (
    <div>
      <ul>
        {todoitems.map((items) => (
          <Todo
            todoitems={items}
            settext={settext}
            setactive={setactive}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
