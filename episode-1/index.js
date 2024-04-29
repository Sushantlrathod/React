let root = document.getElementById("root");

let heading_1 = document.createElement("h1");
heading_1.textContent = "Welcome to my website!";
root.appendChild(heading_1);
//creating a paragraph element and adding it to the DOM tree
let para = document.createElement("p");
para.setAttribute("class", "my-paragraph");
para.textContent = "This is a paragraph with some text in it";
root.appendChild(para);

//creating an unordered list <ul> and adding list items to it<li>
let ulist = document.createElement("ul");
for (let i = 0; i < 5; i++) {
  //create li elements dynamically using createElement method
  let li = document.createElement("li");
  li.textContent = `List item number ${i + 1}`;
  ulist.appendChild(li);
}
root.appendChild(ulist);

//adding event listener for clicking on the paragraph
para.addEventListener("click", function () {
  alert("You clicked on the paragraph");
});

//accessing attributes of HTML elements
console.log(para.getAttribute("class"));

//changing attribute values
para.setAttribute("style", "color:red");

//manipulating innerHTML property
let div = document.createElement("div");
div.innerHTML = "<span>Hello</span><span>World</span>";
root.appendChild(div);

// //using querySelector to select specific elements
// let spans = document.querySelectorAll("div span");
// spans[0].textContent = "Hi";
// spans[1].textContent = "there";

//using closest() method to find ancestor elements
let button = document.createElement("button");
button.setAttribute("style", "color:red ;width:10%;height:8%;");
button.setAttribute("id", "button");
button.innerHTML = "change Class";
root.appendChild(button);

let btn = document.getElementById("button");
btn.onclick = function () {
  if (para.style.color == "red") {
    para.setAttribute("style", "color:green");
  } else {
    para.setAttribute("style", "color:red");
  }
  console.log(btn.closest("p"));
};

/*
Adding a script tag dynamically
let script = document.createElement("script");
script.src="https://code.jquery.com/jquery-3.6.0.min.js";
document.body.appendChild(script);
*/

//creating and adding form controls
let form = document.createElement("form");
form.method = "post";
form.action = "/submit_data";

let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Your Name";
nameInput.name = "username";

let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Your Email";
emailInput.name = "useremail";

let submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitButton);

document.body.appendChild(form);
