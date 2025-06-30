import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import '../GoogleDocViewer.css';

const experiences = [
  {
    title: 'Junior Software Engineer',
    company: 'Second Nature',
    location: '',
    date: 'Jan 2025 – Present',
    bullets: [],
  },
  {
    title: 'Data Manager',
    company: 'Second Nature',
    location: '',
    date: 'Dec 2023 – Jan 2025',
    bullets: [
      'Oversee and audit 150+ business accounts monthly, ensuring data integrity and accuracy through Salesforce.',
      'Leverage advanced Excel functions and data visualization to identify trends and deliver actionable insights to stakeholders.',
      'Lead bulk data transformation, uploads, and removals to maintain clean, up-to-date records.',
      'Serve as a subject matter expert in ERP systems (AppFolio, Propertyware, Buildium, Rent Vine), supporting cross-functional teams.',
      'Conduct bi-monthly charge detail and invoice audits, implementing deep-dive techniques for financial accuracy.',
      'Extract, transform, and load data using Excel and SQL queries for robust business intelligence.',
      'Design concise team reports and onboarding modules to accelerate new hire integration.',
      'Mentor and train new team members, fostering a culture of continuous improvement.'
    ],
  },
  {
    title: 'Graduate Research Associate',
    company: 'University of Utah',
    location: '',
    date: 'Jan 2020 – May 2022',
    bullets: [
      'Collected, processed, and analyzed scientific data for peer-reviewed publications.',
      'Utilized advanced Excel functions and statistical tools (Stata, SPSS, SAS, SQL, R Studio) for in-depth quantitative analysis.',
      'Developed and maintained progress reports, needs assessments, and custom databases.',
      'Programmed and tested REDCap software for complex data collection and compliance.',
      'Ensured data integrity and regulatory compliance through rigorous IRB enforcement and process oversight.',
      'Provided mentorship to research assistants and coordinated participant data collection.',
      'Synthesized research findings and presented to academic audiences using PowerPoint and pivot tables.'
    ],
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'University of Utah',
    location: '',
    date: 'Dec 2019 – May 2022',
    bullets: [],
  },
  {
    title: 'Exercise Scientist',
    company: 'National Academy of Sports Medicine',
    location: '',
    date: 'Jan 2015 – Jun 2018',
    bullets: [],
  },
  {
    title: 'Medical Corps',
    company: 'United States Army',
    location: '',
    date: 'Aug 2010 – Aug 2014',
    bullets: [],
  },
];

const Experiences: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{
        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700
      }}>Experiences</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaBriefcase 
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
        }}>A journey through my professional roles.</p>
      </div>
      <div className="content-section">
        <div className="timeline-container">
          <div className="header-divider" style={{ margin: '0 auto 30px auto' }} />
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div className="timeline-row" key={idx}>
                <div className="timeline-icon-col">
                  <div className="timeline-icon-wrapper">
                    <FaBriefcase className="timeline-icon" />
                    {idx !== experiences.length - 1 && <div className="timeline-vertical-line" />}
                  </div>
                </div>
                <div className="timeline-card gradient-animated-border">
                  <div className="timeline-card-header">
                    <div>
                      <div className="timeline-job-title">{exp.title}</div>
                      {exp.company && (
                        <div className="timeline-company">
                          {exp.company}
                        </div>
                      )}
                    </div>
                    <div className="timeline-date">{exp.date}</div>
                  </div>
                  {exp.bullets.length > 0 && (
                    <ul className="timeline-bullets">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences; 