import React from 'react';
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
        <img src={astronautImage} alt="Astronaut" className="astronaut-image" />
        <p className="welcome-message">
          Welcome! I'm a backend software engineer passionate about AI, data, and building scalable solutions that make a difference. I love exploring new technologies, mentoring others, and bringing a positive, collaborative spirit to every project. Thanks for stopping by—let's connect and create something impactful together!
        </p>
      </div>
    </>
  );
};

export default Home; 