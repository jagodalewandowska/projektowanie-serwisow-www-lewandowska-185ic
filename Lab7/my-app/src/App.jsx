import React, {Component} from "react";
import Instruments from './Instruments'
import Composers from './Composers'
import Home from './Home'
import './App.css'
import Header from './Header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Router>
        <div>
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active">Homepage
            <span className="sr-only"></span></Link>
            <Link to="/instruments" className="nav-link">Instruments</Link>
            <Link to="/composers" className="nav-link">Composers</Link>
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