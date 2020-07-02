import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar/>
        <Routes />
    </div>
    </Router>
  );
}

export default App;