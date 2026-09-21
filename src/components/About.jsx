import React from 'react';
import { UserCheck, Compass, Target, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-tag">PROFILE OVERVIEW</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Dedicated Data Analyst, Technical Lead, and Corporate Data Trainer.
        </p>
      </div>

      <div className="about-grid">
        {/* Main Editorial Career Objective Card */}
        <div className="vintage-card about-card">
          <div className="about-card-header">
            <UserCheck className="about-icon" size={24} />
            <h3 className="about-heading">CAREER OBJECTIVE</h3>
          </div>

          <hr className="vintage-double-divider" />

          <p className="about-text">
            {personalInfo.careerObjective}
          </p>

          <div className="about-highlights-list">
            <div className="about-item">
              <Compass size={18} className="item-icon" />
              <div>
                <strong>Product Development & Technical Leadership</strong>
                <p>Experience at IQMath Technologies since 2021 driving analytical solutions.</p>
              </div>
            </div>

            <div className="about-item">
              <Target size={18} className="item-icon" />
              <div>
                <strong>Data Science & Corporate Training</strong>
                <p>Mentoring professionals across top Fortune 500 & enterprise organizations.</p>
              </div>
            </div>

            <div className="about-item">
              <BookOpen size={18} className="item-icon" />
              <div>
                <strong>Continuous Innovation & Team Growth</strong>
                <p>Leveraging predictive modeling, visualization, and AI for impactful results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: flex;
          justify-content: center;
        }

        .about-card {
          width: 100%;
          max-width: 860px;
          background-color: var(--bg-surface);
        }

        .about-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .about-icon {
          color: var(--accent-terracotta);
        }

        .about-heading {
          font-family: var(--font-mono);
          font-size: 1.25rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .about-text {
          font-family: var(--font-serif-body);
          font-size: 1.15rem;
          color: var(--text-primary);
          line-height: 1.8;
          background-color: var(--bg-surface-alt);
          padding: 1.5rem;
          border: 1px solid var(--border-vintage);
          border-left: 4px solid var(--accent-terracotta);
          border-radius: var(--radius-sm);
          margin-bottom: 2rem;
        }

        .about-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-vintage);
          border-radius: var(--radius-sm);
        }

        .item-icon {
          color: var(--accent-terracotta);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .about-item strong {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.2rem;
        }

        .about-item p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin: 0;
        }
      `}</style>
    </section>
  );
}
