import React, { memo } from 'react';

// Memoized icon components for better performance
const FullstackIcon = memo(() => (
  <div className="relative w-20 h-20 mx-auto mb-6 group" role="img" aria-label="Fullstack development icon showing layered UI, API, and database components">
    <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotateY-12">
      <div className="absolute inset-0 animate-float-stack">
        <div className="absolute top-0 left-1/2 w-16 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded transform -translate-x-1/2 shadow-xl">
          <div className="absolute -top-1 -left-1 w-full h-full bg-gradient-to-r from-cyan-300 to-blue-400 rounded transform -skew-y-3 opacity-70"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <span className="text-xs font-bold text-white">UI</span>
          </div>
        </div>
        <div className="absolute top-6 left-1/2 w-16 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded transform -translate-x-1/2 shadow-xl">
          <div className="absolute -top-1 -left-1 w-full h-full bg-gradient-to-r from-emerald-300 to-green-400 rounded transform -skew-y-3 opacity-70"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <span className="text-xs font-bold text-white">API</span>
          </div>
        </div>
        <div className="absolute top-12 left-1/2 w-16 h-4 bg-gradient-to-r from-purple-400 to-indigo-500 rounded transform -translate-x-1/2 shadow-xl">
          <div className="absolute -top-1 -left-1 w-full h-full bg-gradient-to-r from-purple-300 to-indigo-400 rounded transform -skew-y-3 opacity-70"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <span className="text-xs font-bold text-white">DB</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 rounded-lg blur-xl opacity-20 animate-pulse-glow"></div>
    </div>
  </div>
));
FullstackIcon.displayName = 'FullstackIcon';

const RealtimeIcon = memo(() => (
  <div className="relative w-20 h-20 mx-auto mb-6 group" role="img" aria-label="Real-time application icon showing lightning bolt with pulse effects">
    <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
      <div className="absolute inset-0 animate-lightning">
        <div className="absolute top-2 left-1/2 w-3 h-6 bg-gradient-to-b from-yellow-300 to-yellow-500 transform -translate-x-1/2 clip-path-lightning shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-200 to-yellow-400 clip-path-lightning opacity-80"></div>
        </div>
        <div className="absolute top-7 left-1/2 w-4 h-6 bg-gradient-to-b from-yellow-400 to-orange-500 transform -translate-x-1/2 translate-x-1 clip-path-lightning shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-orange-400 clip-path-lightning opacity-80"></div>
        </div>
        <div className="absolute top-12 left-1/2 w-3 h-4 bg-gradient-to-b from-orange-400 to-red-500 transform -translate-x-1/2 clip-path-lightning shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-300 to-red-400 clip-path-lightning opacity-80"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping-slow opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 w-12 h-12 border-2 border-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping-slower opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-yellow-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping-slowest opacity-20"></div>
      <div className="absolute inset-0 bg-yellow-400 rounded-lg blur-xl opacity-25 animate-pulse-glow"></div>
    </div>
  </div>
));
RealtimeIcon.displayName = 'RealtimeIcon';

const DatabaseIcon = memo(() => (
  <div className="relative w-20 h-20 mx-auto mb-6 group" role="img" aria-label="Database architecture icon showing stacked database cylinders">
    <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotateX-12">
      <div className="absolute inset-0 animate-db-rotate">
        <div className="absolute top-0 left-1/2 w-14 h-5 transform -translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full shadow-lg"></div>
          <div className="absolute -top-1 inset-x-0 h-3 bg-gradient-to-r from-indigo-300 to-purple-400 rounded-full opacity-80"></div>
        </div>
        <div className="absolute top-4 left-1/2 w-14 h-5 transform -translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg"></div>
          <div className="absolute -top-1 inset-x-0 h-3 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full opacity-80"></div>
        </div>
        <div className="absolute top-8 left-1/2 w-14 h-5 transform -translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 rounded-full shadow-lg"></div>
          <div className="absolute -top-1 inset-x-0 h-3 bg-gradient-to-r from-pink-300 to-red-400 rounded-full opacity-80"></div>
        </div>
        <div className="absolute top-6 left-1/2 w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-transparent transform -translate-x-1/2 animate-data-flow"></div>
        <div className="absolute top-6 left-1/2 w-0.5 h-6 bg-gradient-to-b from-transparent to-cyan-400 transform -translate-x-1/2 animate-data-flow-reverse"></div>
      </div>
      <div className="absolute top-2 left-8 w-1 h-1 bg-cyan-400 rounded-full animate-particle-1"></div>
      <div className="absolute top-6 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-particle-2"></div>
      <div className="absolute top-10 left-6 w-1 h-1 bg-cyan-400 rounded-full animate-particle-3"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-lg blur-xl opacity-20 animate-pulse-glow"></div>
    </div>
  </div>
));
DatabaseIcon.displayName = 'DatabaseIcon';

