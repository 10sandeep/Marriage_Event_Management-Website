import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "Forever&After's AI completely revolutionized our wedding experience. The neural invitations adapted to each guest's preferences, and the predictive RSVP system was mind-blowing. Our celebration felt like it was orchestrated by the future itself.",
    author: "Sarah & Michael",
    location: "San Francisco, 2024",
    rating: 5,
    image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    accent: "purple"
  },
  {
    id: 2,
    content: "The immersive planning experience blew our minds. Real-time collaboration with our vendors, holographic venue previews, and instant customization made everything seamless. Our guests are still talking about the digital magic.",
    author: "Jessica & David",
    location: "New York, 2024",
    rating: 5,
    image: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    accent: "cyan"
  },
  {
    id: 3,
    content: "The neural gift curation was absolutely perfect! The AI understood our lifestyle better than we did. Every recommendation was spot-on, and the seamless integration with global vendors made gift-giving effortless for our loved ones.",
    author: "Emma & James",
    location: "London, 2024",
    rating: 5,
    image: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
    gradient: "from-emerald-600 via-teal-600 to-green-600",
    accent: "emerald"
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-purple-900/20 to-pink-900/20"></div>
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 text-sm font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
              ✨ Love Stories Powered by AI
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Couples Who Chose
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              The Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real experiences from couples who transformed their special day with next-generation wedding technology.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div 
            className="relative group cursor-pointer"
            onMouseMove={handleMouseMove}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-12 transition-all duration-1000 hover:scale-[1.02] hover:border-gray-500/50">
              {/* Dynamic spotlight effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                }}
              ></div>

              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-r ${testimonials[activeTestimonial].gradient} p-[1px]`}>
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl"></div>
              </div>

              <div className="relative z-10">
                {/* Quote mark */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${testimonials[activeTestimonial].gradient} mb-8`}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Content */}
                <blockquote className="text-2xl md:text-3xl text-gray-100 font-light leading-relaxed mb-10 italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].author}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${testimonials[activeTestimonial].gradient} rounded-full flex items-center justify-center`}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-white">
                        {testimonials[activeTestimonial].author}
                      </h4>
                      <p className="text-gray-400">
                        {testimonials[activeTestimonial].location}
                      </p>
                    </div>
                  </div>

                  {/* Rating stars */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-6 h-6 ${i < testimonials[activeTestimonial].rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${testimonials[activeTestimonial].gradient} rounded-full opacity-20 animate-ping`}
                      style={{
                        left: `${10 + (i * 12)}%`,
                        top: `${20 + (i * 8)}%`,
                        animationDelay: `${i * 500}ms`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                index === activeTestimonial 
                  ? 'w-12 h-12 border-2 border-white' 
                  : 'w-10 h-10 border border-gray-600 hover:border-gray-400'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
              {index === activeTestimonial && (
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-20`}></div>
              )}
            </button>
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-lg border border-gray-700/50 p-6 transition-all duration-700 hover:scale-105 hover:border-gray-500/50 cursor-pointer ${
                index === activeTestimonial ? 'ring-2 ring-purple-500/50' : ''
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              {/* Hover gradient border */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${testimonial.gradient} p-[1px]`}>
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg"></div>
              </div>

              <div className="relative z-10">
                {/* Mini quote */}
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r ${testimonial.gradient} mb-4`}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="text-white text-sm font-medium">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer">
            <span>Join These Happy Couples</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;