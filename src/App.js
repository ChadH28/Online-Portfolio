import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./components/Routes";
import Landing from "./components/LandingPage";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials(2)";
import Contact from "./components/contact/Contact";
// import Services from "./components/Services";
import aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    aos.init({ duration: 1500 });
  }, []);


  return (
    <Router>
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabIndex="0">
        <Navbar />
        <div className='landing-bg'>
          <Landing />
        </div>
        <div className='about-bg'>
          <About />
        </div>
        <div className='portfolio-bg'>
          <Portfolio />
        </div>
        <div className='testimonial-bg'>
          <Testimonials />
        </div>
        <div className='contact-bg'>
          <Contact />
        </div>
        {/* <Services/> */}
      </div>
    </Router>
  );
};

export default App;


