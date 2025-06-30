import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import profilePhoto from '../assets/images/lipfp.jpeg';

const Home: React.FC = () => {
  const navigate = useNavigate();

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
        textAlign: 'center'
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
            minHeight: '2rem',
            textAlign: 'center'
          }}
        />
      </div>
      
      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        marginTop: '2rem',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => navigate('/portfolio')}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 191, 255, 0.8) 0%, rgba(147, 112, 219, 0.8) 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '20px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 3px 10px rgba(0, 191, 255, 0.2)',
            fontFamily: 'Poppins, sans-serif'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 191, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 3px 10px rgba(0, 191, 255, 0.2)';
          }}
        >
          View My Work
        </button>
        
        <button
          onClick={() => navigate('/contact')}
          style={{
            background: 'transparent',
            color: '#00bfff',
            border: '2px solid #00bfff',
            padding: '10px 24px',
            borderRadius: '20px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: 'Poppins, sans-serif'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 191, 255, 0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 191, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Home; 