import { InvitationTemplate, Event, Guest, GiftItem, GalleryImage,Services } from '../types';
import MEDIA from '../assets/Media.jpg'
import LOCATION from '../assets/Location.jpg'
import SHOWS from '../assets/Shows.jpg'
import CATERING from '../assets/Catering.jpg'
import BUSINESS from '../assets/Business Gathering.jpg'
import FLORAL from '../assets/Floral Style.jpg'
import INVITATION1 from '../assets/Invitation 1.png'
import INVITATION2 from '../assets/Invitation 2.png'
import INVITATION3 from '../assets/Invitation 3.png'
import INVITATION4 from '../assets/Invitation 4.png'
import INVITATION5 from '../assets/Invitation 5.png'
import INVITATION6 from '../assets/Invitation 6.png'
import INVITATION7 from '../assets/Invitation 7.png'
import INVITATION8 from '../assets/Invitation 8.png'
// Mock invitation templates
export const invitationTemplates: InvitationTemplate[] = [
  {
    id: '1',
    name: 'Elegant Roses',
    theme: 'Traditional',
    imageUrl: INVITATION1,
    description: 'A classic design with elegant rose motifs, perfect for traditional ceremonies.'
  },
  {
    id: '2',
    name: 'Modern Minimalist',
    theme: 'Minimal',
    imageUrl: INVITATION2,
    description: 'Clean lines and minimalist typography for the modern couple.'
  },
  {
    id: '3',
    name: 'Bohemian Garden',
    theme: 'Floral',
    imageUrl: INVITATION3,
    description: 'Lush floral patterns with a bohemian touch for a garden-inspired wedding.'
  },
  {
    id: '4',
    name: 'Royal Gold',
    theme: 'Royal',
    imageUrl: INVITATION4,
    description: 'Luxurious gold detailing for couples seeking a regal celebration.'
  },
  {
    id: '5',
    name: 'Rustic Charm',
    theme: 'Traditional',
    imageUrl: INVITATION5,
    description: 'Warm tones and rustic elements for a cozy, countryside wedding.'
  },
  {
    id: '6',
    name: 'Watercolor Dreams',
    theme: 'Floral',
    imageUrl:INVITATION6,
    description: 'Soft watercolor florals for a romantic and dreamy atmosphere.'
  },
    {
    id: '7',
    name: 'Watercolor Dreams',
    theme: 'Floral',
    imageUrl:INVITATION7,
    description: 'Soft watercolor florals for a romantic and dreamy atmosphere.'
  },
    {
    id: '8',
    name: 'Watercolor Dreams',
    theme: 'Floral',
    imageUrl:INVITATION8,
    description: 'Soft watercolor florals for a romantic and dreamy atmosphere.'
  }
];

// Mock events
export const events: Event[] = [
  {
    id: '1',
    title: 'Engagement Party',
    date: new Date(2023, 11, 15),
    time: '6:00 PM - 9:00 PM',
    location: 'The Grand Hotel, 123 Main Street, Anytown',
    description: 'Join us to celebrate our engagement with cocktails and hors d\'oeuvres.',
    dressCode: 'Semi-Formal'
  },
  {
    id: '2',
    title: 'Mehndi Ceremony',
    date: new Date(2023, 11, 28),
    time: '4:00 PM - 8:00 PM',
    location: 'Family Residence, 456 Oak Lane, Anytown',
    description: 'A traditional Mehndi ceremony with music, food, and henna application.',
    dressCode: 'Traditional Attire'
  },
  {
    id: '3',
    title: 'Wedding Ceremony',
    date: new Date(2023, 11, 30),
    time: '2:00 PM - 3:30 PM',
    location: 'Riverside Chapel, 789 River Road, Anytown',
    description: 'The wedding ceremony where we will exchange vows and rings.',
    dressCode: 'Formal'
  },
  {
    id: '4',
    title: 'Reception',
    date: new Date(2023, 11, 30),
    time: '5:00 PM - 11:00 PM',
    location: 'Sunset Ballroom, 101 Plaza Avenue, Anytown',
    description: 'Dinner, dancing, and celebration following the wedding ceremony.',
    dressCode: 'Black Tie'
  }
];

// Mock guests
export const guests: Guest[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '555-123-4567',
    attending: true,
    numberOfGuests: 2,
    mealPreference: 'Vegetarian'
  },
  {
    id: '2',
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    phone: '555-987-6543',
    attending: true,
    numberOfGuests: 1,
    mealPreference: 'Gluten-Free'
  },
  {
    id: '3',
    name: 'Michael Williams',
    email: 'michael.williams@example.com',
    attending: false,
    numberOfGuests: 0
  }
];

