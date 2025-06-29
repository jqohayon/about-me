import React from 'react';
import '../GoogleDocViewer.css';
import { GiWeightLiftingUp } from 'react-icons/gi';

const Strength: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Strength Training</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiWeightLiftingUp 
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
        }}>Build strength, power, and confidence.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Training Benefits</h4>
          <ul>
            <li><strong>Muscle Growth:</strong> Progressive overload techniques for hypertrophy.</li>
            <li><strong>Power Development:</strong> Compound movements for overall strength gains.</li>
            <li><strong>Form Mastery:</strong> Proper technique for injury prevention and efficiency.</li>
            <li><strong>Program Design:</strong> Structured workouts for consistent progress.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Key Exercises</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
        </section>
      </div>
    </div>
  );
};

export default Strength; 