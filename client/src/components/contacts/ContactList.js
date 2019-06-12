import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactContext from '../../contexts/contact/ContactContext';

import ContactItem from './ContactItem';

const ContactList = () => {
  const { contacts, filtered } = useContext(ContactContext);

  const renderContacItem = () => {
    if (filtered) {
      return (
        <>
          {filtered.map(contact => (
            <CSSTransition key={contact.id} timeout={1000} classNames="item">
              <ContactItem contact={contact} key={contact.id} />
            </CSSTransition>
          ))}
        </>
      );
    } else {
      return (
        <>
          {contacts.map(contact => (
            <CSSTransition key={contact.id} timeout={1000} classNames="item">
              <ContactItem contact={contact} key={contact.id} />
            </CSSTransition>
          ))}
        </>
      );
    }
  };

  return (
    <div className="ui list">
      <TransitionGroup> {renderContacItem()} </TransitionGroup>
    </div>
  );
};

export default ContactList;
