import { SpecialOffer } from '../types';

export const specialOffers: SpecialOffer[] = [
  {
    id: 1,
    title: 'Family Feast Sundays',
    description: 'Bring the whole family for our special Sunday feast. Enjoy a selection of our most popular dishes served family-style, perfect for sharing.',
    discount: '20% Off for 4+ people',
    validUntil: 'Every Sunday',
    image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Weekday Lunch Special',
    description: 'Take a break from your busy day with our express lunch menu. Quick service without compromising on flavor or quality.',
    discount: '15% Off all lunch mains',
    validUntil: 'Monday-Friday, 12-3pm',
    image: 'https://images.pexels.com/photos/5836647/pexels-photo-5836647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Happy Hour Appetizers',
    description: 'Start your evening right with our selection of traditional Yoruba appetizers paired with our signature cocktails.',
    discount: 'Buy 1 Get 1 Free on selected items',
    validUntil: 'Daily, 5-7pm',
    image: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];