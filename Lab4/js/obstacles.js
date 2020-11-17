/* Przeszkody */
class Obstacle {
    constructor (x, y, width, height, speed, type) {
        /* Przekazywanie wartości jako atrybutów */
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        /* nawigowanie pomiędzy */
        this.frameX = 0;
        this.frameY = 0;
        /* losowy ruch platform w przedziale 30 do 60*/
        this.randomise = Math.floor(Math.random() * 30 + 30);
        /* Losowy samochód */
        this.carType = (Math.floor(Math.random() * numberOfCars));
    }

    /* Wywołanie obiektów */
    draw() {
        /* Przekazanie typu w przypadku kiedy x */
        if (this.type === 'turtle') {
            /* Jeśli klatka jest 12, to modulo 10 da nam 2 -- animacja będzie co 10 klatkę
            Używając this.randomise animacja będzie nierówna dla wszystkich obiektow */
            if (frame % this.randomise === 0) {
                if (this.frameX >= 1) this.frameX = 0;
                else this.frameX++;                
            }  
            /* Argumenty:
            1 -- Postać
            2 do 4 -- Koordynaty miejsca, które będą wycięte z obrazka postaci
                S - source, W - width, H - height. Pierwsze 0 - Wycina obrazek zaczynając od lewego górnego
                rogu. Drugie 0 - górny lewy róg. Wycinamy wielkość postaci, która została wyliczona wcześniej
                player.width * player.frameX oznacza, że jeśli ramka jest 0 to wycinany jest część 0, dla 1
                przeskoczy o jedną ramkę i wytnie postać o jeden dalej.
                Dla trzeciego atrybutu 
            5 do 9 -- są to argumenty, które decydują, gdzie będzie miał zostać wyświetlony wycięty obrazek --
                na początku w rogu, wielkość to wymiar postaci -- można go powiększyć poprzez wymnożenie
                player.x oraz y określa (wykrywa) położenie postaci */
            ctx1.drawImage(turtle, this.frameX * 70, this.frameY * 70, 70, 70, this.x, this.y, this.width, this.height);          
        } else if (this.type === 'log') {         
            ctx1.drawImage(log, this.x, this.y, this.width - 20, this.height - 20);            
        } else {
            /* Losowa wartość z przedziału od 0 do 2 */
            ctx2.drawImage(car, this.frameX * this.width, this.carType * this.height, grid * 2, grid, this.x, this.y, this.width, this.height);
        }
    }

    /* Aktualizacja obiektów, ruch w linii poziomej */
    update() {
        /* Mnożenie, ponieważ czasami prędkość może być ujemna (w przeciwnym kierunku) */
        this.x += this.speed * gameSpeed;
        /* Aby obiekty wracały, kiedy przejadą przez prawą krawędź ekranu */
        /* W zależności, czy poruszają się w prawo czy w lewo */
        if (this.speed > 0) { // większe od zera - w prawo            
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
                /* Zmiana obiektu kiedy zniknie z pola widzenia */
                this.carType = (Math.floor(Math.random()*numberOfCars));
            }
        } else { // mniejsze od zera - w lewo
            /* Sprawdzanie czy samochód jedzie w prawo */
            this.frameX = 1;
            if (this.x < 0 - this.width) {
                this.x = canvas.width;
                this.carType = (Math.floor(Math.random()*numberOfCars));
            }            
        }
        

    }
}

function initObstacles() {
    /* Pierwsza linia - dodanie dwóch obiektów */
    for (let i = 0; i < 2; i++) {
        /* Aby obiekty zachowały między sobą odstęp. Za każdym razem, kiedy jest generowany
        nowy obiekt jego wartość x będzie się zmieniać */
        let x = i * 350;

        /* Przekazywanie do nowego obiektu typu obstacle, tworzy nowy, pusty obiekt
        nadając poprzednie wartości. Wartość y to wysokość ramki odjąć jedno przejście
        a także różnica dla marginesu na dole. Trzecia wartość zmienia np. szerokość */
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, 'car'));
    }

    /* Druga linia - obiekty w przeciwnym kierunku */
    for (let i = 0; i < 2; i++) {
        /* Zachowanie odstępu */
        let x = i * 300;
        /* Przeciwny kierunek */
        carsArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, 'car'));
    }

    /* Trzecia linia */
    for (let i = 0; i < 2; i++) {
        /* Zachowanie odstępu */
        let x = i * 400;
        carsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2, grid, 2, 'car'));
    }

    /* Czwarta linia */
    for (let i = 0; i < 2; i++) {
        /* Zachowanie odstępu */
        let x = i * 400;
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2, 'log'));
    }

    /* Piąta linia */
    for (let i = 0; i < 3; i++) {
        /* Zachowanie odstępu */
        let x = i * 200;
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'turtle'));
    }

}

/* Inicjowanie obiektów */
initObstacles();

/* Zarządzanie obiektami */
function handleObstacles() {
    /* Przejście przez całą tablicę samochodów */
    for (let i = 0; i < carsArray.length; i++) {
        carsArray[i].update();
        carsArray[i].draw();
    }

    for (let i = 0; i < logsArray.length; i++) {
        logsArray[i].update();
        logsArray[i].draw();      
    }
    /* Kolizje z pierwszym typem obiektów */
    /* Przechodzi przez całą tablicę obiektów i sprawdza, czy postać koliduje z obiektem */
    for (let i = 0; i < carsArray.length; i++) {
        if (collision(frogger, carsArray[i])) {
            /* Element który rysuję 100x100 - szerokość wysokość, 50x50 zmniejszenie */
            ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 50, 50);
            /* Resetowanie gry */
            resetGame();
        }
    }
    /* Koliza z R2D2 oraz platformą 
    Sprawdzenie, czy r2d2 jest strefie kosmicznej */
    if (frogger.y < 250 && frogger.y > 100) {
        safe = false;
        /* Sprawdzanie platform pętlą */
        for (let i = 0; i < logsArray.length; i++) {
            if (collision(frogger, logsArray[i])) {
                frogger.x += logsArray[i].speed;
                safe = true;
            }            
        }
        if (!safe) {
            resetGame();
        }
    }
}
