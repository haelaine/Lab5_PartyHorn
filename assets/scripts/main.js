// main.js

// TODO

//play the sound when you press the honk button 
let honkBtn = document.getElementById("honk-btn");
honkBtn.addEventListener("click", sound.play()); 
honkBtn.addEventListener("click", function(event){
    event.preventDefault()
}); 

//sound level changes depending on input field
/*let sound = document.getElementById("horn-sound");
let inputVolumeNum = document.getElementById("volume-number");
sound.volume = inputVolumeNum.value; */
