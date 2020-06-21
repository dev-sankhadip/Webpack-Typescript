import _ from "lodash";
import "./style.css";
import { print } from "./print";

function component() {
  const element: HTMLDivElement = document.createElement("div");

  const btn: HTMLButtonElement = document.createElement("button");

  btn.innerHTML = "click";
  btn.onclick = print;

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
