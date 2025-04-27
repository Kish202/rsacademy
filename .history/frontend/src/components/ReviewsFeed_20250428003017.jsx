import { useEffect } from 'react';
import { useTheme } from "../context/ThemeContext";

const TestimonialSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    // Clear any existing TrustIndex scripts to prevent conflicts
    const existingScripts = document.querySelectorAll('script[src*="trustindex"]');
    existingScripts.forEach(script => script.parentNode?.removeChild(script));
    
    // Create and insert the script exactly as TrustIndex provides it
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?8f93f8945523338f0146d60a1b4'; // Use your exact widget ID
    script.async = true;
    document.body.appendChild(script); // Append to body as TrustIndex expects
    
    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Theme-specific styling
  useEffect(() => {
    const styleId = 'trustindex-style-override';
    let style = document.getElementById(styleId);
    
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }
    
    // Add CSS overrides for the theme
    style.textContent = `
      .trustindex-widget {
        background: transparent !important;
      }
      
      .trustindex-widget * {
        background-color: transparent !important;
      }
      
      ${isDarkMode ? `
        .ti-header, .ti-footer, .ti-reviews-container {
          color: #f0f0f0 !important;
        }
        .ti-stars .ti-star {
          filter: brightness(1.2);
        }
      ` : ''}
    `;
    
    return () => {
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isDarkMode]);

  return (
    <section className="py-16 relative">
      <h2 className={`text-center text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        What Our Customers Say
      </h2>
      
      {/* This div is NOT where the widget will automatically appear.
          The script will place the widget at the end of the body by default */}
      <div className="max-w-5xl mx-auto px-4 min-h-[200px]">
        {/* Visual placeholder while widget loads */}
        <div className="text-center py-8">
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            Loading reviews...
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;