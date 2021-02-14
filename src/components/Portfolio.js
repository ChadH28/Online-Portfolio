import React from "react";
import "./Portfolio.css";
import snake from "./img/snake.jpg";
import gitfinder from "./img/GitFinder.png";
import logger from "./img/it-logger.jpg";
import pong from "./img/pong.jpg";
import ecommerce from "./img/e-commerce.jpg";
import ecommerce_qr from "./img/e-commerce_qrcode.png";
import codeplayer_qr from "./img/qrcode_cp.png";
import gitfinder_qr from "./img/gitfinder_qrcode.png";
import itlogger_qr from "./img/it-logger_qrcode.png";
import codeplayer from "./img/codeplayer.png";
import reactor from "./img/reactor_game.png";
import reactor_qrcode from "./img/reactor_qrcode.png";
import contact_assist from "./img/contact_assistant.png";
import lmj from "./img/module_project.png";
import lmj_qrcode from "./img/lmj_qrcode.png";


const Portfolio = () => {
  return (
    <section id="portfolio" className="mywork">
      <h2 className="section-title">My Portfolio</h2>
      <p className="section-sub">
        A special selection of my range of work through coding
      </p>
      <div className="gallery">
        <div
          class="row row-cols-sm-1 row-cols-md-2"
          // data-masonry='{"percentPosition": true }'
        >
          <div class="col">
            <div class="image-container">
              <div class="overlay-top container">Gitfinder</div>
              <img
                src={gitfinder}
                alt="Gitfinder"
                className="img-fluid"
                title="Gitfinder"
              />
              <div class="overlay container">
                <a
                  href="https://github.com/ChadH28/Github-Finder"
                  class="card-link "
                  title="Visit github repository"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://gitfinderv1.netlify.app/"
                  class="card-link "
                  title="Visit live website"
                >
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal1"
                  class="card-link "
                  title="Description"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="image-container">
              <div class="overlay-top container">IT Logger</div>
              <img
                src={logger}
                alt="IT Logger"
                className="img-fluid"
                title="IT Logger"
              />
              <div class="overlay container">
                <a
                  href="https://github.com/ChadH28/IT-Logger"
                  class="card-link"
                  title="Visit github repository"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://it-loggerv1.netlify.app/"
                  class="card-link "
                  title="Visit live website"
                >
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal2"
                  class="card-link "
                  title="Description"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="image-container">
              <div class="overlay-top container">Pong</div>
              <img src={pong} alt="Avatar" className="img-fluid" title="Pong" />
              <div class="overlay container">
                <a
                  href="https://github.com/ChadH28/Python_TurtleGames/blob/master/pong.py"
                  class="card-link "
                  title="Visit github repository"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#noLive-modal"
                  class="card-link "
                  title="Visit live website"
                >
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal3"
                  class="card-link "
                  title="Description"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="image-container">
              <div class="overlay-top container">Snake</div>
              <img
                src={snake}
                alt="Avatar"
                className="img-fluid"
                title="Snake"
              />
              <div class="overlay container">
                <a
                  href="https://github.com/ChadH28/Python_TurtleGames/blob/master/slang%2Cslang.py"
                  class="card-link "
                  title="Visit github repository"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#noLive-modal"
                  class="card-link "
                  title="Visit live website"
                >
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal4"
                  class="card-link "
                  title="Description"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="image-container">
              <div class="overlay-top container">
                Fineprint: Ecommerce website
              </div>
              <img
                src={ecommerce}
                alt="Avatar"
                className="img-fluid"
                title="Ecommerce"
              />
              <div class="overlay container">
                <a
                  href="https://github.com/ChadH28/End-of-year-Project"
                  class="card-link "
                  title="Visit github repository"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://fineprint-ecommerce.herokuapp.com/"
                  class="card-link "
                  title="Visit live website"
                >
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal5"
                  class="card-link "
                  title="Description"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="image-container">
              <div class="overlay-top container">Contact Assistant</div>
              <img
                src={contact_assist}
                alt="Avatar"
                className="img-fluid"
                title="Contact Assistant"
              />
              <div class="overlay container">
                <a
                  href="https://github.com/ChadH28/Contact-Keeper"
                  class="card-link "
                  title="Visit github repository"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://contact-assistant.herokuapp.com/"
                  class="card-link "
                  title="Visit live website"
                >
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal6"
                  class="card-link "
                  title="Description"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="image-container">
              <div class="overlay-top container">
                Codeplayer: JQuery made code editor
              </div>
              <img
                src={codeplayer}
                alt="Avatar"
                className="img-fluid"
                title="Codeplayer"
              />
              <div class="overlay container">
                <a
                  href="https://github.com/ChadH28/Codeplayer--Code-editor-using-JQuery"
                  class="card-link "
                  title="Visit github repository"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://chadh28.github.io/Codeplayer--Code-editor-using-JQuery/"
                  class="card-link "
                  title="Visit live website"
                >
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal7"
                  class="card-link "
                  title="Description"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="image-container">
              <div class="overlay-top container">
                Reactor: Test your reactions
              </div>
              <img
                src={reactor}
                alt="Avatar"
                className="img-fluid"
                title="Reactor"
              />
              <div class="overlay container">
                <a
                  href="https://github.com/ChadH28/Reactor--Javascript-game"
                  class="card-link "
                  title="Visit github repository"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://chadh28.github.io/Reactor--Javascript-game/"
                  class="card-link "
                  title="Visit live website"
                >
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal8"
                  class="card-link "
                  title="Description"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="image-container">
              <div class="overlay-top container">
                Lmj: A page to do with all things funny
              </div>
              <img src={lmj} alt="Avatar" className="img-fluid" title="Lmj" />
              <div class="overlay container">
                <a
                  href="https://github.com/ChadH28/Web-Design-End-of-module-Project"
                  class="card-link "
                  title="Visit github repository"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://chadh28.github.io/Web-Design-End-of-module-Project/"
                  class="card-link "
                  title="Visit live website"
                >
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal9"
                  class="card-link "
                  title="Description"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- modal content(Not deployed) --> */}
      <div class="modal fade" id="noLive-modal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-section container">
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Bad News!</strong> This project is not live yet
              <span
                type="button"
                id="close"
                class="btn-close"
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
      <div class="modal fade" id="detail-modal1">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Barcode</h5>
                </div>
                <div class="modal-body">
                  <img src={gitfinder_qr} alt="Avatar" title="google QR code generator" />
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
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
      <div class="modal fade" id="detail-modal2">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Barcode</h5>
                </div>
                <div class="modal-body">
                  <img src={itlogger_qr} alt="Avatar" title="google QR code generator" />
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
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
      <div class="modal fade" id="detail-modal3">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Barcode</h5>
                </div>
                <div class="modal-body">
                  <h5 class="modal-title">Barcode coming soon</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
                  <p>P-V-P game made through turtle module in pycharm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(snake) --> */}
      <div class="modal fade" id="detail-modal4">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Barcode</h5>
                </div>
                <div class="modal-body">
                  <h5 class="modal-title">Barcode coming soon</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
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
      <div class="modal fade" id="detail-modal5">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Barcode</h5>
                </div>
                <div class="modal-body">
                  <img src={ecommerce_qr} alt="Avatar" title="google QR code generator" />
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
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
      <div class="modal fade" id="detail-modal6">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Barcode</h5>
                </div>
                <div class="modal-body">
                  <h5 class="modal-title">Barcode coming soon</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
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
      <div class="modal fade" id="detail-modal7">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Barcode</h5>
                </div>
                <div class="modal-body">
                  <img src={codeplayer_qr} alt="Avatar" />
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
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
      <div class="modal fade" id="detail-modal8">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Barcode</h5>
                </div>
                <div class="modal-body">
                  <img src={reactor_qrcode} alt="Avatar" className="img-fluid" title="google QR code generator" />
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
                  <p>A Javascript made game to test users reactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- closing of modal content --> */}
      {/* <!-- modal content(lmj) --> */}
      <div class="modal fade" id="detail-modal9">
        <span data-dismiss="modal" class="closer">
          &times;
        </span>
        <div class="modal-dialog"></div>
        <div class="modal-section container">
          <div class="row">
            <div class="col-sm-6">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Barcode</h5>
                </div>
                <div class="modal-body">
                  <img src={lmj_qrcode} alt="Avatar" className="img-fluid" title="google QR code generator" />
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Description</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
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
