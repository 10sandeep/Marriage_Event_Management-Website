import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-pink-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-pink-500 fill-pink-500" />
              <span className="text-xl font-serif font-medium text-gray-900">
                Forever<span className="text-pink-500">&</span>After
              </span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              Making wedding planning beautiful and stress-free, so you can focus on creating memories that last forever.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-pink-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
                    
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Features</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="/invitations" className="text-gray-600 hover:text-pink-500">Digital Invitations</a></li>
              <li><a href="/events" className="text-gray-600 hover:text-pink-500">Event Planning</a></li>
              <li><a href="/rsvp" className="text-gray-600 hover:text-pink-500">RSVP Management</a></li>
              <li><a href="/registry" className="text-gray-600 hover:text-pink-500">Gift Registry</a></li>
            </ul>
          </div>
                    
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Forever&After. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;