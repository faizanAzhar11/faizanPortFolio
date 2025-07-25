'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SocialLinks from '../ui/SocialLinks';
import { personalInfo } from '../../data/personal-info';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 dark:bg-gray-900/90">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400">
            {personalInfo.name.split(' ')[0]}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
            <SocialLinks className="flex items-center gap-3 ml-4" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 w-6 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <SocialLinks className="flex items-center gap-4" />
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
