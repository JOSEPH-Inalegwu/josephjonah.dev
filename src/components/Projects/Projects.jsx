import React, { useState, useRef } from 'react';
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

      image: "https://cdn.shopify.com/s/files/1/0070/7032/files/best-web-design-3.png?v=1691010811",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
      liveUrl: "https://scholaris-nsuk.vercel.app",
      githubUrl: "https://github.com/JOSEPH-Inalegwu/scholaris-app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Frontend Development",
      description: "An intuitive task management application with drag-and-drop functionality, team collaboration features, and real-time updates using React and Firebase.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      image: "https://niftypm.com/blog/wp-content/uploads/2024/02/Hive-task-management-software-1024x605.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://your-project-live-url.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      category: "API Integration",
      description: "A comprehensive weather dashboard that provides real-time weather data, forecasts, and interactive maps. Built with React and integrated with multiple weather APIs.",
      technologies: ["React", "Weather API", "Chart.js", "CSS3"],
      image: "https://dianapps.com/blog/wp-content/uploads/2024/01/react-native-weather-min-scaled.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://your-project-live-url.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Design",
      description: "A responsive portfolio website showcasing modern design principles, smooth animations, and optimized performance. Built with React and Framer Motion.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      image: "https://i.ytimg.com/vi/Clll-ZcI2RY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIKzRlddg3F10GXMTOZUpGjSN5Ww",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      liveUrl: "https://your-project-live-url.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
      <motion.div
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
              <span className="bg-cyan-400/40 text-gray-700 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
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
      </motion.div>
    );
  };

  return (
    <section id="projects" className="text-white py-20 px-3 md:px-12 lg:px-24">
      <div className="container mx-auto p-0 md:p-0 w-full md:max-w-[95.5%]">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} // Reduced from y: 30
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }} // Reduced from 0.8
        >
          <h3 className="text-cyan-400 text-lg font-semibold mb-4 tracking-wider">
            MY RECENT PORTFOLIO
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug max-w-full md:max-w-2xl mx-auto mb-10">
           Spark Your Brand's Story Through Visionary Web Design
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development, 
            innovative solutions, and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Projects Grid - Custom Layout with Equal Heights */}
        <motion.div 
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
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }} // Reduced from y: 20
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.4 }} // Reduced from 0.8
        >
          <button
            className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-cyan-400/25 cursor-pointer"
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;