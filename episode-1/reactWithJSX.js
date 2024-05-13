import React from "react";
import ReactDOM from "react-dom";

let heading = React.createElement("h1", { id: "heading1" }, "hello js world");
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

//jsx
const headingjsx= <h2 id="jsxheading" className="colour">Hello JSX World</h2>;
root.render(headingjsx);