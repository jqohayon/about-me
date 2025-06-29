import React from 'react';
import '../GoogleDocViewer.css';

const Option_1: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Alternative Options</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <p><strong>Software Engineering Frameworks & Technologies</strong></p>
          <p>A curated guide to essential frameworks and technologies in modern software development.</p>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4>Python Frameworks</h4>
            <ul>
              <li>
                <strong>Django</strong>
                <p>Used for rapidly developing secure & scalable websites. Allows developers to build web apps quickly & efficiently by providing:</p>
                <ul>
                  <li>Pre-built components for common web tasks</li>
                  <li>User authentication systems</li>
                  <li>Database management</li>
                  <li>Templating engine</li>
                </ul>
                <p><em>Perfect for backend software engineering</em></p>
                <p>Resource: W3 Schools</p>
              </li>
              <li>
                <strong>MongoDB</strong>
                <p>A document-oriented NoSQL database for managing large volumes of flexible, semi-structured data. Ideal for:</p>
                <ul>
                  <li>Modern web and mobile applications</li>
                  <li>Flexible schema design</li>
                  <li>Handling rapidly changing data structures</li>
                  <li>High scalability requirements</li>
                </ul>
                <p><em>Suitable for backend software engineering & other roles</em></p>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>JavaScript Frameworks</h4>
            <ul>
              <li>
                <strong>Angular</strong>
                <p>Used for building complex, scalable Single Page Applications (SPAs) with:</p>
                <ul>
                  <li>Component-based architecture</li>
                  <li>Built-in routing</li>
                  <li>Form management</li>
                  <li>Data binding</li>
                  <li>TypeScript integration</li>
                </ul>
                <p><em>#1 Most popular frontend framework (Github Statistics)</em></p>
                <p>Recommended: Max's Course on Udemy</p>
              </li>
              <li>
                <strong>React</strong>
                <p>Framework for building interactive user interfaces (UI) focusing on:</p>
                <ul>
                  <li>Dynamic & complex UIs</li>
                  <li>Reusable components</li>
                  <li>Single Page Applications</li>
                  <li>Efficient page updates without reloads</li>
                </ul>
                <p><em>#2 Most popular frontend framework (Github Statistics)</em></p>
                <p>Resources:</p>
                <ul>
                  <li>Max's Course on Udemy</li>
                  <li>W3 Schools</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Option_1; 