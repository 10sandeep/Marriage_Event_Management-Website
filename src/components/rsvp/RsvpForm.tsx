import { useState } from 'react';
import { Check, X } from 'lucide-react';

const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: true,
    numberOfGuests: 1,
    mealPreference: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'radio') {
      setFormData({
        ...formData,
        attending: value === 'yes'
      });
    } else if (name === 'numberOfGuests') {
      setFormData({
        ...formData,
        [name]: parseInt(value) || 0
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your API
    console.log('RSVP Form Data:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        attending: true,
        numberOfGuests: 1,
        mealPreference: '',
        message: ''
      });
    }, 5000);
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 lg:p-8">
      <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
        RSVP to Our Wedding
      </h2>
      
      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-start">
          <Check className="h-5 w-5 text-green-500 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h3 className="text-green-800 dark:text-green-300 font-medium">Thank you for your response!</h3>
            <p className="text-green-700 dark:text-green-400 mt-1">Your RSVP has been successfully submitted. We look forward to celebrating with you!</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Will you be attending? *
            </span>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="attending-yes"
                  name="attending"
                  value="yes"
                  checked={formData.attending}
                  onChange={handleChange}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                />
                <label htmlFor="attending-yes" className="ml-2 text-gray-700 dark:text-gray-300">
                  Yes, I'll be there
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="attending-no"
                  name="attending"
                  value="no"
                  checked={!formData.attending}
                  onChange={handleChange}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                />
                <label htmlFor="attending-no" className="ml-2 text-gray-700 dark:text-gray-300">
                  Sorry, I can't make it
                </label>
              </div>
            </div>
          </div>
          
          {formData.attending && (
            <>
              <div>
                <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Number of Guests (including yourself) *
                </label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  min="1"
                  max="10"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="mealPreference" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Meal Preference
                </label>
                <select
                  id="mealPreference"
                  name="mealPreference"
                  value={formData.mealPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a preference</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Gluten-Free">Gluten-Free</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
              </div>
            </>
          )}
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message for the Couple (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200"
            >
              Submit RSVP
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RsvpForm;