import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import UserDetail from './components/pages/UserDetail';

import ContactState from './contexts/contact/ContactState';
import AuthState from './contexts/auth/AuthState';
import AlertState from './contexts/alert/AlertState';

import setAuthToken from './utils/setAuthToken';

import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <NavBar />
            <div className="ui container">
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute
                  exact
                  path="/user/detail"
                  component={UserDetail}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
