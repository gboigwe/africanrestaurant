import React, { useEffect, useState } from 'react';
import { specialOffers } from '../data/specialOffers';

const SpecialOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specialOffers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#1D1D1D] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special <span className="text-[#FF6B35]">Offers</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Don't miss out on our limited-time deals and promotions.
          </p>
        </div>

        <div className="relative h-[400px] md:h-[500px]">
          {specialOffers.map((offer, index) => (
            <div
              key={offer.id}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : index < currentIndex
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`order-2 md:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{offer.title}</h3>
                  <p className="text-gray-300 mb-6">{offer.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-bold inline-block">
                      {offer.discount}
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm text-gray-300 mr-2">Valid until:</div>
                      <div className="font-medium">{offer.validUntil}</div>
                    </div>
                  </div>
                </div>
                <div className={`order-1 md:order-${index % 2 === 0 ? '2' : '1'}`}>
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-64 md:h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {specialOffers.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-[#FF6B35]' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;