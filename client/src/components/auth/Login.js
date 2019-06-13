import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../contexts/auth/AuthContext';
import AlertContext from '../../contexts/alert/AlertContext';
import { Link } from 'react-router-dom';

import Alert from '../layout/Alert';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAlert } = useContext(AlertContext);

  const {
    loginUser,
    error,
    clearErrors,
    isAuthenticated,
    loadUser
  } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error !== null && error !== undefined) {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [clearErrors, error, isAuthenticated, loadUser, props.history, setAlert]);

  const onSubmit = e => {
    e.preventDefault();
    loginUser({
      email,
      password
    });
  };

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="row" />
      <div className="row" />
      <div className="row" />
      <div className="row">
        <div className="six wide column">
          <form className="ui form" onSubmit={onSubmit}>
            <h2 className="ui header">Log-in to your account</h2>
            <div className="ui divider" />
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="ui blue fluid button"
              onSubmit={onSubmit}>
              Log in
            </button>
          </form>
          <div className="ui divider" />
          <div className="ui fluid label">
            New to us? <Link to="/register">Sign Up</Link>
          </div>
          <Alert />
        </div>
      </div>
    </div>
  );
};

export default Login;
