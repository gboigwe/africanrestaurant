import React, { useState } from 'react';
import { Dish } from '../types';

interface FeaturedDishProps {
  dish: Dish;
}

const FeaturedDish: React.FC<FeaturedDishProps> = ({ dish }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        {dish.spicyLevel > 0 && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            {Array.from({ length: dish.spicyLevel }).map((_, i) => '🌶️').join('')}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#1D1D1D]">{dish.name}</h3>
          <span className="text-[#FF6B35] font-bold">₦{dish.price.toLocaleString()}</span>
        </div>
        <p className="text-gray-600 mb-4">{dish.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{dish.category}</span>
          <button 
            className="bg-[#1D1D1D] hover:bg-[#333333] text-white px-4 py-2 rounded text-sm transition-colors duration-300"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDish;