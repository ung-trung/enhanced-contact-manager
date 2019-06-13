import React, { useContext, useEffect } from 'react';

import ContactContext from '../../contexts/contact/ContactContext';

import ContactItem from './ContactItem';

const ContactList = () => {
  const { contacts, filtered, getContacts } = useContext(ContactContext);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const renderContacItem = () => {
    if (filtered) {
      return (
        <>
          {filtered.map(contact => (
            <ContactItem contact={contact} key={contact._id} />
          ))}
        </>
      );
    } else if (contacts && contacts.length > 0) {
      return (
        <>
          {contacts.map(contact => (
            <ContactItem contact={contact} key={contact._id} />
          ))}
        </>
      );
    } else if (contacts && contacts.length === 0) {
      return <div className="ui label fluid red">Please add a contact</div>;
    }
  };

  return <div className="ui list">{renderContacItem()}</div>;
};

export default ContactList;
