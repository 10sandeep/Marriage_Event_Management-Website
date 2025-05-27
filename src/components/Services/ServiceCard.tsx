import { Heart, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Services } from '../../types';

interface ServiceCardProps {
  services: Services;
}

const ServiceCard = ({ services }: ServiceCardProps) => {
  return (
    <div className="group relative font-inter">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      {/* Main card */}
      <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:scale-[1.01] group-hover:border-gray-300 dark:group-hover:border-gray-600">
        
        {/* Service Image */}
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img
            src={services.url}
            alt={services.heading}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Professional badge */}
          {services.id === '1' && (
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-md shadow-sm">
              Featured
            </div>
          )}
          
          {/* Favorite Button */}
          <button className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200/50 dark:border-gray-600/50">
            <Heart className="h-4 w-4 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-200" />
          </button>
        </div>

        {/* Service Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            {/* Professional title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 font-display">
              {services.heading}
            </h3>
            
            {/* Clean star rating */}
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          {/* Clean description */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm font-normal">
            {services.paragraph}
          </p>

          {/* Professional action buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
            <button className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors duration-200 group/learn">
              Learn More
              <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover/learn:translate-x-0.5" />
            </button>
            
            {/* Professional CTA button */}
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;