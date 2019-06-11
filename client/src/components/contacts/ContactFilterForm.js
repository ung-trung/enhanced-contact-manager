import React, { useContext, useState } from 'react';
import ContactContext from '../../contexts/contact/ContactContext';

const ContactFilterForm = () => {
  const { filterContacts, clearFilter } = useContext(ContactContext);
  const [text, setText] = useState('');

  return (
    <form className="ui form">
      <div className="field">
        <input
          type="text"
          name="form filter"
          placeholder="Filter Contacts..."
          onChange={e => {
            if (e.target.value) {
              setText(e.target.value);
              filterContacts(text);
            } else {
              clearFilter();
            }
          }}
        />
      </div>
    </form>
  );
};

export default ContactFilterForm;
