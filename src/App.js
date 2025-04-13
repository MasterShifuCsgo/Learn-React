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

  
  static getDerivedStateFromProps(){
    // return the new updated state based on props.
    // only used to set its own state based upon the sent props.
    // do not use this.
  }

  getSnapshotBeforeUpdate(){
    // captures dom state.  
  }

  componentDidMount(){
      // runs when render is first called
      // GET the data i need to correctly display
  }

  shouldComponentUpdate(nextProps, nextState){
    // runs when react thinks it should update the component, even though nothing changed about it.
    // this is used to optimize the website. Tells react whether is even important to update the component.

    // return true if you want to update, false when you dont.
  }

  componentWillUnmount(){
    // what happens when the component unmounts.
    // used to clean up the component when unmounting.
    // for example, remove event listeners.


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