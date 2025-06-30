import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import profilePhoto from '../assets/images/lipfp.jpeg';

const Home: React.FC = () => {
  return (
    <div className="doc-container">
      <div className="profile-photo-wrapper">
        <img 
          src={profilePhoto} 
          alt="Jacqueline Ohayon profile" 
          className="profile-photo"
        />
        <div className="profile-photo-overlay" />
      </div>
      <h1 style={{
        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.1,
        marginBottom: '1.2rem',
      }}>
        Hi, I'm Jacqueline
      </h1>
      {/* Typing Animation */}
      <div className="typing-animation">
        <TypeAnimation
          sequence={[
            'Passionate Software Engineer & Data Specialist.',
            2500,
            'Veteran with a mission to make a difference',
            2500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{
            fontSize: '1.3rem',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            display: 'inline-block',
            minHeight: '2rem'
          }}
        />
      </div>
    </div>
  );
};

export default Home; 