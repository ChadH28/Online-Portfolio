import "./About.css";
import React from "react";
import { data } from "./Experience.data";

const Experience = () => {
  return (
    <section>
      <div className="row experience">
        <div
          className="col-sm-12 col-md-6 education"
          data-aos="zoom-in-right"
          data-aos-duration="1800"
        >
          <h4>Summary</h4>
          <ul className="timeline summaryXP">
            <li>
              <div className="card mb-3" data-aos="flip-left">
                <div className="card-body">
                  <h5 className="card-title">{data.summary.title}</h5>
                  <p className="card-text">{data.summary.content}</p>
                  <ul>
                    {data.summary.cta.map((listItem) => (
                      <li>{listItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <h4 className="edu">Education</h4>
          <ul className="timeline">
            {data.education_timeline.map((timelineItem) => (
              <li>
                <div className="card mb-3" data-aos="flip-left">
                  <div className="card-header ">
                    <i className="far fa-calendar-check" />{" "}
                    {timelineItem.timeframe}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{timelineItem.title}</h5>
                    <p className="card-text">{timelineItem.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="col-sm-12 col-md-6"
          data-aos="zoom-in-left"
          data-aos-duration="1700"
        >
          <h4>Work Experience</h4>
          <ul className="timeline">
            {data.work_timeline.map((timelineItem) => (
              <li>
                <div className="card mb-3" data-aos="flip-right">
                  <div className="card-header">
                    <i className="far fa-calendar-alt" />{" "}
                    {timelineItem.timeframe}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>{timelineItem.position}</span>
                      <br />
                      <em>{timelineItem.company}</em>
                    </h5>
                    {timelineItem.description.map((paragraph) => (
                      <p className="card-text">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
