import { useState } from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import second from '@/assets/secondpic.jpg';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isHovered, setIsHovered] = useState(false);
  // Using CSS classes instead of state for hover effects is more reliable
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
            {/* Play Store Button with Google Play icon */}
            <a
              href="https://play.google.com/store/apps/details?id=your.app.id"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                px-6 py-3 rounded-xl text-lg font-satoshi transition-all duration-300 max-sm:w-fit
                flex items-center justify-center gap-2 hover:translate-y-0.5
                ${isDarkMode 
                  ? 'bg-gradient-to-r from-blue-700 to-pink-600 text-yellow-100 hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(80,120,200,0.1)] shadow-[6px_6px_12px_rgba(0,0,0,0.4),-3px_-3px_8px_rgba(70,100,150,0.2)]' 
                  : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-[inset_3px_3px_7px_rgba(0,0,100,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.8)]'}
              `} data-aos="zoom-in" data-aos-delay="1500">
              
              Get on Play Store
            </a>
            <button
              className={`
                px-6 py-3 rounded-xl text-lg font-satoshi transition-all duration-300 max-sm:w-fit text-center
                hover:translate-y-0.5
                ${isDarkMode 
                  ? 'bg-gradient-to-r from-blue-600 to-pink-300 text-yellow-300 hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(80,120,200,0.1)] shadow-[6px_6px_12px_rgba(0,0,0,0.4),-3px_-3px_8px_rgba(70,100,150,0.2)]' 
                  : 'bg-gradient-to-r from-blue-600 to-green-300 text-white hover:shadow-[inset_3px_3px_7px_rgba(0,0,100,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.8)]'}
              `}
              data-aos="zoom-in" data-aos-delay="1500">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Tilted Card with Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:mr-16">
          <div 
            className="relative w-full max-w-md aspect-[4/3] transform rotate-3 transition-all duration-300 ease-in-out hover:rotate-0 z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ pointerEvents: 'auto' }} // Force pointer events
          >
            {/* Card Shadow */}
            <div className="absolute inset-0 bg-blue-900/20 rounded-2xl transform translate-x-4 translate-y-4 blur-xl"></div>
            
            {/* Shadcn Card Component */}
            <Card className="relative h-full w-full overflow-hidden border border-white/20 backdrop-blur-sm bg-white/30 dark:bg-slate-800/50 shadow-xl">
              <CardContent className="p-0 h-full">
                {/* Add a transparent overlay to ensure hover works */}
                <div className="absolute inset-0 z-20" style={{ pointerEvents: 'auto' }}></div>
                
                {/* Gray Image (Default) */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 will-change-opacity z-10 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                >
                  <div className="h-full w-full">
                    <img
                      src={second}
                      alt=""
                      className="w-full h-full object-cover filter grayscale"
                    />
                  </div>
                </div>
                
                {/* Colorful Image (On Hover) */}
                <div className={`absolute inset-0 transition-opacity duration-500 will-change-opacity z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="h-full w-full bg-gradient-to-br from-blue-400 via-blue-300 to-green-300 flex items-center justify-center">
                    <img
                      src={second}
                      alt=""
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