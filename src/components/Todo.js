import React from "react";
import { editTodo, deleteTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const Todo = ({todoitems,text,settext,setactive }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(
      deleteTodo({
        id: id,
      }));};
  const editHandler = (item) => {
    setactive({status:true,id:item.id});
    settext(item.title);
    dispatch(editTodo({ item: item }));
  };
  return (
    <div>
      <li>{todoitems.title} </li>
      <button onClick={() => editHandler(todoitems)}>Edit</button>
      <button onClick={() => deleteHandler(todoitems.id)}>Delete</button>
    </div>
  );
};

export default Todo;
