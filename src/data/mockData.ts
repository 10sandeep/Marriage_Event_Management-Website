import { InvitationTemplate, Event, Guest, GiftItem, GalleryImage } from '../types';

// Mock invitation templates
export const invitationTemplates: InvitationTemplate[] = [
  {
    id: '1',
    name: 'Elegant Roses',
    theme: 'Traditional',
    imageUrl: 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg',
    description: 'A classic design with elegant rose motifs, perfect for traditional ceremonies.'
  },
  {
    id: '2',
    name: 'Modern Minimalist',
    theme: 'Minimal',
    imageUrl: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg',
    description: 'Clean lines and minimalist typography for the modern couple.'
  },
  {
    id: '3',
    name: 'Bohemian Garden',
    theme: 'Floral',
    imageUrl: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg',
    description: 'Lush floral patterns with a bohemian touch for a garden-inspired wedding.'
  },
  {
    id: '4',
    name: 'Royal Gold',
    theme: 'Royal',
    imageUrl: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg',
    description: 'Luxurious gold detailing for couples seeking a regal celebration.'
  },
  {
    id: '5',
    name: 'Rustic Charm',
    theme: 'Traditional',
    imageUrl: 'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg',
    description: 'Warm tones and rustic elements for a cozy, countryside wedding.'
  },
  {
    id: '6',
    name: 'Watercolor Dreams',
    theme: 'Floral',
    imageUrl: 'https://images.pexels.com/photos/1303078/pexels-photo-1303078.jpeg',
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