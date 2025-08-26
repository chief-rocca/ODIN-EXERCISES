const container = document.querySelector("#container");
const para = document.createElement("p");  
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");

para.textContent = "Hey, I'm red";
para.setAttribute("style", "color : red");

h3.textContent = "Hello I'm a blue h3";
h3.setAttribute("style", "color : blue");

h1.textContent = "I'm in a div";

p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p);
div.setAttribute("style", "border: 1px solid black; background-color : pink")

container.appendChild(para);
container.appendChild(h3);
container.appendChild(div);