const SecurityIcon = memo(() => (
  <div className="relative w-20 h-20 mx-auto mb-6 group" role="img" aria-label="Authentication and security icon showing shield with lock">
    <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotateY-15">
      <div className="absolute inset-0 animate-shield-pulse">
        <div className="absolute top-1 left-1/2 w-12 h-14 bg-gradient-to-b from-emerald-400 to-green-600 transform -translate-x-1/2 rounded-t-full rounded-b-lg shadow-2xl">
          <div className="absolute inset-1 bg-gradient-to-b from-emerald-300 to-green-500 rounded-t-full rounded-b-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-3 border-2 border-white rounded-t-full"></div>
            <div className="w-6 h-4 bg-white rounded mt-1 relative">
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 w-12 h-14 bg-gradient-to-b from-emerald-300 to-green-500 transform -translate-x-1/2 -translate-y-1 rounded-t-full rounded-b-lg opacity-60"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-emerald-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-emerald-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-reverse opacity-30"></div>
      <div className="absolute inset-0 bg-emerald-400 rounded-lg blur-xl opacity-20 animate-pulse-glow"></div>
    </div>
  </div>
));
SecurityIcon.displayName = 'SecurityIcon';

const PerformanceIcon = memo(() => (
  <div className="relative w-20 h-20 mx-auto mb-6 group" role="img" aria-label="Performance optimization icon showing rocket with flame trail">
    <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2">
      <div className="absolute inset-0 animate-rocket-boost">
        <div className="absolute top-2 left-1/2 w-6 h-12 bg-gradient-to-b from-cyan-300 to-cyan-600 rounded-t-full transform -translate-x-1/2 shadow-xl">
          <div className="absolute inset-1 bg-gradient-to-b from-cyan-200 to-cyan-500 rounded-t-full"></div>
          <div className="absolute top-2 left-1/2 w-2 h-2 bg-gradient-to-br from-white to-blue-100 rounded-full transform -translate-x-1/2 shadow-inner"></div>
          <div className="absolute top-8 left-0 w-2 h-3 bg-gradient-to-br from-blue-400 to-blue-700 transform rotate-12 rounded-sm"></div>
          <div className="absolute top-8 right-0 w-2 h-3 bg-gradient-to-br from-blue-400 to-blue-700 transform -rotate-12 rounded-sm"></div>
        </div>
        <div className="absolute top-14 left-1/2 w-4 h-8 transform -translate-x-1/2">
          <div className="w-full h-full bg-gradient-to-b from-orange-400 via-red-500 to-yellow-400 rounded-b-full animate-flame-flicker opacity-90"></div>
          <div className="absolute inset-0 w-3/4 h-full bg-gradient-to-b from-orange-300 via-red-400 to-yellow-300 rounded-b-full animate-flame-flicker-delayed opacity-70 mx-auto"></div>
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-b from-orange-200 via-red-300 to-yellow-200 rounded-b-full animate-flame-core opacity-80 mx-auto"></div>
        </div>
        <div className="absolute top-1 left-1/2 w-6 h-12 bg-gradient-to-b from-cyan-200 to-cyan-500 rounded-t-full transform -translate-x-1/2 -translate-y-1 opacity-40"></div>
      </div>
      <div className="absolute top-6 -left-4 w-10 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-speed-streak opacity-70"></div>
      <div className="absolute top-8 -left-6 w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-300 animate-speed-streak-delayed opacity-50"></div>
      <div className="absolute top-10 -left-4 w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-speed-streak-alt opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-orange-400 to-yellow-400 rounded-lg blur-xl opacity-20 animate-pulse-glow"></div>
    </div>
  </div>
));
PerformanceIcon.displayName = 'PerformanceIcon';

