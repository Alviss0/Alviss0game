import { decrmentLifes } from "./Lifes/decrementLifes.js";

function createTimer(time) {
  console.log("timer");
  setTimeout(() => {
    decrmentLifes();
    location.reload();
  }, +time * 1000);
}

export { createTimer };
