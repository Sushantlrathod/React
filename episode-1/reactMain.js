//crate a element and render  it in the DOM tree with root element
// let heading1 = React.createElement("h1", {}, "Welcome To React Sushant!");
// let root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(heading1);

/**
 *
 * <div id="parent">
 * <div id="child">
 * <h1>
 * <\h1>
 * <\div>
 * <\div
 *
 */

let element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "First element")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
