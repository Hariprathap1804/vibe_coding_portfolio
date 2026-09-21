import React from 'react';
import { Database, Cpu, Terminal, Users2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Data & Analytics':
      return <Database size={18} />;
    case 'AI & Machine Learning':
      return <Cpu size={18} />;
    case 'Programming & Cloud':
      return <Terminal size={18} />;
    case 'Professional & Leadership':
      return <Users2 size={18} />;
    default:
      return <Database size={18} />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <span className="section-tag">TECHNICAL MATRIX</span>
        <h2 className="section-title">Skills & Proficiencies</h2>
        <p className="section-subtitle">
          Core competencies spanning Data Science, Machine Learning, Business Intelligence, and Leadership.
        </p>
      </div>

      <div className="grid-2 skills-grid">
        {skillCategories.map((group, index) => (
          <div key={index} className="vintage-card skill-card">
            <div className="skill-card-header">
              <div className="cat-icon-badge">
                {getCategoryIcon(group.category)}
              </div>
              <h3 className="cat-title">{group.category.toUpperCase()}</h3>
            </div>

            <hr className="vintage-divider" />

            <div className="skill-pills-wrap">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="vintage-badge skill-pill">
                  <span className="pill-bullet">✦</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-grid {
          max-width: 980px;
          margin: 0 auto;
        }

        .skill-card {
          background-color: var(--bg-surface);
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .cat-icon-badge {
          width: 36px;
          height: 36px;
          background-color: var(--highlight-manila);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-terracotta);
          box-shadow: 2px 2px 0px var(--border-dark);
        }

        .cat-title {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--text-primary);
        }

        .skill-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .skill-pill {
          background-color: var(--bg-surface-alt);
          padding: 0.45rem 0.85rem;
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.15s ease;
        }

        .skill-pill:hover {
          background-color: var(--highlight-manila);
          transform: translate(-1px, -1px);
          box-shadow: 2px 2px 0px var(--border-vintage);
        }

        .pill-bullet {
          color: var(--accent-terracotta);
          font-size: 0.75rem;
        }
      `}</style>
    </section>
  );
}
