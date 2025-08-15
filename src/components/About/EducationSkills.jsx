import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const EducationSkills = () => {
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

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
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

  const educationVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
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

  const skills = [
  {
    category: "Frontend Development",
    items: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Responsive Design",
      "State Management (useState, useEffect, Context API)",
      "Form Handling & Validation (Zod, React Hook Form)"
    ]
  },
  {
    category: "Backend & Database (Supabase Journey)",
    items: [
      "Supabase Authentication",
      "Supabase Storage",
      "PostgreSQL",
      "Row Level Security (RLS)",
      "Real-time Subscriptions",
      "Database Schema Design",
      "RESTful API Integration",
      "Serverless Functions"
    ]
  },
  {
    category: "Development Tools",
    items: [
      "Git & GitHub",
      "VS Code",
      "Linux",
      "Vercel",
      "Netlify",
      "API Integration",
      "Browser DevTools",
      "Npm & Yarn",
      "Environment Variables & Configuration"
    ]
  },
  {
    category: "Diploma in IT",
    items: [
      "Microsoft Word (Document Formatting & Styling)",
      "Microsoft Excel (Formulas, Charts, Data Analysis, Macros)",
      "Microsoft PowerPoint (Presentation Design)",
      "Microsoft Access (Database Creation & Queries)",
      "Basic Networking & Troubleshooting",
      "Computer Hardware & Software Maintenance",
      "File Management & Organization",
      "Internet Research & Email Management",
      "Collaboration Tools (Google Docs, Sheets, Drive)"
    ]
  }
];


  const education = [
    {
      period: "2024 - 2027",
      institution: "Nasarawa State University, Keffi.",
      degree: "BSc. Computer Science",
      status: "Currently Pursuing",
      description: "Pursuing a comprehensive Computer Science degree with focus on algorithms, data structures, software engineering, and foundational concepts for AI/ML engineering."
    },
    {
      period: "2024 - Present",
      institution: "Self-Paced",
      degree: "Fullstack Web Development with Supabase",
      status: "Currently Learning",
      description: "Focused on mastering modern fullstack development with TypeScript, Tailwind CSS, Next.js, and Supabase. Building scalable, type-safe applications with strong frontend and backend integration, leveraging Supabase for authentication, database, and APIs."
    },
    {
      period: "2022 - 2024",
      institution: "Self-Taught (FreeCodeCamp, SuperSimpleDev, YouTube)",
      degree: "Frontend Development",
      status: "Completed",
      description: "Mastered modern frontend technologies including React, Next.js, and TypeScript through intensive self-study and hands-on projects."
    },
    {
      period: "2021-2022",
      institution: "Africa InfoTech",
      degree: 'Diploma in IT',
      status: 'Completed',
      description: 'Gained foundational and practical skills in using Microsoft Office Suite (Word, Excel, PowerPoint, Access) and internet applications. Developed problem-solving abilities through IT-related tasks and built a strong understanding of computer systems, productivity tools, and basic networking concepts.'
    }
  ];

  return (
    <section id='education' className="text-white py-20 px-3 md:px-12 lg:px-24">
      <div className="container p-0 mx-auto w-full md:max-w-[96%]">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-cyan-400 text-lg font-semibold mb-6 tracking-wider">
            EDUCATION & SKILLS
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug max-w-full md:max-w-2xl mx-auto mb-10">
            Mastering Frontend Artistry with AI-Driven Innovation
          </h2>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}relative glowing-border 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Skills Section - Left Side */}
          <motion.div 
            className="space-y-8"
            variants={skillVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-cyan-400 pl-4">
              Technical Skills
            </h3>
            
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-md p-6 hover:border-cyan-400/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-cyan-400/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section - Right Side */}
          <motion.div 
            className="space-y-8"
            variants={educationVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-cyan-400 pl-4">
              Education & Journey
            </h3>
            
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="relative bg-gray-800/20 backdrop-blur-sm border-l-4 border-cyan-400 pl-8 pr-6 py-6 rounded-r-lg hover:bg-gray-800/40 transition-colors duration-300"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: index * 0.3 + 0.5 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-cyan-400/40 text-cyan-100 px-3 py-1 rounded-full text-sm font-semibold">
                      {edu.period}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Currently Pursuing' 
                        ? 'bg-green-400/40 text-gray-200' 
                        : 'bg-blue-400/40 text-blue-200'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-cyan-400 font-medium">
                    {edu.institution}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSkills;