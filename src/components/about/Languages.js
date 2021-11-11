import "./About.css";
import React from "react";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import bootstrap4 from "../assets/bootstrap.png";
import python from "../assets/python.png";
import react from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import javascript from "../assets/javascript5.png";
import sql from "../assets/database.jpeg";
import vue from "../assets/vuejs.png";

const Languages = () => {
  return (
    <section>
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

export default Languages;