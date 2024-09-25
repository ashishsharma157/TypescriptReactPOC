import React from "react";
import Todo from "../model/todo";
import TotoItems from "./TodoItem";
import classes from './Todos.module.css'
const Todos:React.FC<{items:Todo[];onRemoveTodo:(id: string)=>void}>=(props)=>{
return <ul className={classes.todos}>
    {
        props.items.map((item)=> ( 
            <TotoItems key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>
                ))
    }
</ul>

}

export default Todos;