const ApiIcon = memo(() => (
  <div className="relative w-20 h-20 mx-auto mb-6 group" role="img" aria-label="API integration icon showing connected network nodes">
    <div className="relative w-full h-full transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotateZ-12">
      <div className="absolute inset-0 animate-network-pulse">
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-2xl z-20">
          <div className="absolute inset-1 bg-gradient-to-br from-purple-300 to-indigo-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute top-2 left-1/2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full transform -translate-x-1/2 shadow-lg z-10">
          <div className="absolute inset-0.5 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-2 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full transform -translate-y-1/2 shadow-lg z-10">
          <div className="absolute inset-0.5 bg-gradient-to-br from-green-300 to-emerald-500 rounded-full"></div>
        </div>
        <div className="absolute bottom-2 left-1/2 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-600 rounded-full transform -translate-x-1/2 shadow-lg z-10">
          <div className="absolute inset-0.5 bg-gradient-to-br from-orange-300 to-red-500 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 left-2 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full transform -translate-y-1/2 shadow-lg z-10">
          <div className="absolute inset-0.5 bg-gradient-to-br from-pink-300 to-purple-500 rounded-full"></div>
        </div>
        <div className="absolute top-4 left-1/2 w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 transform -translate-x-1/2 animate-data-pulse z-0"></div>
        <div className="absolute top-1/2 right-4 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 transform -translate-y-1/2 animate-data-pulse-delayed z-0"></div>
        <div className="absolute bottom-4 left-1/2 w-0.5 h-6 bg-gradient-to-t from-orange-400 to-purple-400 transform -translate-x-1/2 animate-data-pulse-alt z-0"></div>
        <div className="absolute top-1/2 left-4 w-6 h-0.5 bg-gradient-to-l from-purple-400 to-pink-400 transform -translate-y-1/2 animate-data-pulse-reverse z-0"></div>
      </div>
      <div className="absolute top-3 left-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-flow-down transform -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-3 w-1 h-1 bg-green-300 rounded-full animate-flow-left transform -translate-y-1/2"></div>
      <div className="absolute bottom-3 left-1/2 w-1 h-1 bg-orange-300 rounded-full animate-flow-up transform -translate-x-1/2"></div>
      <div className="absolute top-1/2 left-3 w-1 h-1 bg-pink-300 rounded-full animate-flow-right transform -translate-y-1/2"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 rounded-lg blur-xl opacity-20 animate-pulse-glow"></div>
    </div>
  </div>
));
ApiIcon.displayName = 'ApiIcon';

// Service card component
const ServiceCard = memo(({ service }) => (
  <article
    className="relative group text-center bg-transparent backdrop-blur-sm border-2 border-gray-800 rounded-xl p-6 transition-all duration-500 hover:-translate-y-3 hover:translate-x-1 h-full hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/20 transform-gpu perspective-1000"
    style={{
      transform: 'rotateX(5deg) rotateY(-2deg)',
      transformOrigin: 'center center',
      backfaceVisibility: 'hidden'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 rounded-xl transform translate-x-1 translate-y-1 -z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-gradient-to-br group-hover:from-cyan-900/20 group-hover:via-blue-900/10 group-hover:to-purple-900/20"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 rounded-xl transition-all duration-500 group-hover:from-cyan-400/10 group-hover:via-cyan-400/5 group-hover:to-purple-400/10 -z-5"></div>
    <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="my-6 relative z-10">
      {service.icon}
    </div>

    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-all duration-300 relative z-10">
      {service.title}
    </h3>

    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">
      {service.description}
    </p>

    <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-cyan-400/20 rounded-br-lg group-hover:border-cyan-400/50 transition-colors duration-500"></div>
    <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-400/20 rounded-tl-lg group-hover:border-cyan-400/50 transition-colors duration-500"></div>
  </article>
));
ServiceCard.displayName = 'ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Fullstack Web Development',
      description: 'I build complete web applications from frontend to backend. Using modern frameworks like React/Next.js for the frontend and Supabase for database and authentication, I create scalable, secure applications that handle everything from user interfaces to data management seamlessly.',
      icon: <FullstackIcon />
    },
    {
      id: 2,
      title: 'Real-Time Applications',
      description: 'I create dynamic applications with live features like instant messaging, collaborative editing, and live updates. Using Supabase real-time subscriptions, I build experiences where users see changes immediately without refreshing the page.',
      icon: <RealtimeIcon />
    },
    {
      id: 3,
      title: 'Database Architecture',
      description: 'I design and implement robust database structures using Supabase PostgreSQL. From user management and role-based access control to complex data relationships and optimized queries, I ensure your data is organized, secure, and performs efficiently.',
      icon: <DatabaseIcon />
    },
    {
      id: 4,
      title: 'Authentication & Security',
      description: 'I implement secure user authentication systems with Supabase Auth. From social logins and email verification to role-based permissions and row-level security, I ensure your application protects user data while providing smooth login experiences.',
      icon: <SecurityIcon />
    },
    {
      id: 5,
      title: 'Performance Optimization',
      description: 'I optimize applications for speed and efficiency using modern techniques like code splitting, lazy loading, and database query optimization. Your users get fast-loading pages and smooth interactions, while your hosting costs stay low through efficient resource usage.',
      icon: <PerformanceIcon />
    },
    {
      id: 6,
      title: 'API Integration',
      description: 'I connect your applications to external services and APIs seamlessly. Whether integrating payment processors, social media platforms, or third-party services, I ensure reliable data flow and error handling for robust, connected applications.',
      icon: <ApiIcon />
    }
  ];

  return (
    <section 
      id="services"
      className="text-white mt-10 py-20 px-2 md:px-12 lg:px-24"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <header className="text-center mb-16">
          <p className="text-cyan-400 md:text-lg font-semibold mb-4 tracking-wider">
            MY SERVICES
          </p>
          <h2 
            id="services-heading" 
            className="text-3xl md:text-4xl font-bold leading-snug max-w-full md:max-w-3xl mx-auto mb-10"
          >
            Building Complete Digital Solutions — From Frontend to Database
          </h2>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;