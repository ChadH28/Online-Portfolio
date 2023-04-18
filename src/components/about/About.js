import React from "react";
import Experience from "./Experience";
import Languages from "./Languages";
import "./About.css";
import { data } from "./About.data";

const About = () => {
  return (
    <section id="aboutme" className="container about-me">
      <div className="row">
        <div className="col-sm-8" data-aos="fade-left">
          <h2 className="section-title">{data.about_intro_content.heading}</h2>
          <h3 className="section-sub" data-aos="fade-right">
            {data.about_intro_content.sub_heading}
          </h3>
          <p className="paragraph">{data.about_intro_content.paragraph}</p>
          <div className="bio" data-aos="fade-right">
            <div className="row">
              <div className="col-sm-6">
                {data.bio.column1.map((colunmItem) => (
                  <React.Fragment>
                    <h5>
                      <i className={colunmItem.icon} /> {colunmItem.title}
                    </h5>
                    <p
                      dangerouslySetInnerHTML={{ __html: colunmItem.content }}
                    />
                  </React.Fragment>
                ))}
              </div>
              <div className="col-sm-6">
                {data.bio.column2.map((colunmItem) => (
                  <React.Fragment>
                    <h5>
                      <i className={colunmItem.icon} /> {colunmItem.title}
                    </h5>
                    <p
                      dangerouslySetInnerHTML={{ __html: colunmItem.content }}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="row findme">
            {data.find_me.buttons.map((button) => (
              <div className="col-sm-6">
                {button.href.includes(".pdf") ? (
                  <a href={button.href} download>
                    <button
                      className="btn download-link"
                      data-aos={button.fade}
                    >
                      {button.label}
                    </button>
                  </a>
                ) : (
                  <a href={button.href}>
                    <button
                      className="btn download-link"
                      data-aos={button.fade}
                    >
                      {button.label}
                    </button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="col-sm-4 bio-img-container" data-aos="fade-right">
          <img src={data.image} alt="CH" className="img-fluid bio-img" />
        </div>
        <div className="col-sm-12 language">
          <Languages />
        </div>
      </div>
      <Experience />
    </section>
  );
};

export default About;
