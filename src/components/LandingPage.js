import React from 'react';
import './LandingPage.css';
import chad from './img/chad.jpg';

const LandingPage = () => {
  return (
    <section className="intro">
      <h1 className='section-title'>Hello World, I am <strong>Chad Hoosain</strong></h1>
        <p className='section-sub'>Full-Stack Developer: HTML/CSS | Bootstrap | Javascript | React | Python | mySQL</p>
        <img src={chad} alt='dummy img' className='intro-img'/>
    </section>
  );
};

export default LandingPage;