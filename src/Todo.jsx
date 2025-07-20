import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
  const [todos, setTodos] = useState([{task:"Sample Task",id:uuidv4(),isDone:false}]);
  const [newtodo, setNewtodo] = useState("");

  const updateTodovalue = (event) => {
    setNewtodo(event.target.value);
  };

  const addNewTask = () => {
    
      console.log("Task is added");
      setTodos([...todos, {task:newtodo,id:uuidv4(),isDone:false}]);
      setNewtodo(""); // Clear input
    
  };

  let  deleteTodo=(id)=>{
      setTodos(todos.filter((todo)=>todo.id!=id));
    }
  let UpperCaseAll=()=>{
   setTodos( todos.map(todo=>{
      return {...todo,
       task:todo.task.toUpperCase()
    }
  }));
   };

const upperCaseOne = (id) => {
  setTodos(
    todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone :true };
      } else {
        return todo; // Return the original todo unchanged
      }
    })
  );
};

  return (
    <div>
      <input
        placeholder="Add a Task"
        value={newtodo}
        onChange={updateTodovalue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
    <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
     &nbsp; &nbsp; &nbsp;
    <button  onClick={()=>deleteTodo(todo.id)}>Delete</button>
    &nbsp;&nbsp;&nbsp;
     <button onClick={()=>upperCaseOne(todo.id)}>Uppercase</button>
</li>
        ))}
      </ul>
<button onClick={UpperCaseAll}>UpperCase All</button>
    </div>
  );
}
