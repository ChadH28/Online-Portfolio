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
					    <h5>Oude Molen Technical High School)</h5>
					    <span className="float-right">2011 - 2015</span>
					    <p>A highschool where I spent four great years, made good friends and recieved a bachelors pass.</p>
				    </li>
				    <li>
					    <h5>Cape Peninsula University of Technology (Bellville Campus)</h5>
					    <span className="float-right">2016 - 2018</span>
					    <p>A university where I spent two years in the faculty of engineering doing my studies and trade to be a Mechanical Engineer.</p>
				    </li>
				    <li>
					    <h5>Lifechoices</h5>
					    <span className="float-right">02/2020 - Current</span>
              <p>A 6-month bootcamp where its truly amazing each day, a place to code with languages like HTML,CSS,JavaScript and Python and grow as a person with their constant hands on approach of their lifecoaches and therapists.</p>
              <p>A place I highly recommend to people who want to learn coding, feel free to visit their website. It is quite inviting.</p>
				    </li>
			    </ul>
		  </div>
      <div className='col-sm-6'>
        <h4>Work Experience</h4>
			    <ul className="timeline">
				    <li>
					    <h5>Industaff Solutions</h5>
					    <span className="float-right">12/2014 - 12/2015</span>
              <p>Role: Sweeper and Maintenance</p>
              <p>Duties:</p>
                <li>Street cleanse and swept various areas around Cape Town.</li>
                <li>Picked up dispose bags filled with rubbish and transported it to the Rubbish Truck.</li>
				    </li>
				    <li>
					    <h5>Impact Wholesalers</h5>
					    <span className="float-right">12/2017-02/2018</span>
              <p>Role: Floor and Storeroom Packer</p>
              <p>Duties:</p>
                <li>Did the Packing and stock-taking</li>
                <li>Off-loaded heavy boxes and packed accordingly in the company’s Warehouse.</li>
                <li>Made rolls of toilet paper.</li>
				    </li>
				    <li>
					    <h5>3i Solutions</h5>
					    <span className="float-right">06/2018 - 05/2019</span>
              <p>Role: Sales, Customer service in Quality Advising and data capturing</p>
              <p>Duties:</p>
                <li>Listened and rated one-on-one calls from the Sales Agent to the Customer and give feedback to the
                Agent on where they can improve</li>
                <li>Took on Sales calls to sell a certain product based in the UK.</li>
                <li>Data Captured customers details onto a google spreadsheet and updated information on the companies database.</li>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;