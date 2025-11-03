import React from 'react';
import DownloadCVButton from '../Utils/DownloadCVButton';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "2347042482419";
    const message = "Hi Joseph! I'm interested in working together on a project. Let's discuss!";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen text-white dark:text-gray-100 pb-20 px-3 md:px-5 lg:px-30 lg:py-32 flex items-center hero-animated-background opacity-0 animate-fade-in"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Elements (decorative) */}
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
        {/* Left Section - Content */}
        <div className="space-y-6 mt-28 md:mt-10 lg:mt-15">
          <header>
            <div className="mb-3">
              <span className="text-cyan-400 text-lg md:text-xl font-semibold tracking-wide">
                FULLSTACK DEVELOPER
              </span>
            </div>
            
            <h1 
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold mb-6"
            >
              JOSEPH J.I
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded text-cyan-300 text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded text-cyan-300 text-sm font-medium">
                Next.js
              </span>
              <span className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded text-cyan-300 text-sm font-medium">
                Supabase
              </span>
              <span className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded text-cyan-300 text-sm font-medium">
                PostgreSQL
              </span>
            </div>
          </header>

          <p 
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl" 
          >
            I build production-ready web applications from frontend to database. 
            <span className="text-white font-medium"> Real-time features • Secure authentication • Database architecture • 40% faster performance.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6" role="group" aria-label="Hero section action buttons">
            <DownloadCVButton />
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center text-white transition-all duration-300 bg-cyan-400 px-6 rounded-sm py-3 font-semibold hover:bg-cyan-500 active:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Start a project conversation on WhatsApp"
            >
              Let's Talk on WhatsApp
            </button>
          </div>
        </div>

        {/* Right Section - Optimized Profile Image */}
        <div 
          className="flex justify-center lg:justify-start relative mt-8 lg:mt-0 lg:ml-28"
          role="img"
          aria-label="Professional portrait of Joseph Jonah Inalegwu, Fullstack Developer"
        >
          <div className="relative group">
            {/* Container with fixed aspect ratio for CLS prevention */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              
              {/* Ambient Glow - Cooler tones to neutralize yellow */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"
                aria-hidden="true"
              ></div>
              
              {/* Rotating Rings */}
              <div 
                className="absolute inset-0 border-4 border-cyan-400/50 rounded-full animate-spin will-change-transform" 
                style={{ animationDuration: '25s' }}
                aria-hidden="true"
              ></div>
              <div 
                className="absolute inset-2 border-2 border-blue-400/40 rounded-full animate-spin will-change-transform" 
                style={{ animationDuration: '20s', animationDirection: 'reverse' }}
                aria-hidden="true"
              ></div>
              <div 
                className="absolute inset-4 border-2 border-purple-400/30 rounded-full animate-spin will-change-transform" 
                style={{ animationDuration: '15s' }}
                aria-hidden="true"
              ></div>

              {/* Image Container */}
              <div className="absolute inset-12 transform rotate-45 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900 shadow-2xl group-hover:shadow-cyan-400/40 transition-shadow duration-700">
                <div className="w-full h-full transform -rotate-45 scale-110 group-hover:scale-125 transition-transform duration-700 ease-out will-change-transform">
                  {/* Optimized Image with better color correction */}
                  <img 
                    src="/first-profile.png" 
                    alt="" 
                    className="w-full h-full object-cover group-hover:brightness-105 transition-all duration-500 scale-125"
                    style={{
                      filter: 'saturate(0.9) contrast(1.05) brightness(1.02)',
                      mixBlendMode: 'normal'
                    }}
                    width="384"
                    height="384"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                  />
                  
                  {/* Cool-toned overlay to neutralize yellow */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-blue-500/10 to-purple-500/15 opacity-60 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    aria-hidden="true"
                    style={{ mixBlendMode: 'overlay' }}
                  ></div>
                  
                  {/* Subtle blue tint overlay */}
                  <div 
                    className="absolute inset-0 bg-blue-400/5 pointer-events-none"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>

              {/* Corner Accents */}
              <div 
                className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              ></div>
              <div 
                className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimized Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out 0.2s forwards;
        }
        
        /* Hardware acceleration hints */
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Hero;