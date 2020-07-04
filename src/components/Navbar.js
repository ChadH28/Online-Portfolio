import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
  <nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
    <h2 class="navbar-brand" href="#"><i className={icon} /> {title}</h2>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link to="/Student-Portfolio" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/aboutme" class="nav-link">About</Link>
        </li>
        <li class="nav-item">
          <Link to="/portfolio" class="nav-link">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link to="/testimonials" class="nav-link">Testimonials</Link>
        </li>
        <li class="nav-item">
          <Link to="/contactme" class="nav-link">Contact details</Link>
        </li>
      </ul>
    </div>
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