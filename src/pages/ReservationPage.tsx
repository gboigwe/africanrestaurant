import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, ChevronRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
  createdAt: string;
}

const ReservationPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reservationComplete, setReservationComplete] = useState(false);
  const [reservationId, setReservationId] = useState<string | null>(null);
  
  const availableTimes = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', 
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00'
  ];

  useEffect(() => {
    // Set minimum date to today
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    
    const todayString = `${yyyy}-${mm}-${dd}`;
    
    const dateInput = document.getElementById('date') as HTMLInputElement;
    if (dateInput) {
      dateInput.min = todayString;
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is updated
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep1 = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.date) {
      errors.date = "Please select a date";
    }
    
    if (!formData.time) {
      errors.time = "Please select a time";
    }
    
    if (!formData.guests || formData.guests < 1) {
      errors.guests = "Please select at least 1 guest";
    }
    
    return errors;
  };

  const validateStep2 = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    
    return errors;
  };

  const nextStep = () => {
    const errors = validateStep1();
    
    if (Object.keys(errors).length === 0) {
      setStep(2);
      window.scrollTo(0, 0);
    } else {
      setFormErrors(errors);
    }
  };

  const prevStep = () => {
    setStep(1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateStep2();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call to save reservation
      setTimeout(() => {
        // Generate reservation ID
        const reservationId = `RES-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
        
        // Create reservation object
        const newReservation: Reservation = {
          id: reservationId,
          ...formData,
          createdAt: new Date().toISOString()
        };
        
        // Save to localStorage
        const existingReservations = localStorage.getItem('reservations');
        let reservations = existingReservations ? JSON.parse(existingReservations) : [];
        reservations.push(newReservation);
        localStorage.setItem('reservations', JSON.stringify(reservations));
        
        // Complete reservation
        setReservationId(reservationId);
        setReservationComplete(true);
        setIsSubmitting(false);
        window.scrollTo(0, 0);
      }, 1500);
    } else {
      setFormErrors(errors);
    }
  };

  if (reservationComplete) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4 text-[#1D1D1D]">Reservation Confirmed!</h1>
            
            <p className="text-gray-600 mb-6 text-lg">
              Thank you for choosing Àdùn Restaurant. We've received your reservation and look forward to serving you.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="font-bold text-xl mb-4 text-[#1D1D1D]">Reservation Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-gray-500">Reservation ID</p>
                  <p className="font-medium">{reservationId}</p>
                </div>
                <div>
                  <p className="text-gray-500">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                <div>
                  <p className="text-gray-500">Date</p>
                  <p className="font-medium">{new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div>
                  <p className="text-gray-500">Time</p>
                  <p className="font-medium">{formData.time}</p>
                </div>
                <div>
                  <p className="text-gray-500">Number of Guests</p>
                  <p className="font-medium">{formData.guests} {formData.guests > 1 ? 'people' : 'person'}</p>
                </div>
                {formData.specialRequests && (
                  <div className="md:col-span-2">
                    <p className="text-gray-500">Special Requests</p>
                    <p className="font-medium">{formData.specialRequests}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-x-4">
              <button 
                onClick={() => navigate('/')}
                className="bg-[#1D1D1D] hover:bg-[#333333] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Return to Home
              </button>
              <button 
                onClick={() => navigate('/menu')}
                className="bg-[#FF6B35] hover:bg-[#E55A25] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Browse Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D1D1D]">
            Make a <span className="text-[#FF6B35]">Reservation</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Book your table at Àdùn and experience the authentic flavors of Yoruba cuisine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#FF6B35] text-white' : 'bg-gray-200 text-gray-600'}`}>
                <Calendar size={20} />
              </div>
              <div className={`text-sm font-medium ml-2 ${step >= 1 ? 'text-[#FF6B35]' : 'text-gray-500'}`}>Booking Details</div>
            </div>
            <div className={`w-16 h-1 mx-2 ${step >= 2 ? 'bg-[#FF6B35]' : 'bg-gray-200'}`}></div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#FF6B35] text-white' : 'bg-gray-200 text-gray-600'}`}>
                <Users size={20} />
              </div>
              <div className={`text-sm font-medium ml-2 ${step >= 2 ? 'text-[#FF6B35]' : 'text-gray-500'}`}>Personal Information</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6 text-[#1D1D1D]">Select Your Booking Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                        Date*
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] ${
                            formErrors.date ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                      {formErrors.date && <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                        Time*
                      </label>
                      <div className="relative">
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] appearance-none ${
                            formErrors.time ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select a time</option>
                          {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      {formErrors.time && <p className="text-red-500 text-sm mt-1">{formErrors.time}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
                      Number of Guests*
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        max="20"
                        value={formData.guests}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] ${
                          formErrors.guests ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    {formErrors.guests && <p className="text-red-500 text-sm mt-1">{formErrors.guests}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="specialRequests" className="block text-gray-700 font-medium mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Please let us know if you have any special requirements or dietary restrictions."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                    ></textarea>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-[#FF6B35] hover:bg-[#E55A25] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    >
                      Continue to Personal Information
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6 text-[#1D1D1D]">Enter Your Information</h2>
                  
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                  </div>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="sm:w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="sm:w-1/2 bg-[#FF6B35] hover:bg-[#E55A25] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Confirm Reservation'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;