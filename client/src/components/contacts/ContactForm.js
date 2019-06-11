import React, { useState, useContext } from 'react';
import ContactContext from '../../contexts/contact/ContactContext';

const ContactForm = () => {
  const [firstName, setFirsName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('personal');

  const { addContact } = useContext(ContactContext);

  const onSubmit = e => {
    e.preventDefault();
    addContact({ name: `${firstName} ${lastName}`, email, phone, type });
  };

  return (
    <>
      <h1 className="ui center aligned header">Add Contact</h1>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirsName(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <h5>Contact Type:</h5>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              value="personal"
              onChange={e => setType(e.target.value)}
              checked={type === 'personal'}
            />
            <label>Personal</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              value="professional"
              onChange={e => setType(e.target.value)}
              checked={type === 'professional'}
            />
            <label>Professional</label>
          </div>
        </div>
        <button className="ui blue button" type="submit">
          Add Contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
