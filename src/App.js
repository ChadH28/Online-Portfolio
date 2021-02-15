import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Services from "./components/Services";
import aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    aos.init({ duration: 1000});
  }, []);


  return (
    <Router>
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabindex="0">
        <Navbar />
        <Routes  />
        <About />
        <Portfolio />
        <Testimonials />
        {/* <Services/> */}
        <Contact />
      </div>
    </Router>
  );
};

export default App;
