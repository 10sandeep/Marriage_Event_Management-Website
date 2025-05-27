import { useState, useEffect } from 'react';
import { Heart, ArrowRight, Sparkles, Star, Zap } from 'lucide-react';

const backgroundImages = [
  'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
  'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg',
  'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg'
];

const floatingElements = [
  { icon: Heart, delay: 0, duration: 6 },
  { icon: Star, delay: 2, duration: 8 },
  { icon: Sparkles, delay: 4, duration: 7 },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Subtle professional overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 dark:from-gray-900/60 dark:via-gray-800/50 dark:to-gray-900/60" />
      
      {/* Background images with enhanced transitions */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out transform ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        {/* Professional overlay with clean gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-gray-900/90" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10 dark:opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div className="w-1.5 h-1.5 bg-white dark:bg-gray-200 rounded-full blur-sm" />
          </div>
        ))}
      </div>

      {/* Floating icons - Hide on mobile for better space */}
      <div className="hidden md:block">
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <div
              key={index}
              className="absolute animate-bounce opacity-20 dark:opacity-25"
              style={{
                left: `${20 + index * 30}%`,
                top: `${20 + index * 15}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}
            >
              <Icon className="h-6 w-6 text-slate-300 dark:text-gray-300" />
            </div>
          );
        })}
      </div>

      {/* Hero content - Professional spacing and layout */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className={`text-center max-w-5xl mx-auto w-full transform transition-all duration-1500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          
          {/* Professional logo/icon */}
          <div className="mb-6 sm:mb-8 lg:mb-10 inline-flex items-center justify-center relative group">
            <div className="absolute inset-0 rounded-full bg-slate-600/20 dark:bg-gray-600/30 blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full p-4 sm:p-5 lg:p-6 border border-white/20 dark:border-gray-700/40 group-hover:border-white/30 dark:group-hover:border-gray-600/50 transition-all duration-500">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white dark:text-gray-200 fill-slate-300 dark:fill-gray-400" />
            </div>
          </div>

          {/* Professional main heading */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6 sm:mb-8 lg:mb-10 transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="block text-white dark:text-gray-100 tracking-tight">
              Your Love Story
            </span>
            <span className="block text-slate-300 dark:text-gray-300 mt-2 font-light">
              Deserves Excellence
            </span>
          </h1>

          {/* Professional subtitle */}
          <div className={`mb-8 sm:mb-10 lg:mb-12 transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 dark:border-gray-700/30" />
              <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 dark:text-gray-200/90 max-w-4xl mx-auto py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 leading-relaxed font-light">
                Create <span className="text-white dark:text-gray-100 font-medium">professional digital invitations</span>, 
                manage RSVPs efficiently, and share your most precious moments with 
                <span className="text-white dark:text-gray-100 font-semibold"> Eternal Moments</span>.
              </p>
            </div>
          </div>

          {/* Professional CTA buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Primary CTA */}
            <div className="relative group w-full sm:w-auto">
              <button className="relative w-full sm:w-auto bg-slate-800 dark:bg-gray-700 hover:bg-slate-900 dark:hover:bg-gray-600 text-white dark:text-gray-100 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-lg font-semibold text-sm sm:text-base lg:text-lg shadow-xl border border-slate-700 dark:border-gray-600 hover:border-slate-600 dark:hover:border-gray-500 transition-all duration-300 transform hover:scale-[1.02]">
                <span className="flex items-center justify-center space-x-3">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-5 lg:w-5" />
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-5 lg:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Secondary CTA */}
            <div className="relative group w-full sm:w-auto">
              <button className="relative w-full sm:w-auto bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm text-white dark:text-gray-200 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-lg font-medium text-sm sm:text-base lg:text-lg border border-white/20 dark:border-gray-700/40 hover:border-white/30 dark:hover:border-gray-600/50 hover:bg-white/15 dark:hover:bg-gray-800/40 transition-all duration-300 transform hover:scale-[1.02]">
                <span className="flex items-center justify-center space-x-3">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 lg:h-5 lg:w-5 text-slate-300 dark:text-gray-300" />
                  <span>Explore Templates</span>
                </span>
              </button>
            </div>
          </div>

          {/* Professional stats section */}
          <div className={`flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 transform transition-all duration-1000 delay-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {[
              { number: '10K+', label: 'Happy Couples' },
              { number: '50K+', label: 'Invitations Sent' },
              { number: '99%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg border border-white/10 dark:border-gray-700/30 group-hover:border-white/20 dark:group-hover:border-gray-600/40 transition-all duration-300" />
                  <div className="relative px-6 sm:px-8 py-4 sm:py-5">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white dark:text-gray-100">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-slate-300 dark:text-gray-300 mt-1 font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clean professional wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 120" 
            className="text-white dark:text-gray-100"
            style={{ height: '60px' }}
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" className="dark:stop-color-gray-100" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.7)" className="dark:stop-color-gray-200" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.9)" className="dark:stop-color-gray-100" />
              </linearGradient>
              <linearGradient id="waveGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(243,244,246,0.9)" />
                <stop offset="50%" stopColor="rgba(229,231,235,0.7)" />
                <stop offset="100%" stopColor="rgba(243,244,246,0.9)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              className="dark:fill-gray-100"
            />
          </svg>
        </div>
      </div>

      {/* Professional scroll indicator */}
      <div className="hidden sm:block absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 dark:border-gray-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 dark:bg-gray-200/80 rounded-full mt-2" />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        /* Professional responsive text */}
        @media (max-width: 640px) {
          .text-responsive {
            font-size: clamp(1.75rem, 8vw, 2.25rem);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;