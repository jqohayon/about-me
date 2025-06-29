import React from 'react';
import '../GoogleDocViewer.css';
import { FaUserAstronaut } from 'react-icons/fa';

const aboutMeFacts = [
  'Based in Salt Lake City, Utah',
  'Backend SWE passionate about AI and data',
  'Enjoys hiking, fitness, and learning new tech',
  'Loves building scalable systems and solving problems',
  'Always exploring new data tools and frameworks'
];

const AboutMe: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{
        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700
      }}>About Me</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaUserAstronaut 
          style={{ 
            fontSize: '2rem',
            color: '#6a1b9a',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Backend SWE passionate about artificial intelligence and data-driven solutions.</p>
      </div>
      <div className="content-section">
        {/* Professional Summary */}
        <div className="timeline-card" style={{ maxWidth: 600, margin: '0 auto 24px auto', textAlign: 'center' }}>
          <p style={{ fontStyle: 'italic', color: '#bdbdbd', fontSize: '1.15rem', margin: 0 }}>
            Backend Software Engineer based in Tampa, FL, passionate about AI, data, and building scalable solutions that make a difference. I thrive on exploring new technologies, mentoring others, and bringing a positive, collaborative spirit to every project.
          </p>
        </div>
        {/* Personality Style */}
        <div className="timeline-card" style={{ maxWidth: 500, margin: '0 auto 24px auto', textAlign: 'center' }}>
          <div className="timeline-card-header" style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#fff', margin: 0, textAlign: 'center', width: '100%' }}>Personality Style</h4>
          </div>
          <div style={{ color: '#00bfff', fontWeight: 600, fontSize: '1.1rem' }}>
            INTJ / Architect
          </div>
          <div style={{ color: '#bdbdbd', fontSize: '1rem', marginTop: 6 }}>
            Strategic, analytical, and future-focused. I enjoy solving complex problems and creating efficient systems.
          </div>
        </div>
        {/* Work Style */}
        <div className="timeline-card" style={{ maxWidth: 500, margin: '0 auto 24px auto', textAlign: 'center' }}>
          <div className="timeline-card-header" style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#fff', margin: 0, textAlign: 'center', width: '100%' }}>Work Style</h4>
          </div>
          <div style={{ color: '#00bfff', fontWeight: 600, fontSize: '1.1rem' }}>
            Collaborative, detail-oriented, and growth-minded
          </div>
          <div style={{ color: '#bdbdbd', fontSize: '1rem', marginTop: 6 }}>
            I value clear communication, continuous learning, and delivering high-quality results in every project.
          </div>
        </div>
        {/* Beyond the Code - moved to bottom */}
        <div className="timeline-card" style={{ maxWidth: 500, margin: '32px auto 0 auto' }}>
          <div className="timeline-card-header" style={{ marginBottom: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#fff', margin: 0, textAlign: 'center', width: '100%' }}>Beyond the Code</h4>
          </div>
          <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
            <span>Squats</span>
            <span>Deadlifts</span>
            <span>Bench Press</span>
            <span>Rows</span>
            <span>Pull-ups</span>
            <span>Overhead Press</span>
            <span>Hip Thrust</span>
            <span>Core Work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 