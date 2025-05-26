import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Quote } from 'lucide-react';
import FeaturedDish from '../components/FeaturedDish';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { featuredDishes } from '../data/dishes';
import SpecialOffers from '../components/SpecialOffers';

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="h-screen bg-cover bg-center flex items-center relative"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/5949900/pexels-photo-5949900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Experience Authentic <span className="text-[#FF6B35]">Yoruba Cuisine</span> Like Never Before
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Indulge in the rich flavors and traditions of Nigeria's Yoruba culture at Lagos's finest dining establishment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/menu" 
                className="bg-[#FF6B35] hover:bg-[#E55A25] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-lg"
              >
                Explore Menu
              </Link>
              <Link 
                to="/reservation" 
                className="bg-transparent hover:bg-white hover:text-[#1D1D1D] text-white border-2 border-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-lg"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Chef preparing traditional Yoruba dish"
                  className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#FF6B35] text-white p-6 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold">15+</p>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1D]">
                Welcome to <span className="text-[#FF6B35]">Àdùn</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Àdùn, meaning "delicious" in Yoruba, brings the authentic flavors and traditions of Yoruba cuisine to your table. Our restaurant celebrates the rich culinary heritage of Nigeria with a contemporary twist.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                Our expert chefs use traditional techniques and the freshest ingredients to create dishes that honor our ancestors while delighting modern palates. Each meal is a journey through the vibrant food culture of the Yoruba people.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-[#FF6B35] hover:text-[#E55A25] font-medium text-lg transition-colors"
              >
                Learn Our Story <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1D1D]">
              Our Signature <span className="text-[#FF6B35]">Dishes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our most beloved dishes that have been perfected over generations and served with pride.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <FeaturedDish key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="inline-flex items-center bg-[#1D1D1D] hover:bg-[#333333] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-lg"
            >
              View Full Menu <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <SpecialOffers />

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1D1D]">
              What Our <span className="text-[#FF6B35]">Guests</span> Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Hear from our satisfied guests about their dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1D1D]">
              A Glimpse of <span className="text-[#FF6B35]">Our Restaurant</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Take a visual journey through our inviting space and mouthwatering creations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img 
                src="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Traditional soup" 
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dining area" 
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8696567/pexels-photo-8696567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jollof rice" 
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Chef cooking" 
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Experience Authentic Yoruba Cuisine?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your table now and embark on a culinary journey through the rich flavors of Nigeria.
          </p>
          <Link 
            to="/reservation" 
            className="bg-[#FF6B35] hover:bg-[#E55A25] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-lg inline-block"
          >
            Reserve Your Table
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;