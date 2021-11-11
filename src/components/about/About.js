import React from "react";
import Experience from "./Experience";
import Languages from "./Languages";
import "./About.css";
import CV from "../assets/Resume.pdf";
import chad from "../assets/chad-removebg.png"



const About = () => {
  return (
    <section id="aboutme" className="container about-me">
      <div className="row">
        <div className="col-sm-8" data-aos="fade-left">
          <h2 className="section-title">About Me</h2>
          <h3 className="section-sub" data-aos="fade-right">
            Developer & Entrepreneur in the making, based out of Sunny Cape Town
          </h3>
          <p className='paragraph'>
            An eager, motivated and a business-minded person who always looks
            for positivity and a way to improve whether it's in certain skills
            or my continuous character development. I like problem solving and
            visual imagery which is why I have a strong liking towards gaming
            and the gaming development aspects of coding. I feel that seeing
            code translating to a functioning product is a work of art.
          </p>
          <div className="bio" data-aos="fade-right">
          {/* <h4>Bio</h4> */}
          <div className='row'>
            <div className='col-sm-6'>
              <h5><i className="fas fa-birthday-cake"></i> Birthday</h5>
              <p>
                28<sup>th</sup> October 1997
              </p>
              <h5><i className="fas fa-map-marked-alt"></i> Location (suburb)</h5>
              <p>Northern Suburbs, Cape Town</p>
              <h5><i className="fas fa-plane-departure"></i> Willing to relocate</h5>
              <p className="travel">Yes, anywhere locally or abroad</p>
            </div>
            <div className='col-sm-6'>
              <h5><i className="fas fa-globe-africa"></i> Nationality</h5>
              <p>South African</p>
              <h5><i className="fas fa-sms"></i> Direct Contact</h5>
              <p>(+27) 84 466 4783</p>
            </div>
          </div>
        </div>
          <div className="row findme">
            <div className="col-sm-6">
              <a href={CV} download>
                <button className="btn download-link" data-aos="fade-right">DOWNLOAD CV</button>
              </a>
            </div>
            <div className="col-sm-6">
              <a href="#contactme">
                <button className=" btn download-link" data-aos="fade-left">HIRE ME</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-4 bio-img-container" data-aos="fade-right">
          <img src={chad} alt="CH" className="img-fluid bio-img" />
        </div>
        <div className="col-sm-12 language">
          <hr />
          <Languages />
        </div>
      </div>
      <Experience />
    </section>
  );
};

export default About;
