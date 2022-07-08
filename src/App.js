import React, { useState} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
function App() {
  const [text, settext] = useState("");
  const [active, setactive] = useState({id:"",status:false});
  const [validate, setvalidate] = useState(false);
  const todoitems = useSelector((state) =>state.todoReducer.todolist);        

  return (
    <div className="App">
      <header>
        <h1>Todo Manager</h1>
      </header>
      <Form
        text={text}                     
        settext={settext} 
        todoitems={todoitems}           //todoitems=Array Item Listing
        active={active}                 //active=states with id
        setactive={setactive} 
        validate={validate}
        setvalidate={setvalidate}          //setactive=states with id
      />
      <TodoList
        settext={settext}
        todoitems={todoitems}
        setactive={setactive}            //setactive=states with id
      />
    </div>
  );
}

export default App;
