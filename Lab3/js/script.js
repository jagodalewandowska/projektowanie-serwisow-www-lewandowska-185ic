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
img.addEventListener("click", szczeka);

function szczeka() {
    document.getElementById("szczek").innerHTML += "Szczek!<br>"
    ile++;
    if  (ile == 10) {
        alert("Wystarczy szczekania!");
        wyczysc();
        ile = 0;        
    }
}

function wylacz() {
    img.removeEventListener("click", szczeka);
}

function wyczysc() {
    document.getElementById("szczek").innerHTML = "";
}

/* Zagraj dźwięk przy kliknięciu */

document.addEventListener("keydown", mial);

function mial(e) {
	if (e.keyCode === 77) {        
        document.getElementById("meow").play();
        document.getElementById("kotek").style="display:block";
	}
}

/* Kombinacja Ctrl + O */

document.addEventListener("copy", function() {    
      alert("Skopiowano element!");
});

/* Przeciągnij kość */

function drop(ev) {
    // Zapobiegaj normalnej reakcji przeglądarki -- kopiowanie, przeciąganie
    ev.preventDefault();
  }

document.addEventListener("drop", function () {
    document.getElementById("miska").src = "../imgs/bowlbone.png";
    document.getElementById("kosc").style = "display:none";
})  

/* Podkreślenie po najechaniu */

document.getElementById("mouse").addEventListener("mouseenter", function() {
    document.getElementById("mouse").style.textDecoration = "underline";
});

/* Zmiana wielkości okna */
window.addEventListener("resize", zmienWielkosc);

var x = 0;
function zmienWielkosc() {
  var txt = x += 1;
  document.getElementById("ileR").innerHTML = txt;
}

/* Double click */

var p = document.getElementById("klikklik");

p.addEventListener("dblclick", doubleClick);

function doubleClick() {
    alert("Kliknięto dwa razy!");
}


function respond() {
    p.removeEventListener("dblclick", doubleClick);    
    document.getElementById("efekt").innerHTML = "Element został wyłączony!";   
}

/* Zaznaczanie tekstu i scrollowanie */

document.getElementById("Ciekawostka").addEventListener("select", function() {
    document.getElementById("informacja").innerHTML = "Zaznaczyłeś tekst!";
});

document.getElementById("Ciekawostka").addEventListener("scroll", function() {
    document.getElementById("informacja").innerHTML = "Zescrollowałeś tekst!";
});
