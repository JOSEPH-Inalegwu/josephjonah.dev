import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'WEB DEVELOPMENT',
      description: 'I build new websites that provide your visitors with a smooth, enjoyable experience on phones, tablets, and desktops. My goal is to create sites that are easy to use, professional, and impressive—helping you keep visitors engaged and grow your business effectively across all devices.',
      icon: (
        <div className="relative w-16 h-16 mx-auto mb-6">
          {/* Outer square */}
          <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg transform rotate-12"></div>
          {/* Inner square */}
          <div className="absolute inset-2 border-2 border-cyan-400 rounded-md"></div>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-custom-blue rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      )
    },
    {
      id: 2,
      title: 'COMMUNITY IMPACT',
      description: 'I volunteer my frontend development skills to help non-profit organizations and community projects improve their websites. This work lets me grow and learn while supporting causes that matter. By focusing on nonprofits, I contribute to making their web presence stronger and more effective for their mission.',
      icon: (
        <div className="relative w-16 h-16 mx-auto mb-6">
          {/* Diamond shape */}
          <div className="absolute inset-0 border-2 border-cyan-400 transform rotate-45 rounded-sm">
            <div className="absolute top-2 left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-cyan-400 transform -translate-x-1/2"></div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'WEB STYLING & OPTIMIZATION',
      description: "Visitors leave your website immediately because it's slow and hard to use on phones. They get frustrated waiting for pages to load or struggling with confusing navigation. I fix these issues by making your site fast, easy to use, and visually appealing on all devices.",
      icon: (
        <div className="relative w-16 h-16 mx-auto mb-6">
          {/* Hourglass/double triangle shape */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-cyan-400"></div>
            <div className="w-2 h-2 bg-custom-blue rounded-full my-1"></div>
            <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-cyan-400"></div>
          </div>
          {/* Outer frame */}
          <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg"></div>
        </div>
      )
    }
  ];

  return (
    <section id='services'
      className="text-white mt-20 py-20 px-2 md:px-12 lg:px-24"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-cyan-400 md:text-lg font-semibold mb-4 tracking-wider">
            MY SERVICE
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug max-w-full md:max-w-2xl mx-auto mb-10">
          Design should speak. Interactions should serve — I build both.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-2 gap-y-8 md:gap-y-0 md:px-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative glowing-border text-center bg-transparent backdrop-blur-sm border-2 border-gray-800 rounded-xs p-5 transition-all duration-300 hover:-translate-y-2 h-full"
            >
              {/* Icon */}
              <div className="mb-10">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;