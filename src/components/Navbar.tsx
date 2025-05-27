import { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles, Calendar, Camera, LucideWrench } from 'lucide-react';

const navigationItems = [
  { title: 'Home', href: '#home', icon: Heart },
  { title: 'About Us', href: '#aboutus', icon: Heart },
  { title: 'Invitations', href: '#invitations', icon: Sparkles },
  // { title: 'Events', href: '#events', icon: Calendar },
  { title: 'Services', href: '#service', icon: LucideWrench },
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'backdrop-blur-xl shadow-lg bg-white/95' 
          : 'backdrop-blur-md bg-white/90'
      }`}>
        {/* Clean container with subtle border */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 via-white/50 to-slate-100/50" />
          <div className="absolute inset-[1px] backdrop-blur-xl bg-white/80 border-b border-slate-200/50" />
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              {/* Professional Logo */}
              <div className="flex items-center group cursor-pointer" onClick={() => handleNavClick('#home')}>
                <div className="relative">
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-300 bg-gradient-to-r from-slate-600 to-slate-700" />
                  <div className="relative rounded-full p-3 shadow-sm group-hover:shadow-md transition-all duration-300 bg-slate-50 border border-slate-200">
                    <Heart className="h-5 w-5 transition-all duration-300 group-hover:scale-105 text-slate-600 fill-slate-200" />
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-2xl font-semibold tracking-tight text-slate-800">
                    Eternal
                  </span>
                  <span className="text-2xl font-light ml-1 text-slate-600">
                    Moments
                  </span>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeHash === item.href;
                  
                  return (
                    <div key={item.title} className="relative group">
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`relative flex items-center space-x-2 px-5 py-2.5 rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'bg-slate-100 text-slate-800 shadow-sm border border-slate-200'
                            : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className={`h-4 w-4 transition-all duration-300 ${
                          isActive 
                            ? 'text-slate-700'
                            : 'text-slate-500 group-hover:text-slate-700'
                        }`} />
                        <span className="font-medium text-sm tracking-wide">{item.title}</span>
                      </button>
                    </div>
                  );
                })}
                
                {/* Professional CTA Button */}
                <div className="ml-8 relative group">
                  <button
                    onClick={() => handleNavClick('#login')}
                    className="relative px-6 py-2.5 rounded-lg font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] bg-slate-800 hover:bg-slate-900 text-white border border-slate-700"
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
                  className="relative p-2.5 rounded-lg transition-all duration-300 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transform transition-all duration-300 ease-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Professional backdrop */}
        <div 
          className="absolute inset-0 backdrop-blur-sm bg-slate-900/20"
          onClick={toggleMenu}
        />
        
        {/* Clean menu panel */}
        <div className={`absolute right-0 top-0 h-full w-80 transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="relative h-full">
            {/* Clean background */}
            <div className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 backdrop-blur-xl bg-white/95 border-l border-slate-200" />
            
            <div className="relative h-full flex flex-col">
              {/* Professional header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <span className="text-lg font-semibold tracking-wide text-slate-800">
                  Navigation
                </span>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg transition-colors duration-300 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-4">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeHash === item.href;
                  
                  return (
                    <div 
                      key={item.title}
                      className="px-4 mb-1"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 group ${
                          isActive
                            ? 'bg-slate-100 text-slate-800 border border-slate-200'
                            : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`p-2 rounded-md transition-all duration-300 ${
                          isActive 
                            ? 'bg-slate-200 text-slate-700'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700'
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-sm tracking-wide">{item.title}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
              
              {/* Professional CTA Button */}
              <div className="p-6 border-t border-slate-200">
                <div className="relative group">
                  <button
                    onClick={() => handleNavClick('#login')}
                    className="relative w-full py-3.5 rounded-lg font-medium shadow-sm transition-all duration-300 transform hover:scale-[1.02] bg-slate-800 hover:bg-slate-900 text-white border border-slate-700"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Sparkles className="h-4 w-4" />
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