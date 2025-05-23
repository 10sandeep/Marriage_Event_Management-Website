import { useState } from 'react';
import { Calendar, Plus } from 'lucide-react';
import { events } from '../data/mockData';
import EventCard from '../components/events/EventCard';

const EventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState(events);
  
  return (
    <div className="bg-pink-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white sm:text-5xl">
            Wedding <span className="text-pink-500">Events</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Manage all your wedding events in one place and help your guests stay informed.
          </p>
        </div>
        
        <div className="mb-8 flex justify-end">
          <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add New Event
          </button>
        </div>
        
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              No Events Added Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Start adding your wedding events to help guests plan their schedules.
            </p>
            <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center mx-auto">
              <Plus className="h-4 w-4 mr-2" />
              Add First Event
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;