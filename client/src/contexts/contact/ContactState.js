import React, { useReducer, useCallback } from 'react';
import axios from 'axios';

import ContactContext from './ContactContext';

import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  CLEAR_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get Contacts
  const getContacts = useCallback(async () => {
    try {
      const { data } = await axios.get('api/contacts');

      dispatch({ type: GET_CONTACTS, payload: data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  }, []);

  // Add Contact
  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const { data } = await axios.post('/api/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  };

  // Delete Contact
  const deleteContact = async id => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  };

  // Update Contact
  const editContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const { data } = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );
      dispatch({ type: UPDATE_CONTACT, payload: data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response });
    }
  };

  // Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        getContacts,
        clearContacts,
        addContact,
        deleteContact,
        editContact,
        filtered: state.filtered,
        filterContacts,
        clearFilter,
        error: state.error
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
