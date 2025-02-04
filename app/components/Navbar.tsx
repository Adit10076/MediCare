"use client";

import type React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<"user" | "hospital" | null>(null);

  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-center items-center gap-10">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              
              animate="float"
              className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"
            >
              <span className="text-white text-2xl font-bold">+</span>
            </motion.div>
            <span className="text-2xl font-bold text-white">Medicare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Services", "Doctors", "Departments", "Contact"].map(
              (item, index) => (
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
              )
            )}

            {/* Get Started Dropdown */}
            <div className="relative ml-4">
              <button
                className="px-6 py-2 bg-blue-600/50 hover:bg-blue-700 text-white rounded-xl transition-all border border-white/10 flex items-center gap-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Get Started
                <FiChevronDown
                  className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl"
                >
                  <div className="p-2 space-y-2">
                    {["user", "hospital"].map((type) => (
                      <div key={type} className="relative">
                        <Link
                          href={`/signup?type=${type}`}
                          className="block w-full text-center py-3 bg-transparent hover:bg-white/5 text-white rounded-xl transition-all border border-white/10"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setSelectedType(null);
                          }}
                        >
                          <button
                            onClick={() =>
                              setSelectedType(
                                selectedType === type ? null : (type as "user" | "hospital")
                              )
                            }
                            className="w-full px-4 py-2 text-white hover:bg-white/5 rounded-xl transition-colors flex justify-between items-center"
                          >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                            <FiChevronDown className="text-sm transform -rotate-90" />
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden mt-4 space-y-4 px-6 pb-4"
        >
          {["Services", "Doctors", "Departments", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white/80 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          <div className="pt-4 border-t border-white/10 space-y-2">
            {["user", "hospital"].map((type) => (
              <div key={type} className="space-y-2">
                <Link
                  href={`/login?type=${type}`}
                  className="block w-full text-center py-3 bg-blue-600/50 hover:bg-blue-700 text-white rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Login as {type.charAt(0).toUpperCase() + type.slice(1)}
                </Link>
                <Link
                  href={`/signup?type=${type}`}
                  className="block w-full text-center py-3 bg-transparent hover:bg-white/5 text-white rounded-xl transition-all border border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up as {type.charAt(0).toUpperCase() + type.slice(1)}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;