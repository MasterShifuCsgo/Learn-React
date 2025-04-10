import React from 'react';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn:true,
    }
  }

  isUserLoggedIn() {
    return this.state.isLoggedIn;
  }

  render(){
    return (<div>
      <h1>You are currently logged ({ this.isUserLoggedIn() ? "in": "out"})</h1>
    </div>)

  }
}

export default App
