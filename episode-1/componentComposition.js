import React from "react";
import ReactDOM from "react-dom";

//creating element
const heading = React.createElement(
  "h1",
  { id: "h1", className: "color" },
  "Hello React  World"
);
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//crateing element with jsx

const divTag = (
  <div id="div1" className="div-background-color">
    Hello Sushant
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(divTag);
//functional component
const FirstFuncCompo = () => {
  return <p className="p-color">This is a functional Component</p>;
};

const SecondCompo = () => (
  <div id="parent">
    <FirstFuncCompo />
    <di className="second-child">second Component</di>
  </div>
);
// root.render(<FirstFuncCompo />);
root.render(<SecondCompo />);
