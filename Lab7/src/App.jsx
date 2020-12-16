import React, {Component} from "react";
import Instruments from './Instruments'
import Composers from './Composers'
import Home from './Home'
import './App.css'
import Header from './Header'

import {
  /* główny komponent */
  BrowserRouter as Router,
  /* Renderowanie pierwszej lokalizacji która pasuje - trasa */
  Switch,
  /* Definiowanie ścieżek */
  Route,
  /* Przełączanie między ścieżkami */
  Link
} from "react-router-dom";

/* Trzy komponenty -> Homepage, Instruments, Composers*/
class App extends Component {
  render(){
    return (
      <Router>
        <div>
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active">Homepage</Link>
            <Link to="/instruments" className="nav-link active">Instruments</Link>
            <Link to="/composers" className="nav-link active">Composers</Link>
          </div>
        </nav>
        <Header />
        <Switch>
          <Route path="/instruments">
            <Instruments />
          </Route>
          <Route path="/composers">
            <Composers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}
export default App;