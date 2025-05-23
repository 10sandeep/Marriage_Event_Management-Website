import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { InvitationTemplate } from '../types';
import { invitationTemplates } from '../data/mockData';
import InvitationCard from '../components/invitations/InvitationCard';
import PreviewModal from '../components/invitations/PreviewModal';

const InvitationsPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<InvitationTemplate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  
  const themes = ['All', 'Traditional', 'Minimal', 'Floral', 'Royal'];
  
  const openPreviewModal = (template: InvitationTemplate) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };
  
  const closePreviewModal = () => {
    setIsModalOpen(false);
  };
  
  const handleThemeFilter = (theme: string) => {
    setSelectedTheme(theme === 'All' ? '' : theme);
  };
  
  const filteredTemplates = invitationTemplates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTheme = selectedTheme === '' || template.theme === selectedTheme;
    return matchesSearch && matchesTheme;
  });

  return (
    <div className="bg-pink-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white sm:text-5xl">
            Digital Wedding <span className="text-pink-500">Invitations</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our beautiful collection of digital invitation designs to share your special day with loved ones.
          </p>
        </div>
        
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search invitations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 h-5 w-5" />
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Filter by:</span>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {themes.map((theme) => (
                  <button
                    key={theme}
                    onClick={() => handleThemeFilter(theme)}
                    className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                      (theme === 'All' && selectedTheme === '') || theme === selectedTheme
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <InvitationCard
                key={template.id}
                template={template}
                onPreview={openPreviewModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No matching invitations found. Try adjusting your filters.
            </p>
          </div>
        )}
        
        <PreviewModal
          template={selectedTemplate}
          isOpen={isModalOpen}
          onClose={closePreviewModal}
        />
      </div>
    </div>
  );
};

export default InvitationsPage;