/* 1 -- Funkcja zwrotna - Callback */


$.getJSON( "https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/2", function(data) {
    
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

    // TASK 2.1 -- Wykonanie działania na liczbach

    function getYear(id) {
        return new Promise((resolve, reject) => {
            if (data.albums[0].id === id){
                age = data.albums[0].ages[0].Benny;
                year = data.albums[1].year;
                const yearOfBirth = year - age;
                resolve(yearOfBirth);
            } else {
                reject('Nie znaleziono artykułu o takim ID.');
            }
        });
    }

    console.log(" ");
    console.log("2 -- Obiekt Promise: ");
    console.log("---- Task 1: ");

    getYear(21)
    .then(data => console.log("Rok urodzenia artysty:", data))
    .catch(error => console.log("Błąd!", error))
    .finally(() => console.log('Koniec pobierania roku artysty.'));
 });