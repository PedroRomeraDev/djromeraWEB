const button = document.getElementById("playButton");
const icon = document.getElementById("icon");

let playing = false;

button.addEventListener("click", () => {

    const audio = document.querySelector("audio");

    if(!audio) return;

    if(!playing){

        audio.play();

        icon.classList.remove("play-icon");
        icon.classList.add("pause-icon");

        playing = true;

    }else{

        audio.pause();

        icon.classList.remove("pause-icon");
        icon.classList.add("play-icon");

        playing = false;
    }

});