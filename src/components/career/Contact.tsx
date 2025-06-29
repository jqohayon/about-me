import React from 'react';
import '../GoogleDocViewer.css';
import { FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{
        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700
      }}>Contact</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaEnvelope
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
        }}>Let's connect and build something great together.</p>
      </div>
      <div className="content-section">
        <div className="timeline-card" style={{ maxWidth: 500, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0', marginTop: '32px' }}>
            <a href="mailto:your.email@gmail.com" style={{ color: '#00bfff', fontSize: '1.5rem', textDecoration: 'none', fontWeight: 600, padding: '0 24px' }} title="Gmail">
              Gmail
            </a>
            <div style={{ width: '3px', height: '32px', background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)', borderRadius: '2px' }} />
            <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', fontSize: '1.5rem', textDecoration: 'none', fontWeight: 600, padding: '0 24px' }} title="LinkedIn">
              LinkedIn
            </a>
            <div style={{ width: '3px', height: '32px', background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)', borderRadius: '2px' }} />
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', fontSize: '1.5rem', textDecoration: 'none', fontWeight: 600, padding: '0 24px' }} title="GitHub">
              GitHub
            </a>
          </div>
          <p style={{ fontStyle: 'italic', color: '#bdbdbd', fontSize: '1.1rem', margin: '24px 0 0 0', textAlign: 'center' }}>
            A contact form will be available soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact; 