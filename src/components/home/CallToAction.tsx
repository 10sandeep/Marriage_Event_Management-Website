import { ArrowRight, Check, Shield, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="cta-section"
      className="relative py-20 overflow-hidden"
      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
    >
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div 
          className="relative overflow-hidden rounded-2xl group cursor-pointer"
          onMouseMove={handleMouseMove}
        >
          {/* Professional background with subtle texture */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-blue-500/10 to-indigo-500/5 backdrop-blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Sophisticated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 opacity-50 group-hover:opacity-70 transition-all duration-500" />
          <div className="absolute inset-[1px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500" />

          {/* Interactive professional glow */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.3), transparent 50%)`
            }}
          />

          {/* Content */}
          <div className="relative py-16 px-8 sm:py-20 sm:px-12 text-center">
            
            {/* Professional icon */}
            <div className={`mb-8 inline-flex items-center justify-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="relative group">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/30 to-indigo-500/30 blur-lg opacity-50 group-hover:opacity-70 transition-all duration-300" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <Shield className="h-10 w-10 text-blue-300" />
                </div>
              </div>
            </div>

            {/* Professional heading */}
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
              <span className="block text-white">
                Transform Your Business
              </span>
              <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-400 bg-clip-text text-transparent mt-2" style={{ fontWeight: 400 }}>
                Drive Results Today
              </span>
            </h2>
            
            {/* Professional subtitle */}
            <div className={`mb-10 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="relative max-w-2xl mx-auto">
                <p className="text-xl text-white/80 leading-relaxed" style={{ fontWeight: 400 }}>
                  Join industry leaders who trust our platform to deliver 
                  <span className="text-blue-300 font-medium"> measurable growth</span> and 
                  <span className="text-indigo-300 font-medium"> exceptional results</span>
                </p>
              </div>
            </div>

            {/* Professional CTA buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 transform transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              
              {/* Primary CTA */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-all duration-300 blur-sm group-hover:blur-none" />
                <button className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25 border border-blue-500/50 hover:border-blue-400/70">
                  <span className="flex items-center space-x-3">
                    <span>Get Started Now</span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>

              {/* Secondary CTA */}
              <div className="relative group">
                <button className="relative bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium text-lg border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-300" />
                    <span>Schedule Demo</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Professional trust indicators */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto transform transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {[
                { icon: Users, number: '50,000+', text: 'Enterprise Clients' },
                { icon: Award, number: '99.9%', text: 'Uptime Guarantee' },
                { icon: Shield, number: 'SOC 2', text: 'Certified Security' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <Icon className="h-8 w-8 text-blue-300" />
                        <div className="text-2xl font-semibold text-white" style={{ fontWeight: 600 }}>
                          {item.number}
                        </div>
                        <div className="text-sm text-white/70 font-medium">
                          {item.text}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Features list */}
            <div className={`mt-10 flex flex-wrap justify-center items-center gap-6 transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {[
                'Free 30-day trial',
                'No setup fees',
                '24/7 support',
                'Cancel anytime'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-white/80">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Professional bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
};

export default CallToAction;