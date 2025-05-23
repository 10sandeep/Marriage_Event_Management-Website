import { Calendar, Mail, Gift, Camera } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Mail,
    title: 'Digital Invitations',
    description: 'Create beautiful, customizable digital invitations that reflect your unique love story and wedding theme.'
  },
  {
    id: 2,
    icon: Calendar,
    title: 'Event Planning',
    description: 'Organize all your wedding events in one place. Add locations, times, and special notes for your guests.'
  },
  {
    id: 3,
    icon: Gift,
    title: 'Gift Registry',
    description: 'Create your dream registry with items from your favorite stores. Let guests know exactly what you need.'
  },
  {
    id: 4,
    icon: Camera,
    title: 'Photo Gallery',
    description: 'Share your special moments with friends and family. Allow guests to upload their own photos too.'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need for Your <span className="text-pink-500">Perfect Day</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Simplify your wedding planning journey with our comprehensive suite of tools designed to make your special day unforgettable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-pink-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-pink-100 dark:bg-pink-900 rounded-lg mb-5">
                <feature.icon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;