// Mock gift registry items
export const giftItems: GiftItem[] = [
  {
    id: '1',
    name: 'KitchenAid Stand Mixer',
    price: 349.99,
    store: 'Amazon',
    url: 'https://www.amazon.com',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    reserved: false
  },
  {
    id: '2',
    name: 'Luxury Bedding Set',
    price: 199.99,
    store: 'Bed Bath & Beyond',
    url: 'https://www.bedbathandbeyond.com',
    image: 'https://images.pexels.com/photos/4992458/pexels-photo-4992458.jpeg',
    reserved: true
  },
  {
    id: '3',
    name: 'Smart Home Starter Kit',
    price: 279.99,
    store: 'Best Buy',
    url: 'https://www.bestbuy.com',
    image: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg',
    reserved: false
  },
  {
    id: '4',
    name: 'Weekend Getaway Experience',
    price: 499.99,
    store: 'Airbnb',
    url: 'https://www.airbnb.com',
    image: 'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg',
    reserved: false
  },
  {
    id: '5',
    name: 'Fine Dining Experience',
    price: 150.00,
    store: 'OpenTable',
    url: 'https://www.opentable.com',
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
    reserved: false
  },
  {
    id: '6',
    name: 'Cookware Set',
    price: 399.99,
    store: 'Williams Sonoma',
    url: 'https://www.williams-sonoma.com',
    image: 'https://images.pexels.com/photos/4227112/pexels-photo-4227112.jpeg',
    reserved: true
  }
];

// Mock gallery images
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
    caption: 'Our engagement day',
    uploadedBy: 'Sarah & Michael',
    uploadedAt: new Date(2023, 10, 15)
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    caption: 'Pre-wedding photoshoot',
    uploadedBy: 'Sarah & Michael',
    uploadedAt: new Date(2023, 10, 30)
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg',
    caption: 'The venue decoration',
    uploadedBy: 'Event Planner',
    uploadedAt: new Date(2023, 11, 28)
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
    caption: 'Bride getting ready',
    uploadedBy: 'Photographer',
    uploadedAt: new Date(2023, 11, 30)
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/1444441/pexels-photo-1444441.jpeg',
    caption: 'First dance',
    uploadedBy: 'Photographer',
    uploadedAt: new Date(2023, 11, 30)
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg',
    caption: 'Wedding cake',
    uploadedBy: 'Aunt Jane',
    uploadedAt: new Date(2023, 11, 30)
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/1247955/pexels-photo-1247955.jpeg',
    caption: 'Wedding rings',
    uploadedBy: 'Photographer',
    uploadedAt: new Date(2023, 11, 30)
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/3010753/pexels-photo-3010753.jpeg',
    caption: 'Reception dinner',
    uploadedBy: 'Uncle Bob',
    uploadedAt: new Date(2023, 11, 30)
  }
];

export const services: Services[] =[
  {
    id: '1',
    heading: 'Business Gatherings',
    url:BUSINESS,
    paragraph:
      'Business gatherings are key to fostering collaboration, sharing insights, and celebrating achievements. These events help strengthen professional bonds, inspire new ideas, and contribute to the success of a company’s vision.'
  },
  {
    id: '2',
    heading: 'Performers & Shows',
    url: SHOWS,
    paragraph:
      'Performers and artistic shows provide entertainment that connects emotionally with audiences. Their creativity brings energy and imagination to life, leaving lasting impressions and cultural impact.'
  },
  {
    id: '3',
    heading: 'Location & Venue Planning',
    url: LOCATION,
    paragraph:
      'Selecting the ideal location or venue is a cornerstone of effective event planning. It sets the scene, influences the mood, and ensures the overall success of events ranging from formal functions to casual gatherings.'
  },
  {
    id: '4',
    heading: 'Food Service & Culinary Design',
    url: CATERING,
    paragraph:
      'Great food service paired with a well-thought-out menu enhances the guest experience. Whether it’s a banquet or buffet, the right culinary choices elevate the occasion and cater to diverse tastes.'
  },
  {
    id: '5',
    heading: 'Floral Styling & Ambience',
    url: FLORAL,
    paragraph:
      'Floral styling adds beauty and sophistication to events. By blending color and fragrance, floral décor transforms spaces into inviting and elegant settings, perfect for celebrations or formal occasions.'
  },
  {
    id: '6',
    heading: 'Event Memories & Media',
    url: MEDIA,
    paragraph:
      'Capturing moments through photography and videography preserves memories for years to come. These creative services tell your event’s story and allow people to revisit the joy and significance long after it ends.'
  }
];
