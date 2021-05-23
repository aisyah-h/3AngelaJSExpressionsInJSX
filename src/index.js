import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = 8;

ReactDOM.render(
  <div>
    {/*3 ways to use variables in the html tag:
    all 3 give the same output
    */}
    {/*Method 1:*/}
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is: {Math.floor(Math.random() * 10)}.</p>

    {/*Method 2: using more than 1 set of curly braces*/}
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is: {Math.floor(Math.random() * 10)}.</p>

    {/*Method 3: Template Literal/String Interpolation 
    (avoid this though, just makes the code complicated)
    */}
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is: {Math.floor(Math.random() * 10)}.</p>
  </div>,
  document.getElementById("root")
);
