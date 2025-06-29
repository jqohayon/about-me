import React from 'react';
import '../GoogleDocViewer.css';
import { FaRunning } from 'react-icons/fa';

const Cardio: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Cardio Training</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaRunning 
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
        }}>Elevate your endurance and heart health.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Training Benefits</h4>
          <ul>
            <li><strong>Endurance:</strong> Build stamina and cardiovascular fitness.</li>
            <li><strong>Heart Health:</strong> Improve cardiovascular function and efficiency.</li>
            <li><strong>Fat Loss:</strong> Optimize calorie burn and metabolism.</li>
            <li><strong>Recovery:</strong> Active recovery and conditioning techniques.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Training Methods</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span>HIIT</span>
              <span>Running</span>
              <span>Cycling</span>
              <span>Swimming</span>
              <span>Jump Rope</span>
              <span>Rowing</span>
              <span>Stairs</span>
              <span>Boxing</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cardio; 