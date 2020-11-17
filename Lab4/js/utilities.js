/* Utworzenie animacji */

function animate() {
    /* Zapobieganie, aby obrazek przeciągał się i czyścił zawartośc pomiędzy klatkami,
    wybierana są dla niego wielkość całej ramki */
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);

    /* Dodanie tła ze statkiem falcon */
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);

    /* Dodanie wywołania efektu ruchu */
    handleParticles();

    /* Wywołanie funkcji rysującej postać */
    yoda.draw();

    /* Wywołanie funkcji aktualizującej */
    yoda.update();   

    /* Wywołanie zarządzania animacjami */
    handleObstacles();

    /* Wywołanie wyniku */
    handleScoreBoard();

    /* Dodanie 4 warstwy z lśnieniem */
    ctx4.drawImage(storm, 0, 0, canvas.width, canvas.height);

    /* Zmienianie ramki za każdym razem kiedy zadziała funkcja */
    frame++;

    /* Wykorzystanie funkcji, która zapętli całą utworzoną funkcję */
    requestAnimationFrame(animate);
}

/* Wywołanie funkcji */
animate();

/* Dodanie EventListener, wciśnięcie i puszczenie klawisza */
window.addEventListener('keydown', function(e) {
    keys = [];
    /* Dodawanie elementu do tablicy podczas wciśnięcia klawisza 
    Dzięki temu podczas wciśnięcia innego klawisza podczas wciąż trzymania drugiego
    nastąpi klasyczna animacja i przejście postaci. Nastapi zapobieganie nachodzeniu
    na sobie poszczególnych klawiszy */
    keys[e.keyCode] = true;

    /* Dodanie przechodzenia w zależności, który został wciśnięty, gdzie:
    38 -- strzałka w górę
    37 -- strzałka w lewo
    39 -- strzałka w prawo
    40 -- strzałka w dół */
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        yoda.jump();
        /* Kiedykolwiek postać będzie wykonywać ruch, ramka ustawiona jest po na 0 */
        yoda.frameX = 0;
    }
});

/* Puszczenie klawisza */
window.addEventListener('keyup', function(e) {
    /* Usunięcie klawisza z tablicy, który nie jest już wciśnięty */
    delete keys[e.keyCode];
    yoda.moving = false;
});

function scored() {
    /* Za każdym razem gdy wywołana, dodaje punkt */
    score++;
    /* Zwiększenie prędkości gry */
    gameSpeed += 0.05;
    /* Zresetowanie pozycji gracza */
    yoda.x = canvas.width/2 - yoda.width/2;
    yoda.y = canvas.height - yoda.height - 40;
}

/* Obliczanie wyniku */
function handleScoreBoard(){
    ctx4.fillStyle = 'yellow';
    ctx4.strokeStyle = 'yellow';
    ctx4.font = '15px Verdana';
    /* Gdzie ma być położony */
    ctx4.strokeText('Score', 520, 30);
    ctx4.font = '60px Verdana';
    /* Pobieranie wartości wyniku */
    ctx4.fillText(score, 520, 90)
    /* Ilość porażek */
    ctx4.font = ('15px Verdana');
    ctx4.strokeText('Ilość porażek: ' + collisionsCount, 10, 175);
    /* Prędkość + Zamiana miejsc po przecinku */
    ctx4.strokeText('Prędkość: ' + gameSpeed.toFixed(1), 10, 195);
}

/* Detekcja kolizji */
/* Funkcja zwraca tylko true albo false, w przypadku kiedy postać zderzy się z innym elementem 
Przyjmuje dwie wartości, gdzie pierwsza to postać, a pozostale to elementy kolizji. Scenariusz, 
w którym wiemy kiedy dwa elementy nie kolidują ze sobą zwraca przeciwieństwo. Jeśli wszystkie są
fałszywe, to wiemy że nachodzą na siebie, a więc zwraca true */

function collision(first, second) {
    /* Na pewno nie ma kolizji, a więc zwraca przeciwieństwo, że jest */
    return !(first.x > second.x + second.width ||
              first.x + first.width < second.x ||
              first.y > second.y + second.height ||
              first.y + first.height < second.y );
}

/* Reset gry */
function resetGame() {
    yoda.x = canvas.width/2 - yoda.width/2;
    yoda.y = canvas.height - yoda.height - 40;
    score = 0;
    collisionsCount++;
    gameSpeed = 1;
}
