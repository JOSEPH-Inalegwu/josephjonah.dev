import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import joseLogo from '../../../public/jose-logo.png';
import ContactForm from '../Contact/ContactForm';

const NavLink = ({ children, href, hasDropdown = false }) => {
  return (
    <div className="relative group">
      <a 
        href={href} 
        className="relative inline-flex items-center space-x-1 font-medium text-white overflow-hidden py-2"
        style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-cyan-400">
          {children}
        </span>
        {hasDropdown && (
          <svg className="w-4 h-4 ml-1 relative z-10 transition-colors duration-300 group-hover:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
        <motion.div
          className="absolute inset-0 bg-emerald-400 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </a>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMobileLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-gray-900 p-2 md:p-0 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-20 md:h-20 bg-custom-blue flex items-center justify-center">
              <img src={joseLogo} className="w-10 h-7 md:w-16 md:h-12" alt="Jose Logo" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home" hasDropdown={false}>HOME</NavLink>
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#services">SERVICES</NavLink>
            <NavLink href="#projects">PROJECTS</NavLink>
            <NavLink href="#blog" hasDropdown={false}>BLOG</NavLink>
          <NavLink href="#contact">CONTACT</NavLink>
          </div>

          {/* Menu Button */}
          <button
            className="w-12 h-12 md:w-20 md:h-20 bg-custom-blue flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <div className="space-y-2">
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden mx-0 py-6 text-sm space-y-8 text-center overflow-hidden border border-x-0 border-b-2 border-b-cyan-400 border-t-cyan-400 bg-gray-900"
            >
              <a href="#home" onClick={(e) => handleMobileLinkClick(e, '#home')} className="block text-white font-medium">HOME</a>
              <a href="#about" onClick={(e) => handleMobileLinkClick(e, '#about')} className="block text-white font-medium">ABOUT</a>
              <a href="#services" onClick={(e) => handleMobileLinkClick(e, '#services')} className="block text-white font-medium">SERVICES</a>
              <a href="#projects" onClick={(e) => handleMobileLinkClick(e, '#projects')} className="block text-white font-medium">PROJECTS</a>
              <a href="#blog" onClick={(e) => handleMobileLinkClick(e, '#blog')} className="block text-white font-medium">BLOG</a>
              <a href="#contact" onClick={(e) => handleMobileLinkClick(e, '#contact')} className="block text-white font-medium">CONTACT</a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:fixed inset-0 bg-black/20 backdrop-blur-xs z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="hidden md:flex fixed right-0 top-0 h-screen w-96 bg-black shadow-2xl z-50 border border-l-cyan-500 border-y-0 border-r-0 flex-col"
              >
                <div className="flex-shrink-0 bg-gray-900 p-8 flex items-center justify-between border border-y-0 border-r-0 border-l-cyan-500">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-12 h-12 bg-custom-blue flex items-center justify-center">
                      <img src={joseLogo} className="w-10 h-7" alt="Jose Logo" />
                    </div>
                    <span className="text-white text-2xl font-bold tracking-wider">JOSE</span>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 sidebar-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="mb-12"
                  >
                    <h2 className="text-white text-2xl font-bold mb-6">ABOUT ME</h2>
                    <p className="text-gray-400 leading-relaxed">
                      Code is poetry. I write mine with purpose, performance, and people in mind.
                      When I’m not coding, I’m lost in a book. Good stories make better developers — got a favorite? Recommend it.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <h2 className="text-white text-2xl font-bold mb-6">GET IN TOUCH</h2>
                    <ContactForm />
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <style jsx>{`
          .sidebar-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
