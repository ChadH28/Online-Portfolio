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

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes />
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
