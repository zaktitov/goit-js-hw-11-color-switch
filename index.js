import { colors } from "./js/refs.js";
import { domElements } from "./js/refs.js";
import { randomIntegerFromInterval } from "./js/refs.js";

const { start, stop, body } = domElements;
let changeColor = null;

start.addEventListener("click", () => {
  start.setAttribute("disabled", "true");
  changeColor = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, 5)];
    body.style.backgroundColor = randomColor;
    console.log("Process has been stared");
  }, 800);
});

stop.addEventListener("click", () => {
  start.removeAttribute("disabled");
  clearInterval(changeColor);
  console.log(`Process has been stopped`);
});
