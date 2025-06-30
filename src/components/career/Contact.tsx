import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../GoogleDocViewer.css';
import './Contact.css';
import { FaExclamationTriangle, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaAddressBook } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="doc-container">
      <h2 style={{
        background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: '2rem'
      }}>Contact</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FaAddressBook 
          style={{ 
            fontSize: '2rem',
            color: '#6a1b9a',
            transition: 'all 0.3s ease'
          }}
        />
      </div>
      <div className="contact-form-description" style={{ color: '#ffffff', marginBottom: '2rem', textAlign: 'center' }}>
        Have a project in mind, a question, or just want to connect?
      </div>
      <div className="typing-animation" style={{ marginBottom: '1rem' }}>
        <TypeAnimation
          sequence={[
            'Feel free to reach out!',
            2000,
            '',
            500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{
            fontSize: '1.8rem',
            color: '#9d6be7',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontStyle: 'italic',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            display: 'inline-block',
            minHeight: '1.5rem',
            textAlign: 'center'
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0, marginTop: 24, marginBottom: 24 }}>
        <a href="mailto:jqohayon@gmail.com" style={{ color: '#00bfff', fontSize: '1.8rem', textDecoration: 'none', fontWeight: 600, padding: '0 24px' }} title="Gmail">
          <FaEnvelope style={{ marginRight: 8 }} />Gmail
        </a>
        <div style={{ width: '3px', height: '32px', background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)', borderRadius: '2px' }} />
        <a href="https://www.linkedin.com/in/jacqueline-ohayon" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', fontSize: '1.8rem', textDecoration: 'none', fontWeight: 600, padding: '0 24px' }} title="LinkedIn">
          <FaLinkedin style={{ marginRight: 8 }} />LinkedIn
        </a>
        <div style={{ width: '3px', height: '32px', background: 'linear-gradient(180deg, #00bfff 0%, #9370DB 100%)', borderRadius: '2px' }} />
        <a href="https://github.com/jqohayon" target="_blank" rel="noopener noreferrer" style={{ color: '#00bfff', fontSize: '1.8rem', textDecoration: 'none', fontWeight: 600, padding: '0 24px' }} title="GitHub">
          <FaGithub style={{ marginRight: 8 }} />GitHub
        </a>
      </div>
      <div style={{ 
        color: '#9d6be7', 
        fontSize: '1.2rem', 
        textAlign: 'center', 
        marginTop: '2rem',
        marginBottom: '2rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500
      }}>
        Or craft a message below
      </div>
      {/* Contact Form */}
      <form
        className="contact-form"
        onSubmit={e => { e.preventDefault(); setShowModal(true); }}
      >
        <div className="form-field">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="form-input"
            placeholder="Start typing"
            autoComplete="name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="form-input"
            placeholder="Start typing"
            autoComplete="email"
          />
        </div>
        <div className="form-field">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className="form-textarea"
            placeholder="Start typing"
          />
        </div>
        <button type="submit" className="form-button">
          Send Message
        </button>
      </form>
      {showModal && (
        <div className="contact-modal-overlay">
          <div className="contact-modal">
            <FaExclamationTriangle style={{ fontSize: '2.5rem', color: '#00bfff', marginBottom: '1rem' }} />
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.5rem' }}>Form Temporarily Disabled</h3>
            <p style={{ color: '#bdbdbd', marginBottom: '1.5rem', fontSize: '1.08rem' }}>
              This contact form has been temporarily disabled.<br />
              For any inquiries, please contact Jacqueline directly:
            </p>
            <div className="contact-info-box">
              <div className="contact-info-item">
                <FaPhoneAlt style={{ fontSize: '1.1rem' }} />
                <span className="contact-info-text">801-513-8973</span>
              </div>
              <div className="contact-info-item">
                <FaEnvelope style={{ fontSize: '1.1rem' }} />
                <span className="contact-info-text">jqohayon@gmail.com</span>
              </div>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="form-button"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact; 