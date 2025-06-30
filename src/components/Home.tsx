import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import astronautImage from '../assets/images/astronaut.jpg';

const Home: React.FC = () => {
  return (
    <>
      <div className="home-outer">
        <div className="home">
          <h1 style={{
            background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>
            Hi, I'm Jacqueline
          </h1>
          {/* Typing Animation */}
          <div className="typing-animation">
            <TypeAnimation
              sequence={[
                'Data-driven software engineer',
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
          <img src={astronautImage} alt="Astronaut" className="astronaut-image" />
          <div style={{
            color: '#9d6be7',
            fontSize: '1.08rem',
            fontWeight: 500,
            margin: '0.5rem 0 1.5rem 0',
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
          }}>
            Passionate Software Engineer & Data Specialist.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home; 