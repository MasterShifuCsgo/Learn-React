import React from 'react';

function clickMeButton(){
  console.log("hello Kaspar");
}


function App() {

  return (

    <div>
      <img onMouseOver={() => {console.log("gwaergawreweag")}}  src="https://picsum.photos/200/300" alt="meme"/>
      <br />
      <br />
      <button onClick={clickMeButton}>Click me</button>
    </div>

  )

}

export default App
