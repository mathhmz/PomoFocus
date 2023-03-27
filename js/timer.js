export const timer = {
    minutes: document.querySelector(".heroMinutes"),
    seconds: document.querySelector(".heroSeconds"),

    handleSetTimer(){
        let minutesSettings = Number(prompt("Quantos minutos deseja no timer?"))
        
        if(isNaN(minutesSettings)){
            alert("Por favor digite somente números!")
            return
        }
        timer.minutes.innerText = minutesSettings

        return minutesSettings
        
    },

    updateTimer(){
        let minutesSettings = Number(timer.minutes.innerText)
        let secondsSettings = Number(timer.seconds.innerText)

        

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
          
          timer.minutes.innerText = minutesSettings.toString().padStart(2, '0');
          timer.seconds.innerText = secondsSettings.toString().padStart(2, '0');
        
    },
}