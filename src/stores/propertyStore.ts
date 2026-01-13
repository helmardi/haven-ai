import { create } from 'zustand';

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
}

interface PropertyFilters {
  type?: 'sale' | 'rent';
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  location?: string;
}

interface PropertyStore {
  properties: Property[];
  filters: PropertyFilters;
  isLoading: boolean;
  error: string | null;
  setProperties: (properties: Property[]) => void;
  setFilters: (filters: PropertyFilters) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearFilters: () => void;
}

export const usePropertyStore = create<PropertyStore>((set) => ({
  properties: [],
  filters: {},
  isLoading: false,
  error: null,
  setProperties: (properties) => set({ properties }),
  setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  clearFilters: () => set({ filters: {} }),
}));
