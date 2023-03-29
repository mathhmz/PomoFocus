import {intervalId, menu} from "./options.js"
import * as util from "./utils.js"
import { sounds } from "./sounds.js"



export const timer = {
    minutes: document.querySelector(".heroMinutes"),
    seconds: document.querySelector(".heroSeconds"),

    handleSetTimer(){
        let minutesSettings = Number(prompt("Quantos minutos deseja no timer?"))
        
        if(isNaN(minutesSettings) || minutesSettings === 0){
            alert("Por favor digite somente números!")
            return
        }
        util.paddedDisplayTimer(minutesSettings,)        
    },

    updateTimer(){
        let minutesSettings = Number(timer.minutes.innerText)
        let secondsSettings = Number(timer.seconds.innerText)

        if(minutesSettings === 0 && secondsSettings ===0){
            sounds.timerUpAudio()
            menu.toggleSetStop()
            return;
        }

        if (secondsSettings === 0) {
            minutesSettings--;
            secondsSettings = 59;
          } else {
            secondsSettings--;
          }
          
          util.paddedDisplayTimer(minutesSettings, secondsSettings)
        
    },
}