import React, { useContext, useEffect } from 'react';
import ContactList from '../contacts/ContactList';
import ContactForm from '../contacts/ContactForm';
import ContactFilterForm from '../contacts/ContactFilterForm';
import AuthContext from '../../contexts/auth/AuthContext';

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <div className="ui grid">
      <div className="row">
        <div className="ten wide column">
          <ContactForm />
        </div>
        <div className="six wide column">
          <ContactFilterForm />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Home;
