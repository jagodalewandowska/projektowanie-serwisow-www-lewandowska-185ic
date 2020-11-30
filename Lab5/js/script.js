    // czyszczenie konsoli    
    let clear = document.getElementById("clear");
    clear.addEventListener("click", function(){
        console.clear();
    });
    
    /* 1 -- Funkcja zwrotna - Callback */
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", function(){
        $.getJSON("https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/2", function(data){
            // TASK 1.1 -- Wykonanie działania
            function calculateYear(fn) {
                // przypisanie wartości
                year = data.albums[1].year;
                age = data.albums[1].ages[0].Agnetha;
                const yearOfBirth = year - age;   
                // wywołanie funkcji "anonimowej"
                fn(yearOfBirth);     
            }

            calculateYear(function(res) {
                console.log(" ");
                console.log("1 -- Funkcja zwrotna - Callback");
                console.log("---- Task 1.1: ");
                // wypisanie zmiennych oraz wyniku odejmowania funkcji calculate Year
                console.log("Rok wydania płyty: " + year + ", wiek Agnethy w roku wydania płyty: " + age);
                console.log("Wyliczony rok urodzenia piosenkarki: " + res);
            });      
        });
    });

    // TASK 1.2 -- Stworzenia łańcucha znakowego

    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", function(){
        $.getJSON("https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/2", function(data) {           
            
            function getSong(fn) {
                // przypisanie wartości
                let artist = data.artist;
                let album = data.albums[0].title;
                let song = data.albums[0].favourite;

                // utworzenie nowej zmiennej text która zawiera łańcuch znakowy
                const text = `Nazwa zespołu to ${artist}, album to ${album}, ulubiona piosenka to ${song}.`;
                fn(text);
            }

            getSong(function(res){
                console.log(" ");
                console.log("---- Task 1.2: ");
                // wyświetlenie funkcji
                console.log(res);
            });
        });
    });

    // --------------------------------------------------------------------------------------------------------------------------

    /* 2 -- Obiekt promise */

    // TASK 2.1 -- Wykonanie działania na liczbach    
    // Pobranie metodą fetch 

    // funkcja obliczająca rok urodzenia
    function calculateYear(age, year) {
        let yearOfBirthBenny = year - age;
        return yearOfBirthBenny;
    }


    // funkcja zawierająca obiekt promise
    function getYear(id) {
        return new Promise((resolve, reject) => {
            if (id == 21) {
                fetch("https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/2")
                    .then(response => response.json())
                    .then(response => {
                        console.log(" ");
                        console.log(" ");
                        console.log("2 -- Obiekt Promise: ");
                        console.log("---- Task 2.1: ");
                        
                        // przypisanie wartości
                        let title = response.albums[0].title;
                        let age = response.albums[0].ages[0].Benny;
                        let year = response.albums[1].year;

                        // wypisanie wartości pobranych
                        console.log("Nazwa albumu: ", title);
                        console.log("Rok wydania płyty: ", year);
                        console.log("Wiek: ", age)  
                        
                        // zwrócenie wyniku funkcji utworzonej wcześniej
                        resolve(calculateYear(age, year));                        
                    })                 
            } else {
                // kiedy id nie jest prawidłowe
                reject("Niepoprawne ID.");
            }
        });
    }

    let btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", function(){    
        // wywołanie funkcji z id = 21    
        getYear(21)
            // reakcja na obietnicę
            .then(data => console.log("Rok urodzenia Benny'ego:", data))
            // jeśli istnieje błąd
            .catch(error => console.log("Błąd! - ", error))
            // zakończenie zadania
            .finally(() => console.log("Zakończono."))
    })

        
    
   

    // --------------------------------------------------------------------------------------------------------------------------

    // TASK 2.2 -- Tworzenie nowego obiektu 
    // Pobranie metodą fetch 

    // tworzenie nowego obiektu
    function makeANewObject(album, var1){
        return ({"Nazwa Albumu": album, "Główny Wokalista": var1});
    }

    // funkcja wykorzystująca obiekt promise
    function newObject(id) {            
        return new Promise((resolve, reject) => {
            // kiedy id prawidłowe
            if (id === 11){
                // dostęp do json za pomocą metody fetch
                fetch("https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/1")
                .then(response => response.json())
                .then(response => {
                    console.log(" ");
                    console.log("---- Task 2.2: ");
                    // przypisanie wartości
                    let var1 = response.albums[0].singers[0].first;  
                    let album = response.albums[0].title;
            
                    // wyświetlenie wartości oraz wyniku
                    console.log("Album: ", album);
                    console.log("Lead singer: ", var1); 
                    
                    // zwrócenie wyniku funkcji utworzonej wcześniej
                    resolve(makeANewObject(album, var1));
                })
                
            } else {
                // kiedy id nie jest prawidłowe
                reject("Nieprawidłowe ID.");
            }
        });
    }

    // przycisk
    let btn4 = document.getElementById("btn4");
    btn4.addEventListener("click", function(){    
        // wywołanie funkcji z id = 11    
        newObject(11)
            // reakcja na obietnicę
            .then(data => console.log("Nowy obiekt", data))
            // jeśli istnieje błąd
            .catch(error => console.log("Błąd! - ", error))
            // zakończenie zadania
            .finally(() => console.log("Zakończono."))
    })
    

    
    // --------------------------------------------------------------------------------------------------------------------------


    /* 3 -- async/await + fetch */
    
    // Task 3.1 -- pobieranie metodą async/await

    // funkcja zawierająca obiekt promise, która w przypadku jeśli warunek jest spełniony zwróci różnicę
    function getYear1(id, year_b, age_b) {
        return new Promise((resolve, reject) => {
            if (id == 21 || id == 22){
                const yearOfBirth1 = year_b - age_b;
                resolve(yearOfBirth1);
            } else {
                // jeśli id nie jest prawidlowe
                reject("Niepoprawne ID.");
            }
        })
    }

    // funkcja wykorzystująca async oraz await oraz fetch
    async function getAgeAndYear(id) {
        let response = await fetch('https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/2');    
            try {
                if (response.ok) { // if HTTP-status is 200-299
                    console.log(" ");
                    console.log("3 -- async/await + fetch ");
                    console.log("---- Task 3.1: ");
            
                    console.log("Status = ", response.status);
                    
                    // response body
                    let json_obj = await response.json();

                    // przypisywanie wartości
                    let age_b = json_obj.albums[0].ages[0].Björn;
                    let year_b = json_obj.albums[1].year;
            
                    // oczekiwanie aż funkcja zostanie wykonana            
                    const data = await getYear1(id, year_b, age_b);
            
                    console.log("Wiek: ", age_b);
                    console.log("Rok wydania płyty: ", year_b);
                    console.log("Rok urodzenia artysty: ", data);
            
                }
                else {
                    // w przypadku brak odpowiedzi
                    console.log("HTTP-Error: " + response.status);
                }   
        } catch(error) {
            // w przypadku błędu
            console.error(error);

        } finally {
            // po zakończeniu
            console.log("Zakończono.");
        }     
    }

    // przycisk
    let btn5 = document.getElementById("btn5");
    btn5.addEventListener("click", function(){
        // wywołanie funkcji
        getAgeAndYear(26);       
    })
    

    // --------------------------------------------------------------------------------------------------------------------------

    // 3.2 -- Tworzenie nowego obiektu

    // funkcja zawierająca metodę promise, która w przypadku jeśli warunek jest spełniony zwróci obiekt
    function albumy(id, album1, album2) {
        return new Promise((resolve, reject) => {
            if (id == 1 || id == 2){  
                const zad32 = ({"Pierwszy album": album1, "Drugi album": album2});
                resolve(zad32);
            } else {
                // w przypadku niepowodzenia
                reject("Niepowodzenie");
            }
        })
    }

    async function getAlbum(id) {
        let response = await fetch(`https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/${id}`);    
            try {
                if (response.ok) { // if HTTP-status is 200-299                  
                    console.log(" ");
                    console.log("Status = ", response.status);
                    
                    // response body
                    let obj = await response.json();

                    // przypisywanie wartości
                    let album1 = obj.albums[0].title;
                    let album2 = obj.albums[1].title;

                    // wyświetlanie pobranych wartości
                    console.log(album1);
                    console.log(album2);
            
                    // oczekiwanie na wykonanie funkcji albumy         
                    const data = await albumy(id, album1, album2);

                    console.log("Nowy obiekt to:", data);
            
            }
            else {
                console.log("HTTP-Error: " + response.status);
            }   
        } catch(error) {
            // jeśli wystąpi błąd
            console.error(error);

        } finally {
            // przy zakończneiu
            console.log("Zakończono.");
        }     
    }

    // przycisk
    let btn6 = document.getElementById("btn6");
    btn6.addEventListener("click", function(){
        console.log(" ");
        console.log("---- Task 3.2: ");

        // wywoływanie
        getAlbum(212);
        getAlbum(2);
    })

    
    // --------------------------------------------------------------------------------------------------------------------------

    // 4 -- Zapytania AJAX

    // --- 4.1 - Pobieranie zasobów i dzialanie na tych zasobach

    // funkcja sumująca rok i chart
    function addYearAndChart(year, chart){
        const sum = year + chart;
        return sum;
    }

    // funkcja korzystająca z zapytania ajax
    function zad41(id){
        let url = `https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/${id}`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        // przy załadowaniu
        xhr.onload = function() {            
            let get = xhr.response;

            // przypisywanie wartosci
            let year = get.albums[0].year;
            let chart = get.albums[0].charts[0].Japan;
            
            // wypisywanie w konsoli oraz wynik
            console.log("Dane wartości to: " + year + " oraz " + chart);
            console.log("Suma: ", addYearAndChart(year, chart));
        }

        // wyłapywanie błędu, kiedy np. nie ma połączenia internetowego
        xhr.onerror = function() {
            console.log("Błąd!");
        }
    }

    // przycisk
    let btn7 = document.getElementById("btn7");
    btn7.addEventListener("click", function(){
        console.log(" ");
        console.log("4 -- Zapytania AJAX");
        console.log("---- Task 4.1: ");

        // wywoływanie
        zad41(1);
        zad41(2);
    })

    // --------------------------------------------------------------------------------------------------------------------------

    // --- 4.2 - Pobieranie zasobów i tworzenie nowego obiektu

    // funkcja tworzaca nowy obiekt
    function newObject4(var1, var2){
        return ({"Pierwsza piosenka": var1, "Druga piosenka": var2});
    }

    // funkcja korzystająca z zapytania ajax
    function zad42(id){
        let url = `https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/${id}`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function() {            
            let get = xhr.response;  

            // przypisywanie nowych wartości          
            let song1 = get.albums[0].favourite;
            let song2 = get.albums[1].favourite;
            
            // wypisywanie
            console.log("Ulubione piosenki to " + song1 + " oraz " + song2);
            console.log("Nowy obiekt ", newObject4(song1, song2));
        }
        xhr.onerror = function() {
            console.log("Błąd!");
        }
    }

    /// przycisk
    let btn8 = document.getElementById("btn8");
    btn8.addEventListener("click", function(){
        console.log(" ");
        console.log("---- Task 4.2: ");
        // wywoływanie
        zad42(1);
        zad42(2);
    })

    // --------------------------------------------------------------------------------------------------------------------------

    // 5 -- Metoda fetch
    // --- 5.1 - Pobieranie metodą fetch oraz wykonywanie działania

    // funkcja z metodą fetch
    function zad51(id){
        // sprawdzenie, czy id jest poprawne
        if(id == 1 || id == 2) {
            fetch(`https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/${id}`)
                .then(response => response.json())
                .then(response => {
                    // przypisywanie wartości
                    let year = response.albums[0].year;
                    let chart = response.albums[0].charts[0].Australia;   
                    
                    // wyświetlanie wartości oraz wyniku
                    console.log("Dane wartości to: " + year + " oraz " + chart);
                    console.log("Wynik:", addYearAndChart(year, chart));
                })
                // wyłapywanie błędu
                .catch(error => console.log("Błąd!", error))
        } else {
            // kiedy id niepoprawne
            console.log("Niepoprawne ID");
        }
    }

    //przycisk
    let btn9 = document.getElementById("btn9");
    btn9.addEventListener("click", function(){
        console.log(" ");
        console.log("5 -- Metoda Fetch");
        console.log("---- Task 5.1: ");

        // wywoływanie
        zad51(1);
        zad51(222);
    })

    // --------------------------------------------------------------------------------------------------------------------------

    // --- 5.2 - Pobieranie zasobów i tworzenie nowego obiektu

    // metoda tworząca nowy obiekt
    function newObject5(var1, var2){
        return ({"Zespół": var1, "Ulubiona piosenka": var2});
    }

    // funkcja zawierająca metodę fetch
     function zad52(id){
        if(id == 1 || id == 2) {
            // metoda fetch
            fetch(`https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/${id}`)
                .then(response => response.json())
                .then(response => {
                    // przypisanie wartości
                    let var1 = response.artist;   
                    let var2 = response.albums[0].favourite;     
                                 
                    // wypisywanie wartości i wyniku
                    console.log("Dane wartości to: " + var1 + " oraz " + var2);
                    console.log("Nowy obiekt:", newObject5(var1, var2));
                })
            // wyłapywanie błędu
            .catch(error => console.log("Błąd!", error))
        } else {
            // kiedy niepoprawne id
            console.log("Niepoprawne ID!");
        }
    }

    // przycisk
    let btn10 = document.getElementById("btn10");
    btn10.addEventListener("click", function(){
        console.log(" ");
        console.log("---- Task 5.2: ");
        // wywołanie funkcji, dwa przykłady
        zad52(1);
        zad52(2);
    })

    // --------------------------------------------------------------------------------------------------------------------------

    // 6 -- Biblioteka axios
    // --- 6.1 - Działania na liczbach

    // mnożenie
    function multiply(var1, var2) {
        return var1 * var2;
    }

    function zad61(id){
        // dostęp do json za pomocą axios w zależności od podanego id na wejściu
        axios.get(`https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/${id}`)
        .then(function (response) {

            // pobranie wartości
            let var1 = response.data.albums[0].year;
            let var2 = response.data.albums[0].id;   
            
            // wyświetlenie wyników
            console.log("Dane wartości to: " + var1 + " oraz " + var2);
            console.log("Wynik:", multiply(var1, var2));
        })
        .catch (function (error) {
            // sprawdzenie czy id nie jest większe od 3
            if(id > 3){
                console.log("Niepoprawne ID.");
            // jeśli jest inny błąd
            } else {
            console.log("Błąd -- ", error);
            }
        })
    }   

    // przycisk
    let btn11 = document.getElementById("btn11");
    btn11.addEventListener("click", function(){
        console.log(" ");
        console.log("6 -- Metoda Fetch ");
        console.log("---- Task 6.1: ");
        // wywołanie funkcji, dwa przykłady
        zad61(1);
        zad61(2);   
    })


     // --------------------------------------------------------------------------------------------------------------------------

     // --- 6.2 - Pobieranie zasobów przez axios i tworzenie nowego obiektu

     function newObject6(var1, var2) {
        return ({"Album": var1, "Rok wydania": var2});
     }

     function zad62(id){
        axios.get(`https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/${id}`)
        .then(function (response) {
            let var1 = response.data.albums[0].title;
            let var2 = response.data.albums[0].year;   
            
            console.log("Dane wartości to: " + var1 + " oraz " + var2);
            console.log("Wynik:", newObject6(var1, var2));
        })
        .catch (function (error) {
            if(id > 3){
                console.log("Niepoprawne ID.");
            } else {
            console.log("Błąd -- ", error);
            }
        })
    }   

    // przycisk
    let btn12 = document.getElementById("btn12");
    btn12.addEventListener("click", function(){        
        console.log(" ");
        console.log("6 -- Metoda Fetch ");
        console.log("---- Task 6.2: ");
        // wywołanie funkcji, dwa przykłady
        zad62(1);
        zad62(2);   
    })
