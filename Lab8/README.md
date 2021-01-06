# Lab 8 - React - aplikacja 2

####
##### Wymagania dotyczące ósmego zadania:
####

![alt text](https://i.imgur.com/1ydK2wz.png)  


---
# Wykonanie zadań

### Dodane komponenty

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

## Kalkulator

Na podstronie /calc można znaleźć kalkulator wybrany jako przykład z tego [Githuba](https://github.com/niinpatel/calculator-react/). Wybrany on został jako prosty przykład, który jednocześnie można wykorzystać w testowaniu narzędzia git difftool.

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





