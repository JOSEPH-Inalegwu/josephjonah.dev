import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      
      setScrollProgress(Math.min(currentProgress, 100));
      setIsVisible(window.scrollY > 200); // Show after scrolling 200px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate stroke dash array for progress ring
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 transition-all duration-500 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
      } ${
        isHovered ? 'scale-110' : 'scale-100'
      }`}
      style={{
        filter: isHovered ? 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.6))' : 'none'
      }}
      aria-label="Scroll to top"
    >
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
        {/* Background Circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full backdrop-blur-md border border-gray-700/50 shadow-2xl">
          {/* Inner glow effect */}
          <div className="absolute inset-0.5 bg-gradient-to-br from-gray-700/20 to-transparent rounded-full"></div>
          
          {/* Animated pulse ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 animate-pulse-ring"></div>
        </div>

        {/* Progress Ring */}
        <svg 
          className="absolute inset-0 w-full h-full transform -rotate-90" 
          viewBox="0 0 48 48"
        >
          {/* Background ring */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="rgba(75, 85, 99, 0.3)"
            strokeWidth="2"
            fill="none"
          />
          {/* Progress ring */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out animate-progress-glow"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.8))'
            }}
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`transition-all duration-300 ${isHovered ? 'transform -translate-y-0.5 scale-110' : ''}`}>
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400 animate-arrow-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M5 15l7-7 7 7" 
              />
            </svg>
          </div>
        </div>

        {/* Hover effect particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle-burst opacity-0"
                style={{
                  left: '50%',
                  top: '50%',
                  animationDelay: `${i * 0.1}s`,
                  transform: `rotate(${45 * i}deg) translateY(-20px)`
                }}
              />
            ))}
          </div>
        )}

        {/* Progress percentage tooltip */}
        {isHovered && (
          <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
            <div className="bg-gray-800/95 text-cyan-400 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-mono border border-cyan-400/30 shadow-lg backdrop-blur-sm">
              {Math.round(scrollProgress)}%
            </div>
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-0.5">
              <div className="w-2 h-2 bg-gray-800/95 border-r border-b border-cyan-400/30 transform rotate-45"></div>
            </div>
          </div>
        )}

        {/* Mobile touch indicator */}
        <div className="absolute inset-0 rounded-full animate-touch-ripple opacity-0 pointer-events-none sm:hidden"></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateX(-50%) translateY(8px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(-50%) translateY(0); 
          }
        }
        
        @keyframes particle-burst {
          0% {
            opacity: 0;
            transform: rotate(var(--rotation, 0deg)) translateY(0) scale(0);
          }
          50% {
            opacity: 1;
            transform: rotate(var(--rotation, 0deg)) translateY(-25px) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--rotation, 0deg)) translateY(-35px) scale(0);
          }
        }
        
        @keyframes pulse-ring {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.05);
          }
        }
        
        @keyframes progress-glow {
          0%, 100% {
            filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.8));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(34, 211, 238, 1));
          }
        }
        
        @keyframes arrow-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes touch-ripple {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
          100% {
            opacity: 0;
            transform: scale(1.3);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
        
        .animate-particle-burst {
          animation: particle-burst 0.8s ease-out forwards;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }
        
        .animate-progress-glow {
          animation: progress-glow 2s ease-in-out infinite;
        }
        
        .animate-arrow-bounce {
          animation: arrow-bounce 2s ease-in-out infinite;
        }
        
        .animate-touch-ripple {
          animation: touch-ripple 1s ease-out infinite;
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          button:active .animate-touch-ripple {
            opacity: 0.5;
            background: radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%);
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-ring,
          .animate-progress-glow,
          .animate-arrow-bounce,
          .animate-particle-burst {
            animation: none;
          }
        }
      `}</style>
    </button>
  );
};

export default ScrollToTop;