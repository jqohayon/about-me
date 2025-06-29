import React from 'react';
import '../GoogleDocViewer.css';

const Option_2: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Alternative Options</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <p><strong>Data Sciences (Analytics & Engineering)</strong></p>
          <p>Essential tools and technologies for data processing, analysis, and visualization.</p>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4>Data Processing & Analytics</h4>
            <ul>
              <li>
                <strong>Snowflake</strong>
                <p>Cloud-based data warehouse for storing, analyzing, & securely sharing large volumes of data. Features:</p>
                <ul>
                  <li>Complex data analysis capabilities</li>
                  <li>User-friendly interface</li>
                  <li>Secure data sharing</li>
                  <li>Advanced data warehousing</li>
                </ul>
              </li>
              <li>
                <strong>NumPy</strong>
                <p>Fundamental library for numerical computing in Python, essential for:</p>
                <ul>
                  <li>Data science applications</li>
                  <li>Machine learning operations</li>
                  <li>Scientific computing</li>
                  <li>Array and matrix handling</li>
                </ul>
                <p><em>Ideal for Data Analysts</em></p>
                <p>Resource: W3 Schools</p>
              </li>
              <li>
                <strong>PySpark</strong>
                <p>Open-source framework for big data processing & analytics, offering:</p>
                <ul>
                  <li>Python interface for Apache Spark</li>
                  <li>Distributed data processing</li>
                  <li>SQL query capabilities</li>
                  <li>Machine learning tools</li>
                  <li>Graph processing features</li>
                </ul>
                <p><em>Suitable for Data Scientists, Engineers, and Analysts</em></p>
              </li>
              <li>
                <strong>Jupyter</strong>
                <p>Interactive environment for data analytics that enables:</p>
                <ul>
                  <li>Data exploration and cleaning</li>
                  <li>Analysis and visualization</li>
                  <li>Code documentation</li>
                  <li>Multiple language support (primarily Python)</li>
                </ul>
                <p><em>Perfect for Exploratory Data Analysis (EDA)</em></p>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Data Visualization</h4>
            <ul>
              <li>
                <strong>Power BI</strong>
                <p>Comprehensive business intelligence tool offering:</p>
                <ul>
                  <li>Multiple data source connections</li>
                  <li>Interactive dashboards</li>
                  <li>Custom reports</li>
                  <li>Charts, graphs, and maps</li>
                  <li>User-friendly interface for non-technical users</li>
                </ul>
                <p><em>Ideal for Business Analysts</em></p>
              </li>
              <li>
                <strong>Tableau</strong>
                <p>Visual analytics platform for:</p>
                <ul>
                  <li>Data analysis and visualization</li>
                  <li>Dashboard creation</li>
                  <li>Interactive graphs and charts</li>
                  <li>Map-based visualizations</li>
                  <li>Business decision support</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Option_2; 