// Odnośniki

function goBack(){
    window.history.back();
}

function goStronaGlowna(){
  window.history.back("../index.html");
}

function zrodloListu(){
    window.open("https://www.thebalancecareers.com/job-application-letter-sample-2062548","_blank");
}

function zrodloPodrecznika(){
  window.open("https://encyklopedia.pwn.pl/haslo/calka;3882822.html#:~:text=ca%C5%82ka%2C,matematyki%2C%20wprowadzone%20niezale%C5%BCnie%20przez%20I.&text=ma%20szerokie%20zastosowania%20nie%20tylko,p%C3%B3l%20i%20obj%C4%99to%C5%9Bci%20figur%20geometrycznych).","_blank");
}

function github(){
    window.open("https://github.com/jagodalewandowska","_blank");
}

// Formularz

function wyslijOpinie() {
    // Przekazywanie parametrów do wyświetlenia
    var imie = document.getElementById("imie").value;
    wyswietlImie.innerHTML= imie;
    var opinia = document.getElementById("opinia").value;
    wyswietlWiadomosc.innerHTML= opinia;

    // Ukrywanie formularza
    x = document.getElementById("ukryj");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    // Wyświetlanie powiadomienia
    y = document.getElementById("pokaz");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
}

// Wykres
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Rysowanie wykresu
function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Całki oznaczone', 20],
    ['Całki nieoznaczone', 15],
    ['Ćwiczenia', 50]
  ]);

  // Ustawienia wykresu
  var options = {'title':'Podział godzin do nauki rozdziału',
                 'width':240,
                 'height':300,
                 legend: 'bottom'};

  // Przekazywanie parametrów
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}