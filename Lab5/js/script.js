    /* 1 -- Funkcja zwrotna - Callback */


    $.getJSON("https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/2", function(data) {
        
        // TASK 1.1 -- Wykonanie działania
        function calculateYear(fn) {
            year = data.albums[1].year;
            age = data.albums[1].ages[0].Agnetha;
            const yearOfBirth = year - age;   
            fn(yearOfBirth);     
        }

        calculateYear(function(res) {
            console.log("1 -- Funkcja zwrotna - Callback");
            console.log("---- Task 1: ");
            console.log("Rok wydania płyty: " + year + ", wiek Agnethy w roku wydania płyty: " + age);
            console.log("Wyliczony rok urodzenia piosenkarki: " + res);
        });    
        

        // TASK 1.2 -- Stworzenia łańcucha znakowego

        function getSong(fn) {
            const artist = data.artist;
            const album = data.albums[0].title;
            const song = data.albums[0].favourite;
            const text = `Nazwa zespołu to ${artist}, album to ${album}, ulubiona piosenka to ${song}.`;
            fn(text);
        }

        getSong(function(res){
            console.log("---- Task 2: ");
            console.log(res);
        });
    });

    /* 2 -- Obiekt promise */

    // TASK 2.1 -- Wykonanie działania na liczbach    
    // Pobranie metodą fetch 

    fetch("https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/2")
    .then(response => response.json())
    .then(response => {
        console.log(" ");
        console.log(" ");
        console.log("2 -- Obiekt Promise: ");
        console.log("---- Task 1: ");
        
        let title = response.albums[0].title;
        let age = response.albums[0].ages[0].Benny;
        let year = response.albums[1].year;

        console.log("Nazwa albumu: ", title);
        console.log("Rok wydania płyty: ", year);
        console.log("Wiek: ", age);        

        function getYear(id) {
            return new Promise((resolve, reject) => {
                if (response.albums[0].id === id){
                    const yearOfBirth = year - age;
                    resolve(yearOfBirth);
                } else {
                    reject('Nie znaleziono artykułu o takim ID.');
                }
            });
        }
    
        getYear(21)
            .then(data => console.log("Rok urodzenia Benny'ego:", data))
            .catch(error => console.log("Błąd!", error))
            .finally(() => console.log("Został obliczony rok urodzenia artysty."))
        
    })

    fetch("https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/1")
    .then(response => response.json())
    .then(response => {
        console.log("---- Task 2: ");
        let var1 = response.albums[0].singers[0].first;  
        let album = response.albums[0].title;

        console.log("Album: ", album);
        console.log("Lead singer: ", var1); 

        function newObject(id) {
            return new Promise((resolve, reject) => {
                if (response.albums[0].id === id){
                    resolve({"Nazwa Albumu": album, "Główny Wokalista": var1})
                } else {
                    reject("Nieprawidłowe ID.");
                }
            });
        }    
        newObject(11)
            .then(data => console.log("Nowy obiekt", data))
            .catch(error => console.log("Błąd!", error))
            .finally(() => console.log("Nowy obiekt utworzony pomyślnie!"))
    })




    
    /* 3 -- async/await + fetch */
    /* 
    // Task 3.1
    
    let url_artists = 'https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/2'; 

    async function getAgeAndYear(url) {
        let response = await fetch(url);    

        if (response.ok) { // if HTTP-status is 200-299
        console.log(" ");
        console.log("3 -- async/await + fetch ");
        console.log("---- Task 3: ");

        console.log("Status = ", response.status);
        
        // get the response body (the method explained below)
        let json_obj = await response.json();
        let age1 = json_obj.albums[0].ages[0].Benny;
        let year1 = json_obj.albums[1].year;

        console.log("Wiek: ", age1);
        console.log("Rok wydania płyty: ", year1);

        } 
        else {
            console.log("HTTP-Error: " + response.status);
        }

        function getYear1(id) {
            return new Promise((resolve, reject) => {
                if (id === 21){
                    const yearOfBirth1 = year1 - age1;
                    resolve(yearOfBirth1);
                } else {
                    reject('Nie znaleziono artykułu o takim ID.');
                }
            });
        }
    
        getYear1(21)
            .then(data => console.log("Rok urodzenia artysty:", data))
            .catch(error => console.log("Błąd!", error))
            .finally(() => console.log('Koniec pobierania roku artysty.'))

    }

    // Wywołanie metody fetch

    getAgeAndYear(url_artists);

    // Obliczanie roku urodzenia
    */