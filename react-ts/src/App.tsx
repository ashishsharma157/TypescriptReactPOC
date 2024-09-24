import React, {useState} from 'react';
import Todos from './components/Todos';
import Todo from './model/todo';

import './App.css';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos]=useState<Todo[]>([]);

  const addTodoHandler=(text:string)=>{
      const newtodo=new Todo(text);
      setTodos((currState)=>{
        return currState.concat(newtodo);
      })
  }
  return (
    <div>
      <NewTodo onAddToDo={addTodoHandler}/>
      <Todos items={todos }/>
    </div>
  );
}

export default App;
