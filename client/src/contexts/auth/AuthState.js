import React, { useReducer, useCallback } from 'react';
import AuthContext from './AuthContext';
import authReducer from './authReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';
import { isArray } from 'util';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  error: null,
  user: null
};

const AuthState = props => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = useCallback(async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get('/api/auth');
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  }, []);

  // Register User
  const registerUser = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const { data } = await axios.post('/api/users', formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: data });
    } catch (err) {
      const { errors } = err.response.data;

      if (isArray(errors)) {
        errors.forEach(error =>
          dispatch({ type: REGISTER_FAIL, payload: error.msg })
        );
      }

      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };

  // Login User
  const loginUser = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const { data } = await axios.post('/api/auth', formData, config);
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };

  // Logout
  const logoutUser = () => dispatch({ type: LOGOUT });

  // Clear Error
  const clearErrors = useCallback(() => dispatch({ type: CLEAR_ERRORS }), []);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        user: state.user,
        registerUser,
        clearErrors,
        loadUser,
        loginUser,
        logoutUser
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
