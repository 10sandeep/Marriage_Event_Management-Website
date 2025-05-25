import { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { services } from '../data/mockData';
import ServiceCard from '../components/Services/ServiceCard';

const ServicesPage = () => {
  const [availableServices, setAvailableServices] = useState(services);

  return (
    <div className="bg-pink-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white sm:text-5xl">
            Wedding <span className="text-pink-500">Services</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive range of professional services to make your special day absolutely perfect.
          </p>
        </div>

        <div className="mb-8 flex justify-end">
          <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center">
            <Star className="h-4 w-4 mr-2" />
            Request Quote
          </button>
        </div>

        {availableServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableServices.map((service) => (
              <ServiceCard key={service.id} services={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              No Services Available
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              We're currently updating our service offerings. Please check back soon for our amazing wedding services.
            </p>
            <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center mx-auto">
              <Star className="h-4 w-4 mr-2" />
              Contact Us
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;