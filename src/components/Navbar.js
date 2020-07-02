import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
  <nav className="navbar bg-light">
    <h1><i className={icon} /> {title}</h1>
    <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/aboutme">About</Link>
        </li>

        <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
            <Link to="/testimonials">Testimonials</Link>
        </li>
        <li className="nav-item">
        <Link to="/contactme">Contact details</Link>
        </li>
    </ul>

</nav>
  );
};

Navbar.defaultProps = {
  title: 'Chad',
  icon: 'fab fa-twitter'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;