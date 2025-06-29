import React from 'react';
import '../GoogleDocViewer.css';
import { GiMedicines } from 'react-icons/gi';

const Supplementation: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Supplementation</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <GiMedicines 
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
        }}>Support your goals with proper supplementation.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Supplement Guide</h4>
          <ul>
            <li><strong>Essential Supplements:</strong> Core supplements for fitness goals.</li>
            <li><strong>Timing Strategy:</strong> Optimal timing for maximum benefits.</li>
            <li><strong>Safety Guidelines:</strong> Proper dosage and quality sourcing.</li>
            <li><strong>Goal Specific:</strong> Supplements for your specific needs.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Key Supplements</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span>Protein</span>
              <span>Creatine</span>
              <span>BCAAs</span>
              <span>Pre-Workout</span>
              <span>Vitamins</span>
              <span>Fish Oil</span>
              <span>Minerals</span>
              <span>Electrolytes</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Supplementation; 