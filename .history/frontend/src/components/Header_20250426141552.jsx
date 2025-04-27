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
          'flex items-center justify-between mx-auto max-w-7xl p-3 rounded-2xl',
          'transition-all duration-300 shadow-neumorph',
          isScrolled
            ? 'bg-neugray-bg/70 backdrop-blur-sm'
            : 'bg-neugray-bg'
        )}
      >
        {/* Logo - Left Side */}
        <div className="flex items-center p-2 h-[50px]">
          <div className="text-2xl font-bold text-neugray-accent">
            RefiningSkills
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded-lg text-neugray-text"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Items - Center (Hidden on Mobile) */}
        <div
          className={cn(
            'lg:flex items-center gap-4 hidden',
            'bg-neugray-bg rounded-xl px-6 py-2 shadow-neumorph-sm'
          )}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium',
                'hover:bg-gray-50 transition-colors text-neugray-text'
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
              'bg-neugray-bg px-4 py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow',
              'text-neugray-accent font-medium'
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
              'bg-neugray-bg rounded-xl p-4 flex flex-col gap-2',
              'shadow-neumorph'
            )}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium',
                  'hover:bg-gray-50 transition-colors text-neugray-text'
                )}
              >
                {item}
              </a>
            ))}
            <Button
              className={cn(
                'w-full bg-neugray-bg px-4 py-2 rounded-lg',
                'shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow',
                'text-neugray-accent font-medium'
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