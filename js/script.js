const container = document.querySelector("#container");
const p = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");

p.textContent = "Hey I'm Red!";
h1.textContent = "I'm in a div!";
p2.textContent = "Me too!";
p.style.cssText = "color: red";
h3.style.cssText = "color: blue";
h3.textContent = "Hey I'm a blue H3!";
div.style.cssText = "background-color: pink; border-style: solid";
div.appendChild(h1);
div.appendChild(p2);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});