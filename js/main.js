import {menu} from "./options.js"

menu.play.addEventListener("click", () => menu.onClickTogglePlayAndPause());
menu.pause.addEventListener("click", () => menu.onClickTogglePlayAndPause());

menu.set.addEventListener("click", () => menu.onClickToggleSetAndStop())
menu.stop.addEventListener("click", () => menu.onClickToggleSetAndStop())

menu.musicOff.addEventListener("click", () => menu.onClickToggleMusic())
menu.musicOn.addEventListener("click", () => menu.onClickToggleMusic())