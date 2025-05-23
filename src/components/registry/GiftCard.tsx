import { ShoppingBag, ExternalLink } from 'lucide-react';
import { GiftItem } from '../../types';
import { useState } from 'react';

interface GiftCardProps {
  gift: GiftItem;
  onReserve: (id: string) => void;
}

const GiftCard = ({ gift, onReserve }: GiftCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD' 
    }).format(price);
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
        gift.reserved ? 'opacity-75' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={gift.image} 
          alt={gift.name}
          className={`w-full h-48 object-cover transition-transform duration-500 ${
            isHovered ? 'transform scale-105' : ''
          }`}
        />
        
        {gift.reserved && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-pink-600 dark:text-pink-400 font-medium transform -rotate-12">
              Reserved
            </div>
          </div>
        )}
        
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            {gift.store}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
          {gift.name}
        </h3>
        
        <p className="text-pink-600 dark:text-pink-400 font-medium mb-4">
          {formatPrice(gift.price)}
        </p>
        
        <div className="flex justify-between items-center">
          {!gift.reserved ? (
            <button
              onClick={() => onReserve(gift.id)}
              className="px-4 py-2 bg-pink-100 text-pink-600 hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-200 dark:hover:bg-pink-800 rounded-md transition-colors duration-200 flex items-center"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Reserve Gift
            </button>
          ) : (
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Thank you!
            </span>
          )}
          
          <a
            href={gift.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;