import React from 'react';
import '../GoogleDocViewer.css';
import { FaAppleAlt, FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'Master of Science',
    gpa: '4.0',
    date: '2022',
    details: [
      'Statistical Analysis',
      'Published Thesis',
      'Scientific Writing',
    ],
  },
  {
    degree: 'Bachelor of Science',
    gpa: '3.9',
    date: '2020',
    details: [
      'Volunteer Project',
      'Capstone Thesis',
      'Honor Society',
    ],
  },
];

const Education: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{
        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700
      }}>Education</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaAppleAlt 
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
        }}>Commitment to curiosity & continued learning</p>
      </div>
      <div className="timeline-container">
        <div className="header-divider" style={{ margin: '0 auto 30px auto' }} />
        <div className="timeline" style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '30px',
            top: '20px',
            height: `${(education.length - 1) * 180 + 80}px`,
            width: '5px',
            background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
            borderRadius: '2px',
            zIndex: 0
          }} />
          {education.map((edu, idx) => (
            <div className="timeline-row" key={idx}>
              <div className="timeline-icon-col">
                <div className="timeline-icon-wrapper">
                  <FaGraduationCap className="timeline-icon" style={{ zIndex: 2, position: 'relative' }} />
                </div>
              </div>
              <div className="timeline-card gradient-animated-border">
                <div className="timeline-card-header">
                  <div>
                    <div className="timeline-job-title" style={{ color: '#fff' }}>{edu.degree}</div>
                    <div className="timeline-company" style={{ color: '#00bfff' }}>GPA: {edu.gpa}</div>
                  </div>
                  <div className="timeline-date" style={{ color: '#9370DB' }}>{edu.date}</div>
                </div>
                <div className="timeline-details-row" style={{ color: '#00bfff' }}>
                  {edu.details.map((detail, i) => (
                    <React.Fragment key={i}>
                      <span>{detail}</span>
                      {i !== edu.details.length - 1 && <span className="gradient-pipe" />}
                    </React.Fragment>
                  ))}
                </div>
                {edu.degree === 'Bachelor of Science' && (
                  <div style={{ color: '#b6aee7', fontSize: '1.01rem', marginTop: 10, textAlign: 'center', fontStyle: 'italic', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
                    Awarded Student of the year for fostering a supportive academic community, creating study guides and leading regular group sessions to help fellow students succeed.
                  </div>
                )}
                {edu.degree === 'Master of Science' && (
                  <div style={{ color: '#b6aee7', fontSize: '1.01rem', marginTop: 10, textAlign: 'center', fontStyle: 'italic', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
                    Analyzed complex data, synthesized research, wrote published articles, and volunteered for multiple projects that helped community members of all populations
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="timeline-row">
        <div className="timeline-icon-col" />
        <div style={{ marginTop: '32px', width: '100%' }}>
          <div style={{ marginBottom: '1.2rem', textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.3rem', color: '#fff', margin: 0 }}>Courses & Certificates</h4>
            <div style={{
              width: '120px',
              height: '3px',
              margin: '10px auto 0 auto',
              borderRadius: '4px',
              background: 'linear-gradient(90deg, #00bfff 0%, #9370DB 100%)',
            }} />
          </div>
          <div className="skill-tags-container" style={{ justifyContent: 'center' }}>
            <span className="skill-tag">NestJS</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">WLC</span>
            <span className="skill-tag">CSCS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 