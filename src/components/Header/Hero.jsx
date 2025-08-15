import React, { useEffect, useState } from 'react';
import TextType from '../ReactBits/TextType/TextType';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <section id='home' className="relative h-[calc(100vh-10%)] text-white dark:text-gray-100 pb-20 px-3 md:px-5 lg:px-30 lg:py-32 flex items-center hero-animated-background">      
      {/* Animated Background Elements */}
      <div className="orb-1"></div>
      <div className="orb-2"></div>
      <div className="grid-overlay"></div>
      <div className="particle-1"></div>
      <div className="particle-2"></div>
      <div className="particle-3"></div>
      <div className="particle-4"></div>
      <div className="particle-5"></div>
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>

      {/* Main Content - positioned above the animated background */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 mt-28 md:mt-10 lg:mt-15">
          <div className="space-y-5">
            <h1 className="sm:text-3xl text-4xl md:text-5xl font-extralight leading-snug uppercase" style={{fontFamily: 'LuckyGuy'}}>
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

            <p className="text-gray-400 text-[16px] md:text-[16px] leading-loose max-w-3xl" style={{fontFamily: 'Mont'}}>
              I build responsive, accessible websites that work for everyone, including people with disabilities. By integrating AI, I create smarter, more personalized user experiences. My work has increased engagement by over 40%. Check my portfolio to see how I can help you too.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 pt-6">
            <DownloadCVButton />
            <button className='hidden md:flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300'>
              See my Projects
            </button>
          </div>
        </div>

        {/* Right Image - Visible on all devices */}
        <div className="flex justify-center lg:justify-start relative mt-8 lg:mt-0 lg:ml-28">
          <div className="relative group">
            {/* Advanced 2D Graphics Container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-90 lg:h-90 xl:w-96 xl:h-96">
              
              {/* Background gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Multiple rotating geometric rings */}
              <div className="absolute inset-0 border-4 border-cyan-400/60 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
              <div className="absolute inset-2 border-2 border-cyan-400/40 rounded-full animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-4 border-2 border-blue-400/30 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
              
              {/* Hexagonal frame */}
              <div className="absolute inset-8 transform rotate-45">
                <div className="w-full h-full border-4 border-cyan-400 rounded-3xl animate-pulse shadow-2xl shadow-cyan-400/50"></div>
              </div>
              
              {/* Inner image container */}
              <div className="absolute inset-12 transform rotate-45 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl group-hover:shadow-cyan-400/50 transition-all duration-700">
                <div className="w-full h-full transform -rotate-45 scale-110 group-hover:scale-125 transition-transform duration-700 ease-out">
                  <img 
                    src="/cartoon-dev.jpg" 
                    alt="Joseph Profile" 
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                  />
                  {/* Image overlay with code-like pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/20 via-transparent to-cyan-400/20 opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Orbiting code symbols */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '30s'}}>
                <div className="absolute top-0 left-1/2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-sm transform -translate-x-1/2 -translate-y-4 shadow-lg shadow-cyan-400/50">
                  {'</>'}
                </div>
                <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs transform -translate-x-1/2 translate-y-3">
                  {'{}'}
                </div>
              </div>
              
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}>
                <div className="absolute top-1/2 right-0 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xs transform translate-x-3 -translate-y-1/2">
                  {'()'}
                </div>
                <div className="absolute top-1/2 left-0 w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm transform -translate-x-4 -translate-y-1/2 shadow-lg shadow-cyan-400/50">
                  {'[]'}
                </div>
              </div>

              {/* Matrix-style floating elements */}
              <div className="absolute top-6 -left-8 w-4 h-4 border-2 border-cyan-400 rotate-45 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
              <div className="absolute top-12 -right-6 w-3 h-3 bg-cyan-400 rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
              <div className="absolute bottom-8 -left-6 w-5 h-5 border-2 border-blue-400 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
              <div className="absolute bottom-16 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}></div>

              {/* Floating binary/hex numbers */}
              <div className="absolute top-20 -left-12 text-cyan-400 text-xs font-mono animate-ping opacity-60" style={{animationDelay: '1s'}}>0x01</div>
              <div className="absolute bottom-24 -right-12 text-cyan-400 text-xs font-mono animate-ping opacity-60" style={{animationDelay: '2s'}}>0xFF</div>
              <div className="absolute top-32 right-8 text-blue-400 text-xs font-mono animate-ping opacity-60" style={{animationDelay: '0.5s'}}>101</div>
              <div className="absolute bottom-32 left-6 text-cyan-400 text-xs font-mono animate-ping opacity-60" style={{animationDelay: '1.5s'}}>010</div>

              {/* Scanning line effect */}
              <div className="absolute inset-12 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-80" style={{
                  animation: 'scan 4s infinite linear',
                  animationDelay: '2s'
                }}></div>
              </div>

              {/* Corner tech elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-cyan-400 rounded-tl-lg animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-cyan-400 rounded-tr-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-blue-400 rounded-bl-lg animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-cyan-400 rounded-br-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>

              {/* Particle system */}
              <div className="absolute top-4 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute top-8 right-12 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute bottom-6 left-16 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
              <div className="absolute bottom-12 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1.8s'}}></div>
              
              {/* Glowing ring effect on hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-cyan-400/50 rounded-full transition-all duration-500 group-hover:animate-pulse"></div>
            </div>

            {/* CSS for custom animations */}
            <style jsx>{`
              @keyframes scan {
                0% { top: 0; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;