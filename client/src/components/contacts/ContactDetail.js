import React, { useContext } from 'react';

import ContactContext from '../../contexts/contact/ContactContext';
import ContactItemContext from '../../contexts/ContactItemContext';

const ContactDetail = () => {
  const { setNeedEdit, contact } = useContext(ContactItemContext);

  const { id, name, email, phone, type } = contact;

  const { deleteContact } = useContext(ContactContext);

  return (
    <div className="ui fluid card">
      <div className="content">
        <div
          className={`ui right floated label ${
            type === 'personal' ? 'green' : 'blue'
          }`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
        <div className="header">{name}</div>
        <div className="description">
          <p>
            <i className="envelope open icon" /> {email}
          </p>
          <p>
            <i className="phone icon" /> {phone}
          </p>
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <button className="ui button" onClick={() => setNeedEdit(true)}>
            Edit
          </button>
          <button
            className="ui negative button"
            onClick={() => deleteContact(id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
