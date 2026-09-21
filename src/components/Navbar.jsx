import React, { useState, useEffect } from 'react';
import { Menu, X, Feather } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Training', href: '#training' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Activities', href: '#activities' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-brand" onClick={(e) => handleNavClick(e, '#hero')}>
          <div className="brand-stamp">
            <Feather size={16} className="brand-icon" />
            <span className="brand-name">{personalInfo.name.toUpperCase()}</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .sticky-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: var(--bg-parchment);
          border-bottom: 2px solid var(--border-dark);
          transition: all 0.2s ease;
        }

        .sticky-nav.scrolled {
          background-color: rgba(245, 235, 221, 0.95);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 10px rgba(62, 58, 53, 0.08);
        }

        .nav-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0.9rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-stamp {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--bg-surface);
          border: 2px solid var(--border-dark);
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-sm);
          box-shadow: 2px 2px 0px var(--border-dark);
          transition: transform 0.15s ease;
          white-space: nowrap;
        }

        .brand-stamp:hover {
          transform: translate(-1px, -1px);
          box-shadow: 3px 3px 0px var(--border-dark);
        }

        .brand-icon {
          color: var(--accent-terracotta);
          flex-shrink: 0;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.05rem;
          letter-spacing: 1px;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-primary);
          padding: 0.3rem 0.6rem;
          border-radius: var(--radius-sm);
          position: relative;
        }

        .nav-link:hover {
          color: var(--accent-terracotta);
          background-color: var(--highlight-manila);
        }

        .mobile-toggle {
          display: none;
          background: var(--bg-surface);
          border: 2px solid var(--border-dark);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          color: var(--text-primary);
          box-shadow: 2px 2px 0px var(--border-dark);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          background-color: var(--bg-surface);
          border-bottom: 2px solid var(--border-dark);
          padding: 1rem 1.5rem;
          gap: 0.75rem;
        }

        .mobile-nav-link {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-primary);
          padding: 0.6rem;
          border-bottom: 1px dashed var(--border-vintage);
        }

        .mobile-nav-link:last-child {
          border-bottom: none;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
