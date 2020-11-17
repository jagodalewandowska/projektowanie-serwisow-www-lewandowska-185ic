class Frogger {
    /* Przypisanie wartości przy utworzeniu nowego obiektu */
    constructor() {
        /* Szerokość jednego obiektu z elementu arkusza sprite
        Wielkość arkusza to szerokość x wysokość oraz są 2 kolumny
        i 4 wiersze, szerokość dzielona przez 2, wysokość - 4
        Dla wymiarów 500x1000: */
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        /* Zmniejszenie rozmiaru */
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;
        /* Ustawienie koordynatów, gdzie pojawia się postać */
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 40;
        /* Zapobieganie, by postać się poruszała zbyt szybko
        Każdy z przejść sprawi, że wykonany zostanie tylko
        jedno przejście na następny obiekt */
        this.moving = false;
        /* Położenie na osi X i Y z której wychodzimy z naszego 
        arkusza sprite - czyli takiego obrazu, który składa się 
        z kilku mniejszych. W jednym momencie jest wyświetlana 
        tylko jedna klatka poprzez wycinanie części tego obrazka.
        FrameX oraz frameY przechowuje koordynaty prostokąta,
        który chcemy wyciąć podzcas animacji postaci gracza 
        -- tak, aby pokazać tylko jedną ramkę */
        this.frameX = 0;
        this.frameY = 0;
    }
    /* Metoda update */
    update() {
        //console.log('update');

        /* Strzałka w górę ⬆️ */
        if (keys[38]) {
            if (this.moving === false) {
                /* Grid ustawiony ma 80 pikseli, przesunięcie
                w przeciwnym kierunku wzdłuż osi pionowej OY*/
                this.y -= grid;
                this.moving = true;
                this.frameX = 1;
                this.frameY = 0;
            }
        }

        /* Strzałka w dół ⬇️ */
        if (keys[40]) {
            /* Aby gracz nie wyszedł poza ramkę */
            if (this.moving === false && this.y < canvas.height - this.height * 2) {
                /* Przesunięcie wzdłuż osi pionowej OY */
                this.y += grid;
                this.moving = true;
                this.frameY = 3;
            }
        }

        /* Strzałka w lewo ⬅️ */
        if (keys[37]) {
            /* Aby gracz nie wyszedł poza ramkę */
            if (this.moving === false && this.x > this.width) {                
                /* Przesunięcie w przeciwnym kierunku wzdłuż osi poziomej OX */
                this.x -= grid;
                this.moving = true;
                this.frameY = 2;
            }
        }

        /* Strzałka w prawo ➡️ */
        if (keys[39]) {
            /* Aby gracz nie wyszedł poza ramkę */
            if (this.moving === false && this.x < canvas.width - this.width * 2) {                
                /* Przesunięcie wzłuż osi poziomej OX */
                this.x += grid;
                this.moving = true;
                this.frameY = 1;
            }
        }
        if (this.y < 0) scored();
    }

    /* Pojawienie się postaci na warstwie 3 */
    draw () {
        /* Jakiego koloru jest postać */
        ctx3.fillStyle = 'green';
        /* Rysowanie yody */
        ctx3.drawImage(froggerSprite, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - 25, this.y - 25, this.width * 2, this.height * 2);
    }

    /* Metoda przejścia */
    jump() {
        /* Animacja gdy yoda się nie rusza */
       if (this.moving === false) this.frameX = 1;
       else if (this.frameX === 1) this.frameX = 0;
    }
}

/* Wywołanie konstruktora, aby utworzył nowy, pusty obiekt oraz
wypełnienie go wartościami w nim zawartymi */
const frogger = new Frogger();