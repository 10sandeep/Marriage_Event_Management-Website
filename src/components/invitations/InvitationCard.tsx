import { Eye, Heart } from 'lucide-react';
import { InvitationTemplate } from '../../types';
import { useState } from 'react';

interface InvitationCardProps {
  template: InvitationTemplate;
  onPreview: (template: InvitationTemplate) => void;
}

const InvitationCard = ({ template, onPreview }: InvitationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={template.imageUrl} 
          alt={template.name}
          className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-105"
        />
        
        <div 
          className={`absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 flex items-center justify-center ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => onPreview(template)}
            className="px-4 py-2 bg-white text-pink-600 rounded-md font-medium flex items-center shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </button>
        </div>
        
        <div className="absolute top-3 right-3">
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-full ${
              isFavorite 
                ? 'bg-pink-100 text-pink-600' 
                : 'bg-white/80 text-gray-500 hover:text-pink-500'
            } transition-colors duration-200`}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-pink-600' : ''}`} />
          </button>
        </div>
        
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
            {template.theme}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          {template.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {template.description}
        </p>
      </div>
    </div>
  );
};

export default InvitationCard;