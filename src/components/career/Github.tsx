import React from 'react';
import '../GoogleDocViewer.css';
import { FaHeartbeat } from 'react-icons/fa';

const Cardio: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Cardiovascular</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaHeartbeat 
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
        }}>Keep your heart strong and healthy.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Benefits of Cardio</h4>
          <ul>
            <li><strong>Heart Health:</strong> Strengthens your heart and improves circulation, reducing the risk of heart disease.</li>
            <li><strong>Endurance:</strong> Builds stamina and increases your overall energy levels for daily activities.</li>
            <li><strong>Mental Health:</strong> Releases endorphins, reduces stress, and improves mood and cognitive function.</li>
            <li><strong>Weight Management:</strong> Burns calories and helps maintain a healthy body composition.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Training Types</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span>Walking</span>
              <span>Running</span>
              <span>Cycling</span>
              <span>Swimming</span>
              <span>HIIT</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cardio; 