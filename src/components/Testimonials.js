import React from "react";
import godwin from "./img/godwin.jpg";
import oslin from "./img/oslin.jpeg";
import sajjaad from "./img/sajjaad.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className='container'>
      <div class='testi-container'>

        <h2 className="section-title">Testimonials</h2>
        <h3 className="section-sub" data-aos="fade-right">What other people think of me or my work</h3>

        <div id="testimonial-slider" className="carousel slide" data-ride="carousel" data-aos="zoom-in-left">
          {/* <ul className="carousel-indicators">
          <li className="indicator active" data-target="#testimonial-slider" data-slide-to="0"></li>
          <li data-target="#testimonial-slider" data-slide-to="1"></li>
          <li data-target="#testimonial-slider" data-slide-to="2"></li>
        </ul> */}

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="Tcard container">
                <div className="card-body">
                  <p className="card-text">
                    <i className="fas fa-quote-left"></i>
                    Chad is a responsive, skilled and confident learner. Over the
                    period that I have interacted with him, I have seen the respect
                    and attention to detail that he accords to whatever he does.
                    Highly recommendable developer.
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>
                <div className="footer">
                  <div className='row'>
                    <div className='col-sm-3'>
                      <img src={godwin} className="card-img-top " alt="..." style={{ width: "100px", height: "100px" }} />
                    </div>
                    <div className='col-sm-8 card-header'>
                      <h6 >Head of Curriculum and Learning</h6>
                      <h6 ><span>- Godwin P Dzvapatsva</span></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="Tcard">
                <div className="card-body">
                  <p className="card-text">
                    <i className="fas fa-quote-left"></i>
                    Chad is a great person to have on one's team a real innovator
                    and critical thinker. He takes the time to dive into things and
                    always gives his everything as there is some perfectionist in
                    him, with all that qualities it relates in his work as a
                    developer making the journey seem effortless.
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>
                <div className="footer">
                  <div className='row'>
                    <div className='col-sm-3'>
                      <img src={oslin} className="card-img-top " alt="..." style={{ width: "100px", height: "100px" }} />
                    </div>
                    <div className='col-sm-8 card-header'>
                      <h6 >Fellow Peer</h6>
                      <h6 ><span>- Oslin Johnson</span></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="Tcard">
                <div className="card-body">
                  <p className="card-text">
                    <i className="fas fa-quote-left"></i>
                    Chad is a critical thinker, a hard worker, a problem solver, and
                    lastly, extremely creative. I am sure that he will be a valuable
                    asset to any and every company out there.
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>
                <div className="footer">
                  <div className='row'>
                    <div className='col-sm-3'>
                      <img src={sajjaad} className="card-img-top " alt="..." style={{ width: "100px", height: "100px" }} />
                    </div>
                    <div className='col-sm-8 card-header'>
                      <h6 >Fellow Peer</h6>
                      <h6 ><span>- Sajjaad Francis</span></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          <a className="carousel-control-prev" href="#testimonial-slider" data-slide="prev">
            {/* <span className="carousel-control-prev-icon"></span> */}
          </a>
          <a className="carousel-control-next" href="#testimonial-slider" data-slide="next">
            {/* <span className="carousel-control-next-icon"></span> */}
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
