import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth/AuthContext';
import ContactContext from '../../contexts/contact/ContactContext';

const NavBar = ({ title, icon }) => {
  const { isAuthenticated, logoutUser, user } = useContext(AuthContext);
  const { clearContacts } = useContext(ContactContext);

  const renderUser = () => (
    <>
      <Link to="/user/detail" className="ui label item">
        <i className="user icon" /> {user ? user.name : null}
      </Link>

      <div
        className="button ui link item"
        onClick={() => {
          clearContacts();
          logoutUser();
        }}>
        <i className="power off icon" /> Logout
      </div>
    </>
  );
  const renderGuest = () => (
    <>
      <Link to="/register" className="item">
        <i className="info registered icon" />
        Register
      </Link>
      <Link to="/login" className="item">
        <i className="info user icon" />
        Login
      </Link>
    </>
  );

  return (
    <div className="ui menu">
      <div className="ui container">
        <Link to="/" className="item">
          <i className={icon} />
          {title}
        </Link>
        <Link to="/about" className="item">
          <i className="info circle icon" />
          About
        </Link>
        <div className="right menu">
          {isAuthenticated ? renderUser() : renderGuest()}
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

NavBar.defaultProps = {
  title: 'Contact Manager',
  icon: 'large address book icon'
};

export default NavBar;
