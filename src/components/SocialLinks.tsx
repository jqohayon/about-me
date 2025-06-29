import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a href="mailto:jqohayon@gmail.com" className="social-link">Gmail</a>
      <a href="https://www.linkedin.com/in/jacqueline-ohayon" target="_blank" rel="noopener noreferrer" className="social-link">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://github.com/jqohayon" target="_blank" rel="noopener noreferrer" className="social-link">
        GitHub
      </a>
    </div>
  );
};

export default SocialLinks; 