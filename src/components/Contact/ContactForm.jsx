import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div 
          className="px-2 text-center"
          style={{
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all 0.3s ease'
          }}
        >
          <h2
            className="text-white text-2xl font-bold mb-6"
            style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
          >
            MESSAGE SENT!
          </h2>
          <p className="text-gray-300 mb-6">
            Thank you for reaching out. I'll get back to you soon!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-cyan-500 text-black font-bold py-3 px-6 hover:bg-cyan-400 transition-colors"
            style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div
        className="px-2 w-full max-w-md"
        style={{
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'opacity 0.3s ease 0.3s, transform 0.3s ease 0.3s'
        }}
      >
        <h2
          className="text-white text-2xl font-bold mb-6"
          style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
        >
          GET IN TOUCH
        </h2>
        
        <div className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className={`w-full bg-transparent border ${
                errors.name ? 'border-red-500' : 'border-cyan-500'
              } text-white placeholder-gray-400 px-4 py-4 focus:outline-none transition-colors ${
                errors.name ? 'focus:border-red-400' : 'focus:border-cyan-400'
              }`}
              style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1 px-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className={`w-full bg-transparent border ${
                errors.email ? 'border-red-500' : 'border-cyan-500'
              } text-white placeholder-gray-400 px-4 py-4 focus:outline-none transition-colors ${
                errors.email ? 'focus:border-red-400' : 'focus:border-cyan-400'
              }`}
              style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1 px-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className={`w-full bg-transparent border ${
                errors.message ? 'border-red-500' : 'border-cyan-500'
              } text-white placeholder-gray-400 px-4 py-3 focus:outline-none resize-none transition-colors ${
                errors.message ? 'focus:border-red-400' : 'focus:border-cyan-400'
              }`}
              style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1 px-1">{errors.message}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full font-bold py-5 transition-all duration-200 cursor-pointer ${
              isSubmitting 
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                : 'bg-cyan-500 text-black hover:bg-gray-800 hover:scale-105 active:scale-95'
            }`}
            style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT NOW'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;