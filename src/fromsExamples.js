import React from "react"

class fromsExamples extends React.Component {
  
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isChecked: false,
      gender:"",
      favoriteColor: "green"
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
      <form onSubmit={this.handleSubmit}>
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

          <p>{this.state.firstName} {this.state.lastName}</p>
      <h1>you are a {this.state.gender}</h1>

      {/*
        formic is used to create froms in react. it makes it easier.
      */}

        <select value={this.state.favoriteColor} onChange={this.handleChange} name="favoriteColor">
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="red">red</option>
        </select>
        <h1>Your favorite color is {this.state.favoriteColor}</h1>

        <button>Submit</button>
      </form>

      </div>
    ) 
  }
}

