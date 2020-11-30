# Lab 5 - Asynchroniczny JavaScript
##### 

####
#### Wymagania dotyczące czwartego zadania:
####

<details>
<summary>Zrzut ekranu z poleceniami</summary>

![alt text](https://i.imgur.com/RHwuCYE.png)
</details>

# Zrzuty ekranów poszczególnych stron

### Strona główna
#### Strona główna zawiera listę z przyciskami, dzięki którym wywoływane są odpowiednie polecenia w konsoli. W nagłówku, jak i stopce znajduje się odnośnik do mojego Githuba. Zółty przycisk pozwala wyczyścić konsolę w każdym momencie korzystania ze strony.

![alt text](https://i.imgur.com/YhE8n4U.png)    


### Wykonanie kolejno polecenia z zadania

#### W celu użycia utworzonego przeze mnie obiektu json, użyłam strony na której znajdowały się wymienione w przykładzie obiekty users. Po dodaniu do swojego repozytorium taki plik jest automatycznie dostępny do użytku, dlatego ze względu na posiadanie swojego repozytorium prywatnego musiałam ten obiekt dodać w nowym - [my-json](https://github.com/jagodalewandowska/my-json), publicznym.
 

## 1. Funkcja zwrotna (callback)

W zadaniu pierwszym wymagane było utworzenie takiej funkcji zwanej funkcją zwrotną (callback), która zostanie wykonana wtedy gdy działanie innej się zakończy.

- ### Zadanie 1.1:

*Wykorzystaj funkcję zwrotną do pobrania dwóch różnych wartości liczbowych (z różnych poziomów zagnieżdżenia) z ww. obiektu JSON i wykonaj wybrane działanie na tych liczbach.* 


---

Do zadania pierwszego w celu wysłania żądania używana jest metoda getJSON.

```
$.getJSON("https://my-json-server.typicode.com/jagodalewandowska/my-json/artists/2, function(data){
    ...
});"
```

Za pomocą funkcji zwrotnej pobierane są wartości rok oraz wiek, a następnie następuje wywołana zostaje ona przekazując wynik działania. W wywołaniu calculateYear zostają wyświetlone wyniki oraz dane wprowadzone - by sprawdzić, czy poprawnie zostały pobrane z obiektu JSON. Część kodu na której operuję w tym zadaniu:

```
{
  "id": 2,
  "artist": "ABBA",
  "albums": [
    {
      ...
    },
    {
      "id": 22,
      "title": "Voulez-Vous",
      "year": 1979,
      "favourite": "Gimme! Gimme! Gimme!",
      "ages": [
        {
          "Agnetha": 29,
          "Björn": 34,
          "Benny": 33,
          "Anni-Frid": 34
        }
      ],
...
```

Zadaniem było pobranie danych zagnieżdżonych, a następnie wykonanie operacji na tych wartościach. Wynik działań, jakim jest rok urodzenia piosenkarki:

![alt text](https://i.imgur.com/OlOxYJC.png)  

- ### Zadanie 1.2:

*Wykorzystaj funkcję zwrotną do pobrania dwóch różnych łańcuchów znakowych (z różnych poziomów zagnieżdżenia) z ww. obiektu JSON i za pomocą template strings stwórz łańcuch znakowy z użyciem obu wcześniej wyekstrahowanych łańcuchów znakowych.* 


---

Do zadania wykorzystana została ta sama metoda getJSON. W funkcji zwrotnej przypisywane są do wartości, a następnie tworzony jest łańcuch znakowy stworzony z nazwy artysty, albumu oraz piosenki. Są one na różnych poziomach zagnieżdżenia (fragment kodu wyżej).

```
`Nazwa zespołu to ${artist}, album to ${album}, ulubiona piosenka to ${song}.`
```

Wynik działania kodu:

![alt text](https://i.imgur.com/H8eClWH.png)  

## 2. Obiekt Promise

- ### Zadanie 2.1

*Wykorzystaj obiekt Promise do pobrania dwóch różnych zasobów liczbowych i napisz funkcję wykonującą wybrane działanie na tych liczbach.* 


---
Za pomocą obiektu Promise możliwe jest wykorzystanie funkcji resolve oraz reject. W przypadku dobrze wykonanego kodu (w moim przypadku kiedy id jest poprawne), wysyłane zostaje żądanie za pomocą metody fetch. Następnie przypisane zostają wartości do zmiennych. Dla pewności wyświetlane są wartości pobrane, by sprawdzić czy znajduje się teraz w dobrym miejscu w obiekcie JSON. Na koniec zwrócona zostaje wartość wykonanej operacji odejmowania dzięki użyciu **resolve**. 

![alt text](https://i.imgur.com/eRrbZD1.png)

W przypadku, kiedy id jest niepoprawne zwracana jest wiadomość "Niepoprawne ID", przy użyciu **reject**

Przy wciśnięciu przycisku zostaje wywołana funkcja getYear dla id równemu 21. W przypadku, kiedy:
1. obietnica jest rozwiązana pomyślnie lub nie - wykonana jest metoda **then**, która podaje rok urodzenia. 
2. reakcja na negatywną odpowiedź to **catch**, dzięki której dodany jest tekst kiedy istnieje błąd. Dla mojego przypadku dodaje wiadomość "Błąd! -" 

![alt text](https://i.imgur.com/iAuU1Qe.png)

3. przy zakończeniu wykonywania Promise zawsze wykonywana jest opcja **finally** bez względu na to, rozwiązanie obietnicy zaszło lub nie. W moim przypadku jest to informacja "Zakończono".

- ### Zadanie 2.2

*Wykorzystaj obiekt Promise do pobrania dwóch różnych dowolnych zasobów i napisz funkcję tworzącą z nich nowy obiekt.* 


---

Zadanie różni się tym, że w efekcie końcowym powstaje nowy obiekt. Funkcja tworzenia obiektu znajduje się poza funkcją zawierającą obiekt Promise. Przyporządkowuje ona wprowadzone wartości pod "Nazwa albumu" oraz "Główny wokalista". Za pomocą **resolve** zostaje ona wywoływania przy spełnieniu obietnicy, wykorzystując pobrane parametry za pomocą metody fetch.

```
function makeANewObject(album, var1){
        return ({"Nazwa Albumu": album, "Główny Wokalista": var1});
    }
```

Na koniec zostaje wyświetlony obiekt dzięki funkcji **then**, jednocześnie w przypadku błędu wykorzystany jest **catch** oraz na zakończenie **finally**. Wynik operacji:

![alt text](https://i.imgur.com/u24Ym8h.png)

## 3. async/await + fetch

- ### Zadanie 3.1

*Wykorzystaj obiekt Promise do pobrania dwóch różnych zasobów liczbowych i napisz funkcję wykonującą wybrane działanie na tych liczbach* - wykorzystując async, await oraz fetch.  


---
Utworzone zostały dwie funkcje. Pierwsza z nich, getYear1, zawiera obiekt Promise, w którym jeśli spełniona zostanie obietnica kiedy ID jest prawidłowe, **resolve** zwraca wynik odejmowania. W przeciwym razie **reject** informuje o niepoprawnym ID.

Funkcja getAgeAndYear za pomocą polecenia fetch wysyła żądanie do podanego adresu url. Async oznacza, że ta funkcja zawsze zwróci obietnicę. Await może zostać użyte tylko w przypadku, kiedy znajduje się wewnątrz funkcji async. Możliwe w tym przypadku jest użycie **try**, **catch** oraz **finally**. 

Podczas wykonywania **try** sprawdzane jest połączenie, czy status jest pomiędzy 200-299. W przypadku braku odpowiedzi wyświetlany jest HTTP-Error.
Następuje przypisanie wartości i wyświetlenie wartości oraz wyniku. Wynik otrzymany jest dzięki użyciu zmiennej data - w której oczekiwanie na to, aż funkcja zostanie wykonana. 

**catch** - w przypadku błędu zostanie on wychwycony i zwrócony.
**finally** - wykonywane zawsze, bez względu na wynik.

Przycisk wywołuje funkcję zakładając, że id jest równe 21. Wynik operacji:

![alt text](https://i.imgur.com/F5pgYXT.png)  

W rzypadku, kiedy id jest niepoprawne (dla przykładu 26), ponieważ zakładam, że może mieć ono wartość tutaj jedynie 21 oraz 22:

![alt text](https://i.imgur.com/fCzxBsP.png)  

- ### Zadanie 3.2

Zadanie wygląda tak samo, jednak w tym przypadku efektem końcowym ma być utworzenie nowego obiektu. W przypadku rozwiązania obietnicy zwracany jest argument zad32.

Wynikiem działania kodu jest wyświetlanie albumów. Dla id równego 1, w którym znajdują się albumy zespoły Queen:

![alt text](https://i.imgur.com/NTYLjA7.png)  

Dla id równego 2, dla zespołu ABBA:

![alt text](https://i.imgur.com/TP9VBFT.png)  

W przypadku, kiedy ID nie jest poprawne, nie jest możliwe wysłanie żądania metodą fetch, gdyż taki adres nie istnieje:

![alt text](https://i.imgur.com/FBEHnCz.png)  

## Zapytania AJAX

- ### Zadanie 4.1

*pobierz dwa różnych zasoby liczbowe i napisz funkcję wykonującą wybrane działanie na tych liczbach* - wykorzystując zapytania AJAX, polecenie xhr, XMLHttpRequest, ...  


---
Za pomocą AJAX pobierane są dane z serwera za pomocą żądań HTTP. Jednocześnie manipulowany jest model DOM tak, aby odświeżyć dane.

Na początku funkcji zad41 ustawiana jest wartość url, a następnie tworzone jest nowe zapytanie XMLHttpRequest. Wykorzystywany jest do pobrania typ połączenia GET, a typ odpowiedzi to json - taki, jak obiekt. 

Przy załadowaniu **onload** dodałam zmienną get, która będzie używana by przekazywać pobierane wartości, zamiast wcześniej użytych np. response, czy data. Następnie przejście do wypisywania wartości i wyników w konsoli. Wykorzystujędo tego wcześniej utworzoną funkcję addYearAndChart.

1. Dla wartości id = 1:

![alt text](https://i.imgur.com/Pcfbpoq.png)  

2. Dla wartości id = 2:

![alt text](https://i.imgur.com/Oxmk170.png)

W przypadku wyłapania błędu następuje kolejny krok **onerror**, który informuje o tym, że nie została wykonana operacja onload. Wykonany on zostanie, kiedy nie zostanie poprawnie załadowany xhr.

Rónież dla przykładu usunęłam fragment w url:

```
... /artists/ ...
```

Wynik:

![alt text](https://i.imgur.com/5Nzfqrp.png)

- ### Zadanie 4.2

Zadanie polega na tym samym, a w efekcie końcowym ma zostać otrzymany nowy obiekt. Utworzyłam funkcję o nazwie newObject4, który zwraca pierwszą i drugą piosenkę. W konsoli wyświetlone są również wartości pobrane.

1. Dla id = 1;

![alt text](https://i.imgur.com/978Z7TC.png)  

2. Dla id = 2;

![alt text](https://i.imgur.com/jNqdHNI.png)  

Dla błędnych wartości:

![alt text](https://i.imgur.com/sgIUpdU.png)

Błąd **onerror** zostanie wywołany w przypadku kiedy nie zostanie nawiązane połaczenie, pn. brak internetu.

## Metoda fetch

- ### Zadanie 5.1

*pobierz dwa różnych zasoby liczbowe i napisz funkcję wykonującą wybrane działanie na tych liczbach* - za pomocą metody fetch  


---

Metoda fetch została już użyta w poprzednich przykładach, dlatego teraz wykorzystany zostanie interfejs bez używania obiektu Promise. Aby wychwycić błąd i poinformować o nim zostanie użyta funkcja **catch**, jesli jednak wszystko przebiegnie pomyślnie, a id będą się zgadzały to wykonana zostanie funkcja **then**.

Dla poprawnych wartości id przy wywoływaniu funkcji:

1. Dla id = 1

![alt text](https://i.imgur.com/28CqVEh.png)  

2. Dla id = 2

![alt text](https://i.imgur.com/XcQsUtd.png)  

Dla niepoprawnej wartości ID:

![alt text](https://i.imgur.com/9kzh6HH.png)  


- ### Zadanie 5.2

Tworzenie nowego obiektu za pomocą wysyłania żądania metodą fetch. Wefekcie końcowym zwracany jest obiekt, który zawiera w sobie wartość "artist" dla danego id, oraz wartość favourite, czyli ulubioną piosenkę z danego albumu.

Dla poprawnych wartości id przy wywoływaniu

1. Dla id = 1

![alt text](https://i.imgur.com/QXETXG4.png)

2. Dla id = 2

![alt text](https://i.imgur.com/fXZ6W50.png)

Jesli podane id nie jest prawidłowe:

![alt text](https://i.imgur.com/NIiPGa8.png)

## Biblioteka axios

- ### Zadanie 6.1 

Pobranie danych, a następnie wykonaniu na nim operacji arytmetycznych. W tym przypadku wartości id oraz year zostaną przemnożone. Żądanie wysłane jest za pomocą 

```
... axios.get('link') ...
```

a także możliwe jest zastosowanie funkcji then, w przypadku otrzymania odpowiedzi, a także error, w przypadku niepowodzenia. Można sprawdzić id, a także co ma zostać wyświetlone w przypadku innego błędu. 

Dla poprawnych wartości id przy wywoływaniu

1. Dla id = 1

![alt text](https://i.imgur.com/aV7CLeo.png)

2. Dla id = 2

![alt text](https://i.imgur.com/tIz7aXC.png)

W przypadku błędnego id:

![alt text](https://i.imgur.com/MoZCT9T.png)

W przypadku błędnego adresu:

![alt text](https://i.imgur.com/AWBSjh0.png)


















