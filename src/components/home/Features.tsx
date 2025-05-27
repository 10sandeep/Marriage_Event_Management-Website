import { Calendar, Mail, Gift, Camera } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    id: 1,
    icon: Mail,
    title: 'Advanced Communication Suite',
    description: 'Streamlined digital communication platform with intelligent design automation and personalized delivery systems for enhanced client engagement.',
    accent: 'blue'
  },
  {
    id: 2,
    icon: Calendar,
    title: 'Enterprise Event Management',
    description: 'Comprehensive scheduling and coordination system with predictive analytics and real-time collaboration tools for complex event orchestration.',
    accent: 'indigo'
  },
  {
    id: 3,
    icon: Gift,
    title: 'Intelligent Registry Platform',
    description: 'Data-driven recommendation engine with advanced analytics to optimize selection processes and enhance user experience through personalization.',
    accent: 'violet'
  },
  {
    id: 4,
    icon: Camera,
    title: 'Digital Asset Management',
    description: 'Enterprise-grade media management system with AI-powered organization, automated workflows, and collaborative sharing capabilities.',
    accent: 'purple'
  }
];

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getAccentClasses = (accent) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-600',
        text: 'text-blue-600',
        hover: 'hover:border-blue-300 hover:bg-blue-50/80'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        icon: 'bg-indigo-600',
        text: 'text-indigo-600',
        hover: 'hover:border-indigo-300 hover:bg-indigo-50/80'
      },
      violet: {
        bg: 'bg-violet-50',
        border: 'border-violet-200',
        icon: 'bg-violet-600',
        text: 'text-violet-600',
        hover: 'hover:border-violet-300 hover:bg-violet-50/80'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'bg-purple-600',
        text: 'text-purple-600',
        hover: 'hover:border-purple-300 hover:bg-purple-50/80'
      }
    };
    return colors[accent];
  };

  return (
    <section className="py-24 font-sans bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full shadow-sm">
              Enterprise Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight text-gray-900">
            Professional-Grade Platform
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
            Comprehensive suite of enterprise tools designed to streamline operations, 
            enhance productivity, and deliver exceptional results for modern businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const colors = getAccentClasses(feature.accent);
            return (
              <div
                key={feature.id}
                className={`group relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white ${colors.border} ${colors.hover}`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.icon} mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-medium mb-4 tracking-tight text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed mb-6 text-gray-600">
                    {feature.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <button className={`inline-flex items-center text-sm font-medium ${colors.text} group-hover:underline transition-all duration-200`}>
                    Learn more
                    <svg 
                      className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Subtle decoration */}
                <div className="absolute top-6 right-6 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className={`w-full h-full ${colors.bg} rounded-lg transform rotate-12`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 rounded-2xl border p-12 bg-white border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-medium mb-2 tracking-tight text-gray-900">99.9%</div>
              <div className="font-normal text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-medium mb-2 tracking-tight text-gray-900">24/7</div>
              <div className="font-normal text-gray-600">Enterprise Support</div>
            </div>
            <div>
              <div className="text-3xl font-medium mb-2 tracking-tight text-gray-900">SOC 2</div>
              <div className="font-normal text-gray-600">Security Compliance</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 shadow-sm">
              Schedule Demo
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors duration-200">
              View Pricing
            </button>
          </div>
          <p className="text-sm mt-4 text-gray-500">
            Free 30-day trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;