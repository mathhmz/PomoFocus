export const menu = {
    play: document.querySelector(".heroPlay"),
    pause: document.querySelector(".heroPause"),
    stop: document.querySelector(".heroStop"),
    set: document.querySelector(".heroSet"),
    musicOn: document.querySelector(".soundOn"),
    musicOff: document.querySelector(".soundOff"),


    onClickTogglePlayAndPause(){
        menu.play.classList.toggle("hide")
        menu.pause.classList.toggle("hide")
    },
    onClickToggleSetAndStop(){
        menu.set.classList.toggle("hide")
        menu.stop.classList.toggle("hide")
    },
    onClickToggleMusic(){
        menu.musicOff.classList.toggle("hide")
        menu.musicOn.classList.toggle("hide")
    }

    

}