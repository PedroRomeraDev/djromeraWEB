const radio = document.getElementById("radio");
    const button = document.getElementById("playButton");
    const icon = document.getElementById("icon");

    let playing = false;

    button.addEventListener("click", async () => {

      if(!playing){

        try{
          await radio.play();
          
          icon.classList.remove("play-icon");
          icon.classList.add("pause-icon");

          playing = true;

        }catch(err){
          console.log(err);
        }

      }else{

        radio.pause();

        icon.classList.remove("pause-icon");
        icon.classList.add("play-icon");

        playing = false;
      }

    });