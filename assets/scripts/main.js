// main.js

// TODO

//play the sound when you press the honk button 
let honkBtn = document.getElementById("honk-btn");

honkBtn.addEventListener("click", function(event){
    event.preventDefault()
    sound.play();
}); 

//sound level changes depending on input field
let sound = document.getElementById("horn-sound");
let inputVolumeNum = document.getElementById("volume-number");
let sliderBar = document.getElementById("volume-slider"); 
let volumeIcon = document.getElementById("volume-image"); 

inputVolumeNum.addEventListener("change", function() {
    sliderBar.value = inputVolumeNum.value; 
    sound.volume = inputVolumeNum.value; 
    alert("inputVolumeNum has changed");
});

sliderBar.addEventListener("change", function() {
    inputVolumeNum.value = sliderBar.value; 
    sound.volume = sliderBar.value; 
    alert("slider bar has changed");
});

if (inputVolumeNum.value >= 67) {
    volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-1.svg"); 
}
