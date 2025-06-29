import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import '../GoogleDocViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCloud } from '@fortawesome/free-solid-svg-icons';

const Strength: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Strength</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaDumbbell 
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
        }}>Build strength, build confidence.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Training Programs</h4>
          <ul>
            <li><strong>Beginner Program:</strong> Focus on form and fundamental movements with bodyweight exercises and light weights.</li>
            <li><strong>Intermediate Program:</strong> Progressive overload with compound exercises and targeted muscle group training.</li>
            <li><strong>Advanced Program:</strong> Specialized training splits, advanced techniques like supersets and drop sets, and periodization for optimal gains.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Training Types</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span>Bodyweight</span>
              <span>Free Weights</span>
              <span>Machines</span>
              <span>Olympic Lifting</span>
              <span>Calisthenics</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Strength; 