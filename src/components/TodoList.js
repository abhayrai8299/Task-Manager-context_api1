import React from "react";
import Todo from "./Todo";
import "../App.css";

const TodoList = ({ todoitems,text,settext, setactive }) => {
  return (
    <div>
      <ul>
        {todoitems.map((items) => (
          <Todo
            todoitems={items}
            settext={settext}
            text={text}
            setactive={setactive}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
