import React from 'react';
import '../GoogleDocViewer.css';
import { FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'SAS']
  },
  {
    title: 'Frameworks',
    skills: ['NestJS', 'BullMQ', 'React', 'npm', 'Node.js', 'Jest']
  },
  {
    title: 'Cloud Platforms',
    skills: ['Amazon AWS', 'Google Cloud']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Postgres', 'SQL']
  },
  {
    title: 'Data Science',
    skills: ['Qualtrics', 'REDCap', 'IBM SPSS', 'R Studio', 'Stata']
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Kubernetes', 'Swagger', 'GitHub', 'GitHub Actions', 'Postman', 'Datadog', 'Lucidchart', 'Redis']
  },
  {
    title: 'Development Tools',
    skills: ['Jira', 'Confluence', 'Slack', 'VS Code', 'Cursor', 'WindSurf', 'Excel', 'PowerPoint', 'Salesforce', 'ERP Systems']
  },
  {
    title: 'Methodologies',
    skills: ['Agile Environment', 'Domain Driven Design', 'Test Driven Development']
  },
  {
    title: 'AI',
    skills: ['ChatGPT', 'GitHub Copilot', 'Lovable']
  }
];

const Skills: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{
        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700
      }}>Skills</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaTools 
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
        }}>A blend of technical, analytical, and personal growth skills.</p>
      </div>
      <div className="content-section">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
          {skillCategories.map((cat, idx) => (
            <div
              className={`timeline-card${idx === 0 ? ' gradient-animated-border' : ''}`}
              style={{ 
                flex: '1 1 auto',
                minWidth: '280px',
                maxWidth: 'fit-content',
                margin: '0 8px', 
                padding: '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              key={cat.title}
            >
              <div className="timeline-card-header" style={{ marginBottom: 16, width: '100%' }}>
                <div className="timeline-job-title" style={{
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  letterSpacing: '0.5px',
                  color: '#fff',
                  textAlign: 'center',
                  width: '100%',
                  margin: '0 auto',
                  display: 'block'
                }}>{cat.title}</div>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 0, 
                flexWrap: 'wrap',
                width: '100%'
              }}>
                {cat.skills.map((skill, idx) => (
                  <React.Fragment key={skill}>
                    <span style={{
                      color: '#00bfff',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      fontFamily: 'Quicksand, Poppins, sans-serif',
                      padding: '0 18px',
                      borderRadius: '8px',
                      letterSpacing: '0.5px',
                      lineHeight: 1.2
                    }}>{skill}</span>
                    {idx !== cat.skills.length - 1 && (
                      <div style={{
                        width: '3px',
                        height: '28px',
                        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
                        borderRadius: '2px',
                        margin: '0 2px'
                      }} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 