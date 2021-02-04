import React from "react";
import "./About.css";
import CV from "./img/CV.docx";

const About = () => {
  return (
    <section id="aboutme" className="about-me">
      <h2 className="section-title">About Me</h2>

      <p className="section-sub">
        Developer & Entrepreneur in the making, based out of Sunny Cape Town
      </p>
      <div className="row">
        <div className="col-sm-12 paragraph">
          <p>
            An eager, motivated and a business-minded person who always looks
            for positivity and a way to improve - whether it's in certain skills
            or my continuous character development. I like problem solving and
            visual imagery which is why I have a strong liking towards gaming
            and the gaming development aspects of coding. I feel that seeing
            code translating to a functioning product is a work of art.
          </p>
        </div>

        <div className="col-sm-6 bio">
          <h4>Bio</h4>
          <h5>Birthday</h5>
          <p>
            28<sup>th</sup> of October 1997
          </p>
          <h5>Location (suburb)</h5>
          <p>Kensington (Northern Suburbs) , Cape Town</p>
          <h5>Nationality</h5>
          <p>South African</p>
          <h5>Direct Contact</h5>
          <p>(+27) 84 466 4783</p>
          <h5>Willing to relocate</h5>
          <p className="travel">Yes, anywhere locally or abroad</p>
        </div>
        <div className="col-sm-6">
          <h4>Languages</h4>
          <div className="row row-cols-md-3 row-cols-sm-2">
            <div className="col">
              <div
                className="language-card"
                data-toggle="modal"
                data-target="#myModal"
              >
                <div>
                  <i className="fab fa-html5"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                class="language-card"
                data-toggle="modal"
                data-target="#myModal2"
              >
                <div>
                  <i className="fab fa-css3-alt"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="language-card"
                data-toggle="modal"
                data-target="#myModal3"
              >
                <div>
                  <i className="fab fa-bootstrap"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="language-card"
                data-toggle="modal"
                data-target="#myModal4"
              >
                <div>
                  <i className="fab fa-react"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                class="language-card"
                data-toggle="modal"
                data-target="#myModal5"
              >
                <div>
                  <i className="fab fa-python"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                class="language-card"
                data-toggle="modal"
                data-target="#myModal6"
              >
                <div>
                  <i className="fab fa-node"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                class="language-card"
                data-toggle="modal"
                data-target="#myModal7"
              >
                <div>
                  <i className="fas fa-database"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                class="language-card"
                data-toggle="modal"
                data-target="#myModal8"
              >
                <div>
                  <i className="fab fa-js"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 findme">
        <a href={CV} download>
          <button className="btn download-link">DOWNLOAD CV</button>
        </a>
        <a href="#contactme">
          <button className=" btn download-link">HIRE ME</button>
        </a>
      </div>

      <div className="row">
        <div className="col-sm-6 education">
          <h4>Education</h4>
          <ul className="timeline">
            <li>
              <div className="card mb-3">
                <div className="card-header">Lifechoices</div>
                <div className="card-body">
                  <p className="card-text">
                    A 6-month bootcamp where we focused on the following
                    languages HTML,CSS,JavaScript and Python. I feel that I had
                    a wonderful opportunity to grow as a person as this course
                    offers a real hands on approach with access to life coaches
                    and therapists. A place I highly recommend to people who
                    want to learn coding.
                  </p>
                </div>
                <div className="card-footer">
                  <span className="float-right">Feb 2020 - Current</span>
                </div>
              </div>
            </li>
            <li>
              <div className="card mb-3">
                <div class="card-header">
                  Cape Peninsula University of Technology (Bellville Campus)
                </div>
                <div className="card-body">
                  <p className="card-text">
                    A university where I spent two years in the faculty of
                    engineering doing my studies and trade to be a Mechanical
                    Engineer. (Course incomplete)
                  </p>
                </div>
                <div className="card-footer">
                  <span className="float-right">2016 - 2018</span>
                </div>
              </div>
            </li>
            <li>
              <div className="card mb-3">
                <div className="card-header">Oude Molen Technical High School</div>
                <div className="card-body">
                  <p className="card-text">
                    A highschool where I spent five great years, made good
                    friends and recieved a bachelors pass.
                  </p>
                </div>
                <div className="card-footer">
                  <span className="float-right">2011 - 2016</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 experience animate__animated animate__slideInRight animate__slow">
          <h4>Work Experience</h4>
          <ul className="timeline">
            <li>
              <div className="card mb-3">
                <div className="card-header">3i Solutions</div>
                <div className="card-body">
                  <h5 className="card-title">Role</h5>
                  <p className="card-text">
                    Sales, Customer service in Quality Advising and data
                    capturing
                  </p>
                  <h5 className="card-title">Duties</h5>
                  <p className="card-text">
                    Listened and rated one-on-one calls from the Sales Agent to
                    the Customer and give feedback to the Agent on where they
                    can improve
                  </p>
                  <p className="card-text">
                    Took on Sales calls to sell a certain product based in the
                    UK.
                  </p>
                  <p className="card-text">
                    Data Captured customers details onto a google spreadsheet
                    and updated information on the companies database.
                  </p>
                </div>
                <div className="card-footer">
                  <span className="float-right">Jun 2018 - Jul 2019</span>
                </div>
              </div>
            </li>
            <li>
              <div className="card mb-3">
                <div className="card-header">Impact Wholesalers</div>
                <div className="card-body">
                  <h5 className="card-title">Role</h5>
                  <p className="card-text">Floor and storeroom packer</p>
                  <h5 className="card-title">Duties</h5>
                  <p className="card-text">Did the packing and stock-taking</p>
                  <p className="card-text">
                    Off-loaded heavy boxes and packed accordingly in the
                    company’s Warehouse.
                  </p>
                  <p className="card-text">Made rolls of toilet paper.</p>
                </div>
                <div className="card-footer">
                  <span className="float-right">Dec 2017 - Feb 2018</span>
                </div>
              </div>
            </li>
            <li>
              <div className="card mb-3">
                <div className="card-header">Industaff Solutions</div>
                <div className="card-body">
                  <h5 className="card-title">Role</h5>
                  <p className="card-text">Sweeper and Maintenance</p>
                  <h5 className="card-title">Duties</h5>
                  <p className="card-text">
                    Street clean various areas around Cape Town.
                  </p>
                  <p className="card-text">
                    Pick up bags filled with dirt and transport it to the
                    Rubbish Truck.
                  </p>
                </div>
                <div className="card-footer">
                  <span className="float-right">Dec 2014 - Dec 2015</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- modal content(HTML) --> */}
      <div className="modal fade" id="myModal">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <i className="fab fa-html5 img-fluid"></i>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">HTML 5</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <h6 className="modal-title">Description</h6>
                  <p>
                    HTML stands for Hyper Text Markup Language. HTML is the
                    standard markup language for creating Web pages. HTML allows
                    the user to create and structure sections, paragraphs,
                    headings, links, and blockquotes for web pages and
                    applications.
                  </p>
                  <h6 className="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills html progress-bar-striped progress-bar-animated">
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content  --> */}
      {/* <!-- modal content (CSS)--> */}
      <div className="modal fade" id="myModal2">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <i className="fab fa-css3-alt  img-fluid"></i>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">CSS 3</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <h6 className="modal-title">Description</h6>
                  <p>
                    CSS is the language for describing the presentation of Web
                    pages, including colors, layout, and fonts.
                  </p>
                  <h6 className="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills css progress-bar-striped progress-bar-animated">
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(Bootstrap) --> */}
      <div className="modal fade" id="myModal3">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <i className="fab fa-bootstrap  img-fluid"></i>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Bootstrap 4</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <h6 className="modal-title">Description</h6>
                  <p>
                    Bootstrap is a potent front-end framework used to create
                    modern websites, web apps and mobile applications.
                  </p>
                  <h6 class="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills bootstrap progress-bar-striped progress-bar-animated">
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(React) --> */}
      <div className="modal fade" id="myModal4">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <i className="fab fa-react  img-fluid"></i>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">React js</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <h6 className="modal-title">Description</h6>
                  <p>
                    React is an open-source, front end, JavaScript library for
                    building user interfaces and the creation of using reusable
                    user interface components. It is maintained by Facebook and
                    a community of individual developers and companies. React
                    can be used as a base in the development of single-page or
                    mobile applications.
                  </p>
                  <h6 className="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills react progress-bar-striped progress-bar-animated">
                      50%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(Python) --> */}
      <div className="modal fade" id="myModal5">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <i className="fab fa-python  img-fluid"></i>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Python</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <h6 className="modal-title">Description</h6>
                  <p>
                    Python is an interpreted, high-level and general-purpose
                    programming language. Python's design philosophy emphasizes
                    code readability with its notable use of significant
                    whitespace. Its language constructs and object-oriented
                    approach aim to help programmers write clear, logical code
                    for small and large-scale projects.
                  </p>
                  <h6 className="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills python progress-bar-striped progress-bar-animated">
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(node) --> */}
      <div class="modal fade" id="myModal6">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
                <i id="node" className="fab fa-node  img-fluid"></i>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Node js</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
                  <h6 class="modal-title">Description</h6>
                  <p>
                    Node.js is used for traditional web sites and back-end API
                    services, but was designed with real-time, push-based
                    architectures in mind.
                  </p>
                  <h6 class="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills node progress-bar-striped progress-bar-animated">
                      65%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(sql) --> */}
      <div class="modal fade" id="myModal7">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
                <i className="fas fa-database  img-fluid"></i>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">mySQL database</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
                  <h6 class="modal-title">Description</h6>
                  <p>
                    MySQL is an open-source relational database management system like storing, manipulating and retrieving data in databases.
                  </p>
                  <h6 class="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills mysql progress-bar-striped progress-bar-animated">
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(javascript) --> */}
      <div class="modal fade" id="myModal8">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
                <i className="fab fa-js  img-fluid"></i>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">JavaScript</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
                  <h6 class="modal-title">Description</h6>
                  <p>
                    JavaScript is a text-based programming language used both on
                    the client-side and server-side that allows you to make web
                    pages interactive.
                  </p>
                  <h6 class="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills js progress-bar-striped progress-bar-animated">
                      60%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
    </section>
  );
};

export default About;
