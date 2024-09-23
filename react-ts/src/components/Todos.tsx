import React from "react";
import Todo from "../model/todo";
import TotoItems from "./TodoItem";
const Todos:React.FC<{items:Todo[]}>=(props)=>{
return <ul>
    {
        props.items.map((item)=> ( 
            <TotoItems key={item.id} text={item.text}/>
                ))
    }
</ul>

}

export default Todos;