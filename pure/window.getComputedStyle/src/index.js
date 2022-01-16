let h1 = document.querySelector("h1");
let style1 = window.getComputedStyle(h1);
let style2 = getComputedStyle(h1, ":after");

h1.textContent = `text-align: ${style1.getPropertyValue("text-align")}`;

console.log(style1["content"]); // normal
console.log(style2["content"]); // " rocks!"
