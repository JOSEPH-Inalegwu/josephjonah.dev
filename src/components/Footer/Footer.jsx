import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const Footer = () => {

  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub className="w-6 h-6" />,
      href: "#",
      label: "GitHub"
    },
    {
      id: 2,
      icon: <FaLinkedinIn className="w-6 h-6" />,
      href: "#",
      label: "LinkedIn"
    },
    {
      id: 3,
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:josephjonahinalegwu.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="text-white bg-black/50 backdrop-blur-sm border-t border-gray-800 mt-15">
      <div className="container mx-auto max-w-7xl px-2 md:px-12 lg:px-24 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Joseph I. Jonah
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6 max-w-md">
              Crafting digital experiences that blend beautiful design with meaningful functionality. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="group p-3 bg-transparent border-2 border-gray-800 rounded-xs transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10"
                  aria-label={social.label}
                >
                  <div className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-200">
                <FaEnvelope className="w-5 h-5 text-cyan-400" />
                <span className="hover:text-cyan-400 transition-colors duration-300">
               josephjonahinalegwu.com
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200">
                <FaPhone className="w-5 h-5 text-cyan-400" />
                <span className="hover:text-cyan-400 transition-colors duration-300">
                +234 704-2482-419
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200">
                <FaMapMarkerAlt className="w-5 h-5 text-cyan-400" />
                <span className="hover:text-cyan-400 transition-colors duration-300">
                Abuja, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Joseph I Jonah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;