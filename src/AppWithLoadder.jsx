import React from "react";

import Hero from "./components/Header/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import EducationSkills from "./components/About/EducationSkills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import TechMarquee from "./components/TechMarquee/TechMarquee";
import Navbar from "./components/Header/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ScrollToTop />
      <Navbar />
      <div className="transition-all duration-500">
        <Hero />
        <Services />
        <About />
        <EducationSkills />
        <Projects />
        <Contact />
        <TechMarquee />
        <Footer />
      </div>
    </div>
  );
};

export default App;
