/* Pieski */

var img = document.getElementById("hug");

/* Najechanie na pieski */

img.addEventListener("mouseover", function() {
    img.src = "../imgs/after.png"; 
})
img.addEventListener("mouseout", function() {
    img.src = "../imgs/before.png"
})

/* Kliknięcie na pieski */

img.addEventListener("click", function szczeka() {
    document.getElementById("szczek").innerHTML += "Szczek!<br>"
})

/* Wyczyszczenie okna */

function wyczysc() {
    document.getElementById("szczek").innerHTML = "";
}


console.info("Działam");



