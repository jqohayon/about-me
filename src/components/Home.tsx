import React from 'react';
import './Home.css';
import astronautImage from '../assets/images/astronaut.jpg';

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <h1>Welcome</h1>
        <img src={astronautImage} alt="Astronaut" className="astronaut-image" />
        <p>
          Welcome to your fitness journey! Here you'll find comprehensive guides for strength training, cardiovascular health, and nutrition. Let's work together to achieve your fitness goals.
        </p>
      </div>
    </>
  );
};

export default Home; 