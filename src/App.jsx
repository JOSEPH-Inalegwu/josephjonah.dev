import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import AllProjects from './components/Pages/AllProjects';
import ProjectDetail from './components/Pages/ProjectDetail';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/Header/Navbar';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [showMainAnimation, setShowMainAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainAnimation(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 400); 
    }, 1800);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center transition-all duration-700 ${
        !showMainAnimation ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 1}s`,
            }}
          />
        ))}
      </div>

      {/* Logo and Name */}
      <div className="relative z-10 text-center">
        <div className="relative">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
            <div className="absolute inset-4 border-4 border-transparent border-r-blue-500 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center animate-pulse-scale">
                <span className="text-white font-bold text-lg">&lt;/&gt;</span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white animate-fade-in-up">
            Joseph Jonah Inalegwu
          </h1>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 1; }
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
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-particle { animation: float-particle 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 2s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 1.5s linear infinite; }
        .animate-pulse-scale { animation: pulse-scale 1.5s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => setIsLoading(false);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />

      <div
        className={`transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
