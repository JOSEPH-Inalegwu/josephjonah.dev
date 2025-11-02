import React, { useEffect, useState } from 'react';
import TextType from '../ReactBits/TextType/TextType';
import { RiDownload2Line } from "react-icons/ri";
import DownloadCVButton from '../Utils/DownloadCVButton';

const roles = ["Dev", "Designer", "Player", "Teammate"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappNumber = "2347042482419";
    const message = "Hi Joseph! I'm interested in working together on a project. Let's discuss!";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section 
      id="home" 
      className="relative h-[calc(100vh-10%)] text-white dark:text-gray-100 pb-20 px-3 md:px-5 lg:px-30 lg:py-32 flex items-center hero-animated-background" 
      aria-labelledby="hero-heading"
    >      
      {/* Animated Background (decorative only, so hidden from screen readers) */}
      <div className="orb-1" aria-hidden="true"></div>
      <div className="orb-2" aria-hidden="true"></div>
      <div className="grid-overlay" aria-hidden="true"></div>
      <div className="particle-1" aria-hidden="true"></div>
      <div className="particle-2" aria-hidden="true"></div>
      <div className="particle-3" aria-hidden="true"></div>
      <div className="particle-4" aria-hidden="true"></div>
      <div className="particle-5" aria-hidden="true"></div>
      <div className="shape-1" aria-hidden="true"></div>
      <div className="shape-2" aria-hidden="true"></div>
      <div className="shape-3" aria-hidden="true"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Section */}
        <div className="space-y-6 mt-28 md:mt-10 lg:mt-15">
          <header>
            <h1 
              id="hero-heading"
              className="sm:text-3xl text-4xl md:text-5xl font-extralight leading-snug uppercase"
              style={{fontFamily: 'LuckyGuy'}}
            >
              <span className="sr-only">Hello, I'm Joseph — Creative Developer, Problem Solver, Lifelong Learner, and User-Focused Dev.</span>
              HELLO, I'M JOSEPH
              <br />
              <TextType 
                text={["Creative Developer", "Problem Solver", "Lifelong Learner", "User-Focused Dev"]}
                typingSpeed={75}
                pauseDuration={1000}
                showCursor={false}
                cursorCharacter="|"
              />
            </h1>
          </header>

          <p 
            className="text-gray-400 text-[16px] md:text-[16px] leading-loose max-w-3xl" 
            style={{fontFamily: 'Mont'}}
          >
            I build responsive, accessible websites that work for everyone — including users with disabilities. 
            By integrating AI, I create smarter, more personalized experiences. 
            My work has improved engagement by over 40%. Explore my portfolio to see how I can help your brand too.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 pt-6" role="group" aria-label="Hero section action buttons">
            <DownloadCVButton aria-label="Download Joseph's CV" />
            
            <button 
              onClick={handleWhatsAppClick}
              className="md:flex items-center text-white transition-colors duration-300 bg-cyan-400 px-4 rounded-sm py-3 font-semibold hover:bg-cyan-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
              aria-label="Start a project conversation on WhatsApp"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Right Section: Profile Image and Decorative Animation */}
        <figure 
          className="flex justify-center lg:justify-start relative mt-8 lg:mt-0 lg:ml-28" 
          aria-labelledby="hero-image-caption"
        >
          <div className="relative group" aria-hidden="true">
            {/* 3D Graphics and Rings (decorative only) */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-90 lg:h-90 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 border-4 border-cyan-400/60 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
              <div className="absolute inset-2 border-2 border-cyan-400/40 rounded-full animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-4 border-2 border-blue-400/30 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>

              {/* Profile Image */}
              <div className="absolute inset-12 transform rotate-45 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl group-hover:shadow-cyan-400/50 transition-all duration-700">
                <div className="w-full h-full transform -rotate-45 scale-110 group-hover:scale-125 transition-transform duration-700 ease-out">
                  <img 
                    src="/first-profile.png" 
                    alt="Portrait of Joseph Jonah, Frontend Developer" 
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500 scale-125"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/20 via-transparent to-cyan-400/20 opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
          <figcaption id="hero-image-caption" className="sr-only">
            Portrait of Joseph Jonah, Frontend Developer and UI Designer.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
