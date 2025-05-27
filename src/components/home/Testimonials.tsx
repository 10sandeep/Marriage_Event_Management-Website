import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "The platform's AI-driven analytics and automated workflows have completely transformed our operational efficiency. The predictive capabilities and seamless integration exceeded our expectations, delivering measurable ROI within the first quarter.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechVision Solutions",
    location: "San Francisco, CA",
    rating: 5,
    image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
    accent: "blue"
  },
  {
    id: 2,
    content: "Implementation was seamless with exceptional support throughout. The real-time collaboration features and comprehensive reporting have enhanced our team's productivity by 40%. Outstanding platform for enterprise needs.",
    author: "Michael Rodriguez",
    role: "Director of Operations",
    company: "Global Dynamics Corp",
    location: "New York, NY",
    rating: 5,
    image: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
    accent: "indigo"
  },
  {
    id: 3,
    content: "The intelligent recommendation system and data-driven insights have revolutionized our decision-making process. The platform's scalability and security features make it perfect for our enterprise requirements.",
    author: "Emma Thompson",
    role: "VP of Digital Strategy",
    company: "Innovation Partners",
    location: "London, UK",
    rating: 5,
    image: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
    accent: "violet"
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const getAccentClasses = (accent) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        ring: 'ring-blue-200'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-600',
        ring: 'ring-indigo-200'
      },
      violet: {
        bg: 'bg-violet-50',
        border: 'border-violet-200',
        text: 'text-violet-600',
        ring: 'ring-violet-200'
      }
    };
    return colors[accent];
  };

  return (
    <section className="py-24 bg-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 text-sm font-medium border rounded-full shadow-sm text-gray-600 bg-gray-100 border-gray-200">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
            Discover how leading organizations achieve exceptional results with our enterprise platform.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="relative rounded-2xl border p-12 transition-all duration-500 hover:shadow-lg bg-gray-50 border-gray-200">
            <div className="relative z-10">
              {/* Quote mark */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-8 bg-gray-900">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Content */}
              <blockquote className="text-2xl md:text-3xl font-normal leading-relaxed mb-10 tracking-tight text-gray-900">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium tracking-tight text-gray-900">
                      {testimonials[activeTestimonial].author}
                    </h4>
                    <p className="font-normal text-gray-600">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-sm font-normal text-gray-500">
                      {testimonials[activeTestimonial].company} • {testimonials[activeTestimonial].location}
                    </p>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
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
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'w-12 h-12 border-2 ring-4 border-gray-900 ring-gray-200' 
                  : 'w-10 h-10 border-2 border-gray-300 hover:border-gray-400'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const colors = getAccentClasses(testimonial.accent);
            return (
              <div
                key={testimonial.id}
                className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-white border-gray-200 ${
                  index === activeTestimonial ? `${colors.ring} ring-2` : ''
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="relative z-10">
                  {/* Mini quote */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg mb-4 bg-gray-900">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  <blockquote className="text-sm leading-relaxed mb-6 line-clamp-4 font-normal text-gray-700">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                        <p className="text-xs font-normal text-gray-600">{testimonial.role}</p>
                        <p className="text-xs font-normal text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs font-normal text-gray-500">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="rounded-2xl border p-8 mb-16 bg-gray-50 border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-medium mb-2 tracking-tight text-gray-900">500+</div>
              <div className="text-sm font-normal text-gray-600">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-medium mb-2 tracking-tight text-gray-900">98%</div>
              <div className="text-sm font-normal text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-medium mb-2 tracking-tight text-gray-900">50M+</div>
              <div className="text-sm font-normal text-gray-600">Transactions Processed</div>
            </div>
            <div>
              <div className="text-3xl font-medium mb-2 tracking-tight text-gray-900">24/7</div>
              <div className="text-sm font-normal text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 font-medium rounded-lg transition-colors duration-200 shadow-sm bg-gray-900 text-white hover:bg-gray-800">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border font-medium rounded-lg transition-colors duration-200 border-gray-300 text-gray-700 hover:bg-gray-50">
              View Case Studies
            </button>
          </div>
          <p className="text-sm mt-4 font-normal text-gray-500">
            Trusted by Fortune 500 companies worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;