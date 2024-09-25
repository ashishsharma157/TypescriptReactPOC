import React from 'react';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';
import './App.css';
import NewTodo from './components/NewTodo';

function App() {
  // const [todos, setTodos]=useState<Todo[]>([]);

  // const addTodoHandler=(text:string)=>{
  //     const newtodo=new Todo(text);
  //     setTodos((currState)=>{
  //       return currState.concat(newtodo);
  //     })
  // }
  // const removeTodoHandler=(id:string)=>{
  //   setTodos((prevTodos)=>{
  //     return prevTodos.filter(todo=>todo.id!==id);
  //   })
  // }
  return (
    <div>
      <TodosContextProvider>
      <NewTodo />
      <Todos/>
      </TodosContextProvider>
    </div>
  );
}

export default App;
