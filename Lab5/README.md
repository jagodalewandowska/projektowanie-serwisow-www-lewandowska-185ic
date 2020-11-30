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

Za pomocą funkcji zwrotnej pobierane są wartości rok oraz wiek, a następnie następuje wywołana zostaje ona przekazując wynik działania, jakim jest rok urodzenia piosenkarki. W wywołaniu calculateYear zostają wyświetlone wyniki oraz dane wprowadzone - by sprawdzić, czy poprawnie zostały pobrane z obiektu JSON. Część kodu na której operuję w tym zadaniu:

```
{
  "id": 2,
  "artist": "ABBA",
  "albums": [
    {
      "id": 21,
      "title": "Arrival",
      "year": 1976,
      "favourite": "Dancing Queen",
      "ages": [
        {
          "Agnetha": 26,
          "Björn": 31,
          "Benny": 30,
          "Anni-Frid": 31
        }
      ],
      "charts": [
        {
          "Australia": 1,
          "UK": 1,
          "Japan": 3
        }
      ]
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
      "charts": [
        {
          "Australia": 5,
          "UK": 1,
          "Japan": 9
        }
      ]
    }
  ]
}
```

Zadaniem było pobranie danych zagnieżdżonych,








