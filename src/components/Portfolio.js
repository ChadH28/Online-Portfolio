import React from 'react';
import './Portfolio.css';
import photo from './dummy.jpg';
import gitfinder from './img/Gitfinder.jpg';
import logger from './img/it-logger.jpg';

const Portfolio = () => {
  return (
    <section className='mywork'>
      <h2 className='section-title'>My Portfolio</h2>
      <p className='section-sub'>A special selection of my range of Work through coding</p>
      <div className='grid'>
        {/*Project1*/}
        <div className="project">
          <h3 className="title">Gitfinder</h3>
          <div className='overflow'><img src={gitfinder} alt="project one" className='project-img'/></div>
          <p className="text">Harvard University</p>
            <button href="/">GITHUB</button>
            <button href="/">LIVE DEPLOY</button>
        </div>
        {/*Project2*/}
        <div className="project">
          <h3 className="title">IT logger</h3>
          <div className='overflow'><img src={logger} alt="Avatar" className='project-img'/></div>
          <p className="text">Harvard University</p>
            <button href="/">GITHUB</button>
            <button href="/">LIVE DEPLOY</button>
        </div>
        {/*Project3*/}
        <div className="project">
          <h3 className="title">Gitfinder</h3>
          <div className='overflow'><img src={photo} alt="Avatar" className='project-img'/></div>
          <p className="text">Harvard University</p>
            <button href="/">GITHUB</button>
            <button href="/">LIVE DEPLOY</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;