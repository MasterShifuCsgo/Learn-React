import React from 'react';


function FromContainer(props){

  let dietaryRestrictionsInputs = [];
  for (const diet of props.dietRestrictions) {
    dietaryRestrictionsInputs.push(
      <label key={diet}>
        <input          
          type='checkbox'
          name="dietaryRestrictions"
          checked={props.data.dietaryRestrictions.includes(diet)}
          value={diet}
          onChange={props.handleChange}></input>
        {diet}
      </label>
    )
  }

  return(
    <div>
        <form onSubmit={props.handleSubmit}>
          <div>
            <label>First Name
              <input name="firstName" value={props.data.firstName} onChange={props.handleChange}></input>
            </label>
            <br></br>
            <label>Last Name
              <input name="lastName" value={props.data.lastName} onChange={props.handleChange}></input>
            </label>
            <br></br>
            <label>Age
              <input name="age" type='number' value={props.data.age} onChange={props.handleChange}></input>
            </label>
            <br></br>
            <label>
              <input name="gender" type='radio' value={"Male"} onChange={props.handleChange}></input>
              Male
            </label>
            <br></br>
            <label>
              <input name="gender" type='radio' value={"Female"} onChange={props.handleChange}></input>
              Female
            </label>
            <br></br>
            <label>
              <select value={props.data.location} name="location" onChange={props.handleChange}>
                <option value="Paris">Paris</option>
                <option value="London">London</option>
                <option value="Tallinn">Tallinn</option>
              </select>
            </label>
            <br></br>
       

            <label>
              <div style={{display: 'flex', flexDirection: "column"}}>
              dietaryRestrictions
              {dietaryRestrictionsInputs}
              </div>
            </label>

            <button>Submit</button>

          </div>
        </form>

        
      </div>
  )

}

export default FromContainer