import React from "react";
import "./About.css";
import CV from "./img/Resume.pdf";
import html5 from "./img/html5.png";
import css3 from "./img/css3.png";
import bootstrap4 from "./img/bootstrap.png";
import python from "./img/python.png";
import react from "./img/reactjs.png";
import nodejs from "./img/nodejs.png";
import javascript from "./img/javascript5.png";
import sql from "./img/database.jpeg";
import vue from "./img/vuejs.png";


const About = () => {

  return (
    <section id="aboutme" className="container about-me">
      <div className="row">
        <div className="col-sm-6" data-aos="fade-left">
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

        <div className="col-sm-6 bio" data-aos="fade-right">
          <h4>Bio</h4>
          <h5><i className="fas fa-birthday-cake"></i> Birthday</h5>
          <p>
            28<sup>th</sup> October 1997
          </p>
          <h5><i className="fas fa-map-marked-alt"></i> Location (suburb)</h5>
          <p>Northern Suburbs, Cape Town</p>
          <h5><i className="fas fa-globe-africa"></i> Nationality</h5>
          <p>South African</p>
          <h5><i className="fas fa-sms"></i> Direct Contact</h5>
          <p>(+27) 84 466 4783</p>
          <h5><i className="fas fa-plane-departure"></i> Willing to relocate</h5>
          <p className="travel">Yes, anywhere locally or abroad</p>
        </div>
        <div className="col-sm-12 language">
         <hr/>
          <h4>Languages</h4>
          <div className="row row-cols-md-2 row-cols-lg-5 row-cols-sm-2 language-container">
            <div className="col" data-aos="fade-down-right">
              <div
                className="language-card html5"
                data-toggle="modal"
                data-target="#myModal"
                title="expand">
                <div>
                  <i className="fab fa-html5"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-down">
              <div
                className="language-card css3"
                data-toggle="modal"
                data-target="#myModal2"
                title="expand"
              >
                <div>
                  <i className="fab fa-css3-alt"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-down-left">
              <div
                className="language-card bootstrap4"
                data-toggle="modal"
                data-target="#myModal3"
                title="expand"
              >
                <div>
                  <i className="fab fa-bootstrap"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div
                className="language-card reactjs"
                data-toggle="modal"
                data-target="#myModal4"
                title="expand"
              >
                <div>
                  <i className="fab fa-react"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up">
              <div
                className="language-card pythonJ"
                data-toggle="modal"
                data-target="#myModal5"
                title="expand"
              >
                <div>
                  <i className="fab fa-python"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-left">
              <div
                className="language-card nodejs"
                data-toggle="modal"
                data-target="#myModal6"
                title="expand"
              >
                <div>
                  <i className="fab fa-node"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up-right">
              <div
                className="language-card database"
                data-toggle="modal"
                data-target="#myModal7"
                title="expand"
              >
                <div>
                  <i className="fas fa-database"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up">
              <div
                className="language-card javascript"
                data-toggle="modal"
                data-target="#myModal8"
                title="expand"
              >
                <div>
                  <i className="fab fa-js"></i>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-up-left">
              <div
                className="language-card vuejs"
                data-toggle="modal"
                data-target="#myModal9"
                title="expand"
              >
                <div>
                  <i className="fab fa-vuejs"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <li>
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
            </li>
            <li>
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
                <img src={html5} alt="Avatar" className="img-fluid" title="html5" />
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
                  <span className="float-right"><b>Experienced</b> - 1 year, 6 months | <span className='text-muted'>Current</span></span>
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
                <img src={css3} alt="css3logo" className="img-fluid" title="css3" />
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
                  <span className="float-right"><b>Experienced</b> - 1 year, 6 months | <span className='text-muted'>Current</span></span>
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
                <img src={bootstrap4} alt="Avatar" className="img-fluid" title="bootstrap" />
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
                  <h6 className="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills bootstrap progress-bar-striped progress-bar-animated">
                      80%
                    </div>
                  </div>
                  <span className="float-right"><b>Experienced</b> - 1 year, 6 months | <span className='text-muted'>Current</span></span>
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
                <img src={react} alt="Avatar" className="img-fluid" title="react" />
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
                  <span className="float-right"><b>Skillful</b> - 6 months | <span className='text-muted'>Current</span></span>
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
                <img src={python} alt="Avatar" className="img-fluid" title="python" />
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
                  <span className="float-right"><b>Skillful</b> - 6 months | <span className='text-muted'>Current</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(node) --> */}
      <div className="modal fade" id="myModal6">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <img src={nodejs} alt="Avatar" className="img-fluid" title="nodejs" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Node js</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <h6 className="modal-title">Description</h6>
                  <p>
                    Node.js is used for traditional web sites and back-end API
                    services, but was designed with real-time, push-based
                    architectures in mind.
                  </p>
                  <h6 className="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills node progress-bar-striped progress-bar-animated">
                      65%
                    </div>
                  </div>
                  <span className="float-right"><b>Skillful</b> - 1 year | <span className='text-muted'>Current</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(sqledit) --> */}
      <div className="modal fade" id="myModal7">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <img src={sql} alt="Avatar" className="img-fluid" title="server" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Databases</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <p className="modal-language">
                    SQL • postgreSQL • MongoDB
                  </p>
                  <h6 className="modal-title">Description</h6>
                  <p>
                    MySQL is an open-source relational database management system like storing, manipulating and retrieving data in databases.
                  </p>
                  <p>
                    MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
                  </p>
                  <p>
                    PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.
                  </p>
                  <h6 className="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills node progress-bar-striped progress-bar-animated">
                      65%
                    </div>
                  </div>
                  <span className="float-right"><b>Experienced</b> - 1 year, 6 months | <span className='text-muted'>Current</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(javascript) --> */}
      <div className="modal fade" id="myModal8">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <img src={javascript} alt="Avatar" className="img-fluid" title="javascript" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">JavaScript</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <h6 className="modal-title">Description</h6>
                  <p>
                    JavaScript is a text-based programming language used both on
                    the client-side and server-side that allows you to make web
                    pages interactive.
                  </p>
                  <h6 className="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills js progress-bar-striped progress-bar-animated">
                      60%
                    </div>
                  </div>
                  <span className="float-right"><b>Skillful</b> - 1 year, 6 months | <span className='text-muted'>Current</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(vue) --> */}
      <div className="modal fade" id="myModal9">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <img src={vue} alt="Avatar" className="img-fluid" title="vue" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Vue</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <h6 className="modal-title">Description</h6>
                  <p>
                    Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
                  </p>
                  <h6 className="modal-title">Skill level</h6>
                  <div className="progress">
                    <div className="skills vue progress-bar-striped progress-bar-animated">
                      60%
                    </div>
                  </div>
                  <span className="float-right"><b>Skillful</b> - 6 months | <span className='text-muted'><span className='text-muted'>Current</span></span></span>
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
