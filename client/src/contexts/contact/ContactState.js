import React, { useReducer } from 'react';
import uuid from 'uuid';

import ContactContext from './ContactContext';

import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'jill jone',
        email: 'jone@gmail.com',
        phone: '123456789',
        type: 'professional'
      },
      {
        id: 2,
        name: 'jillaa jone',
        email: 'jone123@gmail.com',
        phone: '123456789',
        type: 'personal'
      },
      {
        id: 3,
        name: 'jill jone',
        email: 'jone@gmail.com',
        phone: '123456789',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact

  // Clear Current Contact

  // Update Contact
  const editContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        editContact
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
