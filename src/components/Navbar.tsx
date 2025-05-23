import { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles, Calendar, Camera } from 'lucide-react';

const navigationItems = [
  { title: 'Home', href: '#home', icon: Heart },
  { title: 'Invitations', href: '#invitations', icon: Sparkles },
  { title: 'Events', href: '#events', icon: Calendar },
  { title: 'RSVP', href: '#rsvp', icon: Heart },
  { title: 'Gallery', href: '#gallery', icon: Camera },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleHashChange = () => setActiveHash(window.location.hash || '#home');

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    setActiveHash(href);
    window.location.hash = href.replace('#', '');
  };

  return (
    <>
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-rose-900/20 pointer-events-none" />
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'backdrop-blur-xl bg-black/10' : 'backdrop-blur-md bg-white/5'
      }`}>
        {/* Glassmorphism container */}
        <div className="relative">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-rose-500/20 blur-sm" />
          <div className="absolute inset-[1px] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20" />
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center group cursor-pointer" onClick={() => handleNavClick('#home')}>
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                    <Heart className="h-6 w-6 text-white fill-pink-400 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                    Eternal
                  </span>
                  <span className="text-2xl font-light bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent ml-1">
                    Moments
                  </span>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeHash === item.href;
                  
                  return (
                    <div key={item.title} className="relative group">
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`relative flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-white/20 backdrop-blur-sm border border-white/30 text-white shadow-lg'
                            : 'text-white/80 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                        }`}
                      >
                        <Icon className={`h-4 w-4 transition-all duration-300 ${
                          isActive ? 'text-pink-400' : 'text-white/60 group-hover:text-pink-400'
                        }`} />
                        <span className="font-medium text-sm">{item.title}</span>
                        
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-sm" />
                        )}
                      </button>
                    </div>
                  );
                })}
                
                {/* CTA Button */}
                <div className="ml-8 relative group">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    onClick={() => handleNavClick('#login')}
                    className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20"
                  >
                    <span className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4" />
                      <span>Get Started</span>
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transform transition-all duration-500 ease-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={toggleMenu}
        />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 transform transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="relative h-full">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-rose-900/40" />
            <div className="absolute inset-0 backdrop-blur-xl bg-black/20" />
            
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  Menu
                </span>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-6">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeHash === item.href;
                  
                  return (
                    <div 
                      key={item.title}
                      className="px-6 mb-2"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                          isActive
                            ? 'bg-white/20 backdrop-blur-sm border border-white/30 text-white'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <div className={`p-2 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-pink-500/20 text-pink-400' 
                            : 'bg-white/10 text-white/60 group-hover:bg-pink-500/20 group-hover:text-pink-400'
                        }`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium">{item.title}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
              
              {/* CTA Button */}
              <div className="p-6 border-t border-white/10">
                <div className="relative group">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 blur-md opacity-75" />
                  <button
                    onClick={() => handleNavClick('#login')}
                    className="relative w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold shadow-xl border border-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Sparkles className="h-5 w-5" />
                      <span>Get Started</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;