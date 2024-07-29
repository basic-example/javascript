let h1 = document.querySelector("h1");
let style1 = window.getComputedStyle(h1);

h1.textContent = `text-align: ${style1.getPropertyValue("text-align")}`;
