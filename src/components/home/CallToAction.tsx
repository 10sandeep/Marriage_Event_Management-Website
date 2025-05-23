import { ArrowRight, Sparkles, Heart, Star, Zap } from 'lucide-react';
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
      className="relative py-16 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full blur-sm" />
          </div>
        ))}
      </div>

      {/* Floating icons */}
      {[Heart, Star, Sparkles].map((Icon, index) => (
        <div
          key={index}
          className="absolute animate-bounce opacity-20"
          style={{
            left: `${15 + index * 30}%`,
            top: `${20 + index * 20}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${6 + index}s`,
          }}
        >
          <Icon className="h-6 w-6 text-pink-300" />
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          className="relative overflow-hidden rounded-3xl group cursor-pointer"
          onMouseMove={handleMouseMove}
        >
          {/* Enhanced background with parallax effect */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
              style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg')",
                filter: 'brightness(0.7) contrast(1.2)'
              }}
            />
            
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/70 via-purple-600/60 to-rose-600/70 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-rose-500/30 blur-sm group-hover:blur-none transition-all duration-500" />
          <div className="absolute inset-[2px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 group-hover:border-white/40 transition-all duration-500" />

          {/* Interactive glow effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236,72,153,0.4), transparent 40%)`
            }}
          />

          {/* Content */}
          <div className="relative py-12 px-8 sm:py-16 sm:px-12 text-center">
            
            {/* Animated icon */}
            <div className={`mb-8 inline-flex items-center justify-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 blur-lg opacity-60 group-hover:opacity-80 animate-pulse" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/30">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Main heading */}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                Begin Your Journey to
              </span>
              <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 bg-clip-text text-transparent mt-2">
                Wedding Perfection
              </span>
            </h2>
            
            {/* Subtitle with glassmorphism */}
            <div className={`mb-8 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10" />
                <p className="relative text-lg sm:text-xl text-white/90 py-4 px-6 leading-relaxed">
                  Join <span className="text-pink-300 font-semibold">10,000+ happy couples</span> who've created their perfect day with 
                  <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent font-bold"> Eternal Moments</span>
                </p>
              </div>
            </div>

            {/* Enhanced CTA buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 transform transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              
              {/* Primary CTA */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white via-pink-100 to-white blur-lg opacity-70 group-hover:opacity-90 transition-all duration-300" />
                <button className="relative bg-white text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl border-2 border-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-white/25 group-hover:border-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-pink-50">
                  <span className="flex items-center space-x-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text">
                    <Sparkles className="h-6 w-6 text-pink-600" />
                    <span>Start Free Today</span>
                    <ArrowRight className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>

              {/* Secondary CTA */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/30 group-hover:border-white/50 transition-all duration-300" />
                <button className="relative bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group-hover:border-white/50">
                  <span className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-pink-300" />
                    <span>View Success Stories</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Trust indicators */}
            <div className={`mt-10 flex flex-wrap justify-center items-center space-x-8 space-y-4 transform transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {[
                { icon: Heart, text: 'Trusted by 10K+ Couples' },
                { icon: Star, text: '5-Star Rated Platform' },
                { icon: Zap, text: 'Launch in Minutes' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-2 group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 group-hover:border-white/40 transition-all duration-300" />
                      <div className="relative px-4 py-2 flex items-center space-x-2">
                        <Icon className="h-5 w-5 text-pink-300" />
                        <span className="text-white/90 text-sm font-medium">{item.text}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 120" 
          className="text-white"
          style={{ height: '80px' }}
        >
          <defs>
            <linearGradient id="ctaWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(236,72,153,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#ctaWaveGradient)"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;