import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section>
      <h2 className='section-title'>My Portfolio</h2>
    <div className='grid-3'>
    {/*Project1*/}
    <div className="project">
      <h3 className="title">Gitfinder</h3>
        <p className="text">Harvard University</p>
        <button href="/">GITHUB</button>
        <button href="/">LIVE DEPLOY</button>
    </div>
    {/*Project2*/}
    <div className="project">
      <h3 className="title">Gitfinder</h3>
        <p className="text">Harvard University</p>
        <button href="/">GITHUB</button>
        <button href="/">LIVE DEPLOY</button>
    </div>
    {/*Project3*/}
    <div className="project">
      <h3 className="title">Gitfinder</h3>
        <p className="text">Harvard University</p>
        <button href="/">GITHUB</button>
        <button href="/">LIVE DEPLOY</button>
    </div>
    </div>
    </section>
  );
};

export default Portfolio;