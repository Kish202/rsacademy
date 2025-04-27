import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to make navbar transparent
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you'd also update the document theme
    document.documentElement.classList.toggle('dark');
  };



  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Navbar */}
      <div 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out m-3 md:m
          ${scrolled ? 'bg-opacity-30 backdrop-blur-md' : 'bg-opacity-100'}
          ${darkMode 
            ? 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900' 
            : 'bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100'}
          border-b-0 rounded-3xl overflow-hidden
          ${darkMode
            ? 'shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_-5px_10px_rgba(20,40,80,0.2)]'
            : 'shadow-[0_10px_20px_rgba(160,190,220,0.3),inset_0_-5px_10px_rgba(255,255,255,0.8)]'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Brand Name */}
            <div className="flex-shrink-0 flex items-center">
              <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center mr-3
                ${darkMode 
                  ? 'bg-blue-800 shadow-[inset_3px_3px_7px_rgba(0,0,30,0.5),inset_-3px_-3px_7px_rgba(70,100,150,0.2)]' 
                  : 'bg-blue-50 shadow-[inset_3px_3px_7px_rgba(160,175,200,0.5),inset_-3px_-3px_7px_rgba(255,255,255,0.8)]'}
              `}>
                <span className={`font-bold text-xl ${darkMode ? 'text-green-400' : 'text-blue-600'}`}>RS</span>
              </div>
              <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-blue-800'}`}>
                Refining Skills
              </span>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {['Home', 'About', 'Services', 'Programs', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`
                      relative px-3 py-2 rounded-md text-sm font-medium
                      ${darkMode ? 'text-blue-100 hover:text-white' : 'text-blue-800 hover:text-blue-900'}
                      transition-all duration-300 ease-in-out
                      after:content-[''] after:absolute after:w-0 after:h-0.5 
                      after:left-0 after:bottom-0 after:transition-all after:duration-300
                      ${darkMode ? 'after:bg-pink-500' : 'after:bg-green-500'}
                      hover:after:w-full
                    `}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right side controls */}
            <div className="flex items-center">
              {/* Dark/Light Mode Toggle */}
              <button 
                onClick={toggleDarkMode}
                className={`
                  p-2 rounded-full transition-all duration-300
                  ${darkMode 
                    ? 'bg-blue-800 text-yellow-300 hover:text-yellow-100 shadow-[inset_2px_2px_5px_rgba(0,0,30,0.5),inset_-2px_-2px_5px_rgba(70,100,150,0.2)]' 
                    : 'bg-blue-50 text-blue-600 hover:text-blue-800 shadow-[inset_2px_2px_5px_rgba(160,175,200,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]'}
                `}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {/* Mobile menu button */}
              <div className="md:hidden ml-3">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`
                    p-2 rounded-lg inline-flex items-center justify-center
                    ${darkMode 
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
            ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}
          `}>
            {['Home', 'About', 'Services', 'Programs', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`
                  block px-3 py-2 rounded-md text-base font-medium
                  ${darkMode 
                    ? 'text-blue-100 hover:bg-blue-800 hover:text-white' 
                    : 'text-blue-800 hover:bg-blue-200 hover:text-blue-900'}
                  relative overflow-hidden
                  after:content-[''] after:absolute after:w-0 after:h-0.5 
                  after:left-0 after:bottom-0 after:transition-all after:duration-300
                  ${darkMode ? 'after:bg-pink-500' : 'after:bg-green-500'}
                  hover:after:w-full
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll demonstration */}
      <div className="pt-24 px-4 text-center">
        <div className={`py-6 rounded-lg ${darkMode ? 'text-white' : 'text-blue-800'}`}>
          <p className="text-lg">{scrolled ? "Navbar is transparent now" : "Scroll to see transparency effect"}</p>
          <p className="text-sm mt-2">Toggle light/dark mode to see different neuomorphic styles</p>
        </div>
      </div>
    </div>
  );
}