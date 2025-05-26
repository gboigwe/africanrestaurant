import React, { useState } from 'react';
import { menuItems, categories } from '../data/dishes';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D1D1D]">
            Our <span className="text-[#FF6B35]">Menu</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our diverse selection of authentic Yoruba dishes, prepared with traditional recipes and the freshest ingredients.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="relative w-full md:w-64 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search menu..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-white text-[#1D1D1D] hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeCategory === category
                      ? 'bg-[#FF6B35] text-white'
                      : 'bg-white text-[#1D1D1D] hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.spicyLevel > 0 && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {Array.from({ length: item.spicyLevel }).map((_, i) => '🌶️').join('')}
                  </div>
                )}
                {item.isVegetarian && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Vegetarian
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#1D1D1D]">{item.name}</h3>
                  <span className="text-[#FF6B35] font-bold">₦{item.price.toLocaleString()}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.category}</span>
                  <button className="bg-[#1D1D1D] hover:bg-[#333333] text-white px-4 py-2 rounded text-sm transition-colors duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-600">No menu items found matching your criteria.</p>
            <button
              className="mt-4 bg-[#FF6B35] text-white px-6 py-2 rounded-lg"
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;