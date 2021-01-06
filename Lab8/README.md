# Lab 8 - React - aplikacja 2

####
##### Wymagania dotyczące ósmego zadania:
####

![alt text](https://i.imgur.com/1ydK2wz.png)  


---
# Wykonanie zadań - dodane komponenty

## react-typical

Pierwszym dodanym komponentem jest React-typical, który dodaje efekt pisania tekstu. Wykorzystałam go na głównej stronie, instalując poprzez polecenie
```
npm install --save react-typical
```
![](https://i.imgur.com/h2XHTbR.png)

W kodzie natomiast zawiera składnię Typical, gdzie ustawiany jest tekst, jaki ma być wyświetlony pod "**steps**", loop - czy ma być zapętlony.

![](https://i.imgur.com/TRPqKLH.png)

Strona główna **Homepage** - oraz wykorzystanie tego komponentu:

![](https://i.imgur.com/BQFYnoP.gif)

Dodane css dla tego tekstu, zostal zmieniony jego kolor, wielkość, font 
(zaimportowana z googleapis):
```
@import url('https://fonts.googleapis.com/css2?family=Bevan&display=swap');
```
a także wyrównanie tekstu.

![](https://i.imgur.com/RmNCAsY.png)

## react-score-indicator

Instalacja komponentu za pomocą polecenia
```
npm install --save react-score-indicator
```

Utworzony został Random.jsx który zawiera trzy różne komponenty. Jeden z nich to Chart. 

![](https://i.imgur.com/xVTIuEQ.png)

Zmodyfikowałam go, wykorzystując dostępne opcje:

![](https://i.imgur.com/TZ5ctuD.png)

Wygląd:

![](https://i.imgur.com/KlG4NOt.png)

## react-awesome-modal

Kolejny komponent to wyskakujące okno, które można modyfikować skąd ma "przylecieć". Zmieniona została wielkość wyskakującego okienka, przycisk oraz kierunek przylotu.

![](https://i.imgur.com/cO1Z0sJ.png)

Import Modala, a następnie stworzenie funkcji otwierających i zamykających okno - zmieniają widoczność.

![](https://i.imgur.com/yWxi6Xd.png)

Utworzenie przycisku i ustawienie tekstu:

![](https://i.imgur.com/Lyv6hVH.png)

Po wciśnięciu:

![](https://i.imgur.com/s55O6ke.png)



## Kalkulator

Na podstronie /calc można znaleźć kalkulator wybrany jako przykład z tego [Githuba](https://github.com/niinpatel/calculator-react/).

Wygląd:

![](https://i.imgur.com/G88GOPE.png)

Modyfikacją kalkulatora jest użycie bootstrapa do zmiany przycisków, a także parę małych zmian w css. Wykorzystana jest funkcja onClick która w zależności od wciśniętego przycisku wykonuje odpowiednią funkcję:

![](https://i.imgur.com/5bwoM6n.png)

Funkcja calculate, która w zależności od operacji aktualizje szare pole. Wykorzystuje try oraz catch w przypadku znalezienia błędu w zapisie:

![](https://i.imgur.com/NlA2Z4m.png)

Resetowanie oraz usuwanie poprzedniej operacji:

![](https://i.imgur.com/XsxTqq1.png)

Wywołanie nagłówka jak i kalkulatora:

![](https://i.imgur.com/s8VJGh9.png)

Definiowanie rzędów przycisków (każdy na takiej samej zasadzie) -- KeyPad.jsx.

![](https://i.imgur.com/8d8DHyK.png)

Poprawne działanie:

![](https://i.imgur.com/j8U7fmH.gif)

Niepoprawny wpis:

![](https://i.imgur.com/pLtKaXP.gif)

# Git difftool

### 1. Dla fragmentu kalkulatora

Aby ukazać w jaki sposób działa git diff utworzyłam dwa nowe commity, w których dla przykładu dodaję przyciski bootstrap zamiast tych oryginalnych. Do konsoli kopiuję numery po prawej stronie.

![](https://i.imgur.com/bqwsvV8.png)

Wynik operacji:

![](https://i.imgur.com/F39oLTv.png)
![](https://i.imgur.com/bhZK7WT.png)

### 2. Dla React score indicator

Dla React score indicator dodałam różne wartości dostępne do modyfikacji, ponieważ nie dodałam ich przed zmianą utworzyłam po raz kolejny nowe commity aby je porównać:

![](https://i.imgur.com/tjOOQmK.png)

Po wykonaniu polecenia git diff:

![](https://i.imgur.com/nGDkJma.png)

### 3. Dla Modala

Tak jak wcześniej wymieniona zmiana przycisku, wielkości, przejścia oraz wielkości okna i tekstu.

![](https://i.imgur.com/FXdn0yk.png)

Wynik w konsoli:

![](https://i.imgur.com/KXgJHHB.png)







