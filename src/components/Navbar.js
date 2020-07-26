import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-sm fixed-top">
    <h2 className="navbar-brand"><a href="#top">Chad</a></h2>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="#aboutme" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className="nav-link">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#testimonials" className="nav-link">Testimonials</a>
        </li>
        <li className="nav-item">
          <a href="#contactme" className="nav-link">Contact details</a>
        </li>
      </ul>
    </div>
</nav>
  );
};


export default Navbar;