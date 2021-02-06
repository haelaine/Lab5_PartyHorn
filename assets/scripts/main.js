// main.js

// TODO

//play the sound when you press the honk button 
let honkBtn = document.getElementById("honk-btn");
honkBtn.addEventListener("click", sound.play()); 
honkBtn.addEventListener("click", function(event){
    event.preventDefault()
}); 
honkBtn.addEventListener("click", function() { alert("hello");}); 

//sound level changes depending on input field
let sound = document.getElementById("horn-sound");
let inputVolumeNum = document.getElementById("volume-number");

inputVolumeNum.addEventistener("change", function() {
    sliderBar.value = inputVolumeNum.value; 
    sound.volume = inputVolumeNum.value; 
});




