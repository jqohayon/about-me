import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import Contact from './components/career/Resources';
import AboutMe from './components/career/Strength';
import Experiences from './components/career/Experiences';
import Education from './components/career/Education';
import Skills from './components/career/Wellness';
import Portfolio from './components/career/Supplementation';
import SocialLinks from './components/SocialLinks';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <div className="cloud cloud-4"></div>
      <div className="cloud cloud-5"></div>
      <div className="cloud cloud-6"></div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SocialLinks />
    </div>
  );
}

export default App; 