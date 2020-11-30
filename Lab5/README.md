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
- obietnica jest rozwiązana pomyślnie lub nie - wykonana jest metoda **then**, która podaje rok urodzenia. 
- reakcja na negatywną odpowiedź to **catch**, dzięki której dodany jest tekst kiedy istnieje błąd. Dla mojego przypadku dodaje wiadomość "Błąd! -"
- przy zakończeniu wykonywania Promise zawsze wykonywana jest opcja **finally** bez względu na to, rozwiązanie obietnicy zaszło lub nie. W moim przypadku jest to informacja "Zakończono".


- ### Zadanie 2.2

*Wykorzystaj obiekt Promise do pobrania dwóch różnych dowolnych zasobów i napisz funkcję tworzącą z nich nowy obiekt.* 


---

Zadanie różni się tym, że w efekcie końcowym powstaje nowy obiekt. Funkcja tworzenia obiektu znajduje się poza funkcją zawierającą obiekt Promise. Przyporządkowuje ona wprowadzone wartości pod "Nazwa albumu" oraz "Główny wokalista". Za pomocą **resolve** zostaje ona wywoływania przy spełnieniu obietnicy, wykorzystując pobrane parametry za pomocą metody fetch.

```
function makeANewObject(album, var1){
        return ({"Nazwa Albumu": album, "Główny Wokalista": var1});
    }
```

Na koniec zostaje wyświetlony obiekt dzięki funkcji **then**, jednocześnie w przypadku błędu wykorzystany jest **catch** oraz na zakończenie **finally**.











