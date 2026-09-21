import React from 'react';
import { ArrowUp, Github, Linkedin, Award, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="vintage-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <h3 className="footer-name">{personalInfo.name.toUpperCase()}</h3>
            <p className="footer-sub">{personalInfo.title}</p>
          </div>

          <div className="footer-social-links">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              title="GitHub Profile"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a 
              href={personalInfo.hackerrank} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              title="HackerRank Profile"
            >
              <Award size={18} />
              <span>HackerRank</span>
            </a>
          </div>
        </div>

        <hr className="vintage-divider" />

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personalInfo.name}. Light Vintage Portfolio Edition. Frontend Only.
          </p>

          <button onClick={scrollToTop} className="scroll-top-btn" title="Back to Top">
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .vintage-footer {
          background-color: var(--bg-surface);
          border-top: 3px solid var(--border-dark);
          padding: 3rem 1.5rem 2rem 1.5rem;
          margin-top: 4rem;
        }

        .footer-container {
          max-width: var(--max-width);
          margin: 0 auto;
        }

        .footer-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-name {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--text-primary);
          letter-spacing: 1px;
        }

        .footer-sub {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-terracotta);
          margin-top: 0.2rem;
        }

        .footer-social-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
          background-color: var(--bg-surface-alt);
          border: 1px solid var(--border-dark);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          box-shadow: 2px 2px 0px var(--border-dark);
          transition: transform 0.15s ease, background-color 0.15s ease;
        }

        .social-btn:hover {
          background-color: var(--highlight-manila);
          color: var(--accent-terracotta);
          transform: translate(-1px, -1px);
        }

        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.4rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .scroll-top-btn:hover {
          color: var(--accent-terracotta);
          background-color: var(--highlight-manila);
        }
      `}</style>
    </footer>
  );
}
