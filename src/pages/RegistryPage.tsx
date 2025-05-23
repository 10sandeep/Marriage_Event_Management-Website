import { useState } from 'react';
import { Gift } from 'lucide-react';
import { giftItems } from '../data/mockData';
import { GiftItem } from '../types';
import GiftCard from '../components/registry/GiftCard';

const RegistryPage = () => {
  const [registry, setRegistry] = useState<GiftItem[]>(giftItems);
  
  const handleReserveGift = (id: string) => {
    setRegistry(registry.map(item => 
      item.id === id ? { ...item, reserved: true } : item
    ));
  };
  
  return (
    <div className="bg-pink-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white sm:text-5xl">
            Gift <span className="text-pink-500">Registry</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Help the couple celebrate their new journey with a meaningful gift from their wishlist.
          </p>
        </div>
        
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Gift className="h-5 w-5 text-pink-500 mr-2" />
              <span className="text-gray-900 dark:text-white font-medium">
                {registry.filter(item => !item.reserved).length} gifts available
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <a href="#" className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-200">
                Amazon
              </a>
              <a href="#" className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                Bed Bath & Beyond
              </a>
              <a href="#" className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200">
                Best Buy
              </a>
              <a href="#" className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200">
                More Stores
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {registry.map((gift) => (
            <GiftCard 
              key={gift.id} 
              gift={gift} 
              onReserve={handleReserveGift} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistryPage;