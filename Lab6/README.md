# Lab 6 - React - aplikacja nr 1

####
#### Wymagania dotyczące czwartego zadania:
####

![alt text](https://i.imgur.com/iGSHbAF.png)  


---
# Realizacja zadania

Celem zadania było stworzenie własnej aplikacji oraz utworzenie różnych typów komponentów (funkcyjnych, klasowych, nadrzędnych i potomnych). W swojej aplikacji wykorzystałam również Bootstrapa do tworzenia nagłówków, list czy przycisków.

![alt text](https://i.imgur.com/tWsuqDG.png)  

W pliku index.js znajduje się import Bootstrapa, który również musiał być wcześniej zainstalowany.

```
import 'bootstrap/dist/css/bootstrap.css';
```

W zadaniu stworzyłam następujące komponenty:

- **App.jsx** - który jest komponentem **klasowym** oraz **nadrzędnym**, w którym zagnieżdżone są inne komponenty potomne. Posiada swój plik .css, w którym importowane są font oraz ustawianie jest wyśrodkowanie tekstu oraz do jakich tagów jest przypisywany wybrany font.
- **Nav.jsx** oraz **Header.jsx** - obydwa komponenty są **potomnymi**, dodanymi w celu zachowania estetyki strony. Wykorzystują bootstrapa, znajduje się tam odnośnik do Github. Komponent Header posiada swój plik .css.
- **Month.jsx** - komponent **potomny**, **funkcyjny**. Do niego przekazywany jest wartość "month" z komponentu nadrzędnego App.jsx, użycie props. 
- **Click.jsx** - komponent **potomny**, po wciśnięciu przycisku za pomocą props wyświetlane jest powiadomienie o wciśnięciu podwójnym elementu.
- **Review.jsx** - komponent **klasowy**, zawiera konstruktor i przekazywane parametry są za pomocą props. Po wyborze z listy i wciśnięciu przycisku "Submit" wyświetlany jest komunikat o ulubionym filmie, a także zapis ten jest w konsoli. Użyty został również Bootstrap.
- **Movies.jsx** - komponent **potomny** służący do wyświetlania listy zawartej w komponencie nadrzędnym - App.jsx, w którym znajduje się miejsce przechowywanych wartości (state). Dla tego komponentu istnieje plik .css dodający marginesy.

## Komponent App


W komponencie na samym początku definiowana jest klasa, która zawiera konstruktor, a także wymagająca odwołania super(props). Tutaj również przechowywane są elementy wyświetlane później na stronie. Zawierają one id, tytuł oraz rok. 

```
		...
this.state = {
      events: [
        { id: 1, title: "Episode IV – A New Hope", year: "1977" },
        { id: 2, title: "Episode V – The Empire Strikes Back", year: "1980" },
        { id: 3, title: "Episode VI – Return of the Jedi", year: "1983" }, ...
                ...
```

W dalszej części wywoływane są filmy przy użyciu:
```
this.state.events.map
```
Komponent App zwraca za pomocą komponentu potomnego Movies sformatowane wartości w liście. 

![alt text](https://i.imgur.com/I4kl9M0.png)


## Komponent Nav oraz Header

Są to proste komponenty potomne, utworzone w celu dodania panelu nawigacyjnego oraz tzw. "nagłówka". Są one generowane w komponencie nadrzędnym App.jsx i wyglądają następująco:

![alt text](https://i.imgur.com/CMWTiin.png)  

W pliku **Header.css** ustawiana jest wysokość i pozycja nagłówka wraz z tym jakim obrazkiem ma być wypełniony. Ustawiony jest również padding i kolor tekstu. W komponencie App.jsx:

```
<Nav />
<Header />
```


## Komponent Month

Jest to jak wyżej wspomniany komponent funkcyjny, będący również potomnym, który wartość **month** otrzymuje z komponentu nadrzędnego App.jsx zwracając go z tekstem "Miesiąc to".

W komponencie App, wartość można zamienić na jakąkolwiek inną.

```
<Month month="Grudzień" />
```

![alt text](https://i.imgur.com/Ym4J1a8.png)  

Wymagane jest również dodanie propTypes, by upewnić się że tekst na wyjściu jest typu String. w przeciwnym wypadku zwrócony będzie błąd.

## Komponent Click

Komponent potomny, który ma za zadanie dodanie przycisku, po podwójnym kliknięciu wyświetli się powiadomienie na ekranie. 

![alt text](https://i.imgur.com/HReiE1O.png)  

Wywołanie następuje w komponencie nadrzędnym App za pomocą fragmentu kodu:
```
<Click onDoubleClick={
          () => alert("Wciśnięto mnie dwa razy!")} />
```
Efekt na ekranie:

![alt text](https://i.imgur.com/zKksvwd.png)  


## Komponent Review

Komponent klasowy, wywołany w prosty sposób w nadrzędnym poprzez:
```
<Review />
```

![alt text](https://i.imgur.com/23U69pJ.png)

Zawiera on konstruktor, konieczny super(props), wartość wejściową na liście oraz funkcje zarządzające kliknięciem oraz zmiany stanu, kiedy wartość zostanie zmieniona. Umieszczona została lista z filmami, które mają nadaną wartość value.

```
...
	<select value={this.state.value} onChange={this.handleChange}>
              <option value="A New Hope">A New Hope</option>
              												...
```

W zalezności, która została wybrana zostaje wyświetlony komunikat - dla wartości *Return of the Jedi*:

![alt text](https://i.imgur.com/c2rWaT7.png)

Wykorzystany również został przycisk Button z Bootstrap, który ustawiłam na kolor "info". Aby go dodać, należy również zimportować go, a następnie pamiętać o pisowni z wielkiej litery.

```
import Button from 'react-bootstrap/Button';
		...

<Button type="submit" variant="info" value="Submit">Submit</Button>
```

## Komponent Movies

Komponent Movies jest komponentem potomnym, który otrzymując listę filmów z App wstawia je w listę dodając "Tytuł" oraz "Premiera", a następnie pamiętając o propTypes by zapewnić format String odsyłany jest do App.jsx -- gdzie zostaje wyświetlony za pomocą funkcji map oraz fragmentu kodu:
```
<h1>List of Star Wars movies:</h1>
{movies}
```

Do wyświetlania listy filmów skorzystałam z Bootstrapa, a więc kod wygląda następująco:
```
const Movies = props => (
    <div className="List">
        <ul className="list-group">
            <li className="list-group-item list-group-item-info list-group-item-action">
                <b>Tytuł: </b>{props.title}<br></br>
                <b>Premiera: </b>{props.year}</li><br></br>
        </ul>
    </div>
);
```
Fragment listy filmów na stronie:

![alt text](https://i.imgur.com/I4kl9M0.png)

Komponent jest również formatowany za pomocą pliku Movies.css, gdzie lista jest wyśrodkowywana oraz nadawane są rodzaje fontów do poszczególnych tagów.