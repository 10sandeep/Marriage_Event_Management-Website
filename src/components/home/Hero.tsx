import { useState, useEffect } from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const backgroundImages = [
  'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
  'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg',
  'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background images with transition */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      {/* Hero content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="animate-pulse mb-6 inline-flex items-center justify-center">
            <Heart className="h-10 w-10 text-pink-400 fill-pink-400" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Your Love Story Deserves <span className="text-pink-300">A Beautiful Beginning</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Create stunning digital invitations, manage RSVPs, and share your special moments with Forever&After.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/register"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <span>Plan Your Wedding</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a
              href="/invitations"
              className="w-full sm:w-auto px-8 py-4 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white border-opacity-30"
            >
              Explore Invitations
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="text-white dark:text-gray-900">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;