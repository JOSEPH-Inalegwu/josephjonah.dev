import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const leftContentVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightContentVariants = {
    hidden: { 
      opacity: 0, 
      x: 100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const backgroundVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      x: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <section id='about' className="text-white md:py-20 px-2 md:px-12 lg:px-24">
      <div className="container mx-auto md:max-w-6xl">
        <motion.div 
          ref={ref}
          className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center px-3 md:px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div 
            className="py-10"
            variants={leftContentVariants}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-cyan-400 text-lg font-semibold mb-6 tracking-wider">
                ABOUT ME
              </h3>
              <h1 className="text-3xl md:text-4xl font-bold leading-snug max-w-full md:max-w-2xl mx-auto mb-10">
                Transforming visions into exceptional portfolios
              </h1>

            </motion.div>

            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Nemo design enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
                aut fugit sed thisnquia consequuntur magni dolores eos designer heresm qui 
                ratione
              </p>
            </motion.div>

            <motion.button 
              className="bg-custom-blue text-gray-900 px-10 py-5 font-semibold transition-colors duration-300 flex items-center gap-2 rounded-xs hover:bg-blue-600 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            className="relative"
            variants={rightContentVariants}
          >
            {/* Main Image Container with Blue Border */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              <motion.div 
                className="absolute -top-6 -right-6 w-full h-full bg-custom-blue rounded-xs"
                variants={backgroundVariants}
              />
              <motion.div 
                className="relative bg-gray-900 rounded-sm overflow-hidden"
                variants={imageVariants}
              >
                <img 
                  src="/api/placeholder/600/700" 
                  alt="Profile" 
                  className="w-full h-auto aspect-[7/9] object-cover"
                />
              </motion.div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;