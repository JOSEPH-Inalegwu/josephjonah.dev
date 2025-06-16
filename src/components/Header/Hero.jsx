import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiDownload2Line } from "react-icons/ri";

const roles = ["Developer", "Designer", "Player", "Team mate"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className="hero-pattern-bg h-[100vh] text-white dark:text-gray-100 px-3 md:px-5 lg:px-30 flex items-center">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 mt-28 md:mt-10 lg:mt-15">
          <div className="space-y-5">
            <h1 className="text-5xl md:text-5xl font-extralight leading-snug uppercase" style={{fontFamily: 'LuckyGuy'}}>
              Hi, I'm Joseph
              <br />
              <span className="text-white dark:text-gray-100">Creative </span>
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
        <div className="hidden md:flex md:justify-center lg:justify-end">
          {/* Image or illustration goes here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
