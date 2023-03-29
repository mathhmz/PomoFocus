import * as util from "./utils.js"
import {timer} from "./timer.js"
import {player} from "./player.js";
import {sounds} from "./sounds.js";


// Define uma variável global para armazenar o ID do intervalo
export let intervalId;

// Define um objeto que representa o menu e suas propriedades
export const menu = {
    play: document.querySelector(".heroPlay"),
    pause: document.querySelector(".heroPause"),
    stop: document.querySelector(".heroSet"),
    set: document.querySelector(".heroStop"),
    musicOn: document.querySelector(".soundOn"),
    musicOff: document.querySelector(".soundOff"),

    
// Define métodos para alternar a visibilidade dos elementos
        togglePlayPause() {       
            sounds.pressedButtonAudio()  
            util.toggleVisibility(this.play, this.pause);
            util.toggleVisibility(this.set, this.stop);

            if(util.checkHide(this.play)){
                intervalId = setInterval(timer.updateTimer.bind(this), 1000);

            }else {
                clearInterval(intervalId);
              }
            
            
            
        },
        toggleSetStop() {
            sounds.pressedButtonAudio()  
            util.toggleVisibility(this.set, this.stop);
            util.toggleVisibility(this.play, this.pause);

            timer.minutes.innerText = "25"
            timer.seconds.innerText = "00"

            clearInterval(intervalId);

            
        },
        toggleMusic() {
            sounds.pressedButtonAudio()  
            util.toggleVisibility(this.musicOff, this.musicOn);

            if(util.checkHide(this.musicOn)){
                if(player.isPlayerReady()){
                    player.unmuteVideo()
                }
                else{
                    player.onYouTubeIframeAPIReady()
                }
                
            }
            else{
                player.muteVideo()
            }
        },

        // Adiciona os eventos de clique aos elementos do menu
        init() {
            this.play.addEventListener("click", this.togglePlayPause.bind(this));
            this.pause.addEventListener("click", this.togglePlayPause.bind(this));
            this.stop.addEventListener("click", this.toggleSetStop.bind(this));
            this.set.addEventListener("click",timer.handleSetTimer.bind(this))
            this.musicOn.addEventListener("click", this.toggleMusic.bind(this));
            this.musicOff.addEventListener("click", this.toggleMusic.bind(this));
        },
};


