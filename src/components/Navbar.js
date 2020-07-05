import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ title }) => {
  return (
  <nav class="navbar navbar-expand-sm navbar-dark bg-secondary fixed-top">
    <h2 class="navbar-brand">{title}</h2>
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
  title: '< Chad />',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;