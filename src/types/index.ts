export interface NavItem {
  title: string;
  href: string;
}

export interface InvitationTemplate {
  id: string;
  name: string;
  theme: 'Traditional' | 'Minimal' | 'Floral' | 'Royal';
  imageUrl: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  dressCode?: string;
}

export interface Guest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  attending: boolean;
  numberOfGuests: number;
  mealPreference?: string;
  message?: string;
}

export interface GiftItem {
  id: string;
  name: string;
  price: number;
  store: string;
  url: string;
  image: string;
  reserved: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
  uploadedBy: string;
  uploadedAt: Date;
}