import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";

const TestimonialSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const sliderRef = useRef(null);

  // Load Trustindex script
  useEffect(() => {
    // Only load if not already loaded
    if (!document.getElementById('trustindex-script')) {
      const script = document.createElement('script');
      script.id = 'trustindex-script';
      script.src = 'https://cdn.trustindex.io/loader.js?e8f4a94456ec335e1a86833fb4e';
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);
    }

    // Clean up on component unmount
    return () => {
      const script = document.getElementById('trustindex-script');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`w-full py-16 relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background Elements */}
      <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl -z-10
        ${isDarkMode ? 'bg-yellow-400/10' : 'bg-blue-300/20'}`}></div>
      <div className={`absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl -z-10
        ${isDarkMode ? 'bg-pink-500/10' : 'bg-green-300/20'}`}></div>
      {isDarkMode && <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>}
      
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className={`inline-block text-3xl md:text-4xl lg:text-5xl font-bold font-satoshi leading-tight py-2
            ${isDarkMode 
              ? 'bg-gradient-to-r from-yellow-300 via-pink-400 to-green-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-blue-800 via-blue-600 to-green-600 bg-clip-text text-transparent'}`}>
            Student Success Stories
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto font-satoshi mt-4
            ${isDarkMode ? 'text-blue-100/80' : 'text-blue-800/80'}`}>
            Hear from students who found their perfect academic fit through our platform.
          </p>
        </div>

        {/* Google Reviews Section with enhanced neumorphic styling */}
        <div className="relative px-4 md:px-8 mb-16">
          {/* Custom navigation arrows for Trustindex widget */}
          <button 
            onClick={() => {
              if (typeof window !== 'undefined' && window.Trustindex) {
                window.Trustindex.changeSlide('e8f4a94456ec335e1a86833fb4e', 'prev');
              }
            }}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 transition-all duration-300
              ${isDarkMode 
                ? 'bg-blue-900/40 text-blue-300 shadow-[6px_6px_12px_rgba(0,0,0,0.4),-3px_-3px_8px_rgba(70,100,150,0.2)] hover:bg-blue-800/50 hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(80,120,200,0.1)]' 
                : 'bg-white/80 text-blue-700 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-4px_-4px_10px_rgba(255,255,255,0.7)] hover:bg-blue-50 hover:shadow-[inset_3px_3px_7px_rgba(0,0,100,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]'}`}
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={() => {
              if (typeof window !== 'undefined' && window.Trustindex) {
                window.Trustindex.changeSlide('e8f4a94456ec335e1a86833fb4e', 'next');
              }
            }}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 transition-all duration-300
              ${isDarkMode 
                ? 'bg-blue-900/40 text-blue-300 shadow-[6px_6px_12px_rgba(0,0,0,0.4),-3px_-3px_8px_rgba(70,100,150,0.2)] hover:bg-blue-800/50 hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(80,120,200,0.1)]' 
                : 'bg-white/80 text-blue-700 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-4px_-4px_10px_rgba(255,255,255,0.7)] hover:bg-blue-50 hover:shadow-[inset_3px_3px_7px_rgba(0,0,100,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]'}`}
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>

          {/* Enhanced neumorphic wrapper for Google Reviews */}
          <div 
            className={`rounded-2xl p-6 mx-auto max-w-6xl transition-all duration-300
              ${isDarkMode 
                ? 'bg-blue-900/20 backdrop-blur-sm border border-blue-500/10 shadow-[8px_8px_20px_rgba(0,0,0,0.5),-4px_-4px_16px_rgba(50,70,120,0.15)]' 
                : 'bg-white/30 backdrop-blur-sm border border-white/20 shadow-[8px_8px_20px_rgba(163,177,198,0.25),-4px_-4px_16px_rgba(255,255,255,0.7)]'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Trustindex widget container */}
            <div 
              className="trustindex-widget transform transition-all" 
              data-widget-id="e8f4a94456ec335e1a86833fb4e"
              data-no-script="1"
            ></div>
            
            {/* Enhanced custom styling for neumorphic Google reviews */}
            <style jsx>{`
              /* Custom styles with stronger neumorphic effects */
              :global(.ti-widget) {
                max-width: 100% !important;
                background: transparent !important;
                border-radius: 1rem !important;
                overflow: hidden !important;
              }
              
              :global(.ti-stars .ti-star) {
                color: ${isDarkMode ? '#FBBF24' : '#3B82F6'} !important;
                filter: drop-shadow(0 0 2px ${isDarkMode ? 'rgba(251, 191, 36, 0.3)' : 'rgba(59, 130, 246, 0.3)'}) !important;
              }
              
              :global(.ti-widget .ti-review-item) {
                background: ${isDarkMode ? 'rgba(30, 58, 138, 0.3)' : 'rgba(255, 255, 255, 0.7)'} !important;
                backdrop-filter: blur(8px) !important;
                border-radius: 1rem !important;
                margin: 0.75rem !important;
                transition: all 0.4s ease !important;
                border: ${isDarkMode ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid rgba(255, 255, 255, 0.6)'} !important;
                box-shadow: ${isDarkMode 
                  ? '8px 8px 16px rgba(0, 0, 0, 0.5), -4px -4px 12px rgba(70, 100, 150, 0.2)' 
                  : '8px 8px 16px rgba(163, 177, 198, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.8)'} !important;
                transform: translateY(0) !important;
              }
              
              :global(.ti-widget .ti-review-item:hover) {
                transform: translateY(-8px) !important;
                box-shadow: ${isDarkMode 
                  ? '10px 10px 20px rgba(0, 0, 0, 0.6), -5px -5px 15px rgba(70, 100, 150, 0.3)' 
                  : '10px 10px 20px rgba(163, 177, 198, 0.4), -8px -8px 16px rgba(255, 255, 255, 1)'} !important;
                border: ${isDarkMode ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.8)'} !important;
              }

              :global(.ti-widget .ti-review-item:active) {
                box-shadow: ${isDarkMode 
                  ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.6), inset -2px -2px 6px rgba(70, 100, 150, 0.2)' 
                  : 'inset 4px 4px 8px rgba(163, 177, 198, 0.3), inset -3px -3px 6px rgba(255, 255, 255, 0.8)'} !important;
                transform: translateY(-4px) !important;
              }

              :global(.ti-widget .ti-review-content) {
                color: ${isDarkMode ? '#93C5FD' : '#1E40AF'} !important;
                font-style: italic !important;
                font-size: 1.05rem !important;
                padding: 0.75rem 0.5rem !important;
                line-height: 1.6 !important;
                text-shadow: ${isDarkMode ? '0 1px 2px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(255, 255, 255, 0.8)'} !important;
              }

              :global(.ti-widget .ti-review-header) {
                margin-bottom: 1rem !important;
                padding: 0.5rem !important;
                background: ${isDarkMode 
                  ? 'linear-gradient(145deg, rgba(30, 64, 175, 0.2), rgba(30, 58, 138, 0.1))' 
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(239, 246, 255, 0.5))'} !important;
                border-radius: 0.75rem !important;
                box-shadow: ${isDarkMode 
                  ? 'inset 1px 1px 3px rgba(255, 255, 255, 0.1), inset -1px -1px 3px rgba(0, 0, 0, 0.3)' 
                  : 'inset 1px 1px 3px rgba(255, 255, 255, 0.8), inset -1px -1px 3px rgba(163, 177, 198, 0.3)'} !important;
              }

              :global(.ti-widget .ti-profile-img) {
                border: ${isDarkMode ? '2px solid #3B82F6' : '2px solid #BFDBFE'} !important;
                box-shadow: ${isDarkMode 
                  ? '0 0 0 2px rgba(59, 130, 246, 0.3), 0 4px 8px rgba(0, 0, 0, 0.4)' 
                  : '0 0 0 2px rgba(59, 130, 246, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)'} !important;
                transform: scale(1.05) !important;
              }

              :global(.ti-widget .ti-name) {
                color: ${isDarkMode ? '#93C5FD' : '#1E40AF'} !important;
                font-weight: 600 !important;
                text-shadow: ${isDarkMode ? '0 1px 2px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(255, 255, 255, 0.8)'} !important;
              }

              :global(.ti-widget .ti-date) {
                color: ${isDarkMode ? '#60A5FA' : '#3B82F6'} !important;
                opacity: 0.8 !important;
              }
              
              :global(.ti-widget .ti-footer) {
                background: ${isDarkMode 
                  ? 'linear-gradient(145deg, rgba(30, 64, 175, 0.2), rgba(30, 58, 138, 0.1))' 
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(239, 246, 255, 0.5))'} !important;
                border-radius: 0.75rem !important;
                margin-top: 1rem !important;
                padding: 0.75rem !important;
                box-shadow: ${isDarkMode 
                  ? 'inset 1px 1px 3px rgba(255, 255, 255, 0.1), inset -1px -1px 3px rgba(0, 0, 0, 0.3)' 
                  : 'inset 1px 1px 3px rgba(255, 255, 255, 0.8), inset -1px -1px 3px rgba(163, 177, 198, 0.3)'} !important;
              }
              
              :global(.ti-widget .ti-controls-dots .dot) {
                background: ${isDarkMode ? '#3B82F6' : '#3B82F6'} !important;
                box-shadow: ${isDarkMode 
                  ? '0 2px 4px rgba(0, 0, 0, 0.4)' 
                  : '0 2px 4px rgba(59, 130, 246, 0.3)'} !important;
              }
              
              :global(.ti-widget .ti-controls-dots .dot.active) {
                background: ${isDarkMode ? '#93C5FD' : '#1E40AF'} !important;
                box-shadow: ${isDarkMode 
                  ? '0 0 8px rgba(147, 197, 253, 0.5)' 
                  : '0 0 8px rgba(30, 64, 175, 0.3)'} !important;
              }
              
              /* Responsive adjustments */
              @media (max-width: 768px) {
                :global(.ti-widget .ti-reviews-container-wrapper) {
                  flex-direction: column !important;
                }
                :global(.ti-widget .ti-review-item) {
                  width: 90% !important;
                  margin: 0.5rem auto !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;