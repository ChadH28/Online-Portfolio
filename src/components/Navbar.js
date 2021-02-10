import React from "react";
import "./Navbar.css";
import logo from "./img/logo.png";
import {$} from "jquery";

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
        <a  className="navbar-brand" href="#top">
          <img src={logo} className="img-fluid" alt="logo" title='mylogo' />
        </a>
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
        <ul className="navbar-nav justify-content-end" id="nav-cont">
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
          {/* <li className="nav-item">
            <a href="#services" className="nav-link">
              Services
            </a>
          </li> */}
          <li className="nav-item">
            <a href="#contactme" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
