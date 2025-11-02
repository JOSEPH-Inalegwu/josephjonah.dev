import React from 'react';
import Hero from '../Header/Hero';
import Services from '../Services/Services';
import About from '../About/About';
import EducationSkills from '../About/EducationSkills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import TechMarquee from '../TechMarquee/TechMarquee';

const Home = () => {
  return (
    <div className="transition-all duration-500 opacity-100 scale-100">
      <Hero />
      <Services />
      <About />
      <EducationSkills />
      <Projects />
      <Contact />
      <TechMarquee />
      <Footer />
    </div>
  );
};

export default Home;