import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to make navbar transparent
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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

  // Base neuomorphic styles
  const navbarBaseStyle = `
    w-full fixed top-0 left-0 z-50 transition-all duration-300
    ${darkMode 
      ? 'bg-gradient-to-r from-blue-900 to-blue-800' 
      : 'bg-gradient-to-r from-blue-100 to-blue-200'} 
    ${scrolled ? 'bg-opacity-70 backdrop-blur-md' : 'bg-opacity-100'}
    rounded-b-2xl
  `;
  
  // Neuomorphic shadow styles
  const neuomorphicStyle = `
    ${darkMode 
      ? 'shadow-[5px_5px_15px_rgba(0,0,10,0.5),-5px_-5px_15px_rgba(40,60,100,0.15)]' 
      : 'shadow-[5px_5px_15px_rgba(163,177,198,0.7),-5px_-5px_15px_rgba(255,255,255,0.8)]'}
    ${scrolled ? '' : ''}
  `;

  // Menu items with fancy transition and hover effect
  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Programs', href: '#programs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${navbarBaseStyle} ${neuomorphicStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <div className={`
              w-10 h-10 rounded-lg flex items-center justify-center mr-2
              ${darkMode 
                ? 'bg-blue-800 shadow-inner shadow-blue-950' 
                : 'bg-blue-50 shadow-inner shadow-blue-200'}
            `}>
              <span className={`font-bold text-xl ${darkMode ? 'text-green-400' : 'text-blue-600'}`}>RS</span>
            </div>
            <span className={`font-satoshi font-bold text-lg ${darkMode ? 'text-white' : 'text-blue-800'}`}>
              Refining Skills
            </span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    font-satoshi relative px-3 py-2 rounded-md text-sm font-medium
                    ${darkMode ? 'text-blue-100 hover:text-white' : 'text-blue-800 hover:text-blue-900'}
                    transition-all duration-300 ease-in-out
                    after:content-[''] after:absolute after:w-0 after:h-0.5 
                    after:left-0 after:bottom-0 after:transition-all after:duration-300
                    ${darkMode ? 'after:bg-pink-500' : 'after:bg-green-500'}
                    hover:after:w-full
                  `}
                >
                  {item.name}
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
                p-2 rounded-full ml-4 transition-all duration-300
                ${darkMode 
                  ? 'bg-blue-800 shadow-inner shadow-blue-950 text-yellow-300 hover:text-yellow-100' 
                  : 'bg-blue-50 shadow-inner shadow-blue-200 text-blue-600 hover:text-blue-800'}
              `}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`
                  p-2 rounded-lg inline-flex items-center justify-center
                  ${darkMode 
                    ? 'bg-blue-800 text-blue-100 hover:text-white shadow-inner shadow-blue-950' 
                    : 'bg-blue-50 text-blue-600 hover:text-blue-800 shadow-inner shadow-blue-200'}
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

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className={`
          px-2 pt-2 pb-3 space-y-1 sm:px-3
          ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}
          rounded-b-2xl
          ${neuomorphicStyle}
        `}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                block px-3 py-2 rounded-md text-base font-medium font-satoshi
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
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}