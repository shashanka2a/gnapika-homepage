"use client";

import { motion } from "framer-motion";
import { Menu, ShoppingCart, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <h1
              className="text-2xl sm:text-3xl"
              style={{
                fontFamily: '"DM Serif Display", serif',
                color: isScrolled ? '#8B0000' : '#FFFFFF',
                transition: 'color 0.3s ease',
              }}
            >
              Gnapika
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Custom', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-base"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  color: isScrolled ? '#333333' : '#FFFFFF',
                  transition: 'color 0.3s ease',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5"
                  style={{ background: '#8B0000' }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 sm:p-2.5 rounded-full transition-colors"
              style={{
                background: isScrolled ? 'rgba(139, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)',
              }}
              aria-label="User account"
            >
              <User className="w-5 h-5" style={{ color: isScrolled ? '#8B0000' : '#FFFFFF' }} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 sm:p-2.5 rounded-full transition-colors relative"
              style={{
                background: isScrolled ? 'rgba(139, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)',
              }}
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" style={{ color: isScrolled ? '#8B0000' : '#FFFFFF' }} />
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center"
                style={{
                  background: '#8B0000',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                }}
              >
                0
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 sm:p-2.5 rounded-full transition-colors"
              style={{
                background: isScrolled ? 'rgba(139, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)',
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" style={{ color: isScrolled ? '#8B0000' : '#FFFFFF' }} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
          style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
        >
          <div className="px-4 py-4 space-y-3">
            {['Shop', 'Custom', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 rounded-lg transition-colors active:bg-gray-100"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  color: '#333333',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
