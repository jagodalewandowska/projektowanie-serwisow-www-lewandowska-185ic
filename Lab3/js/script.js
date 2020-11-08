/* ------------------------------- Pieski -------------------------------*/

/* Najechanie na pieski */

var img = document.getElementById("hug");
img.addEventListener("mouseover", function() {
    img.src = "../imgs/after.png"; 
})
img.addEventListener("mouseout", function() {
    img.src = "../imgs/before.png"
})

/* Kliknięcie na pieski */

var ile = 0;
img.addEventListener("click", function szczeka() {
    document.getElementById("szczek").innerHTML += "Szczek!<br>"
    ile++;
    if  (ile == 10) {
        alert("Wystarczy szczekania!");
        wyczysc();
        ile = 0;        
    }
})

/* Zagraj dźwięk przy kliknięciu */

document.addEventListener("keydown", mial);

function mial(e) {
	if (e.keyCode === 77) {        
        document.getElementById("meow").play();
        document.getElementById("kotek").style="display:block";
	}
}

/* Kombinacja Ctrl + C */

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === 'c') {
      alert("Skopiowane!");
    }
});

/* Wyczyszczenie okna */

function wyczysc() {
    document.getElementById("szczek").innerHTML = "";
}

/* Przeciągnij kość */

function drop(ev) {
    // Zapobiegaj normalnej reakcji przeglądarki -- kopiowanie, przeciąganie
    ev.preventDefault();
  }

document.addEventListener("drop", function () {
    document.getElementById("miska").src = "../imgs/bowlbone.png";
    document.getElementById("kosc").style = "display:none";
})  

console.info("Działam");



