import { useRef, useEffect } from 'react';
import { useTheme } from "../context/ThemeContext";

const TestimonialSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Load Trustindex script
  useEffect(() => {
    // Only load if not already loaded
    if (!document.getElementById('trustindex-script')) {
      const script = document.createElement('script');
      script.id = 'trustindex-script';
      script.src = 'https://cdn.trustindex.io/loader.js?e8f4a94456ec335e1a86833fb4e'></script>';
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
    <div className={`w-full py-16 relative overflow-hidden`}>
      {/* Background Elements */}
      <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl -z-10
        ${isDarkMode ? 'bg-yellow-500' : 'bg-blue-300'}`}></div>
      <div className={`absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl -z-10
        ${isDarkMode ? 'bg-pink-500' : 'bg-green-300'}`}></div>
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

        {/* Google Reviews Section - Simplified with no background */}
      </div>
    </div>
  );
};

export default TestimonialSection;