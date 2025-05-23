import { ClipboardCheck, UserCheck, UserX, Users } from 'lucide-react';
import { guests } from '../data/mockData';
import RsvpForm from '../components/rsvp/RsvpForm';

const RsvpPage = () => {
  const totalInvited = guests.length;
  const attending = guests.filter(guest => guest.attending).length;
  const notAttending = guests.filter(guest => !guest.attending).length;
  const totalGuests = guests.reduce((sum, guest) => sum + guest.numberOfGuests, 0);

  return (
    <div className="bg-pink-50 dark:bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white sm:text-5xl">
            RSVP <span className="text-pink-500">Management</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Collect and manage guest responses easily with our RSVP system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 lg:p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                RSVP Dashboard
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 bg-pink-100 dark:bg-pink-800 rounded-full mb-3 mx-auto">
                    <ClipboardCheck className="h-5 w-5 text-pink-600 dark:text-pink-300" />
                  </div>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">Total Invited</p>
                  <p className="text-center text-2xl font-bold text-gray-900 dark:text-white">{totalInvited}</p>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-800 rounded-full mb-3 mx-auto">
                    <UserCheck className="h-5 w-5 text-green-600 dark:text-green-300" />
                  </div>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">Attending</p>
                  <p className="text-center text-2xl font-bold text-gray-900 dark:text-white">{attending}</p>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:bg-red-800 rounded-full mb-3 mx-auto">
                    <UserX className="h-5 w-5 text-red-600 dark:text-red-300" />
                  </div>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">Not Attending</p>
                  <p className="text-center text-2xl font-bold text-gray-900 dark:text-white">{notAttending}</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full mb-3 mx-auto">
                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">Total Guests</p>
                  <p className="text-center text-2xl font-bold text-gray-900 dark:text-white">{totalGuests}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Recent Responses
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Response
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Guests
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Meal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {guests.map((guest) => (
                      <tr key={guest.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {guest.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {guest.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            guest.attending 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {guest.attending ? 'Attending' : 'Not Attending'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {guest.numberOfGuests}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {guest.mealPreference || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <RsvpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RsvpPage;