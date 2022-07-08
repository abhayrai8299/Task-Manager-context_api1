import React,{ useContext} from "react";
import { TaskListContext } from "../context/TaskListContext";
const Form = () => {
  const {addTask,title,setTitle,editItem,editTask,active,setactive} = useContext(TaskListContext);


  const changeHandler = (e) => {
     setTitle(e.target.value)
  
  };
  const submitHandler = (e) => {
    
    e.preventDefault();
    if(title==="")
    {
      alert("Please add a Todo")
    }
    else
    {
    addTask(title);
    setTitle("");
    editTask(title,editItem.id,editItem.date);
    setactive(false)
    
    }

  };
  return (
    <form onSubmit={submitHandler}>
      <input onChange={changeHandler} type="text" value={title} />
      <button >{active===false?"Add Todo":"Edit Todo"}</button>
    </form>
  );
};
export default Form;
