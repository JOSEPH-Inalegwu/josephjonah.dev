import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const serviceID = 'service_6sma3sh';
  const templateID = 'template_j536q05';
  const publicKey = 'k-vw1CyF3j0S-pf4T';

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rateLimitError, setRateLimitError] = useState(false);

  // Security: Sanitize input to prevent XSS
  const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    
    return input
      .trim()
      .replace(/[<>]/g, '') 
      .replace(/javascript:/gi, '') 
      .replace(/on\w+=/gi, '') 
      .slice(0, 1000); 
  };

  // Security: Validate email format strictly
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Additional checks
    if (email.includes('..')) return false; 
    if (email.startsWith('.') || email.endsWith('.')) return false;
    if (email.includes('\n') || email.includes('\r')) return false; 
    
    return emailRegex.test(email) && email.length <= 254; 
  };

  // Security: Rate limiting (simple client-side version)
  const checkRateLimit = () => {
    const lastSubmission = localStorage.getItem('lastFormSubmit');
    const now = Date.now();
    
    if (lastSubmission) {
      const timeDiff = now - parseInt(lastSubmission);
      const cooldownPeriod = 60000; 
      
      if (timeDiff < cooldownPeriod) {
        const secondsLeft = Math.ceil((cooldownPeriod - timeDiff) / 1000);
        setRateLimitError(`Please wait ${secondsLeft} seconds before submitting again.`);
        return false;
      }
    }
    
    return true;
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation with sanitization
    const sanitizedName = sanitizeInput(formData.name);
    if (!sanitizedName) {
      newErrors.name = 'Name is required';
    } else if (sanitizedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (sanitizedName.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(sanitizedName)) {
      newErrors.name = 'Name contains invalid characters';
    }
    
    // Email validation with strict checking
    const sanitizedEmail = sanitizeInput(formData.email);
    if (!sanitizedEmail) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(sanitizedEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation with sanitization
    const sanitizedMessage = sanitizeInput(formData.message);
    if (!sanitizedMessage) {
      newErrors.message = 'Message is required';
    } else if (sanitizedMessage.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (sanitizedMessage.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Security: Sanitize on input
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Clear errors and rate limit message
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    if (rateLimitError) {
      setRateLimitError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Security: Rate limit check
    if (!checkRateLimit()) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Security: Send sanitized data
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        message: sanitizeInput(formData.message)
      };

      // Create a temporary form with sanitized data
      const tempForm = document.createElement('form');
      Object.keys(sanitizedData).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = sanitizedData[key];
        tempForm.appendChild(input);
      });

      await emailjs.sendForm(serviceID, templateID, tempForm, publicKey);
      
      // Security: Update rate limit timestamp
      localStorage.setItem('lastFormSubmit', Date.now().toString());
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
      setRateLimitError(false);
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Security: Don't expose detailed error info
      if (error.text?.includes('rate limit')) {
        setRateLimitError('Too many requests. Please try again later.');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-gray-900 rounded-lg">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-white text-2xl font-bold">
            Message Sent Successfully!
          </h3>
          
          <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          
          <button
            onClick={() => setSubmitted(false)}
            className="bg-cyan-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-cyan-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900 mt-4"
            aria-label="Send another message"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <section 
      className="w-full bg-gray-900 py-12 px-4"
      aria-labelledby="contact-form-heading"
    >
      <div className="max-w-md mx-auto">
        <header className="text-center mb-8">
          <h2 
            id="contact-form-heading"
            className="text-white text-2xl md:text-3xl font-bold mb-2"
          >
            Send Me a Message
          </h2>
          <p className="text-gray-400">
            I'll respond within 24 hours
          </p>
        </header>
        
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="space-y-6"
          noValidate
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              maxLength={100}
              autoComplete="name"
              required
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`w-full bg-gray-800/50 border ${
                errors.name ? 'border-red-500' : 'border-gray-700'
              } text-white placeholder-gray-400 px-4 py-4 rounded-lg focus:outline-none transition-all duration-300 ${
                errors.name ? 'focus:border-red-400' : 'focus:border-cyan-400'
              } hover:border-cyan-400/30`}
            />
            {errors.name && (
              <p id="name-error" className="text-red-400 text-sm mt-2 px-1" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              maxLength={254}
              autoComplete="email"
              required
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full bg-gray-800/50 border ${
                errors.email ? 'border-red-500' : 'border-gray-700'
              } text-white placeholder-gray-400 px-4 py-4 rounded-lg focus:outline-none transition-all duration-300 ${
                errors.email ? 'focus:border-red-400' : 'focus:border-cyan-400'
              } hover:border-cyan-400/30`}
            />
            {errors.email && (
              <p id="email-error" className="text-red-400 text-sm mt-2 px-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows={5}
              maxLength={1000}
              required
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full bg-gray-800/50 border ${
                errors.message ? 'border-red-500' : 'border-gray-700'
              } text-white placeholder-gray-400 px-4 py-4 rounded-lg focus:outline-none resize-none transition-all duration-300 ${
                errors.message ? 'focus:border-red-400' : 'focus:border-cyan-400'
              } hover:border-cyan-400/30`}
            />
            <div className="flex justify-between items-center mt-2 px-1">
              <div>
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-sm" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
              <span className="text-gray-400 text-xs">
                {formData.message.length}/1000
              </span>
            </div>
          </div>

          {/* Rate Limit Error */}
          {rateLimitError && (
            <div 
              className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm"
              role="alert"
            >
              {rateLimitError}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || rateLimitError}
            className={`w-full font-semibold py-4 rounded-lg transition-all duration-300 ${
              isSubmitting || rateLimitError
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-cyan-400 text-black hover:bg-cyan-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900'
            }`}
            aria-label={isSubmitting ? 'Submitting message' : 'Submit message'}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;