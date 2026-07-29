export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  gender: string;
  sizes: string[];
  colors: ProductColor[];
  conditions?: string[];
  isNew?: boolean;
}

export interface FilterState {
  gender: 'MALE' | 'FEMALE' | null;
  sizes: string[];
  conditions: string[];
  categories: string[];
  sortBy: 'NEWEST' | 'OLDEST' | 'PRICE_LOW_HIGH' | 'PRICE_HIGH_LOW' | null;
}