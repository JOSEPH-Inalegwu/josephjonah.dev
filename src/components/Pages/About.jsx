import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            About Me
          </h1>
          <p className="text-gray-300 text-lg">
            A deeper dive into who I am and what drives my passion.
          </p>
        </div>

        {/* My Journey */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">My Journey</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm Joseph Jonah, a frontend developer with a deep passion for crafting smooth and responsive user interfaces.
            My journey started with curiosity and evolved into a mission: to build web experiences that make people smile and think.
            Over time, I’ve grown through hands-on projects, community support, and consistent learning in areas like JavaScript, React, Tailwind CSS, and Git.
          </p>
        </section>

        {/* Skills / Tools */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Tech Stack & Tools</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-300">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Linux / Mint OS</li>
          </ul>
        </section>

        {/* Values or Fun Facts */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Beyond the Code</h2>
          <p className="text-gray-300 leading-relaxed">
            When I’m not coding, I’m exploring tech communities, helping friends build, or deep into a good book. 
            I believe in growing steadily and helping others rise with me. I also serve on my church’s media team where I use my skills in real-world scenarios.
          </p>
        </section>

        {/* Optional Image or Signature */}
        {/* <div className="text-center mt-12">
          <img src="/your-photo.jpg" alt="Joseph Jonah" className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-500" />
        </div> */}

      </div>
    </div>
  );
};

export default AboutPage;
