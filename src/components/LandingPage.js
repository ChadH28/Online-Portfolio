import React from 'react';
import './LandingPage.css';
import chad from './img/chad-removebg.png';
import $ from 'jquery';

const LandingPage = () => {

  $(document).onclick = () =>(function() {
    $('.intro-img').ripples('show');
  });

  return (
    <section className="intro">
      <h1 className='section-mainTitle animate__animated animate__bounce'>Hello World, I am <strong>Chad Hoosain</strong></h1>
        <p className='section-sub'>Aspiring Full-Stack Developer</p>
        <img src={chad} alt='intro-image' className='intro-img'/>
    </section>
  );
};

export default LandingPage;