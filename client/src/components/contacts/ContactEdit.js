import React, { useState, useContext } from 'react';
import ContactItemContext from '../../contexts/ContactItemContext';
import ContactContext from '../../contexts/contact/ContactContext';

const ContactEdit = () => {
  const { contact, setNeedEdit } = useContext(ContactItemContext);
  const { id, name, email, phone, type } = contact;

  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newType, setNewType] = useState(type);

  const { editContact } = useContext(ContactContext);

  const onSubmit = e => {
    e.preventDefault();
    editContact({
      id,
      name: newName,
      email: newEmail,
      phone: newPhone,
      type: newType
    });
    setNeedEdit(false);
  };

  return (
    <div className="ui segment">
      <h3 className="header">
        Edit Contact for <strong>{name} </strong>
      </h3>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={e => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Email"
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Phone"
            value={newPhone}
            onChange={e => setNewPhone(e.target.value)}
          />
        </div>

        <h5>Contact Type:</h5>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              value="personal"
              onChange={e => setNewType(e.target.value)}
              checked={newType === 'personal'}
            />
            <label>Personal</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              value="professional"
              onChange={e => setNewType(e.target.value)}
              checked={newType === 'professional'}
            />
            <label>Professional</label>
          </div>
        </div>
        <div className="ui two buttons">
          <button
            className="ui button"
            onClick={() => {
              setNeedEdit(false);
            }}>
            Cancel
          </button>
          <button className="ui blue button" type="submit">
            Edit Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactEdit;
