const container = document.querySelector("#container");
const p = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");

p.textContent = "Hey I'm Red!";
p.style.cssText = "color: red";
h3.style.cssText = "color: blue";
h3.textContent = "Hey I'm a blue H3!";
div.style.backgroundColor = "pink";
div.style.borderColor = "black";
div.style.borderStyle = "solid";
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);