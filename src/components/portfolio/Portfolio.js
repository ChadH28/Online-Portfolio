import React from "react";
import "./Portfolio.css";
import { data } from "./Portfolio.data";

const Portfolio = () => {
  return (
    <section id="portfolio" className="mywork container">
      <h2 className="section-title" data-aos="fade-right">
        Featured Work
      </h2>
      <h3 className="section-sub" data-aos="fade-left">
        A special selection of my range of work through coding
      </h3>
      <div className="gallery" data-aos="zoom-in-right">
        <div className="row row-cols-sm-1 row-cols-xs-1 row-cols-md-1 row-cols-lg-2">
          {data.projects.map((project) => (
            <div className="col">
              <div className="image-container">
                <div className="overlay-top container">
                  {project.overlay_title}
                </div>
                <img
                  src={project.image}
                  alt={project.overlay_title}
                  title={project.overlay_title}
                  className="img-fluid"
                />
                <div className="overlay container">
                  <a
                    href={project.github_link}
                    className="card-link "
                    title="Visit github repository"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                  <a
                    href={project.website_link}
                    className="card-link "
                    title="Visit live website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-globe" />
                  </a>
                  <a
                    data-toggle="modal"
                    data-target={project.modal_target}
                    className="card-link "
                    title="Description"
                    href="#nolink"
                  >
                    <i className="fas fa-info-circle" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {data.project_modals.map((modal) => (
        <div className="modal fade" id={modal.modal_target.replace("#", "")}>
          <span data-dismiss="modal" className="closer">
            &times;
          </span>
          <div className="modal-dialog" />
          <div className="modal-section container">
            <div className="row">
              <div className="col-sm-6">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{modal.modal_title}</h5>
                  </div>
                  <div className="modal-body">
                    {modal.qr_image !== null ? (
                      <img
                        src={modal.qr_image}
                        alt="Avatar"
                        title="google QR code generator"
                      />
                    ) : (
                      <h5 className="modal-title">Barcode coming soon</h5>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{modal.modal_subtitle}</h5>
                  </div>
                  <div className="modal-body">
                    <p>{modal.modal_description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
