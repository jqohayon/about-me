import React from 'react';
import '../GoogleDocViewer.css';
import { FaSpa } from 'react-icons/fa';

const Wellness: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Wellness</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaSpa 
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
        }}>Mind, body, and spirit in harmony.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Holistic Benefits</h4>
          <ul>
            <li><strong>Mental Clarity:</strong> Practice mindfulness and meditation for improved focus and reduced stress.</li>
            <li><strong>Recovery:</strong> Learn proper rest and recovery techniques for optimal performance.</li>
            <li><strong>Sleep Quality:</strong> Develop healthy sleep habits for better recovery and energy levels.</li>
            <li><strong>Stress Management:</strong> Implement strategies to balance fitness goals with overall wellbeing.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Focus Areas</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span>Meditation</span>
              <span>Ice Bath</span>
              <span>Breathing</span>
              <span>Yoga</span>
              <span>Recovery</span>
              <span>Sleep</span>
              <span>Massage</span>
              <span>Balance</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Wellness; 