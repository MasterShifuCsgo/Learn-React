import React from "react"
import './css/TodoItem.css'


function TodoItem(props) {
    return(
      <div className="todo-item">
          <input type="checkbox" checked={props.completed} onChange={() => props.handleChange(props.id)}></input>  
        <p>{props.desc}</p>        
      </div>
    )
}

export default TodoItem