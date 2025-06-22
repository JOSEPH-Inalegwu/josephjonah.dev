import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'WEB DEVELOPMENT',
      description: 'I build new websites that provide your visitors with a smooth, enjoyable experience on phones, tablets, and desktops. My goal is to create sites that are easy to use, professional, and impressive—helping you keep visitors engaged and grow your business effectively across all devices.',
      icon: (
        <div className="relative w-16 h-16 mx-auto mb-6 group">
          {/* 3D Cube Container */}
          <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
            {/* Main Cube Face */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-2xl transform perspective-1000 rotateX-15 rotateY-15 animate-float">
              {/* Top Face */}
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-lg transform -skew-x-12 -skew-y-12 opacity-80"></div>
              {/* Right Face */}
              <div className="absolute -top-2 -right-2 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform skew-x-12 -skew-y-12 opacity-70"></div>
              {/* Front Face Content */}
              <div className="relative z-10 w-full h-full flex items-center justify-center text-white">
                <div className="text-2xl font-bold">&lt;/&gt;</div>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'COMMUNITY IMPACT',
      description: 'I volunteer my frontend development skills to help non-profit organizations and community projects improve their websites. This work lets me grow and learn while supporting causes that matter. By focusing on nonprofits, I contribute to making their web presence stronger and more effective for their mission.',
      icon: (
        <div className="relative w-16 h-16 mx-auto mb-6 group">
          {/* 3D Heart/Diamond Container */}
          <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotate-y-12">
            {/* Heart Shape */}
            <div className="absolute inset-0 animate-bounce-slow">
              <div className="relative w-full h-full">
                {/* Heart Top Left */}
                <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full transform rotate-45 shadow-lg"></div>
                {/* Heart Top Right */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full transform rotate-45 shadow-lg"></div>
                {/* Heart Bottom */}
                <div className="absolute top-6 left-1/2 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 transform -translate-x-1/2 rotate-45 shadow-lg"></div>
                {/* 3D Effect Layers */}
                <div className="absolute top-1 left-1 w-6 h-6 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full transform rotate-45 opacity-80"></div>
                <div className="absolute top-1 right-1 w-6 h-6 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full transform rotate-45 opacity-80"></div>
                <div className="absolute top-5 left-1/2 w-8 h-8 bg-gradient-to-br from-pink-300 to-pink-400 transform -translate-x-1/2 rotate-45 opacity-80"></div>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-pink-400 rounded-full blur-xl opacity-25 animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'WEB STYLING & OPTIMIZATION',
      description: "Visitors leave your website immediately because it's slow and hard to use on phones. They get frustrated waiting for pages to load or struggling with confusing navigation. I fix these issues by making your site fast, easy to use, and visually appealing on all devices.",
      icon: (
        <div className="relative w-16 h-16 mx-auto mb-6 group">
          {/* 3D Rocket Container */}
          <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2">
            {/* Rocket Body */}
            <div className="absolute inset-0 animate-hover">
              {/* Main Rocket */}
              <div className="absolute top-0 left-1/2 w-6 h-12 bg-gradient-to-b from-cyan-300 to-cyan-500 rounded-t-full transform -translate-x-1/2 shadow-lg"></div>
              {/* Rocket Fins */}
              <div className="absolute top-8 left-3 w-3 h-4 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-12 shadow-md"></div>
              <div className="absolute top-8 right-3 w-3 h-4 bg-gradient-to-br from-blue-400 to-blue-600 transform -rotate-12 shadow-md"></div>
              {/* Rocket Window */}
              <div className="absolute top-2 left-1/2 w-3 h-3 bg-gradient-to-br from-white to-gray-200 rounded-full transform -translate-x-1/2 shadow-inner"></div>
              {/* Flame Effect */}
              <div className="absolute top-12 left-1/2 w-4 h-6 transform -translate-x-1/2">
                <div className="w-full h-full bg-gradient-to-b from-orange-400 via-red-500 to-yellow-400 rounded-b-full animate-flicker opacity-80"></div>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-orange-300 via-red-400 to-yellow-300 rounded-b-full animate-flicker-delayed opacity-60"></div>
              </div>
              {/* 3D Effect Shadow */}
              <div className="absolute top-1 left-1/2 w-6 h-12 bg-gradient-to-b from-cyan-200 to-cyan-400 rounded-t-full transform -translate-x-1/2 -translate-y-0.5 opacity-60"></div>
            </div>
            {/* Speed Lines */}
            <div className="absolute top-4 -left-2 w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-speed-line opacity-60"></div>
            <div className="absolute top-6 -left-3 w-10 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-speed-line-delayed opacity-40"></div>
            <div className="absolute top-8 -left-2 w-6 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-speed-line opacity-50"></div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(15deg) rotateY(15deg); }
          50% { transform: translateY(-10px) rotateX(15deg) rotateY(15deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        @keyframes hover {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.8; transform: scaleY(1); }
          25% { opacity: 1; transform: scaleY(1.1); }
          50% { opacity: 0.6; transform: scaleY(0.9); }
          75% { opacity: 0.9; transform: scaleY(1.05); }
        }
        @keyframes flicker-delayed {
          0%, 100% { opacity: 0.6; transform: scaleY(0.9); }
          25% { opacity: 0.8; transform: scaleY(1.05); }
          50% { opacity: 0.4; transform: scaleY(0.8); }
          75% { opacity: 0.7; transform: scaleY(1); }
        }
        @keyframes speed-line {
          0% { opacity: 0; transform: translateX(-20px); }
          50% { opacity: 0.6; }
          100% { opacity: 0; transform: translateX(20px); }
        }
        @keyframes speed-line-delayed {
          0% { opacity: 0; transform: translateX(-25px); }
          60% { opacity: 0.4; }
          100% { opacity: 0; transform: translateX(25px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-hover {
          animation: hover 2.5s ease-in-out infinite;
        }
        .animate-flicker {
          animation: flicker 0.8s ease-in-out infinite;
        }
        .animate-flicker-delayed {
          animation: flicker-delayed 0.8s ease-in-out infinite 0.2s;
        }
        .animate-speed-line {
          animation: speed-line 2s ease-in-out infinite;
        }
        .animate-speed-line-delayed {
          animation: speed-line-delayed 2s ease-in-out infinite 0.5s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotateX-15 {
          transform: rotateX(15deg);
        }
        .rotateY-15 {
          transform: rotateY(15deg);
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>

      <section id='services'
        className="text-white mt-10 py-20 px-2 md:px-12 lg:px-24"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h3 className="text-cyan-400 md:text-lg font-semibold mb-4 tracking-wider">
              MY SERVICE
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug max-w-full md:max-w-2xl mx-auto mb-10">
            Design should speak. Interactions should serve — I build both.
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-2 gap-y-8 md:gap-y-0 md:px-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative group text-center bg-transparent backdrop-blur-sm border-2 border-gray-800 rounded-xs p-5 transition-all duration-300 hover:-translate-y-2 h-full hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/10"
              >
                {/* Icon */}
                <div className="my-5">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;