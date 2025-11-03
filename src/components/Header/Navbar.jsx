import React, { useState, useEffect } from 'react';
import joseLogo from '../../../public/jose-logo.png';
import ContactForm from '../Contact/ContactForm';

const links = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CONTACT', href: '#contact' },
];

const NavLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="relative inline-flex items-center space-x-1 font-medium text-white overflow-hidden py-2 transition-colors duration-300 group"
      style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
    >
      <span className="relative z-10 group-hover:text-cyan-400">{children}</span>
      <div
        className="absolute inset-0 bg-emerald-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
      />
    </a>
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(!(currentScrollY > lastScrollY && currentScrollY > 50));
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
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <link rel="preload" as="image" href={joseLogo} />

      <nav
        aria-label="Primary navigation"
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="bg-gray-900 p-2 md:p-0 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-20 md:h-20 bg-custom-blue flex items-center justify-center">
              <img
                src={joseLogo}
                className="w-10 h-7 md:w-16 md:h-12"
                alt="Jose Logo"
                width="64"
                height="64"
                fetchpriority="high"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center" aria-label="Desktop navigation">
            <ul className="flex items-center space-x-8">
              {links.map(link => (
                <NavLink key={link.href} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </nav>

          {/* Menu Button */}
          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="w-12 h-12 md:w-20 md:h-20 bg-custom-blue flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <div className="space-y-2">
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden py-6 text-sm space-y-8 text-center border-t border-b-2 border-cyan-400 bg-gray-900 transition-all duration-300 ease-in-out"
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleMobileLinkClick(e, link.href)}
                className="block text-white font-medium focus:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        {/* Sidebar */}
        {isMenuOpen && (
          <>
            <div
              className="md:fixed inset-0 bg-black/20 backdrop-blur-xs z-40 transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            <aside
              className="hidden md:flex fixed right-0 top-0 h-screen w-96 bg-black shadow-2xl z-50 border-l border-cyan-500 flex-col transition-transform duration-500 ease-in-out transform translate-x-0"
              aria-label="Sidebar with contact form"
            >
              <div className="flex-shrink-0 bg-gray-900 p-8 flex items-center justify-between border-l border-cyan-500">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-custom-blue flex items-center justify-center">
                    <img src={joseLogo} className="w-10 h-7" alt="Jose Logo" />
                  </div>
                  <span className="text-white text-2xl font-bold tracking-wider">JOSE</span>
                </div>

                <button
                  aria-label="Close sidebar"
                  className="w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 sidebar-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="mb-12">
                  <h2 className="text-white text-2xl font-bold mb-6">ABOUT ME</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Code is poetry. I write mine with purpose, performance, and people in mind.
                    When I’m not coding, I’m lost in a book. Got a favorite? Recommend it.
                  </p>
                </div>

                <div>
                  <h2 className="text-white text-2xl font-bold mb-6">GET IN TOUCH</h2>
                  <ContactForm />
                </div>
              </div>
            </aside>
          </>
        )}

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
