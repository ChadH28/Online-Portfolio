import React from "react";
import "./Navbar.css";
import logo from "./img/logo.png";


const Navbar = () => {
  /* Code for changing active  
            link on clicking */
  var btns = document.getElementsByClassName("nav-link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      alert("working");
      var current = document.querySelector(".active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-expand-md navbar-expand-lg fixed-top" id="navbar">
      <div className="container nav-container">
        <a
          className="navbar-brand"
          href="#top"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src={logo} className="img-fluid" alt="logo" title="mylogo" />
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
          <ul className="navbar-nav nav-menu " id="nav-cont">
            <li className="nav-item ">
              <a
                href="#aboutme"
                className="nav-link color1"
                data-aos="fade-right"
                data-aos-duration="1800"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                className="nav-link color1"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#testimonials"
                className="nav-link color1"
                data-aos="fade-right"
                data-aos-duration="2200"
              >
                Testimonials
              </a>
            </li>
            {/* <li className="nav-item">
            <a href="#services" className="nav-link color1">
              Services
            </a>
          </li> */}
            <li className="nav-item">
              <a
                href="#contactme"
                className="nav-link color1"
                data-aos="fade-right"
                data-aos-duration="2400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    /* <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a href="index.html">Home</a></li>
                <li><a className="color1" href="#about">About Us</a></li>
                <li><a className="color2" href="#services">Services</a></li>
                <li><a className="color3" href="#team">Our Sitters</a></li>
                <li><a className="color4" href="#contact">Contact Us</a></li>
                <li>
                  <a className="color1" href="../node registerMk3/public/login.html"
                    >Login</a
                  >
                </li>
                <li>
                  <a className="color2" href="../node registerMk3/public/register.html"
                    >Become a sitter</a
                  >
                </li>
              </ul>
            </nav> */









  );
};

export default Navbar;
