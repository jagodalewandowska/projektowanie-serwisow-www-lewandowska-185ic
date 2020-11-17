# Lab 4
##### 

####
##### Wymagania dotyczące trzeciego zadania:
####

![alt text](https://i.imgur.com/FLsIlMd.png)


# Zrzuty ekranów poszczególnych stron

### Strona główna
#### Zawiera ona grę Star Wars - Uratuj Baby Yodę

Gra jest pewną modyfikacji gry Frogger w innym uniwersum - z inną postacią główną. Do wykonania gry został wykorzystany HTML, JS - Vanilla oraz CSS oraz Bootstrap - do dodania panelu nawigacyjnego. 

![alt text](https://i.imgur.com/0ENquxZ.png)    


#### Gra polega na przeprowadzeniu głównego bohatera znajdującego się na dole ekranu -- do statku. Po drodze trzeba unikać przeszkód - pocisków, a następnie należy wskoczyć na platformę, z której można się przenieść poprzez przeskoczenie na R2D2. Po każdym przejściu poziomu prędkość obiektów wzrasta, a wynik zwiększa się o jeden. Jest również zliczane ilość niepowodzeń. 

#### W przypadku, kiedy gracz zostanie postrzelony lub spadnie z platformy/R2D2 (lub przeniesie się na nich zbyt daleko) gra zostaje zresetowana, a postać główna powraca na początek gry. Prędkość oraz wynik zostają również przywrócone do początkowych wartości.  

Gra zawiera elementy takie jak:
- **setup** - zawiera zmienne globalne, wymiary ramek i ich deklaracje oraz utworzone zmienne z obrazami wykorzytanymi w kodzie.
- **spritesheet** - dzięki któremu możliwe jest dodanie losowych kolorów pocisków/R2D2 oraz jest widoczne zmienianie kierunku, w którym patrzy główny bohater
- **particles** - czyli efekty specjalne. W momencie, kiedy główny bohater biegnie po płaszczyźnie unikając pocisków. Mają one takie właściwości, że wraz z czasem zanikają i zmniejszają się w losowy sposób (zmienia się ich wartość nieprzezroczystość - opacity i promień - radius). Wprowadzone jest zabezpieczenie, aby obiektów nie było też za dużo. W przypadku, kiedy główny bohater nie znajduje się już na polu z pociskami, efekt nie jest wyświetlany.
- **obstacles** - przeszkody. W pliku obstacles.js zawarty jest dokładnie opisany kod, który zawiera ustawienia dotyczące przeszkód takich jak pociski, ale też platformy i R2d2. Są one ustawione tak, aby przy przekroczeniu krawędzi ramki pojawiały się na nowo, z losowym wyglądem oraz losową odległością między sobą.  

Zawarte jest również w nim wykorzytanie **wykrywania kolizji**. W przypadku, kiedy główny bohater zderzy się z pociskiem, wyświetlana jest animacja kolizji, a następnie resetowana jest gra. W przypadku obiektów, które są bezpieczene - platforma, r2d2 - dodana jest wartość safe która oznacza, że postać może przenieść się na niej do celu bez resetowania gry.
- **utilities** - czyli miejsce, gdzie wywoływane są wszystkie funkcje, aby gra działała. Wykorzytane są elementy takie jak clearRect - w celu zapobiegania efektu przeciągania się obrazu między klatkami, czy requestAnimationFrame, który zapętla utworzoną funkcję. Zawiera ona również **EventListeners** dla wciskania klawiszy oraz wyświetlanie wyniku. Jest w nim również funkcja collisions i resetowanie gry.
- **yoda** - zawiera klasę głównego bogatera, gdzie zawarte jest sterowanie postacią, jej wygląd i wyświetlanie. 


---

### Zadania
##### Zawiera listę oraz rozwiązane zadania w konsoli.

![alt text](https://i.imgur.com/vT6O0rk.gif)