import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import '../GoogleDocViewer.css';
import '../../App.css';

const experiences = [
  {
    title: 'Junior Software Engineer',
    company: 'Second Nature',
    location: '',
    date: 'Jan 2025 – Present',
    bullets: [
      'Develop and maintain backend services using Node.js and TypeScript in a modular microservices architecture',
      'Monitor backend performance using Datadog; built alerts and dashboards to support uptime and observability.',
      'Participated in incident response and root cause analysis to improve system reliability',
      'Program backend data integrations, including foundational work for RentManager - Propexo integration',
      'Build and manage PostgreSQL databases, optimizing performance and query complexity',
      'Integrate AWS services: S3, SES, and Lambda for cloud storage, communications, and serverless processing',
      'Test RESTful APIs using Postman collections to ensure reliable endpoint behavior',
      'Write unit and integration tests in Jest to maintain code quality and reliability',
      'Deploy containerized services using Docker and Kubernetes in a CI/CD pipeline',
      'Work in Agile teams, contributing to sprint planning, reviews, and standups',
      'Manage code versioning and collaboration via Git and GitHub',
      'Create integrations for multiple PMSs, resulting in an annual revenue increase of $17M',
      'Maintain LaunchDarkly for controlled feature rollouts and vendor integrations'
    ],
  },
  {
    title: 'Data Specialist',
    company: 'Second Nature',
    location: '',
    date: 'Dec 2023 – Jan 2025',
    bullets: [
      'Developed, maintained, and monthly audit of 150 accounts through Salesforce',
      'Used advanced nested Excel functions to instill and improve data integrity and accuracy',
      'Bulk data transformation, uploading and removal to include enrollments and data nuances',
      'Subject matter expert in ERP software including AppFolio, Propertyware, Buildium, RentVine.',
      'Weekly charge detail and monthly invoicing accuracy to include deep auditing techniques',
      'Data extractions, transformation, loading, through Google Suite, Excel & SQL queries',
      'Created detailed onboarding and training materials'
    ],
  },
  {
    title: 'Graduate Research Associate',
    company: 'University of Utah',
    location: '',
    date: 'Jan 2020 – May 2022',
    bullets: [
      'Managed data pipeline collection, processing, and analysis processes',
      'Advanced statistical analysis using Stata, IBM SPSS, SAS, SQL, and RStudio',
      'Created and evolved progress reports, needs analysis and collection databases',
      'Complex programming, testing, and performance of REDCap software',
      'Synthesized quantitative research after thorough literature review',
      'Presented published scientific work to peer reviewed boards and educators',
      'Supervising subordinates to work with study participants'
    ],
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'University of Utah',
    location: '',
    date: 'Dec 2019 – May 2022',
    bullets: [
      'Successful construction and assessment of student progress through APA papers, assignments, quizzes, and exams for up to 600 students at an R1 institution.',
      'Enhanced student growth by providing meaningful, thorough, and detailed performance feedback via written, in person, and virtual conference.',
      "Invested in students' personal growth during office hours, meeting to address questions and host study groups.",
      'Contributed to seven upper-level courses and instructors.',
      'Coordinated with instructors to create enriching course content in the following subjects:'
    ],
    coursesRow1: [
      'Advanced Kinesiology',
      'Advanced Exercise & Physiology',
    ],
    coursesRow2: [
      'Motor Behavior',
      'CSCS Preparation',
      'Health & Human Relations',
    ],
    coursesRow3: [
      'Athletic Coaching',
      'ACSM Certification Preparation'
    ]
  },
  {
    title: 'Exercise Scientist',
    company: 'National Academy of Sports Medicine',
    location: '',
    date: 'Jan 2015 – Jun 2018',
    bullets: [
      'Personalized wellness programming for weight loss and prevention of type II diabetes mellitus.',
      'Resistance training focused on increasing bone mass and preventing weight bearing injuries.',
      'Wellness coaching utilizing TTM and SMART goals to improve overall health and wellbeing.'
    ],
  },
  {
    title: 'Medical Corps',
    company: 'United States Army',
    location: '',
    date: 'Aug 2010 – Aug 2014',
    bullets: [
      'Exhibited leadership as a non-commissioned officer by managing a group of five to twenty-five.',
      'Advanced leadership courses, built to teach professional management and communication skills.',
      'Successfully taught courses to subordinates pertaining to professionalism and leadership.',
      'Built and managed programs to reduce failure of physical fitness courses and build comradery over wellness.'
    ],
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
      <div className="timeline-container">
        <div className="header-divider" style={{ margin: '0 auto 30px auto' }} />
        <div className="timeline" style={{ position: 'relative' }}>
          <style>
            {`.timeline::before { height: calc(100% - 96px) !important; }`}
          </style>
          {experiences.map((exp, idx) => (
            <div className="timeline-row" key={idx}>
              <div className="timeline-icon-col">
                <div className="timeline-icon-wrapper">
                  <FaBriefcase className="timeline-icon" style={{ zIndex: 2, position: 'relative' }} />
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
                  <div className="timeline-date" style={{ color: '#9370DB', fontWeight: 400, fontSize: '1.15rem', textAlign: 'right', letterSpacing: 0 }}>{exp.date}</div>
                </div>
                {exp.bullets.length > 0 && (
                  <ul className="timeline-bullets">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                {exp.coursesRow1 && (
                  <div className="timeline-details-row" style={{ color: '#00bfff', marginTop: 8, fontWeight: 500, fontSize: '0.82rem', justifyContent: 'center', textAlign: 'center', width: '100%', display: 'flex' }}>
                    <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                      {exp.coursesRow1.map((course, i) => (
                        <React.Fragment key={course}>
                          <span>{course}</span>
                          {i !== exp.coursesRow1.length - 1 && <span className="gradient-pipe" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
                {exp.coursesRow2 && (
                  <div className="timeline-details-row" style={{ color: '#00bfff', marginTop: 8, fontWeight: 500, fontSize: '0.82rem', justifyContent: 'center', textAlign: 'center', width: '100%', display: 'flex' }}>
                    <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                      {exp.coursesRow2.map((course, i) => (
                        <React.Fragment key={course}>
                          <span>{course}</span>
                          {i !== exp.coursesRow2.length - 1 && <span className="gradient-pipe" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
                {exp.coursesRow3 && (
                  <div className="timeline-details-row" style={{ color: '#00bfff', marginTop: 8, fontWeight: 500, fontSize: '0.82rem', justifyContent: 'center', textAlign: 'center', width: '100%', display: 'flex' }}>
                    <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                      {exp.coursesRow3.map((course, i) => (
                        <React.Fragment key={course}>
                          <span>{course}</span>
                          {i !== exp.coursesRow3.length - 1 && <span className="gradient-pipe" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences; 