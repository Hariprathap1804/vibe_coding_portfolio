import React from 'react';
import { FolderGit2, ShieldAlert, Bot, Layout, Cpu, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-tag">KEY SHOWCASE</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Data science applications, anomaly detection dashboards, and deep learning medical chatbots.
        </p>
      </div>

      <div className="projects-stack">
        {projects.map((proj) => (
          <div key={proj.id} className="vintage-card project-card">
            <div className="paper-stamp">PROJECT {proj.number}</div>

            <div className="project-grid">
              {/* Left Column: Overview & Meta */}
              <div className="project-overview">
                <div className="project-category-badge">
                  <FolderGit2 size={14} />
                  <span>{proj.category}</span>
                </div>

                <h3 className="project-title">{proj.title}</h3>

                <p className="project-desc">{proj.description}</p>

                <div className="project-tech-tags">
                  <span className="tech-tags-label">STACK & TECHNIQUES:</span>
                  <div className="tags-container">
                    {proj.tools.map((tool, idx) => (
                      <span key={idx} className="vintage-badge vintage-badge-primary">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Project Highlights / Features */}
              <div className="project-features-panel">
                {proj.id === 'project-1' && (
                  <div className="dashboard-breakdown">
                    <h4 className="panel-subheading">
                      <Layout size={16} /> DASHBOARD ARCHITECTURE (3 PAGES):
                    </h4>
                    <div className="pages-stack">
                      {proj.dashboardPages.map((page, i) => (
                        <div key={i} className="page-item">
                          <div className="page-header">
                            <ShieldAlert size={14} className="page-icon" />
                            <strong>{page.name} Page</strong>
                          </div>
                          <p className="page-detail">{page.detail}</p>
                        </div>
                      ))}
                    </div>
                    <div className="component-summary">
                      <strong>Visual Components:</strong> {proj.components}
                    </div>
                  </div>
                )}

                {proj.id === 'project-2' && (
                  <div className="chatbot-breakdown">
                    <h4 className="panel-subheading">
                      <Cpu size={16} /> DEEP LEARNING & MODEL FINE-TUNING:
                    </h4>
                    <div className="model-callout">
                      <div className="model-badge">
                        <Bot size={18} />
                        <span>FALCON 7B LLM</span>
                      </div>
                      <p className="model-desc">{proj.modelDetail}</p>
                    </div>

                    <div className="pipeline-steps">
                      <strong>End-to-End Pipeline Steps:</strong>
                      <ul>
                        <li><CheckCircle size={14} /> Medical QA Dataset Preprocessing & Cleaning</li>
                        <li><CheckCircle size={14} /> Model Architecture Setup & Fine-Tuning</li>
                        <li><CheckCircle size={14} /> Real-Time Telegram Bot API Integration</li>
                        <li><CheckCircle size={14} /> Instant Health Answer Query Engine</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 980px;
          margin: 0 auto;
        }

        .project-card {
          background-color: var(--bg-surface);
        }

        .project-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 0.5rem;
        }

        .project-category-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--accent-terracotta);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .project-desc {
          font-family: var(--font-serif-body);
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .project-tech-tags {
          background-color: var(--bg-surface-alt);
          padding: 1rem;
          border: 1px solid var(--border-vintage);
          border-radius: var(--radius-sm);
        }

        .tech-tags-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .project-features-panel {
          background-color: var(--bg-surface-alt);
          border: 1px solid var(--border-vintage);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
        }

        .panel-subheading {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed var(--border-vintage);
        }

        .pages-stack {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .page-item {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-vintage);
          padding: 0.75rem;
          border-radius: var(--radius-sm);
        }

        .page-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .page-icon {
          color: var(--accent-terracotta);
        }

        .page-detail {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .component-summary {
          font-size: 0.9rem;
          color: var(--text-primary);
          border-top: 1px dashed var(--border-vintage);
          padding-top: 0.75rem;
        }

        .model-callout {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-vintage);
          padding: 1rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
        }

        .model-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: var(--highlight-manila);
          border: 1px solid var(--border-dark);
          padding: 0.3rem 0.6rem;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.82rem;
          border-radius: var(--radius-sm);
          margin-bottom: 0.5rem;
        }

        .model-desc {
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.5;
          margin: 0;
        }

        .pipeline-steps strong {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          display: block;
          margin-bottom: 0.6rem;
        }

        .pipeline-steps ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .pipeline-steps li {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .pipeline-steps svg {
          color: var(--accent-terracotta);
        }

        @media (max-width: 840px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
