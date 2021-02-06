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
    
    if (inputVolumeNum.value >= 67) {
        volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-3.svg"); 
        honkBtn.disabled = false; 
    }
    else if (inputVolumeNum.value >= 34 && inputVolumeNum.value <= 66) {
        volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-2.svg"); 
        honkBtn.disabled = false; 
    }
    else if (inputVolumeNum.value >= 1 && inputVolumeNum.value <= 33) {
        volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-1.svg"); 
        honkBtn.disabled = false;
    }
    else if (inputVolumeNum.value == 0) {
        volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-0.svg"); 
        honkBtn.disabled = true; 
    }
    
    sound.volume = inputVolumeNum.value; 
    alert("inputVolumeNum has changed :D!!!");
});

sliderBar.addEventListener("change", function() {
    inputVolumeNum.value = sliderBar.value; 
    
    if (inputVolumeNum.value >= 67) {
        volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-3.svg"); 
        honkBtn.disabled = false; 
    }
    else if (inputVolumeNum.value >= 34 && inputVolumeNum.value <= 66) {
        volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-2.svg"); 
        honkBtn.disabled = false; 
    }
    else if (inputVolumeNum.value >= 1 && inputVolumeNum.value <= 33) {
        volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-1.svg"); 
        honkBtn.disabled = false;
    }
    else if (inputVolumeNum.value == 0) {
        volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-0.svg"); 
        honkBtn.disabled = true; 
    }
    sound.volume = inputVolumeNum.value; 
});

/*if (inputVolumeNum.value >= 67) {
    volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-3.svg"); 
}
else if (inputVolumeNum.value >= 34 && inputVolumeNum.value <= 66) {
    volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-2.svg"); 
}
else if (inputVolumeNum.value >= 1 && inputVolumeNum.value <= 33) {
    volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-1.svg"); 
}
else if (inputVolumeNum.value == 0) {
    volumeIcon.setAttribute("src", "./assets/media/icons/volume-level-0.svg"); 
}*/

let radioAirHorn = document.getElementById("radio-air-horn"); 
let radioCarHorn = document.getElementById("radio-car-horn"); 
let radioPartyHorn = document.getElementById("radio-party-horn"); 
let hornImage = document.getElementById("sound-image"); 

radioAirHorn.addEventListener("click", function() {
    hornImage.setAttribute("src", "./assets/media/images/air-horn.svg");
    sound.setAttribute("src", "./assets/media/audio/air-horn.mp3"); 
	alert("radioAirHorn"); 
}); 

radioCarHorn.addEventListener("click", function() {
    hornImage.setAttribute("src", "./assets/media/images/car.svg");
    sound.setAttribute("src", "./assets/media/audio/car-horn.mp3"); 
	alert("radioCarHoron"); 
}); 

radioPartyHorn.addEventListener("click", function() {
    hornImage.setAttribute("src", "./assets/media/images/party-horn.svg");
    sound.setAttribute("src", "./assets/media/audio/party-horn.mp3"); 
	alert("radioParatyHorn"); 
}); 

/*if (radioAirHorn.checked) {
    hornImage.setAttribute("src", "./assets/media/images/air-horn.svg");
    sound.setAttribute("src", "./assets/media/audio/air-horn.mp3"); 
}

if (radioCarHorn.checked) {
    hornImage.setAttribute("src", "./assets/media/images/car.svg");
    sound.setAttribute("src", "./assets/media/audio/car-horn.mp3"); 
}

if (radioPartyHorn.checked) {
    hornImage.setAttribute("src", "./assets/media/images/party-horn.svg");
    sound.setAttribute("src", "./assets/media/audio/party-horn.mp3"); 
}*/
