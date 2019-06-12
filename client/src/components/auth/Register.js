import React, { useContext, useState, useEffect } from 'react';
import AlertContext from '../../contexts/alert/AlertContext';
import AuthContext from '../../contexts/auth/AuthContext';

import Alert from '../layout/Alert';

const Register = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const { setAlert } = useContext(AlertContext);

  const {
    registerUser,
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
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      registerUser({
        name: `${firstName} ${lastName}`,
        email,
        password
      });
    }
  };

  return (
    <>
      <div className="ui column stackable center page grid">
        <div className="row" />
        <div className="row" />
        <div className="row">
          <div className="three wide column" />
          <div className="ten wide column">
            <form className="ui form" onSubmit={onSubmit}>
              <h2 className="ui center aligned header">Account Register</h2>
              <div className="ui divider" />

              <div className="field">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  placeholder="First Name"
                  onChange={e => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="field">
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={e => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  name="password2"
                  value={password2}
                  placeholder="Confirm your password"
                  onChange={e => setPassword2(e.target.value)}
                  minLength={6}
                />
              </div>
              <button
                type="submit"
                className="ui blue fluid button"
                onSubmit={onSubmit}>
                Register
              </button>
            </form>
            <Alert />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
