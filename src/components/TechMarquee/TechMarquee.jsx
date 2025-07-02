import { useState } from 'react';

const TechMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const techStack = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-400 to-white' },
    { name: 'TypeScript', icon: 'TS', color: 'from-blue-600 to-blue-400' },
    { name: 'JavaScript', icon: 'JS', color: 'from-yellow-400 to-yellow-300' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-teal-400' },
    { name: 'Firebase', icon: '🔥', color: 'from-orange-400 to-red-400' },
    { name: 'Git', icon: '📝', color: 'from-orange-500 to-red-500' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-blue-400' },
    { name: 'Vercel', icon: '▲', color: 'from-gray-400 to-white' }
  ];

  const achievements = [
    { text: 'Available for Hire', icon: '🚀' },
    { text: '100+ Hours Coding', icon: '⏰' },
    { text: 'Always Learning', icon: '📚' },
    { text: 'Quality First', icon: '⭐' },
    { text: 'Modern Solutions', icon: '💡' },
    { text: 'Responsive Design', icon: '📱' }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
             }}>
        </div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Technologies & Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4 animate-fade-in-up-delayed">
            Crafting modern web experiences with cutting-edge technologies
          </p>
        </div>

        {/* Tech Stack Marquee */}
        <div 
          className="relative mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <div 
              className={`flex animate-marquee ${isPaused ? 'animation-paused' : ''}`}
              style={{ width: 'max-content' }}
            >
              {/* First set */}
              {techStack.map((tech, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 group"
                >
                  <div className="relative">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${tech.color} p-0.5 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <div className="w-full h-full bg-gray-800/90 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm">
                        <div className="text-2xl sm:text-3xl mb-1 group-hover:animate-bounce">
                          {tech.icon}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-white text-center px-1">
                          {tech.name}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {techStack.map((tech, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 group"
                >
                  <div className="relative">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${tech.color} p-0.5 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <div className="w-full h-full bg-gray-800/90 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm">
                        <div className="text-2xl sm:text-3xl mb-1 group-hover:animate-bounce">
                          {tech.icon}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-white text-center px-1">
                          {tech.name}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Marquee */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <div 
              className="flex animate-marquee-reverse"
              style={{ width: 'max-content' }}
            >
              {/* First set */}
              {achievements.map((achievement, index) => (
                <div
                  key={`achievement-first-${index}`}
                  className="flex-shrink-0 mx-3 sm:mx-4"
                >
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 group">
                    <span className="text-xl group-hover:animate-pulse">{achievement.icon}</span>
                    <span className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                      {achievement.text}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set */}
              {achievements.map((achievement, index) => (
                <div
                  key={`achievement-second-${index}`}
                  className="flex-shrink-0 mx-3 sm:mx-4"
                >
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 group">
                    <span className="text-xl group-hover:animate-pulse">{achievement.icon}</span>
                    <span className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                      {achievement.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-up-delayed {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          50% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.8;
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        
        .animation-paused {
          animation-play-state: paused;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 2s ease-out forwards;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-marquee-reverse,
          .animate-float-slow {
            animation-duration: 120s;
          }
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;