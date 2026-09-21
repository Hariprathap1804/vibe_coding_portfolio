import React from 'react';
import { 
  Code, 
  Binary, 
  Trophy, 
  Palette, 
  HeartHandshake, 
  Users, 
  Smile, 
  Camera, 
  Music 
} from 'lucide-react';
import { extracurricularActivities } from '../data/portfolioData';

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'Code': return <Code size={20} />;
    case 'Binary': return <Binary size={20} />;
    case 'Trophy': return <Trophy size={20} />;
    case 'Palette': return <Palette size={20} />;
    case 'HeartHandshake': return <HeartHandshake size={20} />;
    case 'Users': return <Users size={20} />;
    case 'Smile': return <Smile size={20} />;
    case 'Camera': return <Camera size={20} />;
    case 'Music': return <Music size={20} />;
    default: return <Smile size={20} />;
  }
};

export default function Activities() {
  return (
    <section id="activities" className="section">
      <div className="section-header">
        <span className="section-tag">BEYOND WORK</span>
        <h2 className="section-title">Extracurricular Activities</h2>
        <p className="section-subtitle">
          Problem solving, leadership, community volunteering, creative arts, and sports.
        </p>
      </div>

      <div className="activities-grid">
        {extracurricularActivities.map((act, idx) => (
          <div key={idx} className="vintage-card activity-badge-card">
            <div className="act-icon-box">
              {getIconComponent(act.icon)}
            </div>
            <span className="act-title">{act.title}</span>
          </div>
        ))}
      </div>

      <style>{`
        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
          max-width: 980px;
          margin: 0 auto;
        }

        .activity-badge-card {
          background-color: var(--bg-surface);
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 1.25rem;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .activity-badge-card:hover {
          transform: translateY(-2px);
          box-shadow: 4px 4px 0px var(--border-dark);
          background-color: var(--highlight-manila);
        }

        .act-icon-box {
          width: 40px;
          height: 40px;
          background-color: var(--bg-surface-alt);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-terracotta);
          flex-shrink: 0;
          box-shadow: 2px 2px 0px var(--border-dark);
        }

        .act-title {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.98rem;
          color: var(--text-primary);
          line-height: 1.3;
        }
      `}</style>
    </section>
  );
}
