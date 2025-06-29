import { useState, useEffect } from 'react';

const ProcessSlider = ({ 
  title, 
  subtitle, 
  slides = [],
  accentColor = 'cyan',
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % slides.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  const colorClasses = {
    cyan: {
      accent: 'text-cyan-400',
      border: 'border-cyan-400',
      bg: 'bg-cyan-400',
      hover: 'hover:text-cyan-300',
      bgHover: 'hover:bg-cyan-600'
    },
    blue: {
      accent: 'text-blue-400',
      border: 'border-blue-400',
      bg: 'bg-blue-400',
      hover: 'hover:text-blue-300',
      bgHover: 'hover:bg-blue-600'
    },
    purple: {
      accent: 'text-purple-400',
      border: 'border-purple-400',
      bg: 'bg-purple-400',
      hover: 'hover:text-purple-300',
      bgHover: 'hover:bg-purple-600'
    }
  };

  const colors = colorClasses[accentColor] || colorClasses.cyan;

  if (!slides.length) return null;

  return (
    <div className="h-full">
      {/* Mobile View - Card Layout */}
      <div className="lg:hidden">
        <div className="text-center mb-12">
          <h1
            className="text-white text-2xl md:text-3xl font-semibold mb-4"
          >
            {title}
          </h1>
          <p 
            className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${colors.border} bg-gray-900 p-6 transition-all duration-200 ${colors.bgHover} hover:bg-opacity-5`}
            >
              <div className="flex items-start">
                <div 
                  className={`${colors.accent} text-2xl font-semibold mr-4 flex-shrink-0 mt-1`}
                >
                  {slide.number}
                </div>
                <div>
                  <h3
                    className="text-white text-lg font-semibold mb-3"
                  >
                    {slide.title}
                  </h3>
                  <p 
                    className="text-gray-300 text-sm leading-relaxed"
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - Slider */}
      <div className="hidden lg:block h-full">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="mb-12">
            <h1
              className="text-white text-2xl font-semibold mb-6"
            >
              {title}
            </h1>
            <p 
              className="text-gray-300 text-lg leading-relaxed max-w-4xl"
            >
              {subtitle}
            </p>
          </div>

          {/* Slider Content */}
          <div className="flex-1 flex flex-col">
            {/* Current Step */}
            <div className={`flex-1 ${colors.border} bg-gray-900 bg-opacity-50 p-10`}>
              <div className="h-full flex flex-col">
                <div className="flex items-start mb-8">
                  <div 
                    className={`${colors.accent} text-4xl xl:text-7xl font-semibold mr-8 flex-shrink-0`}
                  >
                    {slides[currentStep].number}
                  </div>
                  <div>
                    <h3
                      className="text-white text-3xl xl:text-2xl font-semibold mb-4"
                    >
                      {slides[currentStep].title}
                    </h3>
                    <p 
                      className="text-gray-300 text-xl xl:text-lg leading-relaxed"
                    >
                      {slides[currentStep].description}
                    </p>
                  </div>
                </div>
                
                {/* Details */}
                {slides[currentStep].details && (
                  <div className="flex-1">
                    <h4 
                      className={`${colors.accent} font-semibold mb-6 text-xl xl:text-2xl`}
    
                    >
                      Key Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                      {slides[currentStep].details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mr-4 mt-3 flex-shrink-0`}></div>
                          <span 
                            className="text-gray-300 text-lg xl:text-xl leading-relaxed"
        
                          >
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={prevStep}
                className={`flex items-center ${colors.accent} ${colors.hover} transition-colors duration-200 text-lg font-medium`}
              >
                <div className="mr-3 text-xl">←</div>
                <span>Previous</span>
              </button>

              {/* Dots Navigation */}
              <div className="flex space-x-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentStep 
                        ? `${colors.bg}` 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextStep}
                className={`flex items-center ${colors.accent} ${colors.hover} transition-colors duration-200 text-lg font-medium`}
              >
                <span>Next</span>
                <div className="ml-3 text-xl">→</div>
              </button>
            </div>

            {/* Step Counter */}
            <div className="mt-6 text-center">
              <span 
                className="text-gray-400 text-sm"
    
              >
                {currentStep + 1} of {slides.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Client-focused work process
const HowIWork = () => {
  const clientProcessSlides = [
    {
      title: "Discovery & Requirements",
      number: "01",
      description: "I start by understanding your business goals, target audience, and project requirements through detailed discussions and research.",
    },
    {
      title: "Strategy & Planning",
      number: "02", 
      description: "I create a detailed project roadmap with milestones, deliverables, and technical architecture to ensure smooth execution.",
    },
    {
      title: "Design & Development",
      number: "03",
      description: "I build your solution using modern best practices, keeping you updated with regular progress reports and previews.",
    },
    {
      title: "Testing & Refinement",
      number: "04",
      description: "I thoroughly test the solution, gather your feedback, and make necessary refinements to ensure it exceeds expectations.",
    },
    {
      title: "Launch & Support",
      number: "05",
      description: "I handle the deployment process and provide ongoing support to ensure your project launches successfully and continues to perform well.",
    }
  ];

  return (
    <div className="min-h-screen bg-black py-8">
      <ProcessSlider
        title="How I Work"
        subtitle="I follow a proven process that ensures quality delivery, clear communication, and successful project outcomes for every client."
        slides={clientProcessSlides}
        accentColor="cyan"
        autoPlay={true}
        autoPlayInterval={5000}
      />
    </div>
  );
};

export default HowIWork;