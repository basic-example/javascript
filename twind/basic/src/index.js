import { tw } from "twind";

const div = document.createElement("div");
div.innerHTML = `
  <p class="${tw`text(center 9xl hover:black blue-500)`}">welcome!</p>
`;
document.body.appendChild(div);
