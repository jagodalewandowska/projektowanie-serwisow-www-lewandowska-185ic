import React from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Click from './Click';
import Movies from './Movies';
import Month from './Month';
import Review from './Review';

class App extends React.Component {
  // Inicjacja stanu - state
  constructor(props) {    
    // super - odwołuje się do konstruktora klasy, bez niego
    // nie można wykorzystać this - wynik będzie undefined
    super(props);
    // state - czyli miejsce gdzie przechowywane są wartości
    // które należą do danego komponentu
    this.state = {
      events: [
        { id: 1, title: "Episode IV – A New Hope", year: "1977" },
        { id: 2, title: "Episode V – The Empire Strikes Back", year: "1980" },
        { id: 3, title: "Episode VI – Return of the Jedi", year: "1983" },
        { id: 4, title: "Episode I – The Phantom Menace", year: "1999" },
        { id: 5, title: "Episode II – Attack of the Clones", year: "2002" },
        { id: 6, title: "Episode III – Revenge of the Sith", year: "2005" },
        { id: 7, title: "Episode VII – The Force Awakens", year: "2015" },
        { id: 8, title: "Episode VIII – The Last Jedi", year: "2017" },
        { id: 9, title: "Episode IX – The Rise of Skywalker", year: "2019" }
      ]
    };
  }

  render() {  
  //* Wywoływanie listy filmów używając komponentu potomnego Movies oraz polecenia map */
    const movies = this.state.events.map(mv => {      
      return <Movies key={mv.id} title={mv.title} year={mv.year} />
    })

    return (
      <div className="App">
        {/* Komponenty potomne -- Nawigacja i obrazek */}
        <Nav />
        <Header />

        {/* Komponent potomny, funkcyjny -- Przekazywanie parametru month */}
        <Month month="Grudzień" />
        <hr></hr>

        {/* Komponent potomny -- użycie props i reakcja na dbl click*/}
        <Click onDoubleClick={
          () => alert("Wciśnięto mnie dwa razy!")} />
        <hr></hr>

        {/* Komponent klasowy -- użycie props, listy z wyborem */}
        <Review />
        <br></br>
        <hr></hr>

        {/* Wyświetlanie listy filmów */}
        <h1>List of Star Wars movies:</h1>
        {movies}
      </div>
    )
  }
}

export default App;