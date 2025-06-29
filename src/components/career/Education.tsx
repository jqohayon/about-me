import React from 'react';
import '../GoogleDocViewer.css';
import { FaAppleAlt } from 'react-icons/fa';

const Education: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{
        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700
      }}>Education</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaAppleAlt 
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
        }}>Empower your mind and career with continuous learning.</p>
      </div>
      <div className="content-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="timeline-card">
            <div className="timeline-card-header">
              <div>
                <div className="timeline-job-title">Master of Science</div>
                <div className="timeline-company">GPA: 4.0</div>
              </div>
              <div className="timeline-date">2022</div>
            </div>
          </div>
          <div className="timeline-card">
            <div className="timeline-card-header">
              <div>
                <div className="timeline-job-title">Bachelor of Science</div>
                <div className="timeline-company">GPA: 3.9</div>
              </div>
              <div className="timeline-date">2020</div>
            </div>
          </div>
        </div>

        <div className="timeline-card" style={{ marginTop: '32px' }}>
          <div style={{ marginBottom: '1.2rem', textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#fff', margin: 0 }}>Professional Development</h4>
          </div>
          <div className="skill-tags-container" style={{ justifyContent: 'center' }}>
            <span className="skill-tag">NestJS</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">WLC</span>
            <span className="skill-tag">CSCS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 