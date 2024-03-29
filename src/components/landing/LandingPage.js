import React from "react";
import "./LandingPage.css";
import chad from "../assets/landing-img.png";
import { data } from "./LandingPage.data";

const LandingPage = () => {
  textSequence3(0);
  function textSequence3(i) {
    if (data.content.personality_span.length > i) {
      setTimeout(function () {
        document.getElementById("span-sequence").innerHTML =
          data.content.personality_span[i];
        textSequence3(++i);
      }, 5000);
    } else if (data.content.personality_span.length === i) {
      // Loop
      textSequence3(0);
    }
  }

  return (
    <section id="landing-page" className="container">
      <div className="row">
        <div
          className="col-sm-5 col-md-4 col-lg-4 hero-img"
          data-aos="zoom-out-down"
        >
          <img src={chad} alt="CH" className="landing-img" />
        </div>
        <div className="col-sm-7 col-md-8 col-lg-8 hero">
          <h1
            // id="sequence"
            className="animate__animated animate__bounce header "
          >
            <strong>{data.content.heading}</strong>
          </h1>
          {/* <hr /> */}
          <p
            // id="sub-sequence"
            className="sub-header"
            data-aos="zoom-in-right"
          >
            <span id="span-sequence" data-aos="zoom-out-down">
              Assertive
            </span>{" "}
            <span className="profession">Web Developer</span>
          </p>
          <h2 data-aos="zoom-out-up">{data.content.sub_heading}</h2>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
