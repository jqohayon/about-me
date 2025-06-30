import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaDownload } from 'react-icons/fa';
import '../Navigation.css';

type NavLinkClassNameProps = {
  isActive: boolean;
};

const Navigation: React.FC = () => {
  const handleDownloadCV = () => {
    // You can replace this with your actual CV file path
    const cvUrl = '/path-to-your-cv.pdf'; // Update this path
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'YourName_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navigation-banner" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(24, 16, 36, 0.95)',
      borderBottomLeftRadius: '22px',
      borderBottomRightRadius: '22px',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      boxShadow: '0 4px 24px rgba(0,0,0,0.32)',
      padding: '0.8rem 1.2rem',
      margin: 0,
      gap: '1.2rem',
    }}>
      <NavLink to="/" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'} end style={{ fontSize: '1rem' }}>
        <FaHome size={22} />
      </NavLink>
      <NavLink to="/about-me" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'} style={{ fontSize: '1rem' }}>
        About
      </NavLink>
      <NavLink to="/experiences" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'} style={{ fontSize: '1rem' }}>
        Experience
      </NavLink>
      <NavLink to="/education" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'} style={{ fontSize: '1rem' }}>
        Education
      </NavLink>
      <NavLink to="/skills" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'} style={{ fontSize: '1rem' }}>
        Skills
      </NavLink>
      <NavLink to="/portfolio" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'} style={{ fontSize: '1rem' }}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'} style={{ fontSize: '1rem' }}>
        Contact
      </NavLink>
      <button 
        onClick={handleDownloadCV}
        className="download-cv-btn"
        style={{
          background: 'linear-gradient(135deg, #274690 0%, #3a8fd8 50%, #6a1b9a 100%)',
          color: 'white',
          border: '1px solid #2d2d44',
          padding: '7px 14px',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '0.95rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(58, 58, 106, 0.18)',
          opacity: 0.92
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(58, 58, 106, 0.22)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(58, 58, 106, 0.18)';
        }}
      >
        <FaDownload size={14} />
        Download CV
      </button>
    </nav>
  );
};

export default Navigation; 