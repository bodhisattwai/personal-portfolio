import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </motion.div>
    </div>
  );
}

export default App;