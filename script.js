var bulb = document.getElementById("bulb");
var onButton = document.getElementById("onButton");
var offButton = document.getElementById("offButton");
var brightnessInput = document.getElementById("brightness");
var body = document.body;

onButton.addEventListener("click", function () {
    body.style.backgroundColor = "#fff"; 
    bulb.style.backgroundColor = "#fff"; 
    onButton.style.display = "none";
    offButton.style.display = "inline-block";
    updateBrightness();
});

offButton.addEventListener("click", function () {
    body.style.backgroundColor = "#000"; 
    bulb.style.backgroundColor = "#000"; 
    onButton.style.display = "inline-block";
    offButton.style.display = "none";
    updateBrightness();
});

brightnessInput.addEventListener("input", function () {
    updateBrightness();
});

function updateBrightness() {
    var brightnessValue = brightnessInput.value;
    var filament = document.getElementById("filament");
    filament.style.opacity = brightnessValue / 100;
}
