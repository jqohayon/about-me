import React from 'react';
import '../GoogleDocViewer.css';

const CareerPaths: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Career Paths</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <p><strong>Understanding the Tech Career Landscape</strong></p>
          <p>This guide breaks down three main career paths in technology: software engineering (building applications), 
          data engineering (building data infrastructure), and data analytics (evaluating data). While there's overlap between 
          these paths, especially in data-focused roles, understanding their distinctions can help guide your career choices.</p>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4>Software Engineering</h4>
            <div className="path-definition">
              <p>The process of designing, building, testing, & maintaining software applications. 
              It's a branch of computer science that uses engineering principles to create software 
              that solves real-world problems.</p>
            </div>
            <ul>
              <li><strong>Front End Development</strong>
                <p>Building user interfaces and web applications</p>
              </li>
              <li><strong>Back End Development</strong>
                <p>Creating server-side logic and APIs</p>
              </li>
              <li><strong>Full Stack Development</strong>
                <p>Combining both front-end and back-end expertise</p>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Data Engineering</h4>
            <div className="path-definition">
              <p>The process of building systems to collect, store, & analyze large amounts of data. 
              Data engineers prepare data infrastructure so that it can be used by data scientists & 
              analysts to support business goals.</p>
            </div>
            <ul>
              <li><strong>Machine Learning Engineering</strong>
                <p>Building and deploying ML models and infrastructure</p>
              </li>
              <li><strong>Cloud Computing</strong>
                <p>Designing and managing cloud-based data solutions</p>
              </li>
              <li><strong>Big Data Engineering</strong>
                <p>Creating systems for processing massive datasets</p>
              </li>
              <li><strong>DataOps Engineering</strong>
                <p>Streamlining data operations and pipelines</p>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Data Analytics</h4>
            <div className="path-definition">
              <p>The process of analyzing data to gain insights & make decisions. This involves 
              collecting, organizing, & transforming data to understand patterns and derive 
              meaningful conclusions.</p>
            </div>
            <ul>
              <li><strong>Business Analytics</strong>
                <p>Analyzing data to drive business decisions</p>
              </li>
              <li><strong>Corporate Analytics</strong>
                <p>Working with startups and major corporations</p>
              </li>
              <li><strong>Research Analytics</strong>
                <p>Conducting in-depth data research and analysis</p>
              </li>
              <li><strong>Specialized Analytics</strong>
                <p>Focus on healthcare, government, or academia</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CareerPaths; 