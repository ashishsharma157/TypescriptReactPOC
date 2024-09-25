import React, { useState }  from "react";
import Todo from "../model/todo";
type TodoContextObj={items:Todo[], addTodo:(text:string)=>void, removeTodo:(id:string)=>void}
export const TodosContext=React.createContext<TodoContextObj>({
    items:[],
    addTodo:()=>{},
    removeTodo: (id:string)=>{}
});


const TodosContextProvider: React.FC=(props)=>{
    
    const [todos, setTodos]=useState<Todo[]>([]);

    const addTodoHandler=(text:string)=>{
        const newtodo=new Todo(text);
        setTodos((currState)=>{
          return currState.concat(newtodo);
        })
    }
    const removeTodoHandler=(id:string)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo=>todo.id!==id);
      })
    }
    const contextValue: TodoContextObj={
        items:todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
};

export default TodosContextProvider