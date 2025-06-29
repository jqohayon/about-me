import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="navigation">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
        end
      >
        Home
      </NavLink>
      <NavLink 
        to="/jr-engineer" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        My Journey
      </NavLink>
      <NavLink 
        to="/resources" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Resources
      </NavLink>
      <NavLink 
        to="/leveraging-ai" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        AI
      </NavLink>
      <NavLink 
        to="/career-paths" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Careers
      </NavLink>
      <NavLink 
        to="/github" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Github
      </NavLink>
    </nav>
  );
}

export default Navigation; 