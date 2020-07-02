import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='grid'>
    {/*Project1*/}
    <div className="card">
      <h1 className="title">Gitfinder</h1>
        <p className="text">Harvard University</p>
        <button href="/">GITHUB</button>
        <button href="/">LIVE DEPLOY</button>
    </div>
    {/*Project2*/}
    <div className="card">
      <h1 className="title">Gitfinder</h1>
        <p className="text">Harvard University</p>
        <button href="/">GITHUB</button>
        <button href="/">LIVE DEPLOY</button>
    </div>
    {/*Project3*/}
    <div className="card">
      <h1 className="title">Gitfinder</h1>
        <p className="text">Harvard University</p>
        <button href="/">GITHUB</button>
        <button href="/">LIVE DEPLOY</button>
    </div>
    </div>
  );
};

export default Portfolio;