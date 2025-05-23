import { useState } from 'react';
import { GalleryImage } from '../../types';
import { X } from 'lucide-react';

interface ImageGridProps {
  images: GalleryImage[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div 
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image.url} 
              alt={image.caption || 'Wedding gallery image'}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              {image.caption && (
                <p className="text-white text-sm mb-1">{image.caption}</p>
              )}
              <p className="text-gray-300 text-xs">
                By {image.uploadedBy}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-200"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            className="max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption || 'Wedding gallery image'}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            
            <div className="bg-black/50 p-4 mt-2 rounded-lg">
              {selectedImage.caption && (
                <p className="text-white text-base mb-1">{selectedImage.caption}</p>
              )}
              <div className="flex justify-between items-center text-sm text-gray-300">
                <span>Uploaded by {selectedImage.uploadedBy}</span>
                <span>{formatDate(selectedImage.uploadedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;