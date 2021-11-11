import "./About.css";
import React from "react";

const Experience = () => {
  return (
    <section>
      <div className="row">
        <div className="col-sm-12 col-md-6 education" data-aos="zoom-in-right" data-aos-duration="1800">
        <h4>Summary</h4>
          <ul className="timeline summaryXP">
            <li>
              <div className="card mb-3" data-aos="flip-left">
                <div className="card-body">
                <h5 className="card-title">Chad Hoosain</h5>
                  <p className="card-text">
                  Innovative and deadline-driven Web Developer with 1.5+ years of experience designing and developing web applications in Vuejs, Nodejs and React. Good background in HTML,CSS and its frameworks,Javascript and some its frameworks, and mySQL. Developed strong teamwork and communicative skills over the years.
                  </p>
                  <ul>
                    <li>Kensington, Northern Suburbs</li>
                    <li>#Open to Work</li>
                    <li>Remote & In-office</li>
                    <li>(+27) 84 466 4783</li>
                    <li>chadhoosain@gmail.com</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <h4 className='edu'>Education</h4>
          <ul className="timeline">
            <li>
              <div className="card mb-3" data-aos="flip-left">
                <div className="card-header "><i className="far fa-calendar-check"></i> Feb 2020 - Aug 2020</div>
                <div className="card-body">
                <h5 className="card-title">Lifechoices</h5>
                  <p className="card-text">
                    A 6-month bootcamp where we focused on the following
                    languages HTML,CSS,JavaScript and Python. I feel that I had
                    a wonderful opportunity to grow as a person as this course
                    offers a real hands on approach with access to life coaches
                    and therapists. A place I highly recommend to people who
                    want to learn coding.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card mb-3" data-aos="flip-left">
                <div className="card-header">
                  <i className="far fa-calendar-check"></i> 2016 - 2018
                </div>
                <div className="card-body">
                  <h5 className="card-title">Cape Peninsula University of Technology (Bellville Campus)</h5>
                  <p className="card-text">
                    A university where I spent two years in the faculty of
                    engineering doing my studies and trade to be a Mechanical
                    Engineer. (Course incomplete - Financial constraints)
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card mb-3" data-aos="flip-left">
                <div className="card-header"><i className="far fa-calendar-check"></i> 2011 - 2016</div>
                <div className="card-body">
                <h5 className="card-title">Oude Molen Technical High School</h5>
                  <p className="card-text">
                    A highschool where I spent five great years, made good
                    friends and recieved a bachelors pass.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-6" data-aos="zoom-in-left" data-aos-duration="1700">
          <h4>Work Experience</h4>
          <ul className="timeline">
            <li>
              <div className="card mb-3" data-aos="flip-right">
                <div className="card-header"><i className="far fa-calendar-alt"></i> March 2021 - Present</div>
                <div className="card-body">
                  <h5 className="card-title"><span>Junior web developer Intern </span><br/><em>LC Studio</em></h5>
                  <p className="card-text">Worked on website UX with Vue and backend REST apis</p>
                  <p className="card-text">
                    Was assigned projects to cultivate my teamwork skills and broaden my coding skills
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card mb-3" data-aos="flip-right">
                <div className="card-header"><i className="far fa-calendar-check"></i> Sep 2020 - March 2021</div>
                <div className="card-body">
                  <h5 className="card-title"><span>Junior web developer Intern </span> <br/> <em>Masterparts</em></h5>
                  <p className="card-text">Worked on website UX.</p>
                  <p className="card-text">
                    Was assigned projects to better shape my coding experience.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card mb-3" data-aos="flip-right">
                <div className="card-header"><i className="far fa-calendar-check"></i> Jun 2018 - Jul 2019</div>
                <div className="card-body">
                  <h5 className="card-title"><span>Call Centre Agent</span>  <br/> <em>3i Solutions</em></h5>
                  <p className="card-text">
                    Listened and rated one-on-one calls from the Sales Agent to
                    the Customer and give feedback to the Agent on where they
                    can improve
                  </p>
                  <p className="card-text">
                    Took on cold calls for 2 weeks as a sales agent in the sales department.
                  </p>
                  <p className="card-text">
                    Data Captured customers details onto a google spreadsheet
                    and updated information on the companies database.
                  </p>
                </div>
              </div>
            </li>
            {/* <li>
              <div className="card mb-3" data-aos="flip-right">
                <div className="card-header"><i className="far fa-calendar-check"></i> Dec 2017 - Feb 2018</div>
                <div className="card-body">
                  <h5 className="card-title"><span>Floor & Storeroom packer</span> <br/> <em>Impact Wholesalers</em></h5>
                  <p className="card-text">Did the packing and stock-taking</p>
                  <p className="card-text">
                    Off-loaded heavy boxes and packed accordingly in the
                    company’s Warehouse.
                  </p>
                  <p className="card-text">Made rolls of toilet paper.</p>
                </div>
              </div>
            </li> */}
            {/* <li>
              <div className="card mb-3" data-aos="flip-right">
                <div className="card-header"><i className="far fa-calendar-check"></i> Dec 2014 - Dec 2015</div>
                <div className="card-body">
                  <h5 className="card-title"><span>Sweeper & maintenance</span> <br/> <em>Industaff Solutions</em> </h5>
                  <p className="card-text">
                    Street clean various areas around Cape Town.
                  </p>
                  <p className="card-text">
                    Picked up bags filled with dirt and transported it to the Compact truck.
                  </p>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;