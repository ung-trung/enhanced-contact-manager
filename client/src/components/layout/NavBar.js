import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ title, icon }) => {
  return (
    <div className="ui menu">
      <div className="ui container">
        <a href="/" className="item">
          <i className={icon} />
          {title}
        </a>
        <div className="right menu">
          <Link to="/" className="item">
            <i className="home icon" />
            Home
          </Link>
          <Link to="/about" className="item">
            <i className="info circle icon" />
            About
          </Link>
          <Link to="/register" className="item">
            <i className="info registered icon" />
            Register
          </Link>
          <Link to="/login" className="item">
            <i className="info user icon" />
            Login
          </Link>
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
