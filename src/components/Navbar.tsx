import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NavItem } from '../types';

const navigationItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'Invitations', href: '#invitations' },
  { title: 'Events', href: '#events' },
  { title: 'RSVP', href: '#rsvp' },
  { title: 'Registry', href: '#registry' },
  { title: 'Gallery', href: '#gallery' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    window.location.hash = href.replace('#', '');
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-pink-100 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#home" 
              className="flex items-center space-x-2 group"
              onClick={() => handleNavClick('#home')}
            >
              <Heart className="h-8 w-8 text-pink-500 fill-pink-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl font-serif font-medium text-gray-900 dark:text-white">
                Forever<span className="text-pink-500">&</span>After
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                    activeHash === item.href
                      ? 'text-pink-500 dark:text-pink-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400'
                  }`}
                >
                  {item.title}
                  {activeHash === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 dark:bg-pink-400 rounded-full transform origin-left transition-transform duration-200" />
                  )}
                </a>
              ))}
              <a
                href="#login"
                onClick={() => handleNavClick('#login')}
                className="text-white bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Sign In
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu} />
        <div className="absolute right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <span className="font-serif text-lg text-gray-900 dark:text-white">Menu</span>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block px-6 py-3 text-base font-medium transition-colors duration-200 ${
                    activeHash === item.href
                      ? 'text-pink-500 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="p-4 border-t dark:border-gray-700">
              <a
                href="#login"
                onClick={() => handleNavClick('#login')}
                className="block w-full text-center text-white bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;