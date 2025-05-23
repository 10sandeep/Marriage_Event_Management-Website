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
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-rose-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-2xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section with futuristic styling */}
          <div className="text-center mb-16 relative">
            {/* Floating decorative elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8 opacity-60">
                <Heart className="w-6 h-6 text-rose-400 animate-pulse" />
                <Sparkles className="w-5 h-5 text-purple-400 animate-bounce delay-300" />
                <Star className="w-4 h-4 text-pink-400 animate-pulse delay-700" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight mt-10">
              <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Digital Wedding
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Invitations
              </span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Choose from our <span className="font-semibold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">beautiful collection</span> of digital invitation designs to share your special day with loved ones.
            </p>
          </div>
          
          {/* Search and Filter Section with glassmorphism */}
          <div className="mb-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            <div className="relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-2xl p-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-8">
                
                {/* Search Bar */}
                <div className="relative w-full max-w-md group/search">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover/search:opacity-100 transition-all duration-300"></div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover/search:text-rose-500 h-5 w-5 transition-colors duration-300" />
                    <input
                      type="text"
                      placeholder="Search magical invitations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 pr-4 py-4 w-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/20 rounded-xl focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500/50 dark:text-white placeholder-gray-500 transition-all duration-300 focus:bg-white/70 dark:focus:bg-gray-800/70"
                    />
                  </div>
                </div>
                
                {/* Theme Filters */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                      <Filter className="text-purple-600 dark:text-purple-400 h-5 w-5" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">Filter by theme:</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {themes.map((theme, index) => (
                      <button
                        key={theme}
                        onClick={() => handleThemeFilter(theme)}
                        className={`group/filter relative overflow-hidden px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                          (theme === 'All' && selectedTheme === '') || theme === selectedTheme
                            ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg shadow-rose-500/25'
                            : 'bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-600/50 border border-white/20 dark:border-gray-600/20'
                        }`}
                      >
                        <span className="relative z-10">{theme}</span>
                        
                        {/* Shimmer effect for active button */}
                        {((theme === 'All' && selectedTheme === '') || theme === selectedTheme) && (
                          <div className="absolute inset-0 -translate-x-full group-hover/filter:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTemplates.map((template, index) => (
                <div
                  key={template.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <InvitationCard
                    template={template}
                    onPreview={openPreviewModal}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative text-center py-16 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-xl">
                <div className="mb-4">
                  <Search className="w-16 h-16 text-gray-400 mx-auto opacity-50" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  No matching invitations found
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  Try adjusting your search terms or filters to discover more beautiful designs.
                </p>
              </div>
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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default InvitationsPage;