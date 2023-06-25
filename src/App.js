import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contacts';
import Navigation from './components/Navigations';

function App() {
  return (
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
