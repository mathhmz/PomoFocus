// Define uma função para alternar a visibilidade de dois elementos
const toggleVisibility = (element1, element2) => {
    element1.classList.toggle("hide");
    element2.classList.toggle("hide");
  };


// Define um objeto que representa o menu e suas propriedades
export const menu = {
    play: document.querySelector(".heroPlay"),

    pause: document.querySelector(".heroPause"),

    stop: document.querySelector(".heroStop"),

    set: document.querySelector(".heroSet"),

    musicOn: document.querySelector(".soundOn"),

    musicOff: document.querySelector(".soundOff"),

    
// Define métodos para alternar a visibilidade dos elementos
     togglePlayPause(){
        toggleVisibility(menu.play, menu.pause);
      },
      
     toggleSetStop(){
        toggleVisibility(menu.set, menu.stop);
      },
      
     toggleMusic(){
        toggleVisibility(menu.musicOff, menu.musicOn); 
      },


      // Adiciona os eventos de clique aos elementos do menu
      init() {
        this.play.addEventListener("click", this.togglePlayPause.bind(this));
        this.pause.addEventListener("click", this.togglePlayPause.bind(this));
        this.set.addEventListener("click", this.toggleSetStop.bind(this));
        this.stop.addEventListener("click", this.toggleSetStop.bind(this));
        this.musicOn.addEventListener("click", this.toggleMusic.bind(this));
        this.musicOff.addEventListener("click", this.toggleMusic.bind(this));
      },    

}
