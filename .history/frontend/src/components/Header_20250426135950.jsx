import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header({ darkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ['Home', 'About', 'Services', 'Testimonials', 'Contact'];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4 fixed top-0 z-50">
      <nav
        className={cn(
          'flex items-center justify-between mx-auto max-w-7xl p-3 rounded-full',
          'backdrop-blur-lg border shadow-lg transition-all duration-300',
          darkMode 
            ? 'bg-blue-800/90 border-blue-700/50' 
            : isScrolled 
              ? 'bg-white/10 border-white/20' 
              : 'bg-transparent border-transparent'
        )}
      >
        {/* Logo - Left Side */}
        <div className="flex items-center p-2 h-[50px]">
          <div className={`text-2xl font-bold ${darkMode ? 'text-pink-300' : 'text-pink-500'}`}>
            RefiningSkills
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={cn(
              "focus:outline-none p-2 rounded-lg",
              darkMode ? 'text-blue-100' : 'text-blue-800'
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Items - Center (Hidden on Mobile) */}
        <div
          className={cn(
            'lg:flex items-center gap-4 hidden',
            'backdrop-blur-sm rounded-xl px-6 py-2 border',
            darkMode 
              ? 'bg-blue-700/20 border-blue-600/30' 
              : 'bg-white/5 border-white/10'
          )}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium',
                'hover:bg-gradient-to-r transition-all duration-200',
                darkMode 
                  ? 'text-blue-100 hover:from-blue-600/40 hover:to-pink-500/40 hover:text-yellow-300' 
                  : 'text-blue-900 hover:from-blue-500/20 hover:to-green-500/20 hover:text-pink-500'
              )}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Book a Demo Button - Right Side */}
        <div className="hidden lg:block p-3">
          <Button
            className={cn(
              'border rounded-xl px-6 py-2',
              darkMode 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-pink-400/20' 
                : 'bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white border-white/20'
            )}
          >
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={cn(
              'lg:hidden absolute top-20 left-4 right-4 z-50',
              'border rounded-xl p-4 flex flex-col gap-2',
              darkMode 
                ? 'bg-blue-800 backdrop-blur-lg border-blue-700/50' 
                : 'bg-white backdrop-blur-lg border-white/20'
            )}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium',
                  'hover:bg-gradient-to-r',
                  darkMode 
                    ? 'text-blue-100 hover:from-blue-600/40 hover:to-pink-500/40 hover:text-yellow-300' 
                    : 'text-blue-950/90 hover:from-blue-500/20 hover:to-green-500/20'
                )}
              >
                {item}
              </a>
            ))}
            <Button
              className={cn(
                'w-full border rounded-xl py-2',
                darkMode 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-pink-400/20' 
                  : 'bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white border-white/20'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Demo
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
}