import { ClipboardCheck, UserCheck, UserX, Users, Heart, Sparkles, Star, TrendingUp } from 'lucide-react';
import { guests } from '../data/mockData';
import RsvpForm from '../components/rsvp/RsvpForm';

const RsvpPage = () => {
  const totalInvited = guests.length;
  const attending = guests.filter(guest => guest.attending).length;
  const notAttending = guests.filter(guest => !guest.attending).length;
  const totalGuests = guests.reduce((sum, guest) => sum + guest.numberOfGuests, 0);
  const responseRate = totalInvited > 0 ? Math.round(((attending + notAttending) / totalInvited) * 100) : 0;

  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-r from-rose-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-2xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-60 right-1/4 w-28 h-28 bg-gradient-to-r from-green-300/20 to-blue-300/20 rounded-full blur-2xl animate-bounce delay-700"></div>
      </div>
      
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16 relative mt-10">
            {/* Floating decorative elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8 opacity-60">
                <Heart className="w-6 h-6 text-rose-400 animate-pulse" />
                <Sparkles className="w-5 h-5 text-purple-400 animate-bounce delay-300" />
                <Star className="w-4 h-4 text-pink-400 animate-pulse delay-700" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                RSVP
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent animate-pulse">
                Management
              </span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Collect and manage guest responses with our <span className="font-semibold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">intelligent RSVP system</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Main Dashboard */}
            <div className="xl:col-span-2 space-y-8">
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Invited */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-rose-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl p-6 group-hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-2xl mb-4 mx-auto group-hover:from-pink-500/30 group-hover:to-rose-500/30 transition-all duration-300">
                      <ClipboardCheck className="h-7 w-7 text-pink-600 dark:text-pink-400" />
                    </div>
                    <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Total Invited</p>
                    <p className="text-center text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">{totalInvited}</p>
                  </div>
                </div>
                
                {/* Attending */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl p-6 group-hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl mb-4 mx-auto group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                      <UserCheck className="h-7 w-7 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Attending</p>
                    <p className="text-center text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{attending}</p>
                  </div>
                </div>
                
                {/* Not Attending */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-rose-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl p-6 group-hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-sm rounded-2xl mb-4 mx-auto group-hover:from-red-500/30 group-hover:to-rose-500/30 transition-all duration-300">
                      <UserX className="h-7 w-7 text-red-600 dark:text-red-400" />
                    </div>
                    <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Not Attending</p>
                    <p className="text-center text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">{notAttending}</p>
                  </div>
                </div>
                
                {/* Total Guests */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl p-6 group-hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl mb-4 mx-auto group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <Users className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Total Guests</p>
                    <p className="text-center text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{totalGuests}</p>
                  </div>
                </div>
              </div>
              
              {/* Response Rate Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Response Rate</h3>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-purple-500" />
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{responseRate}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${responseRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Recent Responses Table */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-8 pb-0">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-6">
                      Recent Responses
                    </h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm">
                        <tr>
                          <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                            Guest
                          </th>
                          <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                            Response
                          </th>
                          <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                            Guests
                          </th>
                          <th className="px-8 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
                            Meal Preference
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10 dark:divide-gray-700/20">
                        {guests.map((guest, index) => (
                          <tr 
                            key={guest.id} 
                            className="hover:bg-white/10 dark:hover:bg-gray-700/20 transition-all duration-300 group/row"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <td className="px-8 py-6">
                              <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover/row:from-rose-500/30 group-hover/row:to-purple-500/30 transition-all duration-300">
                                  <span className="text-sm font-bold text-rose-600 dark:text-rose-400">
                                    {guest.name.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    {guest.name}
                                  </div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {guest.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                                guest.attending 
                                  ? 'bg-green-500/20 text-green-700 dark:text-green-300 border border-green-300/30'
                                  : 'bg-red-500/20 text-red-700 dark:text-red-300 border border-red-300/30'
                              }`}>
                                {guest.attending ? '✓ Attending' : '✗ Not Attending'}
                              </span>
                            </td>
                            <td className="px-8 py-6">
                              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold border border-blue-300/30">
                                {guest.numberOfGuests}
                              </span>
                            </td>
                            <td className="px-8 py-6 text-sm text-gray-600 dark:text-gray-400 font-medium">
                              {guest.mealPreference || (
                                <span className="text-gray-400 dark:text-gray-500 italic">Not specified</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            {/* RSVP Form Sidebar */}
            <div className="xl:col-span-1">
              <div className="sticky top-8">
                <RsvpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RsvpPage;