class Particle {
    /* Nadaje dwie wartości dla nowego obiektu, przekazuje */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        /* Definicja wielkości efektu, jak duży będzie efekt*/
        this.radius = Math.random() * 20 + 1;
        /* Aby efekty zanikały */
        this.opacity = 1;
        /* Aby efekty się rozprzestrzeniały w losowe miejsca */
        /* Poziom i pion */
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }

    /* Rysowanie elementów na platformie */
    draw() {
        /* Zebranie wartości postaci a następnie dodanie animacji pod.
        Czwarta wartość oznacza kanał alfa. Dodanie dynamicznie 
        zdeklarowanej wcześniej opacity */
        ctx3.fillStyle = 'rgba(150,150,150,' + this.opacity + ')';
        /* Rozpoczęcie rysowania */
        ctx3.beginPath();
        /* Przekazywanie argumentów, rysowanie koła, +20 aby wyrównać do środka */
        ctx3.arc(this.x + 20, this.y + 20, this.radius, 0, Math.PI * 2);
        /* Wypełnienie kolorem */
        ctx3.fill();
        /* Koniec */
        ctx3.closePath();
    }

    /* Będzie działać w każdej ramce */
    update() {
        /* Aktualizacja poziomo i pionowo tak, aby efekty znikały w losowe 
        miejsca od postaci */ 
        this.x += this.directionX;
        this.y += this.directionY;
        /* Zmniejszanie widoczności efektu, jesli jest większy niż 0.1 */
        if (this.opacity > 0.1) {
            this.opacity -= 0.9;
        }
        /* Zmniejszenie wielkości efektu */
        if (this.radius > 0.15) {
            /* Jeśli jest większy niż 0.15, odejmuj 0.14 */
            this.radius -= 0.14;
        }
    }
}

/* Zarządzanie efektami */
function handleParticles () {
    /* Będzie działać w pętli po calej tablicy efektów */
    for (let i = 0; i < particlesArray.length; i++) {
        /* Wywołanie efektów */
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    /* Kiedy efektów jest za dużo */
    if (particlesArray.length > maxParticles) {
        /* Funkcja działa 30 razy, która usuwa nadmierne efekty */
        for (let i = 0; i < 30; i++) {
            particlesArray.pop();
        }
    }

    /* Tablica wciąż jest pusta, a elementy mają się wyświetlać po wykonaniu
    ruchu - i tylko wtedy jeśli są wciśnięte klawisze. <250 ponieważ sprawdza,
    czy postać znajduje się już na platformie. Aby gra na pewno działała płynnie 
    dodany jest warunek ograniczający wielkość tablicy efektów */
    if (((keys[37] || keys[38] || keys[39] || keys[40])) && yoda.y > 250 && particlesArray.length < maxParticles + 10) {
        /* Utworzenie pętli która będzie działać 10 razy */
        for (let i = 0; i < 10; i++) {
            /* Funkcja unshift bierze cokolwiek przekazane jest w nawiasach, 
            a następnie przekazuje to na sam początek tablicy którą ją wywołujemy.
            Przekazanie nowego efektu, a następnie uruchomienie go w konstruktorze */
            particlesArray.unshift(new Particle(yoda.x, yoda.y))
        }
    }
}
