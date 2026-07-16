export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  category: string;
  gender?: string;
  sizes?: string[];
  conditions?: string[];
  isNew?: boolean;
}