import React from "react";
import "./Navbar.css";
import logo from "./img/logo.png";
import {$, ready } from "jquery";

const Navbar = () => {
  /* Code for changing active  
            link on clicking */
  var btns = document.getElementsByClassName(".navbar .nav-link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      alert('working');
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  return (
    <nav className="navbar navbar-expand-sm fixed-top container">
      <h2 className="navbar-brand">
        <a href="#top">
          <img src={logo} className="img-fluid" alt="logo" />
        </a>
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
        <ul className="navbar-nav mr-auto justify-content-end" id="nav-cont">
          <li className="nav-item ">
            <a href="#aboutme" className="nav-link active">
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
