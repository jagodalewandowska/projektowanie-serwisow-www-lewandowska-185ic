import React, {Component} from "react";
import './App.css';
import Home from './Home'
import MyApp from './MyApp'
import Typical from 'react-typical'
import wym from './images/wymagania.png';

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

class App extends Component {
  render(){
    return (
      <Router>
        <div>
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active">Homepage</Link>
            <Link to="/app" className="nav-link">App</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/app">
            <MyApp />
          </Route>
          <Route path="/">
            <div className="typical">         
              <Typical
                steps={['Laboratorium 8', 1000, 
                'Laboratorium 8 - Analiza kodu źródłowego', 200,
                'Wykorzystanie git difftool', 800]}
                loop={Infinity}
              />            
            </div>  
            <Home />      
            <img src={wym} alt="wymagania"/>    
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
