import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Training from './components/Training';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Training />
        <Projects />
        <Skills />
        <Certifications />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
