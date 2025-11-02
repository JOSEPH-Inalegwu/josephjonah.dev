import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
import Home from './components/Pages/Home';
import AllProjects from './components/Pages/AllProjects';
import ProjectDetail from './components/Pages/ProjectDetail';
import ScrollToTop from './ScrollToTop';
import Navbar from './components/Header/Navbar';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showMainAnimation, setShowMainAnimation] = useState(true);

  const phases = [
    { text: "Initializing", duration: 300 },
    { text: "Loading Assets", duration: 300 },
    { text: "Preparing Interface", duration: 300 },
    { text: "Almost Ready", duration: 300 }
  ];

  React.useEffect(() => {
    let progressInterval;

    const startLoading = () => {
      let progress = 0;
      let phaseIndex = 0;

      progressInterval = setInterval(() => {
        progress += 5;
        setLoadingProgress(progress);

        const newPhaseIndex = Math.floor(progress / 25);
        if (newPhaseIndex !== phaseIndex && newPhaseIndex < phases.length) {
          phaseIndex = newPhaseIndex;
          setCurrentPhase(phaseIndex);
        }

        if (progress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setShowMainAnimation(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 300);
          }, 200);
        }
      }, 40);
    };

    startLoading();

    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center transition-all duration-300 ${!showMainAnimation ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8">
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

            <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in-up">Inalegwu Joseph Jonah</h1>
            <p className="text-cyan-400 text-base font-medium animate-fade-in-up-delayed">Crafting Digital Experiences</p>
          </div>
        </div>

        <div className="w-72 max-w-full mx-auto">
          <div className="relative mb-4">
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-200 ease-out relative"
                style={{ width: `${loadingProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-sm opacity-75"></div>
              </div>
            </div>
            <div className="absolute -top-6 left-0 text-cyan-400 font-mono text-xs">
              {loadingProgress}%
            </div>
          </div>

          <div className="h-6 flex items-center justify-center">
            <p className="text-gray-300 text-base animate-fade-in-out">
              {phases[currentPhase]?.text}
              <span className="animate-dot-loading">...</span>
            </p>
          </div>

          <div className="flex justify-center space-x-2 mt-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i <= currentPhase 
                    ? 'bg-cyan-400 scale-110' 
                    : 'bg-gray-600 scale-100'
                }`}
              />
            ))}
          </div>
        </div>

        {loadingProgress === 100 && (
          <div className="mt-6 animate-fade-in">
            <p className="text-green-400 text-base font-semibold">
              ✓ Ready!
            </p>
          </div>
        )}
      </div>

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
        @keyframes fade-in-up-delayed {
          0%, 30% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-out {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes dot-loading {
          0%, 20%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        .animate-float-particle { animation: float-particle 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 2s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 1.5s linear infinite; }
        .animate-pulse-scale { animation: pulse-scale 1.5s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-fade-in-up-delayed { animation: fade-in-up-delayed 1s ease-out forwards; }
        .animate-fade-in-out { animation: fade-in-out 1.5s ease-in-out infinite; }
        .animate-dot-loading { animation: dot-loading 1s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in-up 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;