import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import '../Navigation.css';

type NavLinkClassNameProps = {
  isActive: boolean;
};

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      {/* First Row - Core Training */}
      <NavLink to="/" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'} end>
        <FaHome size={24} />
      </NavLink>
      <NavLink to="/about-me" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        About Me
      </NavLink>
      <NavLink to="/experiences" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Experiences
      </NavLink>
      <NavLink to="/education" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Education
      </NavLink>

      {/* Second Row - Wellness & Support */}
      <div style={{ flexBasis: '100%', height: 0, margin: '-15px 0' }}></div>
      <NavLink to="/skills" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Skills
      </NavLink>
      <NavLink to="/portfolio" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation; 