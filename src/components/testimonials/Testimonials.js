/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Testimonials.css";
import { data } from "./Testimonials.data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="container">
      <h2 className="section-title" data-aos="fade-left">
        Testimonials
      </h2>
      <h3 className="section-sub" data-aos="fade-right">
        What other people think of me or my work
      </h3>
      <div className="row" data-aos="zoom-in-left">
        <div className="col-sm-12 col-md-12">
          <div
            id="testimonial-slider"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {data.testimonials.map((testimonial, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""} `}
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="Tcard">
                        <div className="card-body">
                          <p className="card-text quote">
                            <i className="fas fa-quote-left" />
                            {testimonial.content}
                            <i className="fas fa-quote-right" />
                          </p>
                        </div>
                        <div>
                          <h6>
                            <span className="title">{testimonial.person}</span>{" "}
                            <span className="subtitle">
                              {testimonial.person_position}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div>
                        <img
                          src={testimonial.image}
                          className="card-img-top img-fluid"
                          alt={`${testimonial.person} - ${testimonial.person_position}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <a
                className="carousel-control-prev"
                href="#testimonial-slider"
                data-slide="prev"
              />
              <a
                className="carousel-control-next"
                href="#testimonial-slider"
                data-slide="next"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
