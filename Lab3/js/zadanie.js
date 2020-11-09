var konsola = document.getElementById("konsola");
konsola.addEventListener("click", function() {
        window.open("https://github.com/kartofelek007/zadania-podstawy/tree/master/3-funkcje/1-zadania","_blank");
})

// Zad. 1

function ileLiter(input) {
        return input.length;
}

const input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
console.info("");
console.info("-- Zadanie 1 - Obliczanie ilosci znakow. --");
console.info("");
console.info("Tekst: " + input);
console.info("Ilosc znakow: " + this.ileLiter(input));



// Zad.2

function sumuj(arr) {        
        var suma = 0;
        for (i = 0; i < arr.length; i++) {
                suma += arr[i];    
        }                
        return suma;
}

var arr = [2,4,8,16,32,64,128,256,512];
console.info("");
console.info("-- Zadanie 2 - Suma elementow w tablicy --");
console.info("");
console.info("Dana jest tablica: [" + arr + "]");
console.info("Suma jej elementow: " + this.sumuj(arr));



// Zad.3

function coDruga(input) {
        var nowyTekst = "";
        for (i = 0; i < input.length; i++) {
                if (i % 2 == 0) {
                        nowyTekst += input[i].toUpperCase(); 
                } else {
                        nowyTekst += input[i].toLowerCase();
                }
        }
        return nowyTekst;
}

console.info("");
console.info("-- Zadanie 3 - Zmiksowany tekst --");
console.info("");
console.info("Dany jest tekst: " + input);
console.info("Tekst po zmianie: " + this.coDruga(input));



// Zad. 4

function iloczyn(at1,at2) {    
        if ((typeof at1 == "number") && (typeof at2 == "number")){                
                return at1*at2;
        } else {
               return false; 
        }
}

var at1 = 26, at2 = 3, at3 = "t";
console.info("");
console.info("-- Zadanie 4 - Sprawdz atrybut, zwroc iloczyn --");
console.info("");
console.info("Dane sa atrybuty: " + at1 + " oraz " + at2);
console.info("Ich iloczyn to: " + this.iloczyn(at1,at2));
console.info("Kiedy jeden atrybut jest tekstem: " + at1 + " oraz " + at3);
console.info("Ich iloczyn to: " + this.iloczyn(at1,at3));



// Zad. 5

function coRobi(imie, miesiac) {
        var miesiacSwitch = miesiac.toLowerCase();
        var zdanie = "";
        switch (miesiacSwitch) {
                case "grudzien": case "styczen": case "luty":
                        zdanie += imie + " jezdzi na sankach";
                        break;
                case "marzec": case "kwiecien": case "maj":
                        zdanie += imie + " chodzi po kaluzach";
                        break;
                case "czerwiec": case "lipiec": case "sierpien":
                        zdanie += imie + " sie opala";
                        break;
                case "wrzesien": case "pazdziernik": case "listopad":
                        zdanie += imie + " zbiera liscie";
                        break;
                default:
                        zdanie += imie + " uczy sie JS";
        }
        return zdanie;
}

var mojeDane = ["Jagoda","Czerwiec"];
var daneTestowe = ["Magdalena","luty"];
console.info("");
console.info("-- Zadanie 5 - Miesiace i imiona --");
console.info("");
console.info("Dane sa atrybuty: " + mojeDane[0] + " " + mojeDane[1] );
console.info("Moje zdanie: " + this.coRobi(mojeDane[0],mojeDane[1]));
console.info("Dane sa atrybuty: " + daneTestowe[0] + " " + daneTestowe[1] );
console.info("Moje zdanie: " + this.coRobi(daneTestowe[0],daneTestowe[1]));

// Zad. 6

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
const znak ="|";

function doTablicy(tekst,znak) {
        var nowaTablica = tekst.split(znak);
        nowaTablica.sort();
        nowaTablica.join(znak);
        return nowaTablica;
}

console.info("");
console.info("-- Zadanie 6 - Sortuj --");
console.info("");
console.info("Posortowane imiona: " + doTablicy(str,znak));

// Zad. 7

var arrImiona = ["Ania" , "Marcin" , "Bartek" , "Piotr"]
function wielkaTablica(arr) {
        var dImiona = [];
        for (i = 0; i < arr.length; i++) {
                dImiona[i] = arr[i].toUpperCase();
        }
        return dImiona;
}

function miksTablica(arr) {  
        var nTablica = [];
        for (i = 0; i < arr.length; i++) {
                nTablica[i] = "";
                for (j = 0; j < arr[i].length; j++) {
                        if (j % 2 == 0) {
                                nTablica[i] += arr[i].charAt(j).toUpperCase();
                        } else {
                                nTablica[i] += arr[i].charAt(j).toLowerCase();
                        }
                }                                              
        }    
        return nTablica;
}

console.info("");
console.info("-- Zadanie 7 - Zwroc tablice --");
console.info("");
console.info(wielkaTablica(arrImiona));
console.info(miksTablica(arrImiona));

// Zad. 8

function checkFemale(imie) {
        if ((imie.slice(-1)) == "a") {
                return true;
        } else {
                return false;
        }    
}

var fem = "Ania"
var male = "Marcin";
console.info("");
console.info("-- Zadanie 8 - Czy jest kobieta? --");
console.info("");
console.info("Czy " + fem + " jest kobieta? " +  checkFemale(fem));
console.info("Czy " + male + " jest kobieta? " +  checkFemale(male));

// Zad. 9

const users = [
        "Ania Nowak",
        "Piotr Kowalski",
        "Bartek Kosecki",
        "Natalia Nowak",
        "Weronika Piotrowska",
        "Agata Beatczak",
        "Tomasz Nowak",
        "Mateusz Kowalski",
        "Marcin Kotecki",
        "Betata Lecka",
        "Katarzyna Melecka"
    ]

function countWomanInTable(arr) {
        var nArr = [];
        var ile = 0;
        for (let i = 0; i < arr.length; i++) {
                nArr[i] = users[i].split(" ",1);
        }

        for(let i = 0; i < nArr.length; i++) {
                if (checkFemale(nArr[i].toString()) == true) {
                        ile ++;
                }
        }
        return ile;
}

console.info("");
console.info("-- Zadanie 9 - Ile jest kobiet? --");
console.info("");
console.info("Jest " +  countWomanInTable(users) + " kobiet.");





