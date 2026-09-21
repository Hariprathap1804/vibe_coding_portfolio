import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-tag">CAREER HISTORY</span>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Leading technical operations and analytical product development.
        </p>
      </div>

      <div className="experience-container">
        <div className="retro-timeline">
          {workExperience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={20} className="marker-icon" />
              </div>

              <div className="vintage-card timeline-content">
                <div className="paper-stamp">{exp.period}</div>
                
                <div className="exp-meta-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-group">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-location">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="exp-period-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <hr className="vintage-divider" />

                <div className="exp-bullets">
                  <h4 className="bullets-title">Key Responsibilities & Leadership Impact:</h4>
                  <ul>
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="bullet-item">
                        <CheckCircle2 size={16} className="bullet-icon" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-container {
          max-width: 860px;
          margin: 0 auto;
        }

        .retro-timeline {
          position: relative;
          padding-left: 2rem;
          border-left: 3px dashed var(--border-dark);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
        }

        .timeline-marker {
          position: absolute;
          left: -2.8rem;
          top: 0;
          width: 42px;
          height: 42px;
          background-color: var(--highlight-manila);
          border: 2px solid var(--border-dark);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 2px 0px var(--border-dark);
          z-index: 2;
        }

        .marker-icon {
          color: var(--accent-terracotta);
        }

        .timeline-content {
          background-color: var(--bg-surface);
        }

        .exp-meta-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .exp-role {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .exp-company-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.95rem;
        }

        .exp-company {
          font-weight: 700;
          color: var(--accent-terracotta);
        }

        .exp-location {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.85rem;
        }

        .exp-period-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background-color: var(--bg-surface-alt);
          border: 1px solid var(--border-vintage);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .bullets-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .exp-bullets ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.6;
        }

        .bullet-icon {
          color: var(--accent-terracotta);
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .retro-timeline {
            padding-left: 1.25rem;
            border-left: 2px dashed var(--border-dark);
          }
          .timeline-marker {
            left: -2rem;
            width: 32px;
            height: 32px;
          }
          .marker-icon {
            width: 16px;
            height: 16px;
          }
          .exp-role {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
