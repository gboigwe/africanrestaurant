export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spicyLevel: number; // 0-3, where 0 is not spicy and 3 is very spicy
  isVegetarian: boolean;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number; // 1-5
  date: string;
  avatar: string;
}

export interface SpecialOffer {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
}