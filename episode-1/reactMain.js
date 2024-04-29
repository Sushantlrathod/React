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

// let element = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "First element")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

/**
 *
 * <div id="parent">
 * <div id="child-1">
 * <h1>
 * <\h1>
 * <\div>
 * <div id="child-2">
 * <h1>
 * <\h1>
 * * <h1>
 * <\h1>
 * <\div>
 * <\div
 *
 */

const element2 = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child-1" },
    React.createElement("h1", {}, "Child Div 1 h1 ")
  ),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "Child Div 2 h1"),
    React.createElement("h1", {}, "child Div2 h1"),
  ]),
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(element2);
 // all inside root will be replaced by element2 rest all are as it is.
 complicated