import React from "react";
import "./Portfolio.css";
import snake from "./img/snake.jpg";
import gitfinder from "./img/Gitfinder.jpg";
import logger from "./img/it-logger.jpg";
import pong from "./img/pong.jpg";
import ecommerce from "./img/e-commerce.jpg";
import ecommerce_qr from "./img/e-commerce_qrcode.png";

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
                  class="card-link text-start"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" class="card-link text-centre">
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal1"
                  class="card-link text-end"
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
                  class="card-link text-start"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" class="card-link text-centre">
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal2"
                  class="card-link text-end"
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
                  class="card-link text-start"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" class="card-link text-centre">
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal3"
                  class="card-link text-end"
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
                  class="card-link text-start"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" class="card-link text-centre">
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal4"
                  class="card-link text-end"
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
                  class="card-link text-start"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://fineprint-ecommerce.herokuapp.com/"
                  class="card-link text-centre"
                >
                  <i class="fas fa-globe"></i>
                </a>
                <a
                  data-toggle="modal"
                  data-target="#detail-modal5"
                  class="card-link text-end"
                >
                  <i class="fas fa-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <h5 class="modal-title">Barcode coming soon</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Details</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
                  <p>
                    Made through React to search and view users through Github
                    with a different UI/UX feel to it
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
                  <h5 class="modal-title">Barcode coming soon</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Details</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
                  <p>
                    Made through React for IT contactability in a workplace.
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
                  <h5 class="modal-title">Barcode coming soon</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Details</h5>
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
                  <h5 class="modal-title">Barcode coming soon</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Details</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
                  <p>
                    The nostalgic Nokia 3310 game everybody used to play and
                    rave about in the early 2000s.
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
                  <img src={ecommerce_qr} alt="Avatar" />
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h5 class="modal-title">Details</h5>
                </div>
                {/* <!-- Modal body --> */}
                <div class="modal-body">
                  <p>
                    E-commerce based web app which allows users to buy plain
                    unprinted clothes with the option to buy as is or use the
                    companies facilities
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
