import { Calendar, Mail, Gift, Camera } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    id: 1,
    icon: Mail,
    title: 'AI-Powered Invitations',
    description: 'Create stunning digital invitations with AI-assisted design that adapts to your story and personalizes for each guest.',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    glowColor: 'shadow-purple-500/30'
  },
  {
    id: 2,
    icon: Calendar,
    title: 'Smart Event Orchestration',
    description: 'Intelligent timeline management with predictive scheduling and real-time coordination across all your wedding events.',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    glowColor: 'shadow-cyan-500/30'
  },
  {
    id: 3,
    icon: Gift,
    title: 'Neural Gift Curation',
    description: 'Machine learning algorithms curate personalized registries based on your preferences and lifestyle patterns.',
    gradient: 'from-emerald-500 via-green-500 to-lime-500',
    glowColor: 'shadow-emerald-500/30'
  },
  {
    id: 4,
    icon: Camera,
    title: 'Immersive Memory Vault',
    description: 'Advanced photo management with facial recognition, auto-tagging, and collaborative albums that grow with your celebration.',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    glowColor: 'shadow-orange-500/30'
  }
];

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-rose-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-transparent via-purple-500/5 to-transparent rounded-full animate-spin duration-20000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
              Next-Gen Wedding Technology
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Your Dream Wedding,
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Reimagined
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of wedding planning with AI-powered tools, immersive experiences, 
            and intelligent automation that transforms your special day into something extraordinary.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-8 transition-all duration-700 hover:scale-105 hover:border-gray-500/50 ${feature.glowColor} hover:shadow-2xl`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Animated border gradient */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r ${feature.gradient} p-[1px]`}>
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  {feature.description}
                </p>

                {/* Hover effect particles */}
                {hoveredCard === feature.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${feature.gradient} rounded-full animate-ping`}
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${30 + (i * 10)}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: '2s'
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>

              {/* Geometric decoration */}
              <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className={`w-full h-full border-2 border-current rotate-45 rounded-lg bg-gradient-to-r ${feature.gradient}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer">
            <span>Explore the Future of Weddings</span>
            <svg className="ml-2 w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;