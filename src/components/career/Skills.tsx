import React from 'react';
import '../GoogleDocViewer.css';
import { FaTools } from 'react-icons/fa';

// Define types for the skill categories
interface SkillCategory {
  title: string;
  skills: string[] | string[][];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'SAS']
  },
  {
    title: 'Frameworks',
    skills: ['NestJS', 'BullMQ', 'React', 'Node.js', 'Jest']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Postgres', 'SQL']
  },
  {
    title: 'Data Science',
    skills: ['Qualtrics', 'REDCap', 'IBM SPSS']
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Kubernetes', 'Swagger', 'GitHub', 'GitHub Actions', 'Postman', 'Datadog', 'Lucidchart', 'Redis']
  },
  {
    title: 'Amazon AWS',
    skills: [
      ['Simple Email', 'Lambda'],
      ['S3', 'CloudWatch'],
      ['Elastic Container']
    ]
  },
  {
    title: 'Productivity Tools',
    skills: [
      ['Confluence', 'Jira'],
      ['GSuite', 'Salesforce', 'Excel'],
      ['WindSurf', 'Cursor']
    ]
  },
  {
    title: 'Methodologies',
    skills: ['Agile Environment', 'Domain Driven Design', 'Test Driven Development']
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
        }}>A blend of technical & analytical skills.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
        {/* Row 1: Programming Languages & Frameworks */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', justifyContent: 'center', width: '100%' }}>
          {skillCategories.filter(cat => cat.title === 'Programming Languages' || cat.title === 'Frameworks').map((cat, idx) => renderSkillBox(cat, idx))}
        </div>
        {/* Row 2: Data Science & Databases */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', justifyContent: 'center', width: '100%' }}>
          {skillCategories.filter(cat => cat.title === 'Data Science' || cat.title === 'Databases').map((cat, idx) => renderSkillBox(cat, idx))}
        </div>
        {/* Row 3: DevOps & Tools centered */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', justifyContent: 'center', width: '100%' }}>
          {skillCategories.filter(cat => cat.title === 'DevOps & Tools').map((cat, idx) => renderSkillBox(cat, idx))}
        </div>
        {/* Row 4: Accessory Software & Amazon AWS */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', justifyContent: 'center', width: '100%' }}>
          {skillCategories.filter(cat => cat.title === 'Productivity Tools' || cat.title === 'Amazon AWS').map((cat, idx) => renderSkillBox(cat, idx))}
        </div>
        {/* Methodologies full-width row */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 24 }}>
          {skillCategories.filter(cat => !['Programming Languages', 'Frameworks', 'Data Science', 'Databases', 'DevOps & Tools', 'Productivity Tools', 'Amazon AWS'].includes(cat.title)).map((cat, idx) => (
            <div
              className="timeline-card"
              style={{
                flex: '1 1 100%',
                minWidth: '340px',
                maxWidth: '900px',
                margin: '0 8px',
                padding: '14px 10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'transparent',
                boxSizing: 'border-box',
                width: '100%'
              }}
              key={cat.title}
            >
              <div className="timeline-card-header" style={{ marginBottom: 12, width: '100%' }}>
                <div className="timeline-job-title" style={{
                  fontWeight: 700,
                  fontSize: '1.05rem',
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
                {(cat.skills as string[]).map((skill: string, skillIdx: number) => (
                  <React.Fragment key={`${cat.title}-${skillIdx}`}>
                    <span style={{
                      color: '#00bfff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      fontFamily: 'Quicksand, Poppins, sans-serif',
                      padding: '0 10px',
                      borderRadius: '8px',
                      letterSpacing: '0.5px',
                      lineHeight: 1.2
                    }}>{skill}</span>
                    {skillIdx !== (cat.skills as string[]).length - 1 && (
                      <div style={{
                        width: '2px',
                        height: '20px',
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

function renderSkillBox(cat: SkillCategory, idx: number): JSX.Element {
  // For DevOps & Tools and Accessory Software, split into two rows
  const isTwoRow = cat.title === 'DevOps & Tools';
  let firstRow: string[] = [];
  let secondRow: string[] = [];
  if (isTwoRow) {
    const skills = cat.skills as string[];
    const mid = Math.ceil(skills.length / 2);
    firstRow = skills.slice(0, mid);
    secondRow = skills.slice(mid);
  }
  // Stretch DevOps & Tools and Methodologies
  const isFullWidth = cat.title === 'DevOps & Tools' || cat.title === 'Methodologies';
  // Special handling for Amazon AWS
  if (cat.title === 'Amazon AWS') {
    return (
      <div
        className="timeline-card"
        style={{
          flex: isFullWidth ? '1 1 100%' : '0 0 340px',
          minWidth: isFullWidth ? '340px' : '340px',
          maxWidth: isFullWidth ? '900px' : '340px',
          margin: '0 8px',
          padding: '14px 10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'transparent',
          boxSizing: 'border-box',
          width: isFullWidth ? '100%' : undefined
        }}
        key={cat.title}
      >
        <div className="timeline-card-header" style={{ marginBottom: 12, width: '100%' }}>
          <div className="timeline-job-title" style={{
            fontWeight: 700,
            fontSize: '1.05rem',
            letterSpacing: '0.5px',
            color: '#fff',
            textAlign: 'center',
            width: '100%',
            margin: '0 auto',
            display: 'block'
          }}>{cat.title}</div>
        </div>
        {(cat.skills as string[][]).map((row: string[], rowIdx: number) => (
          <div key={rowIdx} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0,
            flexWrap: 'wrap',
            width: '100%',
            marginBottom: rowIdx !== (cat.skills as string[][]).length - 1 ? 4 : 0
          }}>
            {row.map((skill: string, skillIdx: number) => (
              <React.Fragment key={`${cat.title}-${rowIdx}-${skillIdx}`}>
                <span style={{
                  color: '#00bfff',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  fontFamily: 'Quicksand, Poppins, sans-serif',
                  padding: '0 10px',
                  borderRadius: '8px',
                  letterSpacing: '0.5px',
                  lineHeight: 1.2
                }}>{skill}</span>
                {/* Only show divider if not last in row */}
                {skillIdx !== row.length - 1 && (
                  <div style={{
                    width: '2px',
                    height: '20px',
                    background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
                    borderRadius: '2px',
                    margin: '0 2px'
                  }} />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    );
  }
  // Special handling for Accessory Software
  if (cat.title === 'Productivity Tools') {
    return (
      <div
        className="timeline-card"
        style={{
          flex: isFullWidth ? '1 1 100%' : '0 0 340px',
          minWidth: isFullWidth ? '340px' : '340px',
          maxWidth: isFullWidth ? '900px' : '340px',
          margin: '0 8px',
          padding: '14px 10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'transparent',
          boxSizing: 'border-box',
          width: isFullWidth ? '100%' : undefined
        }}
        key={cat.title}
      >
        <div className="timeline-card-header" style={{ marginBottom: 12, width: '100%' }}>
          <div className="timeline-job-title" style={{
            fontWeight: 700,
            fontSize: '1.05rem',
            letterSpacing: '0.5px',
            color: '#fff',
            textAlign: 'center',
            width: '100%',
            margin: '0 auto',
            display: 'block'
          }}>{cat.title}</div>
        </div>
        {(cat.skills as string[][]).map((row: string[], rowIdx: number) => (
          <div key={rowIdx} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0,
            flexWrap: 'wrap',
            width: '100%',
            marginBottom: rowIdx !== (cat.skills as string[][]).length - 1 ? 4 : 0
          }}>
            {row.map((skill: string, skillIdx: number) => (
              <React.Fragment key={`${cat.title}-${rowIdx}-${skillIdx}`}>
                <span style={{
                  color: '#00bfff',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  fontFamily: 'Quicksand, Poppins, sans-serif',
                  padding: '0 10px',
                  borderRadius: '8px',
                  letterSpacing: '0.5px',
                  lineHeight: 1.2
                }}>{skill}</span>
                {/* Only show divider if not last in row */}
                {skillIdx !== row.length - 1 && (
                  <div style={{
                    width: '2px',
                    height: '20px',
                    background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
                    borderRadius: '2px',
                    margin: '0 2px'
                  }} />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div
      className={`timeline-card${cat.title === 'Programming Languages' ? ' gradient-animated-border' : ''}`}
      style={{ 
        flex: isFullWidth ? '1 1 100%' : '0 0 340px',
        minWidth: isFullWidth ? '340px' : '340px',
        maxWidth: isFullWidth ? '900px' : '340px',
        margin: '0 8px', 
        padding: '14px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'transparent',
        boxSizing: 'border-box',
        width: isFullWidth ? '100%' : undefined
      }}
      key={cat.title}
    >
      <div className="timeline-card-header" style={{ marginBottom: 12, width: '100%' }}>
        <div className="timeline-job-title" style={{
          fontWeight: 700,
          fontSize: '1.05rem',
          letterSpacing: '0.5px',
          color: '#fff',
          textAlign: 'center',
          width: '100%',
          margin: '0 auto',
          display: 'block'
        }}>{cat.title}</div>
      </div>
      {/* Render skills horizontally */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0,
        flexWrap: 'wrap',
        width: '100%'
      }}>
        {(cat.skills as string[]).map((skill: string, skillIdx: number) => (
          <React.Fragment key={`${cat.title}-${skillIdx}`}>
            <span style={{
              color: '#00bfff',
              fontSize: '1.05rem',
              fontWeight: 600,
              fontFamily: 'Quicksand, Poppins, sans-serif',
              padding: '0 10px',
              borderRadius: '8px',
              letterSpacing: '0.5px',
              lineHeight: 1.2
            }}>{skill}</span>
            {skillIdx !== (cat.skills as string[]).length - 1 && (
              <div style={{
                width: '2px',
                height: '20px',
                background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
                borderRadius: '2px',
                margin: '0 2px'
              }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Skills; 