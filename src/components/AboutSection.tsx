import React from 'react';
import peepoImage from '../assets/images/peepo_bio.webp';

const AboutSection: React.FC = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        First: This is <mark><b>Peepo</b></mark>. I <em>love</em> peepo! 
        You'll see a lot of Peepo on this website, and he is also happy to see you here, too.
      </p>
      <img src={peepoImage} alt="Peepo" width="280" height="200" />
      <blockquote>
        <i>"Jacqueline is a French name that means "supplanter". It's the feminine version of the name Jacques, which comes from the Hebrew name Jacob."</i>
        <p>My favorite color is <del>red</del> <ins>purple</ins>.</p>
      </blockquote>
    </section>
  );
};

export default AboutSection; 