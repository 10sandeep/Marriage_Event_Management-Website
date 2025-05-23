import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg')" }}
          >
            <div className="absolute inset-0 bg-pink-600 bg-opacity-80 dark:bg-opacity-90"></div>
          </div>
          
          {/* Content */}
          <div className="relative py-16 px-6 sm:py-24 sm:px-10 text-center">
            <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl max-w-3xl mx-auto">
              Begin Your Journey to a Beautiful Wedding Today
            </h2>
            <p className="mt-6 text-xl text-pink-100 max-w-2xl mx-auto">
              Join thousands of happy couples who've planned their perfect day with Forever&After.
            </p>
            
            <div className="mt-10">
              <a
                href="/register"
                className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started for Free</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;