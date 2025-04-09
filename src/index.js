import React from "react"; // enables jsx.
import { createRoot } from "react-dom/client";

//jsx --
//  a javscript file
//  that is suited for react syntax.

const root = createRoot(document.getElementById("root"));
  
let elementP = React.createElement('div', null, "HELLO KASPAR");
root.render(elementP);

