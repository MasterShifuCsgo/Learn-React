import React from 'react';
import {createRoot} from 'react-dom/client';

function MyInfo(){
  return (
    <div>
      <h1>Kaspar Bergert</h1>
      <p>I will have a C1 English exam in 3 days</p>
      <ul>
        <li>Finland</li>
        <li>Germany</li>
        <li>Switzerland</li>
      </ul>
    </div>
  )
}


const root = createRoot(document.getElementById('root'));

root.render(<MyInfo/>);