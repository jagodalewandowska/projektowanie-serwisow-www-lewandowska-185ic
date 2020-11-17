/* ------------------ Ustawienie pierwszej ramki ------------------ */
const canvas = document.getElementById('canvas1');

/* By móc korzystać z metod budujących canvas trzeba utworzyć zmienną ctx */
const ctx1 = canvas.getContext('2d');

/* Wymiary ramki, takie same jak w css */
canvas.width = 600;
canvas.height = 600;


/* ------------------ Ustawienie drugiej ramki ------------------ */
const canvas2 = document.getElementById('canvas2');

/* Utworzenie ctx */
const ctx2 = canvas2.getContext('2d');

/* Wymiary */
canvas2.width = 600;
canvas2.height = 600;


/* ------------------ Ustawienie trzeciej ramki ------------------ */
const canvas3 = document.getElementById('canvas3');

/* Utworzenie ctx */
const ctx3 = canvas3.getContext('2d');

/* Wymiary */
canvas3.width = 600;
canvas3.height = 600;


/* ------------------ Ustawienie czwartej ramki ------------------ */
const canvas4 = document.getElementById('canvas4');

/* Utworzenie ctx */
const ctx4 = canvas4.getContext('2d');

/* Wymiary */
canvas4.width = 600;
canvas4.height = 600;


/* ------------------ Ustawienie piątej ramki ------------------ */
const canvas5 = document.getElementById('canvas5');

/* Utworzenie ctx */
const ctx5 = canvas5.getContext('2d');

/* Wymiary */
canvas5.width = 600;
canvas5.height = 600;

/* ----------------------- Zmienne globalne -------------------- */
/* Wymiar jednej klatki 80x80 px */
const grid = 80;

/* Utworzenie tablicy keys, która będzie przechowywać klawisze, 
jakie użył użytkownik */
let keys = [];

/* Zmienna wynik, która wzrosta wraz z ukończeniem poziomu */
let score = 0;

/* Zliczanie kolizji */
let collisionsCount = 0;

/* Zliczanie klatek, w przypadku, kiedy np. ma coś się dziać
co 100 klatek */
let frame = 0;

/* Prędkość gry, która będzie się zmieniać wraz z poziomem */
let gameSpeed = 1;

/* Obiekty cząstkowe, które będą przechowywać efekty specjalne */
const particlesArray = [];

/* Ustawienie limitu efektów */
const maxParticles = 300;

/* Przechowuje losowe pociski */
const bulletsArray = [];

/* Przechowywanie platform i r2d2 */
const platformsArray = [];

/* Kiedy yoda jest bezpieczny */
let safe = false;

/* Drugie tło */
const background_lvl2 = new Image();
background_lvl2.src = "./imgs/background_lvl2.png";

const storm = new Image();
storm.src = "./imgs/storm.png";

const collisions = new Image();
collisions.src = "./imgs/collisions.png";

const r2d2 = new Image();
r2d2.src = "./imgs/r2d2.png";

const platforms = new Image();
platforms.src = "./imgs/platforms.png";

const bullets = new Image();
bullets.src = './imgs/bullets.png';

let numberOfbullets = 3;
let numberOfr2d2 = 3;

const yodaSprite = new Image();
yodaSprite.src = './imgs/yoda.png';