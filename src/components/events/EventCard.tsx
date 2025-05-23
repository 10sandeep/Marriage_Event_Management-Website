import { MapPin, Clock, Calendar } from 'lucide-react';
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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {event.title}
        </h3>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{formatDate(event.date)}</span>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
          <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{event.time}</span>
        </div>
        
        <div className="flex items-start text-gray-600 dark:text-gray-400 mb-4">
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
          <span>{event.location}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {event.description}
        </p>
        
        {event.dressCode && (
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-1">
              Dress Code
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
              {event.dressCode}
            </span>
          </div>
        )}
        
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 bg-pink-100 text-pink-600 hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-200 dark:hover:bg-pink-800 rounded-md transition-colors duration-200">
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;