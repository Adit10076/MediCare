'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { useSearchParams } from 'next/navigation';

type UserType = 'user' | 'hospital';

const SignupPage = () => {
  const searchParams = useSearchParams();
  const [userType, setUserType] = useState<UserType>('user');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'hospital') setUserType('hospital');
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-900 to-cyan-900 relative overflow-hidden">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
        >
          <div className="p-8 border-b border-white/10">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+</span>
              </div>
              <h2 className="text-3xl font-bold text-white">
                {userType.charAt(0).toUpperCase() + userType.slice(1)} Sign Up
              </h2>
            </div>
          </div>

          <div className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2">
                    {userType === 'hospital' ? 'Hospital Name' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {userType === 'hospital' && (
                  <>
                    <div>
                      <label className="block text-white/80 mb-2">License Number</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Address</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">Contact Person</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Password</label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {userType === 'user' && (
                  <div>
                    <label className="block text-white/80 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all"
              >
                Create {userType.charAt(0).toUpperCase() + userType.slice(1)} Account
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-white/70">Already have an account? </span>
              <Link 
                href={`/login?type=${userType}`} 
                className="text-blue-400 hover:text-blue-300 font-semibold"
              >
                Login here
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;