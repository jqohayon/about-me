import React from 'react';
import '../GoogleDocViewer.css';
import { FaUserAstronaut } from 'react-icons/fa';

const aboutMeFacts = [
  'Based in Salt Lake City, Utah',
  'Backend SWE passionate about AI and data',
  'Enjoys hiking, fitness, and learning new tech',
  'Loves building scalable systems and solving problems',
  'Always exploring new data tools and frameworks'
];

const AboutMe: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{
        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700
      }}>About Me</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaUserAstronaut 
          style={{ 
            fontSize: '2rem',
            color: '#6a1b9a',
            transition: 'all 0.3s ease'
          }}
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Problem solver and lifelong learner.</p>
      </div>
      <div className="content-section">
        <div className="timeline-card" style={{ maxWidth: 600, margin: '0 auto 24px auto', textAlign: 'center' }}>
          <p style={{
            color: '#9d6be7',
            fontSize: '1rem',
            margin: '0 0 1.5rem 0',
            maxWidth: 700,
            textAlign: 'center',
            lineHeight: 1.6
          }}>
            Welcome! I'm a software engineer with a background heavily laden in data. I am after the story it has to tell us. I am passionate about diving into new AI tools and technologies, mentoring others, and bringing a positive, collaborative spirit to every project. Thanks for stopping by—let's connect and create something impactful together!
          </p>
        </div>
        {/* Personality Type */}
        <div className="timeline-card" style={{ maxWidth: 500, margin: '0 auto 24px auto', textAlign: 'center' }}>
          <div className="timeline-card-header" style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#fff', margin: 0, textAlign: 'center', width: '100%' }}>Personality Type</h4>
          </div>
          <div style={{ color: '#00bfff', fontWeight: 600, fontSize: '1.1rem' }}>
            INTJ / Architect
          </div>
          <a
            href="https://www.16personalities.com/profiles/d94eddeacab13"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#9d6be7',
              fontWeight: 500,
              fontSize: '0.98rem',
              textDecoration: 'underline',
              marginTop: 4,
              display: 'inline-block',
              transition: 'color 0.2s',
            }}
            className="personality-link"
          >
            View INTJ-A Profile (16Personalities)
          </a>
          <div style={{ color: '#bdbdbd', fontSize: '1rem', marginTop: 6 }}>
            Strategic, analytical, and future-focused. I enjoy solving complex problems and creating efficient systems. This personality type excels in software engineering and data analysis, while also being highly effective in collaborative team environments.
          </div>
        </div>
        {/* Work Personality */}
        <div className="timeline-card" style={{ maxWidth: 500, margin: '0 auto 24px auto', textAlign: 'center' }}>
          <div className="timeline-card-header" style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#fff', margin: 0, textAlign: 'center', width: '100%' }}>Work Personality</h4>
          </div>
          <div style={{ color: '#00bfff', fontWeight: 600, fontSize: '1.1rem' }}>
            Collaborative, detail-oriented, and growth-minded
          </div>
          <a
            href="https://www.16personalities.com/specialized-tests/results/job-preferences"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#9d6be7',
              fontWeight: 500,
              fontSize: '0.98rem',
              textDecoration: 'underline',
              marginTop: 4,
              display: 'inline-block',
              transition: 'color 0.2s',
            }}
            className="work-preferences-link"
          >
            View Job Preferences Profile
          </a>
          <div style={{ color: '#bdbdbd', fontSize: '1rem', marginTop: 6 }}>
            I value clear communication, continuous learning, and delivering high-quality results in every project. My work preferences align with roles that offer intellectual challenges, autonomy, and opportunities to innovate while contributing to meaningful outcomes.
          </div>
        </div>
        {/* Beyond the Code - moved to bottom */}
        <div className="timeline-card" style={{ maxWidth: 500, margin: '32px auto 0 auto' }}>
          <div className="timeline-card-header" style={{ marginBottom: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#fff', margin: 0, textAlign: 'center', width: '100%' }}>Beyond the Code</h4>
          </div>
          <div className="beyond-code-piped-multiline" style={{ fontSize: '1.1em', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', width: '100%' }}>
            <div className="beyond-code-row" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <span className="beyond-code-item">Motorcycling</span>
              <span className="beyond-code-pipe" />
              <span className="beyond-code-item">Hiking</span>
            </div>
            <div className="beyond-code-row" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <span className="beyond-code-item">Sci-Fi Bookworm</span>
              <span className="beyond-code-pipe" />
              <span className="beyond-code-item">Weightlifter</span>
              <span className="beyond-code-pipe" />
              <span className="beyond-code-item">Kiteboarding</span>
            </div>
            <div className="beyond-code-row" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <span className="beyond-code-item">Violist</span>
              <span className="beyond-code-pipe" />
              <span className="beyond-code-item">Boardgames</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 