import React from "react";
import "./Portfolio.css";
import snake from "../assets/snake.jpg";
import gitfinder from "../assets/GitFinder.png";
import logger from "../assets/it-logger.jpg";
import pong from "../assets/pong.jpg";
import ecommerce from "../assets/e-commerce.jpg";
import ecommerce_qr from "../assets/e-commerce_qrcode.png";
import codeplayer_qr from "../assets/qrcode_cp.png";
import gitfinder_qr from "../assets/gitfinder_qrcode.png";
import itlogger_qr from "../assets/it-logger_qrcode.png";
import codeplayer from "../assets/codeplayer.png";
import reactor from "../assets/reactor_game.png";
import reactor_qrcode from "../assets/reactor_qrcode.png";
import contact_assist from "../assets/contact_assistant.png";
import lmj from "../assets/module_project.png";
import lmj_qrcode from "../assets/lmj_qrcode.png";


const Portfolio = () => {
  return (
    <section id="portfolio" className="mywork container">
      <h2 className="section-title">Featured Work</h2>
      <h3 className="section-sub" data-aos="fade-left">
        A special selection of my range of work through coding
      </h3>
      <div className="gallery" data-aos="zoom-out-up">
        <div
          className="row row-cols-sm-1 row-cols-xs-1 row-cols-md-1 row-cols-lg-2"
        >
          <div className="col">
            <div className="image-container">
              {/* <div className="overflow"></div> */}
              <div className="overlay-top container">Gitfinder</div>
              <img
                src={gitfinder}
                alt="Gitfinder"
                className="img-fluid"
                title="Gitfinder"
              />
              <div className="overlay container">
                <a
                  href="https://github.com/ChadH28/Github-Finder"
                  className="card-link "
                  title="Visit github repository"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://gitfinderv1.netlify.app/"
                  className="card-link "
                  title="Visit live website"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal1"
                  className="card-link "
                  title="Description"
                  href='#nolink'
                >
                  <i className="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container">
              <div className="overlay-top container">IT Logger</div>
              <img
                src={logger}
                alt="IT Logger"
                className="img-fluid"
                title="IT Logger"
              />
              <div className="overlay container">
                <a
                  href="https://github.com/ChadH28/IT-Logger"
                  className="card-link"
                  title="Visit github repository"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://it-loggerv1.netlify.app/"
                  className="card-link "
                  title="Visit live website"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  href='#nolink'
                  data-target="#detail-modal2"
                  className="card-link "
                  title="Description"
                >
                  <i className="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container">
              <div className="overlay-top container">Pong</div>
              <img src={pong} alt="Avatar" className="img-fluid" title="Pong" />
              <div className="overlay container">
                <a
                  href="https://github.com/ChadH28/Python_TurtleGames/blob/master/pong.py"
                  className="card-link "
                  title="Visit github repository"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://replit.com/@ChadHoosain/Pongpygame"
                  className="card-link "
                  title="Visit live website"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal3"
                  className="card-link "
                  href='#nolink'
                  title="Description"
                >
                  <i className="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container">
              <div className="overlay-top container">Snake</div>
              <img
                src={snake}
                alt="Avatar"
                className="img-fluid"
                title="Snake"
              />
              <div className="overlay container">
                <a
                  href="https://github.com/ChadH28/Python_TurtleGames/blob/master/slang%2Cslang.py"
                  className="card-link "
                  title="Visit github repository"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://replit.com/@ChadHoosain/Waterslangpygame"
                  className="card-link "
                  title="Visit live website"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal4"
                  className="card-link "
                  title="Description"
                  href='#nolink'
                >
                  <i className="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container">
              <div className="overlay-top container">
                Fineprint: Ecommerce website
              </div>
              <img
                src={ecommerce}
                alt="Avatar"
                className="img-fluid"
                title="Ecommerce"
              />
              <div className="overlay container">
                <a
                  href="https://github.com/ChadH28/End-of-year-Project"
                  className="card-link "
                  title="Visit github repository"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://fineprint-ecommerce.herokuapp.com/"
                  className="card-link "
                  title="Visit live website"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal5"
                  className="card-link "
                  href='#nolink'
                  title="Description"
                >
                  <i className="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container">
              <div className="overlay-top container">Contact Assistant</div>
              <img
                src={contact_assist}
                alt="Avatar"
                className="img-fluid"
                title="Contact Assistant"
              />
              <div className="overlay container">
                <a
                  href="https://github.com/ChadH28/Contact-Keeper"
                  className="card-link "
                  title="Visit github repository"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://contact-assistant.herokuapp.com/"
                  className="card-link "
                  title="Visit live website"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal6"
                  className="card-link "
                  title="Description"
                  href='#nolink'
                >
                  <i className="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container">
              <div className="overlay-top container">
                Codeplayer: JQuery made code editor
              </div>
              <img
                src={codeplayer}
                alt="Avatar"
                className="img-fluid"
                title="Codeplayer"
              />
              <div className="overlay container">
                <a
                  href="https://github.com/ChadH28/Codeplayer--Code-editor-using-JQuery"
                  className="card-link "
                  title="Visit github repository"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://chadh28.github.io/Codeplayer--Code-editor-using-JQuery/"
                  className="card-link "
                  title="Visit live website"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  href='#nolink'
                  data-target="#detail-modal7"
                  className="card-link "
                  title="Description"
                >
                  <i className="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container">
              <div className="overlay-top container">
                Reactor: Test your reactions
              </div>
              <img
                src={reactor}
                alt="Avatar"
                className="img-fluid"
                title="Reactor"
              />
              <div className="overlay container">
                <a
                  href="https://github.com/ChadH28/Reactor--Javascript-game"
                  className="card-link "
                  title="Visit github repository"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://chadh28.github.io/Reactor--Javascript-game/"
                  className="card-link "
                  title="Visit live website"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  href='#nolink'
                  data-target="#detail-modal8"
                  className="card-link "
                  title="Description"
                >
                  <i className="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container">
              <div className="overlay-top container">
                Lmj: A page to do with all things funny
              </div>
              <img src={lmj} alt="Avatar" className="img-fluid" title="Lmj" />
              <div className="overlay container">
                <a
                  href="https://github.com/ChadH28/Web-Design-End-of-module-Project"
                  className="card-link "
                  title="Visit github repository"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://chadh28.github.io/Web-Design-End-of-module-Project/"
                  className="card-link "
                  title="Visit live website"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal9"
                  className="card-link "
                  href='#nolink'
                  title="Description"
                >
                  <i className="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- modal content(Not deployed) --> */}
      <div className="modal fade" id="noLive-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-section container">
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Bad News!</strong> This project is not live yet
              <span
                type="button"
                id="close"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                &times;
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}

      {/* <!-- modal content(gitfinder) --> */}
      <div className="modal fade" id="detail-modal1">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title">Barcode</h5>
                </div>
                <div className="modal-body">
                  <img src={gitfinder_qr} alt="Avatar" title="google QR code generator" />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <p>
                    React app to search Github profiles. This app uses the
                    Context API along with the useContext and useReducer hooks
                    for state management within the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(it logger) --> */}
      <div className="modal fade" id="detail-modal2">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title">Barcode</h5>
                </div>
                <div className="modal-body">
                  <img src={itlogger_qr} alt="Avatar" title="google QR code generator" />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <p>
                    React app to track IT department tasks and issues. Uses
                    JSON-Server as a mock backend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(pong) --> */}
      <div className="modal fade" id="detail-modal3">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title">Barcode</h5>
                </div>
                <div className="modal-body">
                  <h5 className="modal-title">Barcode coming soon</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <p>P-V-P game made through turtle module in pycharm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(snake) --> */}
      <div className="modal fade" id="detail-modal4">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title">Barcode</h5>
                </div>
                <div className="modal-body">
                  <h5 className="modal-title">Barcode coming soon</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <p>
                    The nostalgic Nokia 3310 game everybody used to play and
                    rave about in the early 2000s made through turtle module in
                    pycharm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(ecommerce) --> */}
      <div className="modal fade" id="detail-modal5">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Barcode</h5>
                </div>
                <div className="modal-body">
                  <img src={ecommerce_qr} alt="Avatar" title="google QR code generator" />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <p>
                    React app to create an E-commerce platform which allows
                    users to buy plain unprinted clothes with the option to buy
                    as is or use the companies printing facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(contact assistan) --> */}
      <div className="modal fade" id="detail-modal6">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Barcode</h5>
                </div>
                <div className="modal-body">
                  <h5 className="modal-title">Barcode coming soon</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <p>
                    Full stack React project which has contact manager with
                    React hooks, context, sessions & JWT authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(codeplayer) --> */}
      <div className="modal fade" id="detail-modal7">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Barcode</h5>
                </div>
                <div className="modal-body">
                  <img src={codeplayer_qr} alt="Avatar" />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <p>
                    A JQuery made code generator similiar to codepen where users
                    can learn to code on
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(reactor) --> */}
      <div className="modal fade" id="detail-modal8">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Barcode</h5>
                </div>
                <div className="modal-body">
                  <img src={reactor_qrcode} alt="Avatar" className="img-fluid" title="google QR code generator" />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <p>A Javascript made game to test users reactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(lmj) --> */}
      <div className="modal fade" id="detail-modal9">
        <span data-dismiss="modal" className="closer">
          &times;
        </span>
        <div className="modal-dialog"></div>
        <div className="modal-section container">
          <div className="row">
            <div className="col-sm-6">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Barcode</h5>
                </div>
                <div className="modal-body">
                  <img src={lmj_qrcode} alt="Avatar" className="img-fluid" title="google QR code generator" />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="modal-content">
                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                  <h5 className="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <p>
                    First end of Module task. Used form-validation, modals,
                    cards and a navbar. Used Bootstrap and custom css stylings.
                  </p>
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

export default Portfolio;
