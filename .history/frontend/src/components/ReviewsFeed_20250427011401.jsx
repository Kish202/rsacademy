import { useRef, useEffect } from 'react';
import { useTheme } from "../context/ThemeContext";

const TestimonialSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Load Trustindex script and apply theme overrides
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
    
    // Add custom CSS to override Trustindex styles when in dark mode
    const style = document.createElement('style');
    style.id = 'trustindex-override';
    style.innerHTML = `
      .trustindex-widget,
      .trustindex-widget-container,
      .trustindex-widget * {
        background-color: transparent !important;
      }
      
      /* Additional overrides for dark mode */
      ${isDarkMode ? `
        .trustindex-widget {
          color: #f0f0f0 !important;
        }
        .trustindex-widget .rating-stars {
          filter: brightness(1.2) !important;
        }
      ` : ''}
    `;
    document.head.appendChild(style);
    
    // Clean up on component unmount
    return () => {
      const script = document.getElementById('trustindex-script');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      const styleElement = document.getElementById('trustindex-override');
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, [isDarkMode]);
  
  return (
    <section className="testimonial-section mb-20">
      {/* Background Elements */}
      {isDarkMode && (
        <div className="absolute inset-0 z-0 bg-transparent"></div>
      )}
      
      {/* Headline */}
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-3xl font-bold text-center mb-2">
          Student Success Stories
        </h2>
        <p className="text-center text-lg mb-8">
          Hear from students who found their perfect academic fit through our platform.
        </p>
      </div>
      
      {/* Google Reviews Section with theme-aware container */}
      <div className={`trustindex-container ${isDarkMode ? 'dark-mode' : 'light-mode'} mb-12`}>
        {/* This div will be populated by the Trustindex script */}
        <div className="trustindex-widget"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;