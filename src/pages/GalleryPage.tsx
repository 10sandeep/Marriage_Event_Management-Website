import { useState, useEffect } from 'react';
import { Upload, Filter, Grid3X3, List, Search, Eye } from 'lucide-react';

// Mock data for demonstration
const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    title: 'Ceremony Moments',
    category: 'ceremony'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
    title: 'Reception Joy',
    category: 'reception'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
    title: 'Couple Portrait',
    category: 'portraits'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop',
    title: 'Wedding Details',
    category: 'details'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop',
    title: 'Dance Floor',
    category: 'reception'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
    title: 'Golden Hour',
    category: 'portraits'
  }
];

const ImageCard = ({ image, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(image)}
    >
      {/* Enhanced hover overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Image with smooth zoom effect */}
      <img 
        src={image.url} 
        alt={image.title}
        className="w-full h-80 object-cover transition-all duration-700 ease-out group-hover:scale-110"
      />
      
      {/* Title overlay with elegant animation */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
          <h3 className="text-white font-semibold text-xl tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {image.title}
          </h3>
          <div className="w-0 group-hover:w-16 h-0.5 bg-white/80 transition-all duration-700 delay-200 mt-2"></div>
        </div>
        
        {/* View button with smooth entrance */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300">
          <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <Eye className="h-4 w-4" />
            <span className="text-sm font-medium">View</span>
          </button>
        </div>
      </div>
      
      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-lg border-2 border-white/30 shadow-lg"></div>
      </div>
    </div>
  );
};

const ProfessionalGallery = () => {
  const [images, setImages] = useState(galleryImages);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = images;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(img => 
        img.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredImages(filtered);
  }, [images, selectedCategory, searchTerm]);

  const categories = ['all', 'ceremony', 'reception', 'portraits', 'details'];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-4 border-t-rose-500 rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Gallery</h2>
          <p className="text-gray-600">Preparing your memories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 sm:text-5xl">
            Digital Wedding
            <span className="text-rose-500"> Invitations</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our beautiful collection of digital invitation designs to share your special day with loved ones.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search memories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 shadow-sm"
              />
            </div>
          </div>

          {/* Category filters and view toggle */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm ${
                    selectedCategory === category
                      ? 'bg-rose-600 text-white shadow-md hover:bg-rose-700'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 bg-white rounded-lg p-1 border border-gray-300 shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-rose-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-rose-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
              
              <select className="bg-white border border-gray-300 rounded-lg text-gray-800 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors duration-300 shadow-sm">
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 lg:grid-cols-2'
          }`}>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
              >
                <ImageCard 
                  image={image} 
                  onClick={setSelectedImage}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="bg-white rounded-xl p-12 border border-gray-200 shadow-lg max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="h-10 w-10 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Gallery Awaits
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Start building your digital wedding album. Upload your first memories 
                and watch them come to life in our gallery.
              </p>
              <button className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center mx-auto hover:scale-105">
                <Upload className="h-5 w-5 mr-2" />
                Upload First Memory
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProfessionalGallery;