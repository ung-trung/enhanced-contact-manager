import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';

import Home from './components/pages/Home';
import About from './components/pages/About';

import ContactState from './contexts/contact/ContactState';

function App() {
  return (
    <>
      <ContactState>
        <Router>
          <NavBar />
          <div className="ui container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </ContactState>
    </>
  );
}

export default App;
