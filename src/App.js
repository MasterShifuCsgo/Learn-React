import React from "react"



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false,
    }
  
    this.logUserIn = this.logUserIn.bind(this);

  }

  logUserIn(){
    this.setState((prevState) => {
      let newState = { loggedIn : !prevState.loggedIn};
      return newState;
    })
  }

  render(){ 

    const {loggedIn} = this.state;
    
    const displayText = loggedIn ? "Logged in": "Logged out";
    const displayButtonText = loggedIn ? "Log out" : "Log in";
    return (
      <div>      
        <h1> {displayText} </h1>
        <button onClick={this.logUserIn}>
        {displayButtonText}
        </button>
      </div>  
    )

  } 

}

export default App