import React, { useContext } from "react";
import TotoItems from "./TodoItem";
import classes from './Todos.module.css'
import { TodosContext } from "../store/todos-context";
const Todos:React.FC=()=>{
    const context=useContext(TodosContext);
return <ul className={classes.todos}>
    {
        context.items.map((item)=> ( 
            <TotoItems key={item.id} text={item.text} onRemoveTodo={context.removeTodo.bind(null, item.id)}/>
                ))
    }
</ul>

}

export default Todos;