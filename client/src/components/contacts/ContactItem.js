import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ContactItemContext from '../../contexts/ContactItemContext';

import ContactEdit from './ContactEdit';
import ContactDetail from './ContactDetail';

const ContactItem = props => {
  const [needEdit, setNeedEdit] = useState(false);
  const { contact } = props;

  const renderContactItem = () => {
    if (!needEdit) {
      return <ContactDetail />;
    } else {
      return <ContactEdit />;
    }
  };

  return (
    <ContactItemContext.Provider value={{ contact, needEdit, setNeedEdit }}>
      {renderContactItem()}
    </ContactItemContext.Provider>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
