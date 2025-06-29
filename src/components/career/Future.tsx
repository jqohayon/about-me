import React from 'react';
import '../GoogleDocViewer.css';
import { FaAppleAlt } from 'react-icons/fa';

const Nutrition: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Nutrition</h2>
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
        }}>Fuel your body, fuel your goals.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Key Nutrition Principles</h4>
          <ul>
            <li><strong>Macronutrients:</strong> Balance your proteins, carbs, and healthy fats for optimal performance.</li>
            <li><strong>Meal Timing:</strong> Strategic eating windows to maximize energy and recovery.</li>
            <li><strong>Hydration:</strong> Proper fluid intake before, during, and after exercise.</li>
            <li><strong>Supplementation:</strong> Essential nutrients to support your fitness journey.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Nutrition Focus</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <span>Meal Prep</span>
              <span>Recipes</span>
              <span>Planning</span>
              <span>Tracking</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nutrition; 