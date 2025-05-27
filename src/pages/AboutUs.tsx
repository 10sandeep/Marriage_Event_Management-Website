import { useState } from 'react';
import { Heart, Star, Award, Users, Calendar } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Creating exceptional experiences and delivering professional event solutions for over a decade
          </p>
        </div>

        {/* Main About Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative h-96 lg:h-full overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-800">
                <div className="text-center text-white p-8 transform transition-transform duration-300 group-hover:scale-105">
                  <Award className="h-20 w-20 mx-auto mb-4 opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                  <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-100">
                    Excellence in Events
                  </h3>
                  <p className="text-blue-100 transition-all duration-300 group-hover:text-white">
                    Professional event management
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - About Us Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 transition-colors duration-300 hover:text-blue-600">
                Professional Event Management
              </h2>
              
              <div className="space-y-6 mb-8 text-gray-700">
                <p className="text-lg leading-relaxed">
                  We are a premier event management company specializing in corporate events, 
                  conferences, and professional celebrations. Our commitment to excellence and 
                  attention to detail sets us apart in the industry.
                </p>
                
                <p className="leading-relaxed">
                  With over 10 years of experience, our team has successfully managed hundreds 
                  of events, from intimate corporate gatherings to large-scale conferences. We 
                  understand the importance of flawless execution and professional presentation.
                </p>
                
                <p className="leading-relaxed">
                  Our comprehensive approach includes strategic planning, vendor management, 
                  logistics coordination, and on-site execution. We ensure every event reflects 
                  your brand's professionalism and achieves your business objectives.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Our Services
                </button>
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Contact Team
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600 font-medium">Events Managed</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50K+</h3>
            <p className="text-gray-600 font-medium">Happy Attendees</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            To deliver exceptional event experiences that exceed client expectations through innovative 
            planning, meticulous execution, and unwavering commitment to professional excellence. We 
            believe that every event is an opportunity to create lasting impressions and meaningful connections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;