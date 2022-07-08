import React from "react";
import { useDispatch } from "react-redux";
import { editTodo,addTodo } from "../redux/todoSlice";

const Form = ({ text, settext, active, setactive,validate,setvalidate }) => {
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setvalidate(true);
    settext(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if(validate===false)          
    {
      alert("Please add a Todo")
    }
    else if(active.status)
    {
      dispatch(
        editTodo({
          text:text,id:active.id  
        })  
      )
    }
    else{
    dispatch(
      addTodo({
        text: text,
      }));} 
    setactive({id:"",status:false});
    settext("");
    setvalidate(false)
  };
  return (
    <form>
      <input onChange={changeHandler} type="text" value={text} />
      <button onClick={submitHandler}>
        {!active.status? "Add Todo"  : "Edit Todo"}
      </button>
    </form>
  );
};
export default Form;
