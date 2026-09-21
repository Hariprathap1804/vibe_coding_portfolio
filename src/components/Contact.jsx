import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Code2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Set submission data object following exact PRD JSON format
      setSubmittedData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        description: formData.description
      });
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({ name: '', email: '', phone: '', description: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <span className="section-tag">GET IN TOUCH</span>
        <h2 className="section-title">Let's Collaborate</h2>
        <p className="section-subtitle">
          Interested in corporate training, data analytics solutions, or technical leadership? Send a message below.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Side: Contact Information Cards */}
        <div className="contact-info-panel">
          <div className="vintage-card info-card">
            <div className="paper-stamp">DIRECTORY</div>

            <h3 className="info-title">DIRECT CONTACT DETAILS</h3>
            <p className="info-intro">
              Feel free to reach out directly via email or phone, or connect on LinkedIn and GitHub.
            </p>

            <hr className="vintage-divider" />

            <div className="contact-links-list">
              <a href={`mailto:${personalInfo.email}`} className="contact-detail-item">
                <div className="icon-badge">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="detail-label">EMAIL</span>
                  <span className="detail-value">{personalInfo.email}</span>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-detail-item">
                <div className="icon-badge">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="detail-label">PHONE</span>
                  <span className="detail-value">{personalInfo.phone}</span>
                </div>
              </a>

              <div className="contact-detail-item">
                <div className="icon-badge">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="detail-label">LOCATION</span>
                  <span className="detail-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form / Success State */}
        <div className="contact-form-panel">
          <div className="vintage-card form-card">
            <div className="paper-stamp">COLLABORATION FORM</div>

            {submittedData ? (
              <div className="submission-success-box">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={40} className="success-icon" />
                </div>

                <h3 className="success-heading">Thank you for reaching out!</h3>
                <p className="success-message">
                  Your message has been received. Below is the structured payload generated on the frontend:
                </p>

                {/* Structured JSON Output as per PRD Section 17 */}
                <div className="json-payload-card">
                  <div className="json-header">
                    <Code2 size={14} />
                    <span>FRONTEND DATA STRUCTURE (JSON)</span>
                  </div>
                  <pre className="json-code">
                    {JSON.stringify(submittedData, null, 2)}
                  </pre>
                </div>

                <button onClick={handleReset} className="vintage-btn vintage-btn-secondary btn-full">
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="collaboration-form">
                <h3 className="form-heading">SEND A MESSAGE</h3>

                {/* Name */}
                <div className="vintage-form-group">
                  <label htmlFor="name" className="vintage-label">
                    NAME <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`vintage-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && (
                    <span className="error-text">
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="vintage-form-group">
                  <label htmlFor="email" className="vintage-label">
                    EMAIL <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`vintage-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && (
                    <span className="error-text">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="vintage-form-group">
                  <label htmlFor="phone" className="vintage-label">
                    PHONE <span className="required-star">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={`vintage-input ${errors.phone ? 'error' : ''}`}
                  />
                  {errors.phone && (
                    <span className="error-text">
                      <AlertCircle size={12} /> {errors.phone}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="vintage-form-group">
                  <label htmlFor="description" className="vintage-label">
                    DESCRIPTION <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your query, project idea, or training requirement..."
                    className={`vintage-textarea ${errors.description ? 'error' : ''}`}
                  />
                  {errors.description && (
                    <span className="error-text">
                      <AlertCircle size={12} /> {errors.description}
                    </span>
                  )}
                </div>

                <button type="submit" className="vintage-btn vintage-btn-primary btn-full">
                  <span>SEND MESSAGE</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 2rem;
          max-width: 980px;
          margin: 0 auto;
        }

        .info-card,
        .form-card {
          background-color: var(--bg-surface);
          height: 100%;
        }

        .info-title,
        .form-heading {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .info-intro {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .contact-links-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem;
          background-color: var(--bg-surface-alt);
          border: 1px solid var(--border-vintage);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          transition: background-color 0.15s ease;
        }

        .contact-detail-item:hover {
          background-color: var(--highlight-manila);
        }

        .icon-badge {
          width: 38px;
          height: 38px;
          background-color: var(--highlight-manila);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-terracotta);
          flex-shrink: 0;
        }

        .detail-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--text-secondary);
          display: block;
        }

        .detail-value {
          font-weight: 600;
          font-size: 0.95rem;
          word-break: break-all;
        }

        .required-star {
          color: #C0392B;
        }

        .btn-full {
          width: 100%;
          margin-top: 1rem;
        }

        .submission-success-box {
          text-align: center;
          padding: 1rem 0;
        }

        .success-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background-color: var(--highlight-manila);
          border: 2px solid var(--border-dark);
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .success-icon {
          color: var(--accent-terracotta);
        }

        .success-heading {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .success-message {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .json-payload-card {
          background-color: #2D2A26;
          color: #F5EBDD;
          border: 2px solid var(--border-dark);
          border-radius: var(--radius-sm);
          padding: 1rem;
          text-align: left;
          margin-bottom: 1.5rem;
        }

        .json-header {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 1px;
          color: var(--accent-sand);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
          padding-bottom: 0.4rem;
          border-bottom: 1px dashed #5A5248;
        }

        .json-code {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          white-space: pre-wrap;
          color: #E6D3B3;
        }

        .error-text {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 0.2rem;
        }

        @media (max-width: 840px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
