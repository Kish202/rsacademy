import { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import second from '@/assets/secondpic.jpg';
import { useTheme } from "../context/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const cardRef = useRef(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // Manual hover detection for the card
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => setIsCardHovered(true);
    const handleMouseLeave = () => setIsCardHovered(false);

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Initialize AOS if you're using it
  useEffect(() => {
    // Check if AOS is available globally
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      
      {/* Background Elements */}
      <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl -z-10
        ${isDarkMode ? 'bg-yellow-400/10' : 'bg-blue-300/20'}`}></div>
      <div className={`absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl -z-10
        ${isDarkMode ? 'bg-pink-500/10' : 'bg-green-300/20'}`}></div>
      {isDarkMode && <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>}
      
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 max-md:gap-16">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 z-10 max-md:mt-10 lg:ml-28 lg:pl-10">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi leading-tight py-2 
            ${isDarkMode 
              ? 'bg-gradient-to-r from-yellow-300 via-pink-400 to-green-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-blue-800 via-blue-600 to-green-600 bg-clip-text text-transparent'}`}
              data-aos="zoom-in" data-aos-duration="1000">
            Get your Perfect Skills Perfectly refined with us.
          </h1>
          <p className={`text-lg md:text-xl max-w-lg font-satoshi 
            ${isDarkMode ? 'text-blue-100/80' : 'text-blue-800/80'}`}
            data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1200">
            Discover your inner potential to innovate and create. We will help you, we will stand with you throughout this entire journey.
          </p>
          <div className="flex flex-col justify-center items-center sm:flex-row gap-4 pt-4 sm:justify-start">
            {/* Fixed Buttons with CSS transitions */}
            <button
              className={`
                px-6 py-3 rounded-xl text-lg font-satoshi transition-all duration-300 max-sm:w-fit
                ${isDarkMode 
                  ? 'bg-gradient-to-r from-blue-700 to-pink-600 text-yellow-100' 
                  : 'bg-gradient-to-r from-blue-600 to-green-600 text-white'}
                shadow-md hover:shadow-inner hover:translate-y-0.5 active:translate-y-1
              `} data-aos="zoom-in" data-aos-delay="1500">
              Get Started
            </button>
            <button
              className={`
                px-6 py-3 rounded-xl text-lg font-satoshi transition-all duration-300 max-sm:w-fit text-center
                ${isDarkMode 
                  ? 'bg-gradient-to-r from-blue-600 to-pink-300 text-yellow-300' 
                  : 'bg-gradient-to-r from-blue-600 to-green-300 text-white'}
                shadow-md hover:shadow-inner hover:translate-y-0.5 active:translate-y-1
              `}
              data-aos="zoom-in" data-aos-delay="1500">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Tilted Card with Image - With explicit JS hover control */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:mr-16">
          <div 
            ref={cardRef}
            className={`
              relative w-full max-w-md aspect-[4/3] transform transition-all duration-300 ease-in-out
              ${isCardHovered ? 'rotate-0' : 'rotate-3'}
            `}
          >
            {/* Card Shadow */}
            <div className={`
              absolute inset-0 rounded-2xl transform translate-x-4 translate-y-4 blur-xl
              ${isDarkMode ? 'bg-yellow-400/20' : 'bg-blue-900/20'}
            `}></div>
            
            {/* Shadcn Card Component */}
            <Card className={`
              relative h-full w-full overflow-hidden border backdrop-blur-sm
              ${isDarkMode 
                ? 'border-blue-500/10 bg-blue-900/20 shadow-[8px_8px_20px_rgba(0,0,0,0.5),-4px_-4px_16px_rgba(50,70,120,0.15)]' 
                : 'border-white/20 bg-white/30 shadow-[8px_8px_20px_rgba(163,177,198,0.25),-4px_-4px_16px_rgba(255,255,255,0.7)]'}
            `}>
              <CardContent className="p-0 h-full">
                {/* Gray Image (Default) */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 ${isCardHovered ? 'opacity-0' : 'opacity-100'}`}
                >
                  <div className="h-full w-full">
                    <img
                      src={second}
                      alt="College campus grayscale"
                      className="w-full h-full object-cover filter grayscale"
                    />
                  </div>
                </div>
                
                {/* Colorful Image (On Hover) */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isCardHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <div className={`h-full w-full flex items-center justify-center
                    ${isDarkMode 
                      ? 'bg-gradient-to-br from-blue-700 via-pink-600 to-yellow-500' 
                      : 'bg-gradient-to-br from-blue-400 via-blue-300 to-green-300'}`}
                  >
                    <img
                      src={second}
                      alt="College campus color"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;