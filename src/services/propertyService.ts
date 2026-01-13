import { api } from './api';

export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  type: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
  description?: string;
  features?: string[];
  images?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface PropertyFilters {
  type?: 'sale' | 'rent';
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  location?: string;
  page?: number;
  limit?: number;
}

export interface PropertyListResponse {
  properties: Property[];
  total: number;
  page: number;
  limit: number;
}

// Mock data for development
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Appartement de standing Ixelles',
    address: 'Avenue Louise, 1050 Ixelles',
    price: 450000,
    type: 'sale',
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    title: 'Maison avec jardin Uccle',
    address: 'Avenue Brugmann, 1180 Uccle',
    price: 875000,
    type: 'sale',
    bedrooms: 4,
    bathrooms: 2,
    area: 220,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '3',
    title: 'Studio moderne Saint-Gilles',
    address: 'Parvis de Saint-Gilles, 1060 Saint-Gilles',
    price: 850,
    type: 'rent',
    bedrooms: 1,
    bathrooms: 1,
    area: 35,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Loft industriel Bruxelles',
    address: 'Rue Dansaert, 1000 Bruxelles',
    price: 1800,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 1,
    area: 110,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '5',
    title: 'Penthouse vue panoramique',
    address: 'Tour du Midi, 1060 Saint-Gilles',
    price: 1250000,
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Appartement rénové Schaerbeek',
    address: 'Place Colignon, 1030 Schaerbeek',
    price: 295000,
    type: 'sale',
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop',
  },
];

export const propertyService = {
  async getProperties(filters?: PropertyFilters): Promise<PropertyListResponse> {
    // In production, this would call the API
    // return api.get<PropertyListResponse>('/properties', { params: filters });
    
    // Mock implementation for development
    let filtered = [...mockProperties];
    
    if (filters?.type) {
      filtered = filtered.filter(p => p.type === filters.type);
    }
    
    if (filters?.bedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= filters.bedrooms!);
    }
    
    if (filters?.minPrice) {
      filtered = filtered.filter(p => p.price >= filters.minPrice!);
    }
    
    if (filters?.maxPrice) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice!);
    }
    
    return {
      properties: filtered,
      total: filtered.length,
      page: filters?.page || 1,
      limit: filters?.limit || 10,
    };
  },

  async getPropertyById(id: string): Promise<Property | null> {
    // return api.get<Property>(`/properties/${id}`);
    return mockProperties.find(p => p.id === id) || null;
  },

  async getFeaturedProperties(): Promise<Property[]> {
    // return api.get<Property[]>('/properties/featured');
    return mockProperties.filter(p => p.featured);
  },
};
