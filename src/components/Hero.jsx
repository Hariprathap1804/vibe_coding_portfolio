import React from 'react';
import { ArrowRight, Mail, Briefcase, Award, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Main Vintage Profile Cover Card */}
        <div className="vintage-card hero-card">
          <div className="paper-stamp">PORTFOLIO ISSUE • EST. 2021</div>
          
          <div className="hero-header">
            <span className="hero-location-badge">
              <GraduationCap size={14} /> {personalInfo.location}
            </span>
            <span className="hero-date-badge">
              IQMATH TECHNOLOGIES • 2021 – PRESENT
            </span>
          </div>

          <div className="hero-title-area">
            <h1 className="hero-name">{personalInfo.name.toUpperCase()}</h1>
            <div className="hero-divider-line"></div>
            <p className="hero-tagline">{personalInfo.title}</p>
          </div>

          <div className="hero-intro-box">
            <p className="hero-description">
              Dedicated Data Analyst and Technical Lead specializing in product development, 
              advanced data mining, anomaly detection, and corporate data analytics & science training.
            </p>
          </div>

          {/* Key Highlight Badges */}
          <div className="hero-highlights">
            <div className="highlight-pill">
              <Briefcase size={14} />
              <span>Technical Lead @ IQMath</span>
            </div>
            <div className="highlight-pill">
              <Award size={14} />
              <span>Trainer @ Uber, TVS, EY, LatentView</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              className="vintage-btn vintage-btn-primary"
              onClick={(e) => handleScroll(e, '#projects')}
            >
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="vintage-btn vintage-btn-secondary"
              onClick={(e) => handleScroll(e, '#contact')}
            >
              <Mail size={18} />
              <span>Let's Collaborate</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 3.5rem 1.5rem 4rem 1.5rem;
          max-width: var(--max-width);
          margin: 0 auto;
        }

        .hero-container {
          display: flex;
          justify-content: center;
        }

        .hero-card {
          width: 100%;
          max-width: 860px;
          text-align: center;
          padding: 3.5rem 2.5rem;
          background: var(--bg-surface);
          border: 3px solid var(--border-dark);
          position: relative;
        }

        .hero-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px dashed var(--border-vintage);
        }

        .hero-location-badge,
        .hero-date-badge {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .hero-name {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: 1px;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }

        .hero-divider-line {
          height: 3px;
          background-color: var(--accent-terracotta);
          width: 120px;
          margin: 1rem auto;
          border-radius: 2px;
        }

        .hero-tagline {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent-terracotta);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 1.5rem;
        }

        .hero-intro-box {
          background-color: var(--bg-surface-alt);
          border: 1px solid var(--border-vintage);
          padding: 1.25rem 1.75rem;
          border-radius: var(--radius-sm);
          margin: 0 auto 2rem auto;
          max-width: 720px;
          box-shadow: inset 0 0 10px rgba(184, 165, 143, 0.15);
        }

        .hero-description {
          font-family: var(--font-serif-body);
          font-size: 1.125rem;
          color: var(--text-primary);
          line-height: 1.7;
          margin: 0;
        }

        .hero-highlights {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .highlight-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background-color: var(--highlight-manila);
          border: 1px solid var(--border-vintage);
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
          box-shadow: 2px 2px 0px var(--border-vintage);
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-card {
            padding: 2.5rem 1.5rem;
          }
          .hero-name {
            font-size: 2.5rem;
          }
          .hero-tagline {
            font-size: 0.95rem;
          }
          .hero-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
