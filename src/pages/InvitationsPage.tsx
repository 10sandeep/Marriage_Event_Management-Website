import { useState } from 'react';
import { Filter, Search, Sparkles, Heart, Star } from 'lucide-react';
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
    <div className="min-h-screen bg-white">      
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-gray-900 sm:text-5xl mb-4 mt-12">
              Digital Wedding
              <span className="text-rose-500"> Invitations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our beautiful collection of digital invitation designs to share your special day with loved ones.
            </p>
          </div>
          
          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:border-gray-300">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-8">
                
                {/* Search Bar */}
                <div className="relative w-full max-w-md group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors duration-200 group-hover:text-rose-500" />
                  <input
                    type="text"
                    placeholder="Search invitations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 w-full bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                  />
                </div>
                
                {/* Theme Filters */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 transition-colors duration-200 hover:bg-gray-300">
                      <Filter className="text-gray-600 h-5 w-5" />
                    </div>
                    <span className="text-gray-700 font-medium">Filter:</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {themes.map((theme) => (
                      <button
                        key={theme}
                        onClick={() => handleThemeFilter(theme)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                          (theme === 'All' && selectedTheme === '') || theme === selectedTheme
                            ? 'bg-gray-900 text-white shadow-md hover:bg-gray-800'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm'
                        }`}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTemplates.map((template, index) => (
                <div
                  key={template.id}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <InvitationCard
                    template={template}
                    onPreview={openPreviewModal}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:bg-gray-100">
              <div className="mb-4">
                <Search className="w-16 h-16 text-gray-300 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                No matching invitations found
              </h3>
              <p className="text-gray-500 text-lg">
                Try adjusting your search terms or filters to discover more beautiful designs.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Preview Modal */}
      <PreviewModal
        template={selectedTemplate}
        isOpen={isModalOpen}
        onClose={closePreviewModal}
      />
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default InvitationsPage;