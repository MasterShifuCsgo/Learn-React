import React from "react"

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isChecked: false,
      gender:"male"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const {name, value, type, checked} = event.target

    if(type === "checkbox"){
      this.setState({
        [name]: checked
      })
    }else{
      this.setState({
        [name]: value
      })
    }


    
  }

  render() {

    return (
      <div>
      <form>
          <input 
          type='text' 
          name="firstName"
          value={this.state.firstName}
          placeholder="Type your name" 
          onChange={this.handleChange}/>
          
          <input 
          type='text' 
          name="lastName"
          value={this.state.lastName}
          placeholder="Type your name" 
          onChange={this.handleChange}/>

          <br></br>  
          <textarea value={"hello"} />

          <input type="checkbox" checked={this.state.isChecked} name="isChecked" onChange={this.handleChange}/>

          <h1>Radio Buttons</h1>
          <label>
          <input type="radio" name="gender" checked={this.state.gender === "male"} value={'male'} onChange={this.handleChange}/>Male
          </label>
          <label>
          <input type="radio" name="gender" checked={this.state.gender === "female"} value={"female"} onChange={this.handleChange}/>Female
          </label>

      </form>
      <p>{this.state.firstName} {this.state.lastName}</p>
      </div>
    ) 
  }
}


export default App