'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
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
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"
            >
              <span className="text-white text-2xl font-bold">+</span>
            </motion.div>
            <span className="text-2xl font-bold text-white">Medicare</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {['Services', 'Doctors', 'Departments', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors relative group px-4 py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            <div className="flex space-x-4 ml-4">
              <Link
                href="/login"
                className="px-6 py-2 bg-blue-600/50 hover:bg-blue-700 text-white rounded-xl transition-all border border-white/10"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 bg-transparent hover:bg-white/5 text-white rounded-xl transition-all border border-white/10"
              >
                Sign Up
              </Link>
            </div>
          </div>

          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden mt-4 space-y-4"
          >
            {['Services', 'Doctors', 'Departments', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white/80 hover:text-white py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link
                href="/login"
                className="block w-full text-center py-3 bg-blue-600/50 hover:bg-blue-700 text-white rounded-xl transition-all"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center py-3 mt-2 bg-transparent hover:bg-white/5 text-white rounded-xl transition-all border border-white/10"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;