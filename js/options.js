import * as util from "./utils.js"


// Define uma variável global para armazenar o ID do intervalo
let intervalId;

// Define um objeto que representa o menu e suas propriedades
export const menu = {
    minutes: document.querySelector(".heroMinutes"),
    seconds: document.querySelector(".heroSeconds"),
    play: document.querySelector(".heroPlay"),
    pause: document.querySelector(".heroPause"),
    stop: document.querySelector(".heroSet"),
    set: document.querySelector(".heroStop"),
    musicOn: document.querySelector(".soundOn"),
    musicOff: document.querySelector(".soundOff"),

    
// Define métodos para alternar a visibilidade dos elementos
        togglePlayPause() {
            util.toggleVisibility(this.play, this.pause);
            util.toggleVisibility(this.set, this.stop);

            if(this.play.classList.contains("hide")){
                intervalId = setInterval(this.updateTimer.bind(this), 1000);

            }else {
                clearInterval(intervalId);
              }
            
        },
        toggleSetStop() {
            util.toggleVisibility(this.set, this.stop);
            util.toggleVisibility(this.play, this.pause);
            clearInterval(intervalId);

            this.minutes.innerText = "25"
            this.seconds.innerText = "00"
            



        },
        toggleMusic() {
            util.toggleVisibility(this.musicOff, this.musicOn);
        },

        handleSetTimer(){
            let minutesSettings = Number(prompt("Quantos minutos deseja no timer?"))
            
            if(isNaN(minutesSettings)){
                alert("Por favor digite somente números!")
                return
            }
            this.minutes.innerText = minutesSettings

            return minutesSettings
            
        },

        updateTimer(){
            let minutesSettings = Number(this.minutes.innerText)
            let secondsSettings = Number(this.seconds.innerText)

            

            if(minutesSettings === 0 && secondsSettings ===0){
                clearInterval(intervalId);
                return;
            }

            if (secondsSettings === 0) {
                minutesSettings--;
                secondsSettings = 59;
              } else {
                secondsSettings--;
              }
              
              menu.minutes.innerText = minutesSettings.toString().padStart(2, '0');
              menu.seconds.innerText = secondsSettings.toString().padStart(2, '0');
            
        },


        // Adiciona os eventos de clique aos elementos do menu
        init() {
            this.play.addEventListener("click", this.togglePlayPause.bind(this));
            this.pause.addEventListener("click", this.togglePlayPause.bind(this));
            this.stop.addEventListener("click", this.toggleSetStop.bind(this));
            this.set.addEventListener("click", this.handleSetTimer.bind(this))
            this.musicOn.addEventListener("click", this.toggleMusic.bind(this));
            this.musicOff.addEventListener("click", this.toggleMusic.bind(this));
        },
};


