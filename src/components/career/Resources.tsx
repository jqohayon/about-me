import React from 'react';
import '../GoogleDocViewer.css';
import { FaBook } from 'react-icons/fa';

const Resources: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Additional Resources</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaBook
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
        }}>Expand your wellness knowledge.</p>
      </div>
      <div className="content-section">
        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Recommended Reading</h4>
          <ul>
            <li><strong>Strength Training:</strong> "Starting Strength" by Mark Rippetoe - Comprehensive guide to proper form and progression.</li>
            <li><strong>Nutrition:</strong> "The Renaissance Diet 2.0" by Dr. Mike Israetel - Science-based approach to nutrition.</li>
            <li><strong>Recovery:</strong> "Good to Go" by Christie Aschwanden - Latest science on rest and recovery.</li>
            <li><strong>Mindset:</strong> "The Champion's Mind" by Jim Afremow - Mental strategies for peak performance.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Online Resources</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span>MyFitnessPal</span>
            </div>
          </div>
        </section>

        <div className="emphasis-box">
          <h4 style={{ fontSize: '1.3rem' }}>Community & Support</h4>
          <ul>
            <li><strong>Reddit Communities:</strong> r/fitness, r/nutrition, r/bodyweightfitness</li>
            <li><strong>YouTube Channels:</strong> AthleanX</li>
            <li><strong>Podcasts:</strong> <a href="https://www.youtube.com/results?search_query=Yvonne+Burkart" target="_blank" rel="noopener noreferrer" style={{ color: '#9d6be7', textDecoration: 'none', fontWeight: 'bold' }}>Yvonne Burkart</a>, <a href="https://www.youtube.com/@RenaissancePeriodization" target="_blank" rel="noopener noreferrer" style={{ color: '#9d6be7', textDecoration: 'none', fontWeight: 'bold' }}>Renaissance Periodization</a></li>
            <li><strong>Local Resources:</strong> Gyms, nutrition coaches, wellness centers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resources; 