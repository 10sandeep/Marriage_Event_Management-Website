import { useState, useEffect } from 'react';
import { Upload, Filter, Grid3X3, List, Search, Heart, Share2, Download, Eye } from 'lucide-react';

// Mock data for demonstration
const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    title: 'Ceremony Moments',
    likes: 24,
    category: 'ceremony'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
    title: 'Reception Joy',
    likes: 18,
    category: 'reception'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
    title: 'Couple Portrait',
    likes: 35,
    category: 'portraits'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop',
    title: 'Wedding Details',
    likes: 12,
    category: 'details'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop',
    title: 'Dance Floor',
    likes: 28,
    category: 'reception'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
    title: 'Golden Hour',
    likes: 42,
    category: 'portraits'
  }
];

const ImageCard = ({ image, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl hover:shadow-pink-500/20 transition-all duration-700 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(image)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      <img 
        src={image.url} 
        alt={image.title}
        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Futuristic overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent opacity-0 transition-opacity duration-500 z-20 ${isHovered ? 'opacity-100' : ''}`} />
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold text-lg tracking-wide">{image.title}</h3>
          <div className="flex items-center space-x-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${isLiked ? 'bg-pink-500/80 text-white' : 'bg-white/20 text-white hover:bg-pink-500/60'}`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-white/80">
            <Heart className="h-4 w-4" />
            <span className="text-sm">{image.likes + (isLiked ? 1 : 0)}</span>
          </div>
          
          <div className={`flex items-center space-x-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all duration-300">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all duration-300">
              <Download className="h-4 w-4" />
            </button>
            <button className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all duration-300">
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Futuristic corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
    </div>
  );
};

const FuturisticGallery = () => {
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-pink-500/30 border-t-4 border-t-pink-500 rounded-full animate-spin mx-auto mb-8"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-cyan-500/30 border-b-4 border-b-cyan-500 rounded-full animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading Gallery</h2>
          <p className="text-gray-400">Preparing your memories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-pink-300 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 mt-10">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent sm:text-7xl tracking-tight">
              Digital Gallery
            </h1>
            <div className="h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mt-4 transform scale-x-0 animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience your wedding memories in stunning high-definition. Our AI-powered gallery 
            organizes and enhances every precious moment from your special day.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-12 space-y-6">
          {/* Search and Upload */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search memories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 flex items-center group">
              <Upload className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Upload Memories
            </button>
          </div>

          {/* Category filters and view toggle */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-pink-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-pink-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
              
              <select className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500/50">
                <option value="recent" className="bg-slate-800">Most Recent</option>
                <option value="popular" className="bg-slate-800">Most Popular</option>
                <option value="oldest" className="bg-slate-800">Oldest First</option>
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
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Upload className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Your Gallery Awaits
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Start building your digital wedding album. Upload your first memories 
                and watch them come to life in our immersive gallery experience.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 flex items-center mx-auto group">
                <Upload className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Upload First Memory
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors duration-300"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
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

export default FuturisticGallery;