import React from "react"
import TodoItem from './components/TodoItem' 
import TodoItemList from './TodoItemList.js'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        todos: TodoItemList
     }
  }

  handleChange(changedItemId){
    this.setState(prevState => {
      const updatedState = prevState.todos.map((item) => {        
        return item.id === changedItemId 
          ? {...item, completed: !item.completed}
          : item;
      })
      return {todos: updatedState}
    });

  }

  render(){

    let todoItems = this.state.todos.map(obj => (
       <TodoItem 
       id={obj.id} 
       desc={obj.desc} 
       completed={obj.completed} 
       handleChange={ (changedItemId) => this.handleChange(changedItemId)}>        
       </TodoItem>
       ));

    return(
      <div>
        {todoItems}
      </div>
    )

  } 

}

export default App