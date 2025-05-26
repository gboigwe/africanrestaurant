import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    // For now, we'll just simulate success
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D1D1D]">
            Contact <span className="text-[#FF6B35]">Us</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We'd love to hear from you! Reach out with any questions, feedback, or to make a reservation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#1D1D1D]">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1D1D1D] mb-1">Address</h3>
                  <p className="text-gray-600">123 Adewale Street, Victoria Island</p>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1D1D1D] mb-1">Phone</h3>
                  <p className="text-gray-600">+234 812 345 6789</p>
                  <p className="text-gray-600">+234 701 234 5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1D1D1D] mb-1">Email</h3>
                  <p className="text-gray-600">info@adunrestaurant.com</p>
                  <p className="text-gray-600">reservations@adunrestaurant.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1D1D1D] mb-1">Opening Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 11:00 - 22:00</p>
                  <p className="text-gray-600">Saturday: 11:00 - 23:00</p>
                  <p className="text-gray-600">Sunday: 12:00 - 22:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-[#1D1D1D] mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#1D1D1D] text-white p-2 rounded-full hover:bg-[#FF6B35] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#1D1D1D] text-white p-2 rounded-full hover:bg-[#FF6B35] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#1D1D1D] text-white p-2 rounded-full hover:bg-[#FF6B35] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#1D1D1D]">Send Us a Message</h2>
            
            {formStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                <p>Please fill in all required fields.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                >
                  <option value="">Select a subject</option>
                  <option value="Reservation">Reservation Inquiry</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Catering">Catering Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-[#FF6B35] hover:bg-[#E55A25] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#1D1D1D]">Find Us</h2>
          <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63427.97620249956!2d3.3795108!3d6.4550575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1643820294672!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;