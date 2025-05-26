import { Dish } from '../types';

export const categories = [
  'Main Dishes',
  'Soups & Stews',
  'Rice Dishes',
  'Appetizers',
  'Desserts',
  'Drinks'
];

export const featuredDishes: Dish[] = [
  {
    id: 1,
    name: 'Jollof Rice',
    description: 'Our signature spiced rice cooked in a rich tomato and pepper sauce, served with grilled chicken.',
    price: 3500,
    // image: 'https://images.pexels.com/photos/8696567/pexels-photo-8696567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Rice Dishes',
    spicyLevel: 2,
    isVegetarian: false,
    isFeatured: true
  },
  {
    id: 2,
    name: 'Efo Riro',
    description: 'A rich vegetable soup made with spinach, assorted meats, and traditional spices.',
    price: 4200,
    // image: 'https://images.pexels.com/photos/5737271/pexels-photo-5737271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://lowcarbafrica.com/wp-content/uploads/2019/08/Efo-Riro-1.jpg',
    category: 'Soups & Stews',
    spicyLevel: 2,
    isVegetarian: false,
    isFeatured: true
  },
  {
    id: 3,
    name: 'Pounded Yam with Egusi Soup',
    description: 'Smooth pounded yam served with melon seed soup, prepared with assorted meats and fish.',
    price: 4500,
    image: 'https://allnigerianfoods.com/wp-content/uploads/egusi_soup-1.jpg',
    category: 'Main Dishes',
    spicyLevel: 2,
    isVegetarian: false,
    isFeatured: true
  }
];

export const menuItems: Dish[] = [
  ...featuredDishes,
  {
    id: 4,
    name: 'Asun',
    description: 'Spicy grilled goat meat peppered with habanero and spices, a delightful appetizer.',
    price: 3800,
    image: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Appetizers',
    spicyLevel: 3,
    isVegetarian: false,
    isFeatured: false
  },
  {
    id: 5,
    name: 'Moin Moin',
    description: 'Steamed bean pudding with boiled eggs, fish, and spices wrapped in banana leaves.',
    price: 2500,
    // image: 'https://images.pexels.com/photos/5737276/pexels-photo-5737276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://images.squarespace-cdn.com/content/v1/5f61fdbf6089cf5861823eb9/1611349931599-3T2LJVRJ0VGDTV6SH1SV/DSC_0797.jpg',
    category: 'Appetizers',
    spicyLevel: 1,
    isVegetarian: false,
    isFeatured: false
  },
  {
    id: 6,
    name: 'Amala with Ewedu & Gbegiri',
    description: 'Smooth yam flour swallow served with jute leaf soup and bean soup, a true Yoruba delicacy.',
    price: 4000,
    // image: 'https://images.pexels.com/photos/18913932/pexels-photo-18913932/free-photo-of-beans-soup-and-potato-puree-dumplings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://www.shopbee.com.my/storage/app/public/product/2023-11-09-654ce6cfdc356.png',
    category: 'Main Dishes',
    spicyLevel: 2,
    isVegetarian: false,
    isFeatured: false
  },
  {
    id: 7,
    name: 'Ofada Rice with Ayamase Sauce',
    description: 'Local brown rice served with spicy green pepper sauce and assorted meats.',
    price: 4200,
    image: 'https://images.pexels.com/photos/7426867/pexels-photo-7426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Rice Dishes',
    spicyLevel: 3,
    isVegetarian: false,
    isFeatured: false
  },
  {
    id: 8,
    name: 'Akara & Pap',
    description: 'Fried bean cakes served with sweet corn porridge, a traditional breakfast combo.',
    price: 2000,
    // image: 'https://images.pexels.com/photos/5634350/pexels-photo-5634350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://deychop.com/wp-content/uploads/2024/04/Akara-And-Pap-Pinterest.jpg',
    category: 'Appetizers',
    spicyLevel: 0,
    isVegetarian: true,
    isFeatured: false
  },
  {
    id: 9,
    name: 'Ewa Agoyin',
    description: 'Mashed beans served with spicy pepper sauce, a Lagos street food favorite.',
    price: 2800,
    // image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://usercontent.one/wp/yorubalessons.com/wp-content/uploads/2023/06/ewaagoyinmashedbeans.jpg?media=1727444637',
    category: 'Main Dishes',
    spicyLevel: 3,
    isVegetarian: true,
    isFeatured: false
  },
  {
    id: 10,
    name: 'Dodo & Fish Stew',
    description: 'Fried plantains served with fish stew made with mackerel, tomatoes, and peppers.',
    price: 3500,
    // image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://media.istockphoto.com/id/1227379020/photo/fried-ripe-plantains.jpg?s=2048x2048&w=is&k=20&c=G0PAamMh5IGHXJCMm9WOtev_OwZqX-QONl0i9jS7ANI=',
    category: 'Main Dishes',
    spicyLevel: 2,
    isVegetarian: false,
    isFeatured: false
  },
  {
    id: 11,
    name: 'Boli & Groundnut',
    description: 'Roasted plantains served with spiced peanuts, a simple but delicious snack.',
    price: 1500,
    // image: 'https://images.pexels.com/photos/4020635/pexels-photo-4020635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://rexclarkeadventures.com/wp-content/uploads/2024/09/EMPwUpPWoAEdtBv.jpg',
    category: 'Appetizers',
    spicyLevel: 0,
    isVegetarian: true,
    isFeatured: false
  },
  {
    id: 12,
    name: 'Pepper Soup',
    description: 'Spicy broth with goat meat, fish, or chicken, infused with traditional herbs and spices.',
    price: 3200,
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Soups & Stews',
    spicyLevel: 3,
    isVegetarian: false,
    isFeatured: false
  },
  {
    id: 13,
    name: 'Puff Puff',
    description: 'Sweet, deep-fried dough balls, a popular Nigerian snack.',
    price: 1200,
    // image: 'https://images.pexels.com/photos/5591664/pexels-photo-5591664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://simshomekitchen.com/wp-content/uploads/2023/01/puffpuff-nigerian.jpg',
    category: 'Desserts',
    spicyLevel: 0,
    isVegetarian: true,
    isFeatured: false
  },
  {
    id: 14,
    name: 'Zobo Drink',
    description: 'Refreshing hibiscus tea infused with pineapple, ginger, and aromatic spices.',
    price: 1000,
    // image: 'https://images.pexels.com/photos/5947026/pexels-photo-5947026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://www.bellanaija.com/wp-content/uploads/2025/01/maxresdefault-6-1-e1736885038923.jpg',
    category: 'Drinks',
    spicyLevel: 0,
    isVegetarian: true,
    isFeatured: false
  },
  {
    id: 15,
    name: 'Chapman',
    description: 'A refreshing Nigerian cocktail made with Fanta, Sprite, grenadine, and cucumber.',
    price: 1500,
    // image: 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image: 'https://allnigerianfoods.com/wp-content/uploads/2015/03/chapman-drink1.jpg',
    category: 'Drinks',
    spicyLevel: 0,
    isVegetarian: true,
    isFeatured: false
  }
];
