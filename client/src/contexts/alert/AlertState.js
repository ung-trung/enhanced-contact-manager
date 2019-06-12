import React, { useReducer, useCallback } from 'react';
import AlertContext from './AlertContext';
import alertReducer from './alertReducer';
import uuid from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const initialState = [];

const AlertState = props => {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = useCallback((msg, type, timeout = 5000) => {
    const id = uuid.v4();

    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      });
    }, timeout);
  }, []);

  return (
    <AlertContext.Provider value={{ alerts: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
