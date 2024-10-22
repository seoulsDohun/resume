"use client";

import Head from 'next/head';
import { useEffect, useRef } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import OtherExperiences from './components/OtherExperiences';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const otherExperiencesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = [
      aboutRef.current,
      experienceRef.current,
      otherExperiencesRef.current,
      skillsRef.current,
      contactRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main>
      <div ref={aboutRef} className="section">
        <About />
      </div>
      <div ref={experienceRef} className="section">
        <Experience />
      </div>
      <div ref={otherExperiencesRef} className="section">
        <OtherExperiences />
      </div>
      <div ref={skillsRef} className="section">
        <Skills />
      </div>
      <div ref={contactRef} className="section">
        <Contact />
      </div>
    </main>
  );
}
