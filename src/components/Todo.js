import React,{useContext} from 'react';
import { TaskListContext } from '../context/TaskListContext'

const Todo = ({task}) => {
  const {removeTask,findItem}=useContext(TaskListContext)
  return (
    <div>
      <li>{task.title} </li>
      <button onClick={() =>findItem(task.id)}>Edit</button>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
};

export default Todo;
