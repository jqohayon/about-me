import React from 'react';

const ReferencesSection: React.FC = () => {
  return (
    <section>
      <h2>Page References</h2>
      <p>
        Please find the{' '}
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="button">
          help
        </a>{' '}
        button for common FAQ.
      </p>
    </section>
  );
};

export default ReferencesSection; 