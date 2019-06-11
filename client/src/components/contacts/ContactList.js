import React, { useContext } from 'react';
import ContactContext from '../../contexts/contact/ContactContext';
import uuid from 'uuid';

import ContactItem from './ContactItem';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="ui list">
      {contacts.map(contact => (
        <ContactItem contact={contact} key={uuid()} />
      ))}
    </div>
  );
};

export default ContactList;
