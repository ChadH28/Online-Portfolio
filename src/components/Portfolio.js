import React from 'react';
import './Portfolio.css';
import snake from './img/snake.jpg';
import gitfinder from './img/Gitfinder.jpg';
import logger from './img/it-logger.jpg';
import pong from './img/pong.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio" className='mywork'>
      <h2 className='section-title'>My Portfolio</h2>
      <p className='section-sub'>A special selection of my range of work through coding</p>
      <div className='grid'>
        {/*Project1*/}
        <div className="project">
          <h3 className="title">Gitfinder</h3>
          <div className='overflow'><img src={gitfinder} alt="project one" className='project-img'/></div>
          <p className="text">Made through React to search and view users through Github with a different UI/UX feel to it</p>
            <button href="https://github.com/ChadH28/Github-Finder">GITHUB</button>
        </div>
        {/*Project2*/}
        <div className="project">
          <h3 className="title">IT logger</h3>
          <div className='overflow'><img src={logger} alt="Avatar" className='project-img'/></div>
          <p className="text">Made through React for IT contactability in a workplace.</p>
            <button href="https://github.com/ChadH28/IT-Logger">GITHUB</button>
        </div>
        {/*Project3*/}
        <div className="project">
          <h3 className="title">Pong</h3>
          <div className='overflow'><img src={pong} alt="Avatar" className='project-img'/></div>
          <p className="text">P-V-P game made through turtle module in pycharm.</p>
            <button href="https://github.com/ChadH28/Python_TurtleGames/blob/master/pong.py">GITHUB</button>
        </div>
        {/*Project4*/}
        <div className="project">
          <h3 className="title">Water Snake</h3>
          <div className='overflow'><img src={snake} alt="Avatar" className='project-img'/></div>
          <p className="text">The nostalgic Nokia 3310 game everybody used to play and rave about in the early 2000s.</p>
            <button href="https://github.com/ChadH28/Python_TurtleGames/blob/master/slang%2Cslang.py">GITHUB</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;