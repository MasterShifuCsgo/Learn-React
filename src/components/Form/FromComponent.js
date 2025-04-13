import React from 'react';
import FromContainer from './FromContainer'

class FromComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      location: "",
      dietaryRestrictions: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event) {
    this.setState((prev) => {
      const { name, value, type, checked } = event.target;

      if (type === "checkbox" && name === "dietaryRestrictions" ) {
        const list = checked 
        ? [...prev.dietaryRestrictions, value] 
        : prev.dietaryRestrictions.filter(v => v !== value);
        return { [name]: list }
      } 
            
      if (type === "checkbox") { return { [name]: checked } }

      return { [name]: value }
    }
    )
  }


  handleSubmit(event) {
    event.preventDefault();

    let string = "";
    for (const [key, value] of Object.entries(this.state)) {
      string += `${key}: ${value}\n`
    }

    alert(string)
  }

  render() {
    const dietaryRestrictions = [
      "Vegan",
      "Vegetarian",
      "Pescatarian",
      "Gluten-Free",
      "Dairy-Free",
      "Nut-Free",
      "Halal",
      "Kosher",
      "Low-Carb",
      "Low-Sodium",
      "Paleo",
      "Keto",
      "Whole30",
      "FODMAP",
      "No Pork",
      "No Beef",
    ];

    return (
      <FromContainer 
      dietRestrictions={dietaryRestrictions} 
      handleSubmit={this.handleSubmit} 
      handleChange={this.handleChange} 
      data={this.state}></FromContainer>
    )
  }
}

export default FromComponent