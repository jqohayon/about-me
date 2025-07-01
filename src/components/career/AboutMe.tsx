import React from 'react';
import '../GoogleDocViewer.css';
import { FaUserAstronaut, FaChessKnight, FaUsers } from 'react-icons/fa';
import profilePhoto from '../../assets/images/lipfp.jpeg';
import architectImg from '../../assets/images/architect.png';
import collabImg from '../../assets/images/collab.png';

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
      {/* Personality Type & Work Personality Side by Side */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '64px',
        maxWidth: 1000,
        margin: '48px auto 24px auto',
        width: '100%',
      }}>
        {/* Personality Type */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 420, background: 'none', textAlign: 'center' }}>
          <div style={{ width: 160, height: 160, margin: '0 auto 18px auto', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #9d6be7', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 0 12px 2px rgba(157,107,231,0.28)' }}>
            <img
              src={architectImg}
              alt="Personality Type - Architect"
              style={{
                width: 150,
                height: 150,
                objectFit: 'cover',
                borderRadius: '50%',
                display: 'block',
                filter: 'grayscale(100%)',
              }}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'rgba(157, 107, 231, 0.22)',
              pointerEvents: 'none',
              zIndex: 2,
            }} />
          </div>
          <div className="timeline-card-header" style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#fff', margin: 0, textAlign: 'center', width: '100%' }}>Personality Type</h4>
            <div style={{
              width: '120px',
              height: '3px',
              margin: '10px auto 0 auto',
              borderRadius: '4px',
              background: 'linear-gradient(90deg, #00bfff 0%, #9370DB 100%)',
            }} />
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
            View INTJ-A Profile
          </a>
          <div style={{ color: '#bdbdbd', fontSize: '0.95rem', marginTop: 6, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Strategic, analytical, and future-focused. I enjoy solving complex problems and creating efficient systems. This personality type excels in software engineering and data analysis, while also being highly effective in collaborative team environments.
          </div>
        </div>
        {/* Work Personality */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 420, background: 'none', textAlign: 'center' }}>
          <div style={{ width: 160, height: 160, margin: '0 auto 18px auto', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #9d6be7', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 0 12px 2px rgba(157,107,231,0.28)' }}>
            <img
              src={collabImg}
              alt="Work Personality - Collaboration"
              style={{
                width: 150,
                height: 150,
                objectFit: 'cover',
                borderRadius: '50%',
                display: 'block',
              }}
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'rgba(157, 107, 231, 0.22)',
              pointerEvents: 'none',
              zIndex: 2,
            }} />
          </div>
          <div className="timeline-card-header" style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#fff', margin: 0, textAlign: 'center', width: '100%' }}>Work Personality</h4>
            <div style={{
              width: '120px',
              height: '3px',
              margin: '10px auto 0 auto',
              borderRadius: '4px',
              background: 'linear-gradient(90deg, #00bfff 0%, #9370DB 100%)',
            }} />
          </div>
          <div style={{ color: '#00bfff', fontWeight: 600, fontSize: '1.1rem' }}>
            Collaborative · Precise · Driven
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
            View Job Profile
          </a>
          <div style={{ color: '#bdbdbd', fontSize: '0.95rem', marginTop: 6, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            I value continuous learning and delivering high-quality results in every project. My work preferences align with roles that offer intellectual challenges, autonomy, and opportunities to innovate while contributing to business outcomes.
          </div>
        </div>
      </div>
      {/* Beyond the Code - moved to bottom */}
      <div style={{ maxWidth: 500, margin: '32px auto 0 auto' }}>
        <div className="timeline-card-header" style={{ marginBottom: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h4 style={{ fontSize: '1.3rem', color: '#fff', margin: 0, textAlign: 'center', width: '100%' }}>Beyond the Code</h4>
          <div style={{
            width: '120px',
            height: '3px',
            margin: '10px auto 0 auto',
            borderRadius: '4px',
            background: 'linear-gradient(90deg, #00bfff 0%, #9370DB 100%)',
          }} />
        </div>
        <div className="beyond-code-piped-multiline" style={{ fontSize: '1.1em', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', width: '100%' }}>
          <div className="beyond-code-row" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <span className="beyond-code-item">Violist</span>
            <span style={{ color: '#9d6be7', opacity: 0.7, fontSize: '1.1em', margin: '0 0.4em' }}>✦</span>
            <span className="beyond-code-item">Motorcycling</span>
            <span style={{ color: '#9d6be7', opacity: 0.7, fontSize: '1.1em', margin: '0 0.4em' }}>✦</span>
            <span className="beyond-code-item">Hiking</span>
          </div>
          <div className="beyond-code-row" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <span className="beyond-code-item">Boardgames</span>
            <span style={{ color: '#9d6be7', opacity: 0.7, fontSize: '1.1em', margin: '0 0.4em' }}>✦</span>
            <span className="beyond-code-item">Kiteboarding</span>
            <span style={{ color: '#9d6be7', opacity: 0.7, fontSize: '1.1em', margin: '0 0.4em' }}>✦</span>
            <span className="beyond-code-item">Weightlifting</span>
          </div>
          <div className="beyond-code-row" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            <span className="beyond-code-item">Sci-Fi Bookworm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 