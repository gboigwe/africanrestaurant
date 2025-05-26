import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-[#FF6B35]" />
              <span className="text-2xl font-bold">Àdùn</span>
            </div>
            <p className="text-gray-300 mb-4">
              Experience authentic Yoruba cuisine in a modern setting. Our dishes are crafted with love and tradition.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FF6B35] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/reservation" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Reservation</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Open Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 - 22:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#FF6B35] mt-0.5" />
                <span>123 Adewale Street, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#FF6B35]" />
                <span>+234 812 345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#FF6B35]" />
                <span>info@adunrestaurant.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Àdùn Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;