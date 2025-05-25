import { Heart, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Services } from '../../types';

interface ServiceCardProps {
  services: Services;
}

const ServiceCard = ({ services }: ServiceCardProps) => {
  return (
    <div className="group relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125"></div>
      
      {/* Main card */}
      <div className="relative bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-2xl shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 overflow-hidden group-hover:scale-[1.02] group-hover:border-rose-300/40">
        
        {/* Floating hearts animation */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <Heart className="h-4 w-4 text-rose-400 animate-pulse" />
        </div>
        
        {/* Sparkle effect */}
        <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 z-20">
          <Sparkles className="h-3 w-3 text-purple-400 animate-bounce" />
        </div>
        
        {/* Service Image */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img
            src={services.url}
            alt={services.heading}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          {/* Popular badge */}
          {services.id === '1' && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-rose-500 to-purple-600 text-white text-xs font-medium rounded-full shadow-lg backdrop-blur-sm">
              Popular
            </div>
          )}
          
          {/* Favorite Button */}
          <button className="absolute top-4 right-4 p-2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full shadow-md hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 border border-white/30">
            <Heart className="h-4 w-4 text-gray-600 dark:text-gray-400 hover:text-rose-500 transition-colors duration-300" />
          </button>
        </div>

        {/* Service Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            {/* Title with gradient text */}
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-rose-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
              {services.heading}
            </h3>
            
            {/* Star rating with modern styling */}
            <div className="flex items-center space-x-1">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
              </div>
            </div>
          </div>

          {/* Description with elegant styling */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-light group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
            {services.paragraph}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 dark:border-gray-700/30">
            <button className="flex items-center text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-medium transition-colors duration-300 group/learn">
              Learn More
              <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/learn:translate-x-1" />
            </button>
            
            {/* Futuristic CTA button */}
            <button className="group/btn relative overflow-hidden px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
              <span className="relative z-10 flex items-center">
                Get Quote
              </span>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-purple-500 blur-xl scale-110"></div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
            </button>
          </div>
        </div>
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ServiceCard;