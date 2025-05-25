import { Heart, Star } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="bg-pink-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white sm:text-5xl">
            About <span className="text-pink-500">Us</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Creating magical moments and unforgettable celebrations
          </p>
        </div>

        {/* Main About Section - Left Image Right Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative h-96 lg:h-full overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 flex items-center justify-center transition-all duration-200 group-hover:from-pink-500 group-hover:to-pink-700">
                <div className="text-center text-white p-8 transform transition-transform duration-200 group-hover:scale-105">
                  <Heart className="h-20 w-20 mx-auto mb-4 opacity-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-110" />
                  <h3 className="text-2xl font-serif font-bold mb-2 transition-all duration-200 group-hover:text-pink-100">
                    Dream Events
                  </h3>
                  <p className="text-pink-100 transition-all duration-200 group-hover:text-white">
                    Where memories are made
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - About Us Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200 hover:text-pink-500">
                Creating Perfect Celebrations
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
                <p className="text-lg leading-relaxed">
                  Welcome to our world of extraordinary celebrations! We are passionate event planners 
                  dedicated to transforming your special occasions into unforgettable experiences that 
                  reflect your unique style and vision.
                </p>
                
                <p className="leading-relaxed">
                  Founded with a simple belief that every celebration deserves to be perfect, we bring 
                  creativity, attention to detail, and years of expertise to every event we touch. From 
                  intimate gatherings to grand weddings, we make your dreams come true.
                </p>
                
                <p className="leading-relaxed">
                  Our team of skilled professionals works tirelessly to ensure that your special day 
                  exceeds all expectations. We handle every detail, allowing you to focus on what 
                  matters most – celebrating with your loved ones.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center">
                  <Heart className="h-4 w-4 mr-2" />
                  Our Services
                </button>
                <button className="px-4 py-2 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-medium rounded-md transition-all duration-200 flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;