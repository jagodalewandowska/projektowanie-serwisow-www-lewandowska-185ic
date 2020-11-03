// Zmiana koloru przycisku
function changeColour() {
    document.getElementById("przycisk").style.background='#17A2B8';
 }

// Liczenie kliknięć
var clicked = 0;
function buttonNotification(){      
    clicked ++;
    document.getElementById("clicked").innerHTML=clicked;    
}

// Pokaż zdjęcie
function reveal(){
    var rev = "../imgs/revealed.png";
    var img = document.getElementById('questionmark')
    img.src = rev.replace();
}

// Która godzina
function whatTime() {
    document.getElementById("ktoradata").innerHTML = Date();
}

// Najedź myszką
function najedz(obj) {
    obj.innerHTML = "Nowy tekst!"
  }
  
  function odjedz(obj) {
    obj.innerHTML = "Najedź na mnie."
  }

// Przyciśnij
function wcisnij(obj) {
    obj.style.backgroundColor = "#343A40";
    obj.innerHTML = "Jestem wciśnięty!";
  }
  
  function pusc(obj) {
    obj.style.backgroundColor="#17A2B8";
    obj.innerHTML="Nie jestem już wciśnięty (:";
  }

// Wyskakujące powiadomienie
function powiadom() {
  alert ("Wywołałeś właśnie powiadomienie!");
}

// AMW przesunięcie
function amw(){
    "use strict";
    // zapamietaj czas teraz
    let start = Date.now();
    let timer = setInterval(function() {
        // ile czasu od początku
        let timePassed = Date.now() - start;
        amwIkona.style.left = timePassed / 5 + 'px';
        // zakończ po ilości sekund
        if (timePassed > 400) clearInterval(timer);                
    });
}

// Powiększ tekst
function powieksz() {
    document.getElementById("wielkosc").style.fontSize='larger';
 }
 function zmniejsz() {
    document.getElementById("wielkosc").style.fontSize='smaller';
 }

 // Odnośnik do innej strony
 function github(){
    window.open("https://github.com/jagodalewandowska","_blank");
}

// Wyświetl adres strony
function edit(){
    document.getElementById("edytowanie").innerHTML = document.URL;
}

// Oblicz ilość przycisków na stronie
function ileElementow(){
    document.getElementById("przyc").innerHTML = "Ilość obrazków na stronie: " + document.images.length;
}

// Zmień tło tymczasowo
function zmienTlo(tlo) {
    document.body.style.background = tlo;
}

// Zmiana jasności
function jasnosc(){
    document.getElementById("zmianaJasnosci").style.filter = "brightness(50%)";
}
function jasnoscPo(){
    document.getElementById("zmianaJasnosci").style.filter = "brightness(100%)";
}

// Rotacja obrazka
function rotacja() {
    var element = document.getElementById('image');
    if (element.className === "normal") {
        element.className = "rotate";
    }
    else if ( element.className === "rotate") {
        element.className = 'normal';
    }
}

// Wypełnianie pola
function validateForm() {
    "use strict";
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Wypełnij najpierw pole!");
    } else {
        alert("Pole poprawnie wypełnione!☺")
    }
  }

// Obrazek jako tło
function zdjecieTlo(){
    document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37f7f742-dca4-4601-8f2b-536f03b1f839/dczshxg-e02470f8-13dc-4908-a281-e99b05faf989.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzdmN2Y3NDItZGNhNC00NjAxLThmMmItNTM2ZjAzYjFmODM5XC9kY3pzaHhnLWUwMjQ3MGY4LTEzZGMtNDkwOC1hMjgxLWU5OWIwNWZhZjk4OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.L4r53jzfBJ-KMyOt61MDh-0J9cE9G8kN7gGfGnE97jc')";
}
function tloDefault(){
    document.body.style.backgroundImage = "url(none)";
}

// Zmień czcionkę
function zmienCzcionke() {
    document.getElementById("tekstCzcionka").style.fontFamily = "'Pacifico', cursive";
}

// Dźwięk
function play() {
    var audio = new Audio('../mp3/amongus.mp3');
    audio.play();
}

// Przezroczystość
function powiZdj(){
        var obrazek = document.getElementById('powiekszenie');
        if(obrazek && obrazek.style) {
        obrazek.style.height = '100px';
        obrazek.style.width = '200px';
    }
}