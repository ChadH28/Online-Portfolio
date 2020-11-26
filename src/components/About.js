import React from 'react';
import './About.css';
import CV from './img/CV.docx';

const About = () => {
  return (
    <section id="aboutme" className='about-me'>
      <h2 className='section-title'>About Me</h2>
      <p className='section-sub'>Developer & Entrepreneur in the making, based out of Sunny Cape Town</p>
      <div className="row">
        <div className='col-sm-12 paragraph'>
          <p> An eager, motivated and a business-minded person
          who always looks for positivity and a way to improve - whether it's in certain skills or my continuous
          character development. I like problem solving and visual imagery which is why I have a strong liking
          towards gaming and the gaming development aspects of coding. I feel that seeing code translating to
          a functioning product is a work of art.
          </p>
        </div>

        <div className='col-sm-6'>
          <h4>Bio</h4>
          <div className='row bio'>
            <div className='col-sm-6'>
              <h5>Birthday</h5>
                <p>28<sup>th</sup> of October 1997</p>
              <h5>Location (suburb)</h5>
                <p>Kensington (Northern Suburbs)</p>
              <h5>Nationality</h5>
                <p>South African</p>   
            </div>
            <div className='col-sm-6'>
              <h5>Direct Contact</h5>
                <p>(+27) 84 466 4783</p>
              <h5>Willing to relocate</h5>
                <p className='travel'>Yes, anywhere locally or abroad</p>
            </div>
            <div className='col-sm-12'>
                <p className='float-left'><a className='download-link' href={CV} download>DOWNLOAD CV</a></p>
                <p className='float-right'><a className='hire-me' href='#contactme'>HIRE ME</a></p>
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
      <div className='col-sm-6 education animate__animated animate__slideInLeft animate__slow'>
			  <h4>Education</h4>
          <ul className="timeline">
				    <li>
					    <h5>Lifechoices</h5>
					    <span className="float-right">Feb 2020 - Current</span>
              <p>A 6-month bootcamp where we focused on the following languages HTML,CSS,JavaScript and
              Python. I feel that I had a wonderful opportunity to grow as a person as this course offers a real hands
              on approach with access to life coaches and therapists. A place I highly recommend to people who
              want to learn coding.</p>
            </li>
				    <li>
					    <h5>Cape Peninsula University of Technology (Bellville Campus)</h5>
					    <span className="float-right">2016 - 2018</span>
					    <p>A university where I spent two years in the faculty of engineering doing my studies and trade to be a Mechanical Engineer. (Course incomplete)</p>
				    </li>
				    <li>
					    <h5>Oude Molen Technical High School</h5>
					    <span className="float-right">2011 - 2016</span>
					    <p>A highschool where I spent five great years, made good friends and recieved a bachelors pass.</p>
				    </li>
			    </ul>
		  </div>
      <div className='col-sm-6 experience animate__animated animate__slideInRight animate__slow'>
        <h4>Work Experience</h4>
          <ul className="timeline">
				    <li>
					    <h5>3i Solutions</h5>
					    <span className="float-right">Jun 2018 - Jul 2019</span>
              <p>Role:</p>
                <p>Sales, Customer service in Quality Advising and data capturing</p>
              <p>Duties:</p>
                <p>Listened and rated one-on-one calls from the Sales Agent to the Customer and give feedback to the
                Agent on where they can improve</p>
                <p>Took on Sales calls to sell a certain product based in the UK.</p>
                <p>Data Captured customers details onto a google spreadsheet and updated information on the companies database.</p>
            </li>
  				  <li>
					    <h5>Impact Wholesalers</h5>
					    <span className="float-right">Dec 2017 - Feb 2018</span>
              <p>Role:</p>
                <p>Floor and Storeroom Packer</p>
              <p>Duties:</p>
                <p>Did the Packing and stock-taking</p>
                <p>Off-loaded heavy boxes and packed accordingly in the company’s Warehouse.</p>
                <p>Made rolls of toilet paper.</p>
				    </li>
				    <li>
					    <h5>Industaff Solutions</h5>
					    <span className="float-right">Dec 2014 - Dec 2015</span>
              <p>Role:</p>
                <p> Sweeper and Maintenance</p>
              <p>Duties:</p>
                <li>Street clean various areas around Cape Town.</li>
                <li>Pick up bags filled with dirt and transport it to the Rubbish Truck.</li>
				    </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;