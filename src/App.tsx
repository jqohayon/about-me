import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import Resources from './components/career/Resources';
import Strength from './components/career/Strength';
import Cardio from './components/career/Cardio';
import Nutrition from './components/career/Nutrition';
import Wellness from './components/career/Wellness';
import Supplementation from './components/career/Supplementation';
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
          <Route path="/resources" element={<Resources />} />
          <Route path="/strength" element={<Strength />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/supplementation" element={<Supplementation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SocialLinks />
    </div>
  );
}

export default App; 