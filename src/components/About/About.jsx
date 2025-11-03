import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="text-white py-20 px-2 md:px-12 lg:px-24">
      <div className="container mx-auto md:max-w-6xl">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center px-3 md:px-6 transition-opacity duration-700 ${
            isInView ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Content */}
          <div
            className={`py-10 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-cyan-400 text-lg font-semibold mb-6 tracking-wider">
              ABOUT ME
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold leading-snug max-w-full md:max-w-2xl mx-auto mb-10">
              Shaping Aspirations into Vibrant Web Experiences
            </h3>

            <p
              className={`text-gray-300 text-lg leading-relaxed max-w-md mb-12 transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              I build digital experiences that drive engagement and performance
              through thoughtful design and clean code.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`bg-custom-blue text-gray-900 px-10 py-5 font-semibold transition-all duration-300 flex items-center gap-2 rounded-xs hover:bg-blue-600 hover:scale-105 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              View My Work
            </button>
          </div>

          {/* Right Image Section */}
          <div
            className={`relative transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              <div
                className={`absolute -top-6 -right-6 w-full h-full bg-custom-blue rounded-xs transition-all duration-700 delay-300 ${
                  isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              />
              <div
                className={`relative bg-gray-900 rounded-sm overflow-hidden transition-all duration-700 delay-200 ${
                  isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <img
                alt="Profile"
                  src="/second-profile.webp"
                  className="w-full h-auto aspect-[7/9] object-cover -scale-x-100"
                  width="700"
                  height="900"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
