import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ title, icon }) => {
  return (
    <div className="large ui menu">
      <div className="ui container">
        <a href="/" className="item">
          <i className={icon} />
          {title}
        </a>
        <div className="right menu">
          <Link to="/" className="item">
            <div className="ui button">
              <i className="home icon" />
              Home
            </div>
          </Link>
          <Link to="/about" className="item">
            <div className="ui button">
              <i className="info circle icon" />
              About
            </div>
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
