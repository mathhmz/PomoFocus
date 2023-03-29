export  const sounds = {

pressAudio:   new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"),
timerUp:   new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"),
    pressedButtonAudio(){
            this.pressAudio.play()
        },

    timerUpAudio(){
            this.timerUp.play()
        }

}

