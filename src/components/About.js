import React from 'react';
import './About.css'

const About = () => {
  return (
    <section className='about-me'>
      <h2 className='section-title'>About Me</h2>
      <p className='section-sub'>Developer & Entrepreneur based out of Sunny Cape Town</p>
      <div className="row">
        <div className='col-sm-12'>
          <p>An eager, motivated and a business-minded person who always looks for positivity and a way to
            improve, whether it's in certain skills or my continuous character development. My love for
            laughter and time with family and friends are my key interests and they my motivation to be
            better every day.
            I like problem solving and visual imagery, that's why I have a strong liking towards gaming and the
            gaming development of that side as well. it's such a spectacle of seeing some code actually
            translating to a work of art.</p>
        </div>

        <div className='col-sm-6'>
          <h4>Bio</h4>
          <div className='row'>
            <div className='col-sm-6'>
              <h5>Birthday</h5>
                <p>28<sup>th</sup> October 1997 (22)</p>
              <h5>Location (suburb)</h5>
                <p>Kensington (Northern Suburbs)</p>
              <h5>Nationality</h5>
                <p>South African</p>   
            </div>
            <div className='col-sm-6'>
              <h5>Direct Contact</h5>
                <p>(+27) 84 466 4783</p>
              <h5>Website</h5>
                <p>INSERT WEBSITE HERE</p>
              <h5>Willing to relocate</h5>
                <p>Yes, anywhere locally or abroad</p>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <h4>Skills</h4>
          <p>HTML & CSS</p>
          <div className="progress">
            <div className="skills html-css progress-bar-striped progress-bar-animated">75%</div>
          </div>
          
          <p>Bootstrap</p>
          <div className="progress">
            <div className="skills bootstrap progress-bar-striped progress-bar-animated">80%</div>
          </div>
          
          <p>JavaScript</p>
          <div className="progress">
            <div className="skills js progress-bar-striped progress-bar-animated">60%</div>
          </div>
          
          <p>React</p>
          <div className="progress">
            <div className="skills react progress-bar-striped progress-bar-animated">50%</div>
          </div>
          <p>Python</p>
          <div className="progress">
            <div className="skills python progress-bar-striped progress-bar-animated">75%</div>
          </div>
          <p>mySQL</p>
          <div className="progress">
            <div className="skills mysql progress-bar-striped progress-bar-animated">80%</div>
          </div>
        </div>
      </div>
      <div className='row'>
      <div className='col-sm-6'>
			  <h4>Education</h4>
			    <ul className="timeline">
				    <li>
					    <h5>New Web Design</h5>
					    <span className="float-right">21 March, 2014</span>
					    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
				    </li>
				    <li>
					    <h5>21 000 Job Seekers</h5>
					    <span className="float-right">4 March, 2014</span>
					    <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
				    </li>
				    <li>
					    <h5>Awesome Employers</h5>
					    <span className="float-right">1 April, 2014</span>
					    <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
				    </li>
			    </ul>
		  </div>
      <div className='col-sm-6'>
        <h4>Work Experience</h4>
			    <ul className="timeline">
				    <li>
					    <h5>New Web Design</h5>
					    <span className="float-right">21 March, 2014</span>
					    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
				    </li>
				    <li>
					    <h5>21 000 Job Seekers</h5>
					    <span className="float-right">4 March, 2014</span>
					    <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
				    </li>
				    <li>
					    <h5>Awesome Employers</h5>
					    <span className="float-right">1 April, 2014</span>
					    <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
				    </li>
			    </ul>
        </div>
      </div>
    </section>
  );
};

export default About;