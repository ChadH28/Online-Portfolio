import "./About.css";
import React from "react";
import { data } from "./Languages.data";


const Languages = () => {
  return (
    <section>
      <h4>Languages</h4>
      <div className="row row-cols-md-2 row-cols-lg-5 row-cols-sm-2 language-container">
        {data.languages.map((language) => (
          <div className="col" data-aos={language.fade}>
            <div
              className={`language-card ${language.type}`}
              data-toggle="modal"
              data-target={language.modal_target}
              title="expand"
            >
              <div>
                <i className={language.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.languages_modal.map((modal) => (
        <div className="modal fade" id={modal.modal_target.replace("#", "")}>
          <span data-dismiss="modal" className="closer">
            &times;
          </span>
          <div className="modal-dialog" />
          <div className="modal-section container">
            <div className="row">
              <div className="col-sm-6">
                <div className="modal-content">
                  <img
                    src={modal.image}
                    alt={`${modal.type} Avatar`}
                    className="img-fluid"
                    title={modal.type}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h5 className="modal-title">{modal.content.title}</h5>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <h6 className="modal-title">{modal.content.sub_title}</h6>
                    <p>{modal.content.paragraph}</p>
                    <h6 className="modal-title">Skill level</h6>
                    <div className="progress">
                      <div
                        className={`skills ${modal.content.progress_bar_percentage} progress-bar-striped progress-bar-animated`}
                      >
                        {modal.content.progress_bar_label}
                      </div>
                    </div>
                    <span className="float-right">
                      <b>{modal.content.skill_level}</b> -{" "}
                      {modal.content.skill_experience} |{" "}
                      <span className="text-muted">Current</span>
                    </span>
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

export default Languages;
