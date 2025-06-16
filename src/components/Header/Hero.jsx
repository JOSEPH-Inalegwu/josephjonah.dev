import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiDownload2Line } from "react-icons/ri";

const roles = ["Developer", "Designer", "Player", "Teammate"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className="hero-pattern-bg h-[calc(100vh-10%)] text-white dark:text-gray-100 px-3 md:px-5 lg:px-30 lg:mt-32 flex items-center border">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 mt-28 md:mt-10 lg:mt-15">
          <div className="space-y-5">
            <h1 className="sm:text-3xl text-4xl md:text-5xl font-extralight leading-snug uppercase" style={{fontFamily: 'LuckyGuy'}}>
              Hi, I'm Joseph
              <br />
              <span className="text-white dark:text-gray-100 whitespace-nowrap">Creative 
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[index]}
                    className="text-cyan-400 inline-block ml-1 origin-bottom"
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{
                      rotateX: 0,
                      opacity: 1,
                      x: [0, -5, 5, -3, 3, -2, 2, 0], // shake after flip
                    }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      x: {
                        delay: 0.6,
                        duration: 0.4,
                      },
                    }}
                  >
                    {roles[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-gray-400 text-[16px] md:text-[16px] leading-loose max-w-2xl" style={{fontFamily: 'Mont'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolor doloremque odio deserunt! Similique veniam, consequuntur, quae tempore nemo, inventore nam perferendis recusandae nihil quibusdam beatae dolor facere ducimus odit!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 pt-6">
            <button className='flex items-center gap-x-4 bg-[var(--custom-blue)] px-6 py-4 md:px-12 md:py-6 text-black font-medium rounded-xs ease-in-out cursor-pointer hover:bg-white/20 hover:backdrop-blur-lg transition-all duration-300'>
              Download CV
              <RiDownload2Line />
            </button>
            <button className='hidden md:flex items-center'>
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-center lg:justify-end relative">
          <div className="relative group">
            {/* Geometric Frame */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 group-hover:scale-105 transition-transform duration-500 ease-out">
              {/* Animated outer ring */}
              <div className="absolute inset-0 border-4 border-cyan-400 transform rotate-45 rounded-3xl animate-pulse"></div>
              
              {/* Rotating outer border */}
              <div className="absolute inset-0 border-2 border-cyan-400/30 transform rotate-45 rounded-3xl animate-spin" style={{animationDuration: '20s'}}></div>
              
              {/* Inner container for image */}
              <div className="absolute inset-4 transform rotate-45 rounded-3xl overflow-hidden bg-gray-800 group-hover:shadow-2xl group-hover:shadow-cyan-400/50 transition-all duration-500">
                <div className="w-full h-full transform -rotate-45 scale-110 group-hover:scale-125 transition-transform duration-700 ease-out">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Joseph Profile" 
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Floating decorative elements with animations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-4 border-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
              <div className="absolute top-1/4 -right-4 w-4 h-4 border-2 border-cyan-400 transform rotate-45 animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
              
              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s'}}>
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-cyan-400/70 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              </div>
              
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}>
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-cyan-400/70 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* Glowing ring effect on hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-cyan-400/50 transform rotate-45 rounded-3xl transition-all duration-500 group-hover:animate-pulse"></div>
              
              {/* Additional floating particles */}
              <div className="absolute top-10 -left-6 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-10 -right-6 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-20 right-10 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;