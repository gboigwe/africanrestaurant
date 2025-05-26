import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-[#1D1D1D]">{testimonial.name}</h4>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < testimonial.rating ? "text-[#FF6B35] fill-[#FF6B35]" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial.comment}"</p>
      <p className="text-gray-500 text-sm mt-2">{testimonial.date}</p>
    </div>
  );
};

export default TestimonialCard;