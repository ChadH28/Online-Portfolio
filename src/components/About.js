import React from 'react';
import './About.css'

const About = () => {
  return (
    <section className='about-me'>
      <h2 className='section-title'>About Me</h2>
      <p className='section-sub'>Developer & Entrepreneur based out of Sunny Cape Town</p>
      <div class="row">
        <div className='col-sm-12'>
          <p>An eager, motivated and a business-minded person who always looks for positivity and a way to
      improve, whether it's in certain skills or my continuous character development. My love for
      laughter and time with family and friends are my key interests and they my motivation to be
      better every day.
      I like problem solving and visual imagery, that's why I have a strong liking towards gaming and the
      gaming development of that side as well. it's such a spectacle of seeing some code actually
      translating to a work of art.</p>
        </div>

        <div className='col-sm-6 bg-success'>
          <h4>Bio</h4>
          <div className='row'>
            <div className='col-sm-6 bg-warning'>
              Birthday:
            </div>
            <div className='col-sm-6 bg-danger'>
              Direct Contact:
            </div>
          </div>
        </div>
        <div className='col-sm-6 bg-info'>
          <h4>Skills</h4>
          <p>HTML & CSS</p>
          <div class="progress">
            <div class="skills html-css progress-bar-striped progress-bar-animated">75%</div>
          </div>
          
          <p>Bootstrap</p>
          <div class="progress">
            <div class="skills bootstrap">80%</div>
          </div>
          
          <p>JavaScript</p>
          <div class="progress">
            <div class="skills js">60%</div>
          </div>
          
          <p>React</p>
          <div class="progress">
            <div class="skills react">50%</div>
          </div>
          <p>Python</p>
          <div class="progress">
            <div class="skills python">75%</div>
          </div>
          <p>mySQL</p>
          <div class="progress">
            <div class="skills mysql">80%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;