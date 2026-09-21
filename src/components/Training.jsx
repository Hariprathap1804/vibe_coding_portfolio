import React from 'react';
import { Presentation, Layers, CheckCircle } from 'lucide-react';
import { trainingExperience } from '../data/portfolioData';

export default function Training() {
  return (
    <section id="training" className="section">
      <div className="section-header">
        <span className="section-tag">MENTORSHIP & WORKSHOPS</span>
        <h2 className="section-title">Training Experience</h2>
        <p className="section-subtitle">
          Delivering high-impact corporate training programs in Data Analytics, Business Intelligence, and Data Science across leading enterprises.
        </p>
      </div>

      <div className="grid-3 training-grid">
        {trainingExperience.map((item, index) => (
          <div key={index} className="vintage-card training-card">
            <div className="paper-stamp">ENTERPRISE CLIENT</div>

            <div className="training-card-header">
              <div className="org-icon-badge">
                <Presentation size={20} className="org-icon" />
              </div>
              <div>
                <h3 className="org-name">{item.organization.toUpperCase()}</h3>
                <span className="org-tagline">{item.tagline}</span>
              </div>
            </div>

            <div className="topics-wrap">
              <span className="topics-label">
                <Layers size={13} /> CURRICULUM TOOLS:
              </span>
              <div className="topic-badges">
                {item.topics.map((topic, i) => (
                  <span key={i} className="vintage-badge">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <hr className="vintage-divider" />

            <ul className="training-details-list">
              {item.details.map((detail, idx) => (
                <li key={idx} className="detail-bullet">
                  <CheckCircle size={15} className="detail-icon" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        .training-grid {
          align-items: stretch;
        }

        .training-card {
          display: flex;
          flex-direction: column;
          background-color: var(--bg-surface);
          position: relative;
        }

        .training-card-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-top: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .org-icon-badge {
          width: 44px;
          height: 44px;
          background-color: var(--highlight-manila);
          border: 2px solid var(--border-dark);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 2px 0px var(--border-dark);
          flex-shrink: 0;
        }

        .org-icon {
          color: var(--accent-terracotta);
        }

        .org-name {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .org-tagline {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-terracotta);
          display: block;
          margin-top: 0.2rem;
        }

        .topics-wrap {
          background-color: var(--bg-surface-alt);
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-vintage);
          border-radius: var(--radius-sm);
          margin-bottom: 0.5rem;
        }

        .topics-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-bottom: 0.5rem;
        }

        .topic-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .training-details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: auto;
        }

        .detail-bullet {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .detail-icon {
          color: var(--accent-terracotta);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
