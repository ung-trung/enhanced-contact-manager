import React, { useContext } from 'react';
import ContactContext from '../../contexts/contact/ContactContext';

import ContactItem from './ContactItem';

const ContactList = () => {
  const { contacts, filtered } = useContext(ContactContext);

  const renderContacItem = () => {
    if (filtered) {
      return (
        <div className="ui list">
          {filtered.map(contact => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="ui list">
          {contacts.map(contact => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
        </div>
      );
    }
  };

  return <> {renderContacItem()} </>;
};

export default ContactList;
