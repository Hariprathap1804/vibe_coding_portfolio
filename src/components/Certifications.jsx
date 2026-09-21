import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-header">
        <span className="section-tag">CREDENTIALS & ARCHIVE</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Verified accreditations in Data Science, Machine Learning, Databases, and Software Development.
        </p>
      </div>

      <div className="grid-3 cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="vintage-card cert-card">
            <div className="cert-stamp">OFFICIAL CERTIFICATE</div>

            <div className="cert-icon-wrapper">
              <Award size={28} className="cert-icon" />
            </div>

            <h3 className="cert-title">{cert.title}</h3>

            <div className="cert-footer">
              <span className="cert-issuer">
                <ShieldCheck size={14} /> {cert.issuer}
              </span>
              <span className="vintage-badge">{cert.badge}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .cert-grid {
          max-width: 980px;
          margin: 0 auto;
        }

        .cert-card {
          background-color: var(--bg-surface);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 2.5rem;
          position: relative;
        }

        .cert-stamp {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--text-secondary);
          background-color: var(--bg-surface-alt);
          padding: 0.15rem 0.5rem;
          border: 1px dashed var(--border-vintage);
          border-radius: var(--radius-sm);
        }

        .cert-icon-wrapper {
          width: 54px;
          height: 54px;
          background-color: var(--highlight-manila);
          border: 2px solid var(--border-dark);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          box-shadow: 2px 2px 0px var(--border-dark);
        }

        .cert-icon {
          color: var(--accent-terracotta);
        }

        .cert-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .cert-footer {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px dashed var(--border-vintage);
        }

        .cert-issuer {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-terracotta);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
