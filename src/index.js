import React from "react"; // enables jsx.
import { createRoot } from "react-dom/client";

function MyApp(){
  return React.createElement('ul', null, [
    React.createElement('li', null, "TextContent"),
    React.createElement('li', null, "TextContent"),
    React.createElement('li', null, "TextContenat"),
  ]);
}

//jsx --
//  a javscript file
//  that is suited for react syntax.

const root = createRoot(document.getElementById("root"));

let ul = MyApp();

root.render(ul);

