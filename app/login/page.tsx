// app/login/page.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const LoginPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <Navbar />
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 50 + 20,
              height: Math.random() * 50 + 20,
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Glowing Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[url('/grid.svg')] bg-opacity-20" />

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
        >
          {/* Logo Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-white/5 border-b border-white/10"
          >
            <div className="flex items-center justify-center space-x-3">
              <motion.div
                variants={floatingVariants}
                animate="float"
                className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"
              >
                <span className="text-white text-2xl font-bold">+</span>
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold text-white"
              >
                Medicare
              </motion.span>
            </div>
          </motion.div>

          {/* Animated Form */}
          <div className="p-8 space-y-6">
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Email Input */}
              <div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Email"
                  />
                  <AnimatePresence>
                    {email && (
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -top-2 left-3 px-2 text-xs text-white/80 bg-blue-600/50 rounded-full"
                      >
                        Email
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Password Input */}
              <div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Password"
                  />
                  <AnimatePresence>
                    {password && (
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -top-2 left-3 px-2 text-xs text-white/80 bg-blue-600/50 rounded-full"
                      >
                        Password
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all relative overflow-hidden"
              >
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 4 }}
                      exit={{ scale: 0 }}
                      className="absolute inset-0 bg-white/10 rounded-full"
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">Login</span>
              </motion.button>
            </motion.form>

            {/* Social Login */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-full border-t border-white/20" />
              <span className="text-white/70 text-sm">Or continue with</span>
              <div className="flex space-x-4">
                {['google', 'facebook', 'apple'].map((provider, index) => (
                  <motion.button
                    key={provider}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all"
                  >
                    <svg className="w-6 h-6 text-white">
                      {/* Add SVG icons for social providers */}
                    </svg>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Signup Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <span className="text-white/70">New user? </span>
              <Link
                href="/signup"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Create account
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;