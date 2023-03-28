import {timer} from "./timer.js"
import {menu} from "./options.js"


// Define uma função para alternar a visibilidade de dois elementos
export const toggleVisibility = (element1, element2) => {
    element1.classList.toggle("hide");
    element2.classList.toggle("hide");
  };

export const paddedDisplayTimer = (minutes,seconds) => {
  timer.minutes.innerText = minutes.toString().padStart(2, '0');
  timer.seconds.innerText = seconds.toString().padStart(2, '0');
}

export const checkHide = (button) => {
  if (button.classList.contains("hide")){
    return Boolean
  }
  else{
    return false
  }
}
