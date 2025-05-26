import React from 'react';
import { ChefHat, Users, Award, Coffee } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D1D1D]">
            About <span className="text-[#FF6B35]">Àdùn</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our story, our passion, and our commitment to authentic Yoruba cuisine
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#1D1D1D]">Our Story</h2>
            <p className="text-gray-700 mb-4 text-lg">
              Founded in 2010 by Chef Adebayo Ogunlesi, Àdùn was born from a desire to share the rich culinary heritage of Nigeria's Yoruba culture with the world. Growing up in a traditional Yoruba household in Lagos, Chef Adebayo learned the secrets of authentic cooking from his grandmother.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              After studying culinary arts in London and working in prestigious restaurants across Europe, Chef Adebayo returned to Nigeria with a vision: to create a dining experience that honors Yoruba traditions while embracing modern culinary techniques.
            </p>
            <p className="text-gray-700 text-lg">
              The name "Àdùn" – meaning "delicious" or "sweet" in Yoruba – represents our commitment to creating memorable flavors that delight the senses and warm the soul.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/28074289/pexels-photo-28074289/free-photo-of-african.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Chef preparing food"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#FF6B35] text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">2010</p>
              <p>Year Established</p>
            </div>
          </div>
        </div>

        {/* Our Mission and Values */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1D1D1D]">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Àdùn, we're guided by a set of core principles that define everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8F5F0] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#1D1D1D]">Our Mission</h3>
              <p className="text-gray-700">
                To preserve and celebrate Yoruba culinary traditions while creating exceptional dining experiences that nourish both body and spirit. We aim to be ambassadors of Nigerian cuisine, introducing its rich flavors to new audiences while honoring its cultural significance.
              </p>
            </div>
            <div className="bg-[#F8F5F0] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#1D1D1D]">Our Vision</h3>
              <p className="text-gray-700">
                To be recognized globally as the premier destination for authentic Yoruba cuisine, setting the standard for African dining experiences worldwide. We envision a world where Nigerian cuisine takes its rightful place among the great culinary traditions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="text-center p-6">
              <div className="bg-[#FF6B35] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat size={32} />
              </div>
              <h4 className="font-bold mb-2">Authenticity</h4>
              <p className="text-gray-600">We honor traditional recipes and techniques passed down through generations.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#FF6B35] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee size={32} />
              </div>
              <h4 className="font-bold mb-2">Quality</h4>
              <p className="text-gray-600">We use only the freshest, highest-quality ingredients sourced from local farmers.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#FF6B35] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h4 className="font-bold mb-2">Community</h4>
              <p className="text-gray-600">We create spaces where people can connect through shared culinary experiences.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#FF6B35] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h4 className="font-bold mb-2">Excellence</h4>
              <p className="text-gray-600">We strive for perfection in every dish and every aspect of service.</p>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1D1D1D]">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The talented individuals who bring our vision to life every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/28074289/pexels-photo-28074289/free-photo-of-african.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chef Adebayo Ogunlesi"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[#1D1D1D]">Adebayo Ogunlesi</h3>
                <p className="text-[#FF6B35] font-medium mb-3">Founder & Executive Chef</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of culinary experience, Chef Adebayo brings his grandmother's recipes to life with a modern twist.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/30255515/pexels-photo-30255515/free-photo-of-portrait-of-an-african-woman-chef-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Folake Adeyemi"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[#1D1D1D]">Folake Adeyemi</h3>
                <p className="text-[#FF6B35] font-medium mb-3">Head Chef</p>
                <p className="text-gray-600 text-sm">
                  Specializing in traditional stews and soups, Folake's passion for Yoruba cuisine is evident in every dish she creates.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/27781457/pexels-photo-27781457/free-photo-of-a-woman-in-an-apron-holding-a-spatula-and-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Oluwaseun Adeleke"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[#1D1D1D]">Oluwaseun Adeleke</h3>
                <p className="text-[#FF6B35] font-medium mb-3">Pastry Chef</p>
                <p className="text-gray-600 text-sm">
                  Bringing a fusion of Nigerian and European techniques to our desserts, Oluwaseun creates sweet masterpieces.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img
                src="https://images.pexels.com/photos/12020465/pexels-photo-12020465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Tunde Johnson"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[#1D1D1D]">Tunde Johnson</h3>
                <p className="text-[#FF6B35] font-medium mb-3">Restaurant Manager</p>
                <p className="text-gray-600 text-sm">
                  With his warm personality and attention to detail, Tunde ensures every guest feels welcome and well-cared for.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-[#1D1D1D] text-white rounded-lg shadow-lg p-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Recognition of our commitment to excellence and authentic Yoruba cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Best African Restaurant</h3>
                <p className="text-gray-300 mb-1">Lagos Food & Wine Festival</p>
                <p className="text-sm text-gray-400">2022, 2023</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Chef of the Year</h3>
                <p className="text-gray-300 mb-1">Nigerian Culinary Association</p>
                <p className="text-sm text-gray-400">2021</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Excellence in Cultural Cuisine</h3>
                <p className="text-gray-300 mb-1">African Food Awards</p>
                <p className="text-sm text-gray-400">2020, 2022</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Top 10 Restaurants in Lagos</h3>
                <p className="text-gray-300 mb-1">TripAdvisor</p>
                <p className="text-sm text-gray-400">2019-2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;