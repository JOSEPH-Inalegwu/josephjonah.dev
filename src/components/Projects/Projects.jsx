import React, { useState, useRef } from 'react';
import BlurText from '../ReactBits/BlurText/BlurText';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaPlay, FaExternalLinkAlt, FaGithub, FaEye, FaCode, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  // Changed: amount: 0 for immediate trigger, added margin for earlier detection
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0,
    margin: "0px 0px -100px 0px" // Triggers 100px before element enters viewport
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1, // Changed from 0.8 to 1 for full opacity
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2 for faster appearance
        duration: 0.2 // Reduced from 0.3 for faster transition
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 10, // Reduced from 20 for subtler animation
      scale: 0.95 // Changed from 0.4 for less dramatic scaling
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3, // Reduced from 0.5 for faster animation
        ease: "easeOut"
      }
    }
  };

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Scholaris — AI-Powered Exam Prep",
      category: "Full Stack Development",
      description: "An AI-powered academic platform designed to help students access past questions, take quizzes, simulate CBT exams, and track their GPA. Built with modern web technologies for speed, scalability, and security. Features include AI-generated practice questions, department-based content filtering, user authentication, real-time database updates, and responsive UI for mobile and desktop.",
      technologies: [
        "React", "Tailwind CSS", "JavaScript (ES6+)","Supabase (Auth, PostgreSQL, RLS)","PostgreSQL",
        "AI/ML APIs","Vercel","Git & GitHub"
      ],

      image: "/scholaris thumbnail.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      liveUrl: "https://scholaris-nsuk.vercel.app",
      githubUrl: "https://github.com/JOSEPH-Inalegwu/scholaris-app",
      featured: true
    },
    {
      id: 2,
      title: "Fivestack Team Website",
      category: "Frontend Development",
      description: "A professional team website showcasing development expertise through interactive portfolios, case studies, and thought leadership content built with React, and Tailwind CSS.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      image: "/homepage-Fivestackdev.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://fivestackdev.vercel.app",
      githubUrl: "https://github.com/JOSEPH-Inalegwu/fivestackdev",
      featured: false
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Personal Brand",
      description: "A modern portfolio website showcasing my projects, skills, and professional journey. Features smooth animations, responsive design, and interactive components built with React and Framer ",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Reactbits"],
      image: "/JosePortfolio.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://josephjonah.vercel.app",
      githubUrl: "https://github.com/yourusername/project",
      featured: false
    },
    {
      id: 4,
      title: "SmartDucation Educational Platform",
      category: "Web Design",
      description: "An educational website from my early development days, showcasing my progression in web fundamentals. Built with HTML and CSS to master responsive layouts and styling principles.",
      technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
      image: "/smartducation.png",
      liveUrl: "https://smartducation.vercel.app",
      githubUrl: "https://github.com/JOSEPH-Inalegwu/Smartducation",
      featured: false
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
      <div
        className="relative group cursor-pointer h-[500px]"
        variants={projectVariants}
      >
        <div className="relative overflow-hidden rounded-2xl bg-gray-800/30 border border-gray-700 backdrop-blur-xs h-full flex flex-col">
          {/* Project Image/Video Container */}
          <div className="relative aspect-video overflow-hidden">
            {showVideo ? (
              <iframe
                src={project.videoUrl}
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              </div>
            )}

            {/* Hover Actions */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button
                className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                onClick={() => setShowVideo(!showVideo)}
              >
                <FaPlay size={18} />
                {showVideo ? 'Show Preview' : 'Watch Demo'}
              </button>
              
              <div className="flex gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-black/20 hover:bg-black rounded-full backdrop-blur-sm transition-colors duration-300"
                >
                  <FaExternalLinkAlt size={18} className="text-white" />
                </a>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-black/20 hover:bg-black rounded-full backdrop-blur-sm transition-colors duration-300"
                >
                  <FaGithub size={18} className="text-white" />
                </a>
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-cyan-400/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {project.category}
              </span>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <FaEye size={14} />
                  Live Demo
                </span>
                <span className="flex items-center gap-1">
                  <FaCode size={14} />
                  Source Code
                </span>
              </div>
              
              <div
                className="flex items-center gap-1 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                View Details <FaArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="text-white py-20 px-3 md:px-12 lg:px-24">
      <div className="container mx-auto p-0 md:p-0 w-full md:max-w-[95.5%]">
        {/* Header Section */}
        <div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }} 
        >
          <h3 className="text-cyan-400 text-lg font-semibold mb-4 tracking-wider">
            MY RECENT PORTFOLIO
          </h3>
          <BlurText
            text="Transform Your Vision into Powerful Digital Experiences"
            delay={0}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl font-bold leading-snug max-w-full md:max-w-2xl mx-auto mb-10"
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest projects and witness my journey of growth through innovative solutions and cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid - Custom Layout with Equal Heights */}
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-10 gap-6 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ gridTemplateRows: 'repeat(2, 1fr)' }}
        >
          {/* First Row: E-commerce (6/10) + Task Management (4/10) */}
          <div className="lg:col-span-6">
            <ProjectCard project={projects[0]} index={0} />
          </div>
          <div className="lg:col-span-4">
            <ProjectCard project={projects[1]} index={1} />
          </div>
          
          {/* Second Row: Portfolio (5/10) + Weather (5/10) */}
          <div className="lg:col-span-5">
            <ProjectCard project={projects[3]} index={3} />
          </div>
          <div className="lg:col-span-5">
            <ProjectCard project={projects[2]} index={2} />
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-400/30 transform hover:scale-105">
            See More Projects
          </button>
        </div>

        {/* View More Button */}
        <div 
          className="text-center mt-16 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.5 }}
        >
          {/* Engaging text before CTA */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Like What You See?
            </h3>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
              Let's collaborate and bring your ideas to life. I'm available for freelance projects and full-time opportunities.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <button
              onClick={() => {
                const whatsappNumber = "2347042482419";
                const message = "Hi Joseph! I just reviewed your portfolio and I'm impressed. Let's discuss working together!";
                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Let's Build Together
            </button>
            
            <button
              onClick={() => {
                const email = "josephjonahinalegwu@gmail.com"; 
                const subject = "Project Collaboration Inquiry";
                const body = "Hi Joseph,\n\nI came across your portfolio and I'm interested in discussing a potential project/opportunity.\n\nBest regards,";
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-cyan-400/30 transform hover:scale-105"
            >
              Send an Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;