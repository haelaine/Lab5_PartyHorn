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
let sliderBar = document.getElementById("volume-slider"); 

inputVolumeNum.addEventListener("change", function() {
    sliderBar.value = inputVolumeNum.value; 
    sound.volume = inputVolumeNum.value; 
});

sliderBar.addEventListener("change", function() {
    inputVolumeNum.value = sliderBar.value; 
    sound.volume = sliderBar.value; 
});

