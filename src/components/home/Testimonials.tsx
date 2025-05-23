const testimonials = [
  {
    id: 1,
    content: "Forever&After made our wedding planning so much easier! The digital invitations were gorgeous, and the RSVP system saved us so much time. Highly recommend!",
    author: "Sarah & Michael",
    image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
  },
  {
    id: 2,
    content: "We loved how easy it was to customize our invitations and track RSVPs. Our guests were impressed with how modern and beautiful everything looked!",
    author: "Jessica & David",
    image: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
  },
  {
    id: 3,
    content: "The gift registry feature was perfect! We got exactly what we wanted and our guests loved being able to choose gifts with just a few clicks.",
    author: "Emma & James",
    image: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white sm:text-4xl">
            Love Stories from <span className="text-pink-500">Happy Couples</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what other couples have to say about their experience with Forever&After.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-gray-900 dark:text-white font-medium">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;