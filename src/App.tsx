import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import InvitationsPage from './pages/InvitationsPage';
import EventsPage from './pages/EventsPage';
import RsvpPage from './pages/RsvpPage';
import RegistryPage from './pages/RegistryPage';
import GalleryPage from './pages/GalleryPage';
import AuthPage from './pages/AuthPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      
      // Smooth scroll to top on page change
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const renderPage = () => {
    switch (currentPage) {
      case 'invitations':
        return <InvitationsPage />;
      case 'events':
        return <EventsPage />;
      case 'rsvp':
        return <RsvpPage />;
      case 'registry':
        return <RegistryPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'login':
        return <AuthPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      <div className="page-transition">
        {renderPage()}
      </div>
    </Layout>
  );
}

export default App;