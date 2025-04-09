import React from 'react';
import '../src/style.css'

function App(){
  const FirstName = "Markus";
  const LastName = "Bergert";

  const styles = {
    color:"green",
    'background-color': "red",
    'font-size': '200px'
  };

  //syles can change given the javascript
  if(FirstName == "Markus"){
    styles['background-color'] = 'blue';
  }  
 

  //if you want to use inline css, then you have to make style use javascript object and it needs to be in javascript land
  return (
    <div>
    <p style={{color:"green", 'background-color': "red"}}>Hello {FirstName + " " + LastName}</p>
    or
    <p style={styles}>Hello {FirstName + " " + LastName}</p>
    </div>
  )
}

export default App