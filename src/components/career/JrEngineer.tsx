import React from 'react';
import '../GoogleDocViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const JrEngineer: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Software Engineer</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FontAwesomeIcon 
          icon={faUserAstronaut} 
          style={{ 
            fontSize: '2rem',
            color: '#6a1b9a'
          }} 
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0'
        }}>My Journey</p>
      </div>
      <div className="content-section">
        <section className="tools-section" style={{ gap: '1rem' }}>
          <div className="tool-category" style={{ marginBottom: '0' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>JavaScript & TypeScript</h4>
            <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
              <li style={{ textAlign: 'center', paddingLeft: 0 }}>My journey began with mastering JavaScript fundamentals, the backbone of modern web development. After learning JS, I moved on to a Typescript course to master Typescript syntax and enhance my development capabilities.</li>
            </ul>
          </div>

          <div className="arrow-down" style={{ margin: '0' }}>↓</div>

          <div className="tool-category" style={{ marginBottom: '0' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>NestJS Framework</h4>
            <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
              <li style={{ textAlign: 'center', paddingLeft: 0 }}>Next, I began studying the NestJS documentation website, and began a new Udemy course by Manik to begin building a RESTful API using this in-dept framework.</li>
            </ul>
          </div>

          <div className="arrow-down" style={{ margin: '0' }}>↓</div>

          <div className="tool-category" style={{ marginBottom: '0' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Data Structures & Algorithms</h4>
            <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
              <li style={{ textAlign: 'center', paddingLeft: 0 }}>Data Structures & Algorithms (DSA) was my favorite part of the learning path. I got to learn how I would use DSA to optimize code for efficiency, ensuring systems perform well under varying loads.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default JrEngineer; 