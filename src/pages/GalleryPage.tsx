import { useState } from 'react';
import { Upload, Filter } from 'lucide-react';
import { galleryImages } from '../data/mockData';
import ImageGrid from '../components/gallery/ImageGrid';

const GalleryPage = () => {
  const [images, setImages] = useState(galleryImages);
  
  return (
    <div className="bg-pink-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white sm:text-5xl">
            Wedding <span className="text-pink-500">Gallery</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Capture and share beautiful moments from your special day with friends and family.
          </p>
        </div>
        
        <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
          <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center">
            <Upload className="h-4 w-4 mr-2" />
            Upload Photos
          </button>
          
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-500 h-4 w-4" />
            <span className="text-gray-700 dark:text-gray-300 text-sm">Sort by:</span>
            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 text-sm py-1 px-3">
              <option>Most Recent</option>
              <option>Oldest First</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>
        
        {images.length > 0 ? (
          <ImageGrid images={images} />
        ) : (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              No Photos Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Start uploading photos to create your wedding gallery.
            </p>
            <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center mx-auto">
              <Upload className="h-4 w-4 mr-2" />
              Upload First Photo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;