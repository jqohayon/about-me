import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>About Me</h2>
      <div className="content-section">
        <div className="tool-category">
          <h4>My Story</h4>
          <ul>
            <li>Born and raised in a multicultural environment</li>
            <li>Passionate about learning and personal growth</li>
            <li>Always seeking new adventures and experiences</li>
          </ul>
        </div>

        <div className="tool-category">
          <h4>Hobbies & Interests</h4>
          <ul>
            <li>Coding and web development</li>
            <li>Reading and creative writing</li>
            <li>Exploring new technologies</li>
            <li>Learning about different cultures</li>
          </ul>
        </div>

        <div className="emphasis-box">
          <h4>Fun Facts</h4>
          <ul>
            <li>Love trying new cuisines</li>
            <li>Enjoy both city life and nature adventures</li>
            <li>Always up for learning something new</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage; 