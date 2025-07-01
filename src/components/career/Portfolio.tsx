import React from 'react';
import '../GoogleDocViewer.css';
import { FaFolderOpen } from 'react-icons/fa';

const Portfolio: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{
        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700
      }}>Portfolio</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaFolderOpen 
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
        }}>A showcase of my projects and technical work.</p>
      </div>
      <div className="content-section">
        <div className="timeline-card" style={{ maxWidth: 500, margin: '0 auto' }}>
          <div className="timeline-card-header" style={{ marginBottom: 12, textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#fff', margin: 0, textAlign: 'center', width: '100%' }}>Coming Soon</h4>
          </div>
          <p style={{ fontStyle: 'italic', color: '#bdbdbd', fontSize: '1.1rem', margin: 0, textAlign: 'center' }}>
            <span style={{ color: '#00bfff' }}>My portfolio projects will be displayed here soon!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 