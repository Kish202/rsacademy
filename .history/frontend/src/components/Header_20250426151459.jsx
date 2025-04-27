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
          'backdrop-blur-lg border shadow-neumorph transition-all duration-300',
          isScrolled 
            ? 'bg-blue-900/60 border-blue-700/50' 
            : 'bg-blue-900/30 border-blue-800/30'
        )}
      >
        {/* Logo - Left Side */}
        <div className="flex items-center p-2 h-[50px]">
          <div className="text-2xl font-bold text-blue-300">
            RefiningSkills
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded-lg text-blue-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Items - Center (Hidden on Mobile) */}
        <div
          className={cn(
            'lg:flex items-center gap-4 hidden',
            'backdrop-blur-lg rounded-xl px-6 py-2 border',
            'bg-blue-800/40 border-blue-700/40 shadow-neumorph-sm'
          )}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative px-3 py-2 text-sm font-medium text-blue-100 transition-all duration-200"
            >
              {item}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Book a Demo Button - Right Side */}
        <div className="hidden lg:block p-3">
          <Button
            className={cn(
              'border rounded-xl px-6 py-2',
              'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800',
              'text-white border-blue-500/40 shadow-neumorph-sm hover:shadow-neumorph transition-all'
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
              'bg-blue-900/80 backdrop-blur-lg border-blue-700/50 shadow-neumorph'
            )}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="group relative px-3 py-2 text-sm font-medium text-blue-100 transition-all duration-200"
              >
                {item}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button
              className={cn(
                'w-full border rounded-xl py-2 mt-2',
                'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800',
                'text-white border-blue-500/40 shadow-neumorph-sm hover:shadow-neumorph-press transition-all'
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