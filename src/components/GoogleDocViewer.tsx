import React from 'react';
import './GoogleDocViewer.css';

const GoogleDocViewer: React.FC = () => {
  return (
    <div className="doc-container">
      <iframe
        title="Career Informatics Document"
        className="google-doc"
        src="https://docs.google.com/document/d/14Z5o3InR-2lLqg0WeByzgg0t5_n7xvUSQ0kNxPT_Cx4/preview"
        frameBorder="0"
        width="100%"
        height="800px"
        allowFullScreen
      />
    </div>
  );
}

export default GoogleDocViewer; 