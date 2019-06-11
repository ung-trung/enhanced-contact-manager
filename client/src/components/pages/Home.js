import React from 'react';
import ContactList from '../contacts/ContactList';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
  return (
    <div className="ui grid">
      <div className="row">
        <div className="ten wide column">
          <ContactForm />
        </div>
        <div className="six wide column">
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Home;
