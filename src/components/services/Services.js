import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h2 className="section-title">My Services</h2>
      <div is='services-container' className="row row-cols-1 row-cols-md-3">
        <div className="col service-column">
          <div className="card service-block">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col service-column">
          <div className="card service-block">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col service-column">
          <div className="card service-block">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col service-column">
          <div className="card service-block">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col service-column">
          <div className="card service-block">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col service-column">
          <div className="card service-block">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="container-fluid main-box " id="services">
        <h2 className="main-header-text"></h2>

        <div className="container-fluid services-main-box">
          <div className="container ">
            <div className="services-box services-bg">
              <div className="row">
                <div
                  className="col-lg col-md col-sm services-md services-md-odd"
                  data-aos="fade-down-right"
                  data-aos-duration="1500"
                >
                  <div>
                    <i className="fab fa-html5"></i>

                    <h4>Web Design & Development</h4>

                    <p>
                      We design and develop highly visual, responsive websites
                      that caters to the users needs.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg col-md col-sm services-md"
                  data-aos="fade-down-left"
                  data-aos-duration="1500"
                >
                  <div>
                    <i className="fab fa-html5"></i>

                    <h4>Cloud Computing</h4>

                    <p>Server / Api</p>
                  </div>
                </div>

                <div
                  className="col-lg col-md col-sm services-md services-md-odd"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div>
                    <i className="fab fa-html5"></i>

                    <h4>SEO</h4>

                    <p>
                      Search engine optimization is the process of improving the
                      quality and quantity of website traffic to a website or a
                      web page from search engines
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-lg col-md col-sm services-md"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div>
                    <i className="fab fa-html5"></i>

                    <h4>Analytics</h4>

                    <p>
                      A web analytics service that tracks and reports website
                      traffic.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg col-md col-sm services-md services-md-even"
                  data-aos="fade-up-right"
                  data-aos-duration="1500"
                >
                  <div>
                    <i className="fab fa-html5"></i>

                    <h4>App Redesign</h4>

                    <p>
                      A high-quality profound change of a website's or
                      application's look and feel to ensure better user
                      experience.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg col-md col-sm services-md"
                  data-aos="fade-up-left"
                  data-aos-duration="1500"
                >
                  <div>
                    <i className="fab fa-html5"></i>

                    <h4>POS</h4>

                    <p>
                      Web-based point of sale (POS) software is the Software as
                      a Service solution to a retailer’s needs, and it’s a
                      rapidly growing market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
