import React from "react"

function MemeFrom(props) {
  return (  
    <div>
      <div >
        <input 
        placeholder="top text"
        name="topText" 
        onChange={props.handleChange}
        value={props.data.topText}></input>
        <input 
        placeholder="bottom text" 
        name="bottomText" 
        onChange={props.handleChange}
        value={props.data.bottomText}></input>
        <button onClick={props.handleSubmit}>Gen</button>
      </div>
    </div>
  )
}

export default MemeFrom