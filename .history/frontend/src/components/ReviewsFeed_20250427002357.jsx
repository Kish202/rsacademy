import { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";

// Note: You'll need to add these CSS imports at the top of your file or in your global CSS:
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState(null);
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
      {/* Background Elements - Matching hero section */}
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

        {/* Google Reviews Section - Main content with neumorphic styling */}
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

          {/* Google Reviews wrapper with neumorphic styling */}
          <div className={`rounded-2xl p-6 mx-auto max-w-6xl
            ${isDarkMode 
              ? 'bg-blue-900/20 backdrop-blur-sm shadow-[8px_8px_20px_rgba(0,0,0,0.5),-4px_-4px_16px_rgba(50,70,120,0.15)]' 
              : 'bg-white/30 backdrop-blur-sm shadow-[8px_8px_20px_rgba(163,177,198,0.25),-4px_-4px_16px_rgba(255,255,255,0.7)]'}`}
          >
            {/* Trustindex widget container */}
            <div 
              className="trustindex-widget transform transition-all" 
              data-widget-id="e8f4a94456ec335e1a86833fb4e"
              data-no-script="1"
            ></div>
            
            {/* Custom styling to override Trustindex defaults */}
            <style jsx>{`
              /* Custom styles to match your theme */
              :global(.ti-widget) {
                max-width: 100% !important;
                background: transparent !important;
                border-radius: 1rem !important;
                overflow: hidden !important;
              }
              
              :global(.ti-stars .ti-star) {
                color: ${isDarkMode ? '#FBBF24' : '#3B82F6'} !important;
              }
              
              :global(.ti-widget .ti-review-item) {
                background: ${isDarkMode ? 'rgba(30, 58, 138, 0.3)' : 'rgba(255, 255, 255, 0.7)'} !important;
                backdrop-filter: blur(5px) !important;
                border-radius: 0.75rem !important;
                margin: 0.5rem !important;
                transition: all 0.3s ease !important;
                border: ${isDarkMode ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid rgba(255, 255, 255, 0.6)'} !important;
                box-shadow: ${isDarkMode 
                  ? '6px 6px 12px rgba(0, 0, 0, 0.4), -3px -3px 8px rgba(70, 100, 150, 0.2)' 
                  : '6px 6px 12px rgba(163, 177, 198, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.7)'} !important;
              }
              
              :global(.ti-widget .ti-review-item:hover) {
                transform: translateY(-5px) !important;
                box-shadow: ${isDarkMode 
                  ? '8px 8px 16px rgba(0, 0, 0, 0.5), -4px -4px 12px rgba(70, 100, 150, 0.3)' 
                  : '8px 8px 16px rgba(163, 177, 198, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.8)'} !important;
              }

              :global(.ti-widget .ti-review-content) {
                color: ${isDarkMode ? '#93C5FD' : '#1E40AF'} !important;
                font-style: italic !important;
              }

              :global(.ti-widget .ti-review-header) {
                margin-bottom: 0.75rem !important;
              }

              :global(.ti-widget .ti-profile-img) {
                border: ${isDarkMode ? '2px solid #3B82F6' : '2px solid #BFDBFE'} !important;
                box-shadow: ${isDarkMode 
                  ? '0 0 0 2px rgba(59, 130, 246, 0.3)' 
                  : '0 0 0 2px rgba(59, 130, 246, 0.1)'} !important;
              }

              :global(.ti-widget .ti-name) {
                color: ${isDarkMode ? '#93C5FD' : '#1E40AF'} !important;
                font-weight: 600 !important;
              }

              :global(.ti-widget .ti-date) {
                color: ${isDarkMode ? '#60A5FA' : '#3B82F6'} !important;
                opacity: 0.7 !important;
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

        {/* Additional Featured Reviews Section with matching theme */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className={`inline-block text-3xl md:text-4xl lg:text-5xl font-bold font-satoshi leading-tight py-2
              ${isDarkMode 
                ? 'bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent'}`}>
              What Parents Say About Us
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto font-satoshi mt-4
              ${isDarkMode ? 'text-pink-100/80' : 'text-pink-800/80'}`}>
              See how our services have helped families navigate the college selection process
            </p>
          </div>

          {/* Featured reviews in neumorphic cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div
              onMouseEnter={() => setCardHovered(1)}
              onMouseLeave={() => setCardHovered(null)}
              className={`relative rounded-2xl p-6 overflow-hidden transition-all duration-300 transform
                ${cardHovered === 1 ? 'scale-105' : ''}
                ${isDarkMode 
                  ? 'bg-blue-900/20 backdrop-blur-sm border border-blue-500/10' 
                  : 'bg-white/30 backdrop-blur-sm border border-white/20'}
                ${isDarkMode && cardHovered === 1
                  ? 'shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(80,120,200,0.1)]'
                  : isDarkMode 
                    ? 'shadow-[8px_8px_20px_rgba(0,0,0,0.5),-4px_-4px_16px_rgba(50,70,120,0.15)]'
                    : ''}
                ${!isDarkMode && cardHovered === 1
                  ? 'shadow-[inset_3px_3px_7px_rgba(0,0,100,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]'
                  : !isDarkMode
                    ? 'shadow-[8px_8px_20px_rgba(163,177,198,0.25),-4px_-4px_16px_rgba(255,255,255,0.7)]'
                    : ''}
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>
                    Featured Parent Review
                  </h3>
                  <div className="flex mt-1">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} size={16} className={`fill-current ${isDarkMode ? 'text-yellow-300' : 'text-yellow-400'}`} />
                    ))}
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold
                  ${isDarkMode 
                    ? 'bg-gradient-to-br from-yellow-400 to-pink-600' 
                    : 'bg-gradient-to-br from-yellow-400 to-pink-400'}`}
                >
                  G
                </div>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-blue-100/80' : 'text-blue-800/80'}`}>
                "The college matching tool saved us countless hours of research. My daughter found her perfect fit university and received a scholarship we wouldn't have known about otherwise!"
              </p>
              <div className={`text-xs italic mt-4 ${isDarkMode ? 'text-blue-300/60' : 'text-blue-500/60'}`}>
                From Google Reviews
              </div>
            </div>

            {/* Card 2 */}
            <div
              onMouseEnter={() => setCardHovered(2)}
              onMouseLeave={() => setCardHovered(null)}
              className={`relative rounded-2xl p-6 overflow-hidden transition-all duration-300 transform
                ${cardHovered === 2 ? 'scale-105' : ''}
                ${isDarkMode 
                  ? 'bg-blue-900/20 backdrop-blur-sm border border-blue-500/10' 
                  : 'bg-white/30 backdrop-blur-sm border border-white/20'}
                ${isDarkMode && cardHovered === 2
                  ? 'shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(80,120,200,0.1)]'
                  : isDarkMode 
                    ? 'shadow-[8px_8px_20px_rgba(0,0,0,0.5),-4px_-4px_16px_rgba(50,70,120,0.15)]'
                    : ''}
                ${!isDarkMode && cardHovered === 2
                  ? 'shadow-[inset_3px_3px_7px_rgba(0,0,100,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]'
                  : !isDarkMode
                    ? 'shadow-[8px_8px_20px_rgba(163,177,198,0.25),-4px_-4px_16px_rgba(255,255,255,0.7)]'
                    : ''}
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-green-300' : 'text-green-600'}`}>
                    Featured Parent Review
                  </h3>
                  <div className="flex mt-1">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} size={16} className={`fill-current ${isDarkMode ? 'text-green-300' : 'text-green-400'}`} />
                    ))}
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold
                  ${isDarkMode 
                    ? 'bg-gradient-to-br from-green-400 to-blue-600' 
                    : 'bg-gradient-to-br from-green-400 to-blue-400'}`}
                >
                  G
                </div>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-blue-100/80' : 'text-blue-800/80'}`}>
                "The financial aid guidance was a game-changer for our family. We received personalized advice that helped us find affordable options without compromising on quality education."
              </p>
              <div className={`text-xs italic mt-4 ${isDarkMode ? 'text-blue-300/60' : 'text-blue-500/60'}`}>
                From Google Reviews
              </div>
            </div>

            {/* Card 3 */}
            <div
              onMouseEnter={() => setCardHovered(3)}
              onMouseLeave={() => setCardHovered(null)}
              className={`relative rounded-2xl p-6 overflow-hidden transition-all duration-300 transform
                ${cardHovered === 3 ? 'scale-105' : ''}
                ${isDarkMode 
                  ? 'bg-blue-900/20 backdrop-blur-sm border border-blue-500/10' 
                  : 'bg-white/30 backdrop-blur-sm border border-white/20'}
                ${isDarkMode && cardHovered === 3
                  ? 'shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(80,120,200,0.1)]'
                  : isDarkMode 
                    ? 'shadow-[8px_8px_20px_rgba(0,0,0,0.5),-4px_-4px_16px_rgba(50,70,120,0.15)]'
                    : ''}
                ${!isDarkMode && cardHovered === 3
                  ? 'shadow-[inset_3px_3px_7px_rgba(0,0,100,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]'
                  : !isDarkMode
                    ? 'shadow-[8px_8px_20px_rgba(163,177,198,0.25),-4px_-4px_16px_rgba(255,255,255,0.7)]'
                    : ''}
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-pink-300' : 'text-pink-600'}`}>
                    Featured Parent Review
                  </h3>
                  <div className="flex mt-1">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} size={16} className={`fill-current ${isDarkMode ? 'text-pink-300' : 'text-pink-400'}`} />
                    ))}
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold
                  ${isDarkMode 
                    ? 'bg-gradient-to-br from-pink-400 to-blue-600' 
                    : 'bg-gradient-to-br from-pink-400 to-blue-400'}`}
                >
                  G
                </div>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-blue-100/80' : 'text-blue-800/80'}`}>
                "As a parent of a first-generation college student, I was overwhelmed by the process. This service walked us through every step and helped my son get into a top engineering program!"
              </p>
              <div className={`text-xs italic mt-4 ${isDarkMode ? 'text-blue-300/60' : 'text-blue-500/60'}`}>
                From Google Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;