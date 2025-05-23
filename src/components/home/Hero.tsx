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
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/40 to-rose-900/30 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
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
        
        {/* Enhanced overlay with glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full blur-sm" />
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
              className="absolute animate-bounce opacity-30"
              style={{
                left: `${20 + index * 30}%`,
                top: `${20 + index * 15}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}
            >
              <Icon className="h-8 w-8 text-pink-300" />
            </div>
          );
        })}
      </div>

      {/* Hero content - Improved spacing and responsive layout */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className={`text-center max-w-5xl mx-auto w-full transform transition-all duration-1500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          
          {/* Animated logo/icon - Smaller on mobile */}
          <div className="mb-4 sm:mb-6 lg:mb-8 inline-flex items-center justify-center relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
            <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-3 sm:p-4 lg:p-6 border border-white/20 group-hover:border-white/40 transition-all duration-500">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 text-white fill-pink-400 animate-pulse" />
            </div>
          </div>

          {/* Main heading with better mobile responsiveness */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8 transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
              Your Love Story
            </span>
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent mt-1 sm:mt-2">
              Deserves Magic
            </span>
          </h1>

          {/* Subtitle with improved mobile layout */}
          <div className={`mb-6 sm:mb-8 lg:mb-12 transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10" />
              <p className="relative text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white/90 max-w-4xl mx-auto py-3 sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-8 leading-relaxed">
                Create <span className="text-pink-300 font-semibold">stunning digital invitations</span>, 
                manage RSVPs effortlessly, and share your most precious moments with 
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-bold"> Eternal Moments</span>.
              </p>
            </div>
          </div>

          {/* Enhanced CTA buttons - Better mobile stacking */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Primary CTA */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 blur-lg opacity-70 group-hover:opacity-90 transition-all duration-300 animate-pulse" />
              <button className="relative w-full sm:w-auto bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg shadow-2xl border border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/25 group-hover:border-white/40">
                <span className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Secondary CTA */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300" />
              <button className="relative w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group-hover:border-white/40">
                <span className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-pink-400" />
                  <span>Explore Templates</span>
                </span>
              </button>
            </div>
          </div>

          {/* Stats or features - Improved mobile layout */}
          <div className={`flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 transform transition-all duration-1000 delay-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {[
              { number: '10K+', label: 'Happy Couples' },
              { number: '50K+', label: 'Invitations Sent' },
              { number: '99%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300" />
                  <div className="relative px-4 sm:px-6 py-3 sm:py-4">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 mt-1">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced decorative wave - Smaller on mobile */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 120" 
            className="text-white"
            style={{ height: '60px' }}
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="50%" stopColor="rgba(236,72,153,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </div>

      {/* Scroll indicator - Hide on mobile for better space */}
      <div className="hidden sm:block absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Custom CSS for better mobile performance */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        /* Ensure proper text sizing on mobile */
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