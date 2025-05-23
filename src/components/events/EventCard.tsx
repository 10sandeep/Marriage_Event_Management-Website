import { MapPin, Clock, Calendar, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="group relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125"></div>
      
      {/* Main card */}
      <div className="relative bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-2xl shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 overflow-hidden group-hover:scale-[1.02] group-hover:border-rose-300/40">
        
        {/* Floating hearts animation */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Heart className="h-4 w-4 text-rose-400 animate-pulse" />
        </div>
        
        {/* Sparkle effect */}
        <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
          <Sparkles className="h-3 w-3 text-purple-400 animate-bounce" />
        </div>
        
        <div className="p-8">
          {/* Title with gradient text */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 group-hover:from-rose-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
            {event.title}
          </h3>
          
          {/* Event details with modern styling */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center text-gray-700 dark:text-gray-300 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-sm mr-4 group-hover:from-rose-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                <Calendar className="h-5 w-5" />
              </div>
              <span className="font-medium">{formatDate(event.date)}</span>
            </div>
            
            <div className="flex items-center text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm mr-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                <Clock className="h-5 w-5" />
              </div>
              <span className="font-medium">{event.time}</span>
            </div>
            
            <div className="flex items-start text-gray-700 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm mr-4 mt-0.5 group-hover:from-pink-500/30 group-hover:to-rose-500/30 transition-all duration-300">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="font-medium leading-relaxed">{event.location}</span>
            </div>
          </div>
          
          {/* Description with elegant styling */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-light group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
            {event.description}
          </p>
          
          {/* Dress code with modern pill design */}
          {event.dressCode && (
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-2">
                Dress Code
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-rose-500/10 to-purple-500/10 text-rose-700 dark:text-rose-300 border border-rose-200/30 dark:border-rose-700/30 backdrop-blur-sm">
                {event.dressCode}
              </span>
            </div>
          )}
          
          {/* Futuristic CTA button */}
          <div className="mt-8 flex justify-end">
            <button className="group/btn relative overflow-hidden px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
              <span className="relative z-10 flex items-center">
                Add to Calendar
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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

export default EventCard;