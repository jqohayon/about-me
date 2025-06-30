import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import astronautImage from '../assets/images/astronaut.jpg';

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <h1 style={{
          background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}>Welcome</h1>
        
        {/* Typing Animation */}
        <div className="typing-animation">
          <TypeAnimation
            sequence={[
              'Backend Engineer passionate about scalable solutions',
              2500,
              'Data-driven problem solver and AI enthusiast',
              2500,
              'Veteran with a mission to make a difference',
              2500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              fontSize: '1.3rem',
              color: '#9d6be7',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              display: 'inline-block',
              minHeight: '2rem'
            }}
          />
        </div>
        
        <img src={astronautImage} alt="Astronaut" className="astronaut-image" />
        <p className="welcome-message">
          Welcome! I'm a backend software engineer passionate about AI, data, and building scalable solutions that make a difference. I love exploring new technologies, mentoring others, and bringing a positive, collaborative spirit to every project. Thanks for stopping by—let's connect and create something impactful together!
        </p>
      </div>
    </>
  );
};

export default Home; 