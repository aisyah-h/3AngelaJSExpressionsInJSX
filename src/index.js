import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const lucky = 8;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is: {lucky}.</p>
  </div>,
  document.getElementById("root")
);
