import React from "react";
import "./Navbar.css";
import logo from './img/logo.png'

const Navbar = () => {

  // Get the container element
  var btnContainer = document.getElementsByClassName("navbar-nav");

  // Get all buttons with class="btn" inside the container
  var btns = document.getElementsByClassName("nav-link");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  } 

  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <h2 className="navbar-brand">
        <a href="#top"><img src={logo} alt='dummy img'/></a>
      </h2>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <i className="fas fa-bars"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto justify-content-end" id='nav-cont'>
          <li className="nav-item ">
            <a href="#aboutme" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a href="#contactme" className="nav-link">
              Contact details
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
