import React, { useState, useEffect } from 'react';

import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import EducationSkills from './components/About/EducationSkills'
import Projects from './components/Projects/Projects'


const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showMainAnimation, setShowMainAnimation] = useState(true);

  const phases = [
    { text: "Initializing", duration: 1000 },
    { text: "Loading Assets", duration: 1000 },
    { text: "Preparing Interface", duration: 1000 },
    { text: "Optimizing Performance", duration: 1000 },
    { text: "Almost Ready", duration: 1000 }
  ];

  useEffect(() => {
    let progressInterval;
    let phaseTimeout;

    const startLoading = () => {
      let progress = 0;
      let phaseIndex = 0;

      progressInterval = setInterval(() => {
        progress += 2;
        setLoadingProgress(progress);

        // Change phase every 20% (1 second intervals)
        const newPhaseIndex = Math.floor(progress / 20);
        if (newPhaseIndex !== phaseIndex && newPhaseIndex < phases.length) {
          phaseIndex = newPhaseIndex;
          setCurrentPhase(phaseIndex);
        }

        if (progress >= 100) {
          clearInterval(progressInterval);
          
          // Show completion state briefly
          setTimeout(() => {
            setShowMainAnimation(false);
            
            // Wait for exit animation then call completion
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 300);
        }
      }, 100); // Update every 100ms for smooth progress
    };

    startLoading();

    return () => {
      if (progressInterval) clearInterval(progressInterval);
      if (phaseTimeout) clearTimeout(phaseTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center transition-all duration-800 ${!showMainAnimation ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Central Loading Animation */}
      <div className="relative z-10 text-center">
        {/* Main Logo/Brand Animation */}
        <div className="mb-12">
          <div className="relative">
            {/* Rotating Ring */}
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
              <div className="absolute inset-4 border-4 border-transparent border-r-blue-500 rounded-full animate-spin-reverse"></div>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center animate-pulse-scale">
                  <span className="text-white font-bold text-xl">&lt;/&gt;</span>
                </div>
              </div>
            </div>

            {/* My Brand Name */}
            <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in-up">
              Joseph I. Jonah
            </h1>
            <p className="text-cyan-400 text-lg font-medium animate-fade-in-up-delayed">
              Crafting Digital Experiences
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="w-80 max-w-full mx-auto">
          {/* Progress Bar */}
          <div className="relative mb-6">
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${loadingProgress}%` }}
              >
                {/* Progress Bar Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-sm opacity-75"></div>
              </div>
            </div>
            
            {/* Progress Percentage */}
            <div className="absolute -top-8 left-0 text-cyan-400 font-mono text-sm">
              {loadingProgress}%
            </div>
          </div>

          {/* Loading Phase Text */}
          <div className="h-8 flex items-center justify-center">
            <p className="text-gray-300 text-lg animate-fade-in-out">
              {phases[currentPhase]?.text}
              <span className="animate-dot-loading">...</span>
            </p>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i <= currentPhase 
                    ? 'bg-cyan-400 scale-110' 
                    : 'bg-gray-600 scale-100'
                }`}
                style={{
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Status Message */}
        {loadingProgress === 100 && (
          <div className="mt-8 animate-fade-in">
            <p className="text-green-400 text-lg font-semibold">
              ✓ Ready! Welcome to the experience
            </p>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 1;
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-up-delayed {
          0% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          50% { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-out {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes dot-loading {
          0%, 20% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
        
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 2s ease-out forwards;
        }
        
        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out infinite;
        }
        
        .animate-dot-loading {
          animation: dot-loading 1.5s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// Main App Component with Loading Screen
const AppWithLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      
      {/* Your Main App Content */}
      <div className={`transition-all duration-1000 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {/* My app components */}
        <Navbar />
        <Hero />
        <Services />
        <About />
        <EducationSkills />
        <Projects />

      </div>
    </div>
  );
};

export default AppWithLoader;