import { useEffect, useRef } from 'react';
import { useTheme } from "../context/ThemeContext";

const TestimonialSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const containerRef = useRef(null);

  useEffect(() => {
    // First, clean up any existing TrustIndex elements to prevent duplicates
    const existingWidgets = document.querySelectorAll('[class*="trustindex"]');
    existingWidgets.forEach(widget => {
      if (widget.parentNode) {
        widget.parentNode.removeChild(widget);
      }
    });
    
    // Remove any existing scripts to prevent duplicates
    const existingScripts = document.querySelectorAll('script[src*="trustindex"]');
    existingScripts.forEach(script => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });
    
    // Add a configuration for the TrustIndex script
    window.Trustindex = window.Trustindex || {};
    window.Trustindex.loadWidgetFromParameters = {
      container_id: 'trustindex-widget-container',
      widget_id: '8f93f8945523338f0146d60a1b4',
      no_auto_load: true // This prevents automatic loading
    };
    
    // Create the container where TrustIndex will insert the widget
    if (!document.getElementById('trustindex-widget-container') && containerRef.current) {
      const widgetContainer = document.createElement('div');
      widgetContainer.id = 'trustindex-widget-container';
      containerRef.current.appendChild(widgetContainer);
    }

    // Now load the script
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js';
    script.async = true;
    script.onload = () => {
      // Manually trigger the widget loading once the script is ready
      if (window.Trustindex && window.Trustindex.loadWidgetWithParams) {
        window.Trustindex.loadWidgetWithParams('8f93f8945523338f0146d60a1b4');
      }
    };
    document.head.appendChild(script);

    return () => {
      // Clean up on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Clean up the configuration
      delete window.Trustindex;
    };
  }, []); // Only run on mount

  // Theme-based styling
  useEffect(() => {
    let style = document.getElementById('trustindex-override');
    if (!style) {
      style = document.createElement('style');
      style.id = 'trustindex-override';
      document.head.appendChild(style);
    }

    style.innerHTML = `
      /* Make backgrounds transparent */
      .trustindex-widget,
      .trustindex-widget-container,
      .trustindex-widget * {
        background-color: transparent !important;
      }

      /* Theme-specific styling */
      ${isDarkMode ? `
        .trustindex-widget .rating-stars {
          filter: brightness(1.2) !important;
        }
      ` : `
        .trustindex-widget .rating-stars {
          filter: none !important;
        }
      `}
    `;

    return () => {
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isDarkMode]);

  return (
    <section className="my-16 py-10 relative">
      <h2 className={`text-center text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        What Our Customers Say
      </h2>
      
      <div 
        ref={containerRef} 
        className={`max-w-5xl mx-auto px-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
        style={{ minHeight: '250px' }}
      >
        {/* TrustIndex widget will be inserted here */}
      </div>
    </section>
  );
};

export default TestimonialSection;