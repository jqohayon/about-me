import React, { useState } from 'react';
import './GoogleDocViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

interface FeedbackForm {
  name: string;
  message: string;
  email: string;
}

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackForm>({
    name: '',
    message: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length < 10) {
      alert('Please share your thoughts before submission! (minimum 10 characters)');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Thank you for your feedback!');
        setFormData({ name: '', message: '', email: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Apply character limits
    if (name === 'name' || name === 'email') {
      updatedValue = value.slice(0, 30);
    } else if (name === 'message') {
      updatedValue = value.slice(0, 500);
    }

    setFormData(prev => ({
      ...prev,
      [name]: updatedValue
    }));
  };

  const inputStyles = {
    padding: '12px 16px',
    fontSize: '1rem',
    backgroundColor: 'rgba(157, 107, 231, 0.1)',
    color: '#d4b6ff',
    border: '1px solid rgba(157, 107, 231, 0.2)',
    borderRadius: '8px',
    width: '500px',
    transition: 'border-color 0.3s ease',
    fontFamily: "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    '&:focus': {
      outline: 'none',
      borderColor: 'rgba(157, 107, 231, 0.5)'
    }
  };

  return (
    <div className="doc-container">
      <h2>Feedback</h2>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <FontAwesomeIcon 
          icon={faLightbulb} 
          style={{
            fontSize: '2.5rem',
            color: '#6a1b9a',
            marginBottom: '1rem',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
            transition: 'transform 0.3s ease, color 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.color = '#8e24aa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#6a1b9a';
          }}
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.5rem',
          margin: 0,
          fontFamily: "'Poppins', sans-serif",
          textAlign: 'center',
          fontWeight: '500',
          letterSpacing: '0.5px'
        }}>
          Share your thoughts
        </p>
      </div>
      <div className="content-section">
        <form 
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center',
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '2rem'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
            <label 
              htmlFor="name" 
              style={{
                color: '#d4b6ff',
                fontSize: '1rem',
                fontFamily: "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                textAlign: 'left',
                marginLeft: '0.2rem'
              }}
            >
              Name
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={30}
                style={inputStyles}
              />
              <span style={{
                position: 'absolute',
                right: '0.8rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(212, 182, 255, 0.4)',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                pointerEvents: 'none',
                opacity: formData.name ? '0' : '1',
                transition: 'opacity 0.2s ease',
                fontFamily: "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                optional
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
            <label 
              htmlFor="message" 
              style={{
                color: '#d4b6ff',
                fontSize: '1rem',
                fontFamily: "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                textAlign: 'left',
                marginLeft: '0.2rem'
              }}
            >
              Thoughts
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              maxLength={500}
              style={{
                ...inputStyles,
                resize: 'vertical'
              }}
            />
            <span style={{
              position: 'absolute',
              right: '8px',
              bottom: '8px',
              color: 'rgba(212, 182, 255, 0.4)',
              fontSize: '0.8rem',
              pointerEvents: 'none',
              fontFamily: "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}>
              {formData.message.length}/500
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
            <label 
              htmlFor="email" 
              style={{
                color: '#d4b6ff',
                fontSize: '1rem',
                fontFamily: "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                textAlign: 'left',
                marginLeft: '0.2rem'
              }}
            >
              Email
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={30}
                style={inputStyles}
              />
              <span style={{
                position: 'absolute',
                right: '0.8rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(212, 182, 255, 0.4)',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                pointerEvents: 'none',
                opacity: formData.email ? '0' : '1',
                transition: 'opacity 0.2s ease',
                fontFamily: "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                optional
              </span>
            </div>
          </div>

          <button
            type="submit"
            style={{
              padding: '12px 24px',
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, rgba(157, 107, 231, 0.4) 0%, rgba(106, 27, 154, 0.4) 100%)',
              color: '#d4b6ff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 2px 8px rgba(157, 107, 231, 0.1)',
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '0.3px',
              fontWeight: '400'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback; 