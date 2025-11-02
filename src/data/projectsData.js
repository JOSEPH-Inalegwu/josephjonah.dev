export const projectsData = [
  {
    id: 1,
    title: "Scholaris — AI-Powered Exam Prep",
    slug: "scholaris-ai-exam-prep",
    category: "Full Stack Development",
    description: "An AI-powered academic platform designed to help students access past questions, take quizzes, simulate CBT exams, and track their GPA. Built with modern web technologies for speed, scalability, and security.",
    fullDescription: `Scholaris is a comprehensive AI-powered academic platform that revolutionizes how students prepare for exams. The platform combines intelligent question generation, personalized learning paths, and real-time performance tracking to create an immersive educational experience.

The system features department-based content filtering, allowing students to access relevant past questions and practice materials specific to their field of study. The AI engine generates contextually appropriate practice questions, adapting to each student's performance level and learning pace.

Key features include real-time database synchronization, secure user authentication with role-based access control, and a responsive interface that works seamlessly across all devices. The GPA tracking system provides detailed analytics and insights into student performance over time.`,
    technologies: [
      "React", "Tailwind CSS", "JavaScript (ES6+)", "Supabase (Auth, PostgreSQL, RLS)",
      "PostgreSQL", "AI/ML APIs", "Vercel", "Git & GitHub"
    ],
    image: "/scholaris thumbnail.png",
    gallery: [
      "/scholaris thumbnail.png",
      "/scholaris-dashboard.png",
      "/scholaris-quiz.png",
      "/scholaris-analytics.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://scholaris-nsuk.vercel.app",
    githubUrl: "https://github.com/JOSEPH-Inalegwu/scholaris-app",
    featured: true,
    challenges: [
      "Implementing real-time synchronization for multiple concurrent users",
      "Optimizing AI question generation for speed and accuracy",
      "Designing an intuitive UX for complex CBT simulations"
    ],
    solutions: [
      "Leveraged Supabase real-time subscriptions for instant updates",
      "Implemented caching strategies for AI-generated content",
      "Conducted extensive user testing to refine the interface"
    ],
    metrics: {
      users: "500+",
      questionsGenerated: "10,000+",
      averageImprovement: "35%"
    }
  },
  {
    id: 2,
    title: "Fivestack Team Website",
    slug: "fivestack-team-website",
    category: "Frontend Development",
    description: "A professional team website showcasing development expertise through interactive portfolios, case studies, and thought leadership content built with React, and Tailwind CSS.",
    fullDescription: `The Fivestack Team Website represents a modern approach to agency branding and client engagement. Built with performance and user experience as top priorities, the site features smooth animations, intuitive navigation, and compelling storytelling.

The website showcases the team's diverse skill set through interactive case studies, detailed project breakdowns, and testimonials from satisfied clients. Each section is carefully crafted to guide visitors through the team's journey, expertise, and unique value proposition.

The design system emphasizes consistency while allowing each team member's personality to shine through. Advanced animations using Framer Motion create engaging transitions that enhance rather than distract from the content.`,
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
    image: "/homepage-Fivestackdev.png",
    gallery: [
      "/homepage-Fivestackdev.png",
      "/fivestack-about.png",
      "/fivestack-services.png",
      "/fivestack-contact.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://fivestackdev.vercel.app",
    githubUrl: "https://github.com/JOSEPH-Inalegwu/fivestackdev",
    featured: false,
    challenges: [
      "Creating smooth, performant animations across all devices",
      "Balancing visual impact with page load performance",
      "Designing a cohesive brand identity across multiple sections"
    ],
    solutions: [
      "Optimized animation triggers using intersection observers",
      "Implemented lazy loading for images and components",
      "Developed a comprehensive design system with reusable components"
    ],
    metrics: {
      pageSpeed: "95/100",
      bounceRate: "25%",
      conversionRate: "12%"
    }
  },
  {
    id: 3,
    title: "Portfolio Website",
    slug: "portfolio-website",
    category: "Personal Brand",
    description: "A modern portfolio website showcasing my projects, skills, and professional journey. Features smooth animations, responsive design, and interactive components built with React and Framer Motion.",
    fullDescription: `This portfolio website serves as a comprehensive digital resume and project showcase, designed to make a lasting impression on potential clients and employers. The site combines aesthetic appeal with functional excellence, demonstrating both design sensibility and technical prowess.

Every element is carefully considered, from the loading animation that sets the tone, to the project cards that invite exploration, to the contact section that makes reaching out effortless. The site is built with modern web technologies and follows best practices for accessibility and performance.

The responsive design ensures a consistent, premium experience across all devices, while the interactive elements engage visitors and encourage them to explore the full breadth of work presented.`,
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Reactbits"],
    image: "/JosePortfolio.png",
    gallery: [
      "/JosePortfolio.png",
      "/portfolio-about.png",
      "/portfolio-projects.png",
      "/portfolio-contact.png"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    liveUrl: "https://josephjonah.vercel.app",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
    challenges: [
      "Creating a unique design that stands out from typical portfolios",
      "Optimizing performance while maintaining rich animations",
      "Ensuring accessibility without compromising visual design"
    ],
    solutions: [
      "Developed custom animation patterns using Framer Motion",
      "Implemented code splitting and lazy loading strategies",
      "Used semantic HTML and ARIA labels throughout"
    ],
    metrics: {
      loadTime: "< 2s",
      mobileScore: "98/100",
      accessibilityScore: "100/100"
    }
  },
  {
    id: 4,
    title: "SmartDucation Educational Platform",
    slug: "smartducation-platform",
    category: "Web Design",
    description: "An educational website from my early development days, showcasing my progression in web fundamentals. Built with HTML and CSS to master responsive layouts and styling principles.",
    fullDescription: `SmartDucation represents an important milestone in my development journey - a project built during the early stages of learning web development. While simple by today's standards, this project demonstrates fundamental skills in HTML structure, CSS styling, and responsive design principles.

The platform was designed to provide educational content in an accessible, user-friendly format. Despite being built with vanilla HTML and CSS, the site features responsive layouts that adapt to different screen sizes, demonstrating an early understanding of mobile-first design principles.

This project serves as a reminder of growth and progress in the field, showing where the journey began and how far technical skills have evolved since then.`,
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: "/smartducation.png",
    gallery: [
      "/smartducation.png",
      "/smartducation-courses.png",
      "/smartducation-about.png"
    ],
    liveUrl: "https://smartducation.vercel.app",
    githubUrl: "https://github.com/JOSEPH-Inalegwu/Smartducation",
    featured: false,
    challenges: [
      "Creating responsive layouts with pure CSS",
      "Ensuring cross-browser compatibility",
      "Organizing content hierarchy effectively"
    ],
    solutions: [
      "Used CSS Grid and Flexbox for responsive layouts",
      "Tested across multiple browsers and devices",
      "Implemented clear visual hierarchy with typography"
    ],
    metrics: {
      compatibility: "95%+ browsers",
      codeQuality: "Clean, semantic HTML",
      learningOutcome: "Strong foundation in web fundamentals"
    }
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

// Helper function to get related projects
export const getRelatedProjects = (currentProjectId, category, limit = 3) => {
  return projectsData
    .filter(project => project.id !== currentProjectId && project.category === category)
    .slice(0, limit);
};