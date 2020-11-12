import React from "react";
import ReactDOM from "react-dom";

const name = "Rob";
const surname = "Bennett";
const number = "8";

// If you want to render JS within the HTML Element, enclose it in {}
// You can write any javasript expression within it
// You cannot write JS statements (i.e. if statements)
// An expression will end up equalling something. A statement is something the PC needs to work on
// https://www.youtube.com/watch?v=WVyCrI1cHi8&list=PL-xu4i_QDSxcoDNeh8rx5-pHCCTOg0XsI
ReactDOM.render(
  <div>
    <h1>
      Hello {name} {surname}!
    </h1>
    <h1>Hello {name + " " + surname}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);

// Template Literals = String Intabulation
// Here you inject strings into a set of JS
// {
//   ("${name} ${surname}");
// }
