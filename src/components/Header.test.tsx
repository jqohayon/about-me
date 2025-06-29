import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders header with title', () => {
    render(<Header />);
    
    // Check if the title is rendered
    expect(screen.getByText('Quirky Clubhouse')).toBeInTheDocument();
    
    // Check if the welcome message is rendered
    expect(screen.getByText(/welcome to my website/i)).toBeInTheDocument();
  });

  test('has correct styling classes', () => {
    const { container } = render(<Header />);
    
    // Check if header element exists
    const headerElement = container.querySelector('header');
    expect(headerElement).toBeInTheDocument();
    
    // Check if title has correct styling
    const titleElement = screen.getByText('Quirky Clubhouse');
    expect(titleElement).toHaveClass('title');
  });
}); 