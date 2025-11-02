import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { getProjectBySlug, getRelatedProjects } from '../../data/projectsData';
import Footer from '../Footer/Footer';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = getRelatedProjects(project.id, project.category, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors duration-300 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Projects
            </button>

            {/* Project Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Featured Project
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {project.title}
              </h1>

              <p className="text-gray-400 text-lg md:text-xl max-w-4xl mb-8">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-400/30 transform hover:scale-105"
                >
                  <FaExternalLinkAlt size={16} />
                  View Live Site
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    <FaGithub size={16} />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-gray-700">
              <img
                src={project.gallery?.[selectedImage] || project.image}
                alt={`${project.title} - View ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'border-cyan-400 scale-105'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Full Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                <div className="text-gray-400 leading-relaxed space-y-4">
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Challenges & Solutions */}
              {project.challenges && project.solutions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {/* Challenges */}
                  <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FaLightbulb className="text-yellow-400 text-2xl" />
                      <h3 className="text-xl font-bold text-white">Challenges</h3>
                    </div>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FaCheckCircle className="text-green-400 text-2xl" />
                      <h3 className="text-xl font-bold text-white">Solutions</h3>
                    </div>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" size={14} />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Metrics */}
              {project.metrics && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <FaChartLine className="text-cyan-400 text-2xl" />
                    <h3 className="text-2xl font-bold text-white">Key Metrics</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(project.metrics).map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                        <div className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-cyan-400/10 text-cyan-400 px-3 py-2 rounded-lg text-sm border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Video */}
              {project.videoUrl && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">Video Demo</h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={project.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 px-4 md:px-12 lg:px-24 bg-gray-900/20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.slug}`}
                    className="group"
                  >
                    <div className="bg-gray-800/30 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {relatedProject.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              I'm available for freelance projects and full-time opportunities. Let's create something amazing!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const whatsappNumber = "2347042482419";
                  const message = `Hi Joseph! I'm interested in your work on ${project.title}. Let's discuss working together!`;
                  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:scale-105"
              >
                Let's Build Together
              </button>
              
              <Link
                to="/projects"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;