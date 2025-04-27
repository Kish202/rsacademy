

// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Determine if dark mode based on theme
  const isDarkMode = theme === 'dark';

  // Handle scroll event to make navbar transparent
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items for navigation
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out m-3 md:ml-6 md:mr-6
        ${scrolled ? 'bg-opacity-70 backdrop-blur-md' : 'bg-opacity-100'}
        ${isDarkMode 
          ? 'bg-gradient-to-b from-blue-950  to-blue-900' 
          : 'bg-gradient-to-b from-blue-200 to-blue-100'}
        border-b-0 rounded-3xl overflow-hidden
        ${isDarkMode
          ? 'shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_-5px_10px_rgba(20,40,80,0.2)]'
          : 'shadow-[0_10px_20px_rgba(160,190,220,0.3),inset_0_-5px_10px_rgba(255,255,255,0.8)]'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center mr-3
                ${isDarkMode 
                  ? 'bg-blue-800 shadow-[inset_3px_3px_7px_rgba(0,0,30,0.5),inset_-3px_-3px_7px_rgba(70,100,150,0.2)]' 
                  : 'bg-blue-50 shadow-[inset_3px_3px_7px_rgba(160,175,200,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.8)]'}
              `}>
                <span className={`font-bold text-xl ${isDarkMode ? 'text-green-400' : 'text-blue-600'}`}>RS</span>
              </div>
              <span className={`font-bold text-lg font-satoshi ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>
                Refining Skills
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    relative px-3 py-2 rounded-md text-sm font-medium font-satoshi
                    ${isDarkMode ? 'text-blue-100 hover:text-white' : 'text-blue-800 hover:text-blue-900'}
                    transition-all duration-300 ease-in-out
                    after:content-[''] after:absolute after:w-0 after:h-0.5 
                    after:left-0 after:bottom-0 after:transition-all after:duration-300
                    ${isDarkMode ? 'after:bg-pink-500' : 'after:bg-green-500'}
                    hover:after:w-full
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right side controls */}
          <div className="flex items-center">
            {/* Dark/Light Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className={`
                p-2 rounded-full transition-all duration-300
                ${isDarkMode 
                  ? 'bg-blue-800 text-yellow-300 hover:text-yellow-100 shadow-[inset_2px_2px_5px_rgba(0,0,30,0.5),inset_-2px_-2px_5px_rgba(70,100,150,0.2)]' 
                  : 'bg-blue-50 text-blue-600 hover:text-blue-800 shadow-[inset_2px_2px_5px_rgba(160,175,200,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]'}
              `}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`
                  p-2 rounded-lg inline-flex items-center justify-center
                  ${isDarkMode 
                    ? 'bg-blue-800 text-blue-100 hover:text-white shadow-[inset_2px_2px_5px_rgba(0,0,30,0.5),inset_-2px_-2px_5px_rgba(70,100,150,0.2)]' 
                    : 'bg-blue-50 text-blue-600 hover:text-blue-800 shadow-[inset_2px_2px_5px_rgba(160,175,200,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]'}
                `}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className={`
          px-2 pt-2 pb-3 space-y-1 sm:px-3
          ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'}
        `}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                block px-3 py-2 rounded-md text-base font-medium font-satoshi
                ${isDarkMode 
                  ? 'text-blue-100 hover:bg-blue-800 hover:text-white' 
                  : 'text-blue-800 hover:bg-blue-200 hover:text-blue-900'}
                relative overflow-hidden
                after:content-[''] after:absolute after:w-0 after:h-0.5 
                after:left-0 after:bottom-0 after:transition-all after:duration-300
                ${isDarkMode ? 'hover:w-full ' : 'after:bg-green-500'}
                hover:after:w-full
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}