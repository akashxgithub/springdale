import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Navbarr from './components/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Admissions from './components/Admission';
import Faculty from './components/Faculty';
import Students from './components/Student';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <Router>
      <div>
        <Navbarr /> {/* Include Navbarr */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
