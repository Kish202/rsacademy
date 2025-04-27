import { useEffect, useRef } from 'react';
import { useTheme } from "../context/ThemeContext";

const TestimonialSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const containerRef = useRef(null);

  // Load Trustindex script only once
  useEffect(() => {
    if (!document.getElementById('trustindex-script')) {
      const script = document.createElement('script');
      script.id = 'trustindex-script';
      script.src = 'https://cdn.trustindex.io/loader.js?8f93f8945523338f0146d60a1b4';
      script.defer = true;
      script.async = true;
      
      // Add a data attribute that we can use to move the widget later
      script.dataset.trustindex = 'true';
      
      document.body.appendChild(script);
      
      // Set up a mutation observer to catch when TrustIndex adds its widget to the DOM
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.addedNodes.length) {
            // Look for the TrustIndex widget container
            const trustWidgets = document.querySelectorAll('.trustindex-widget, [class*="trustindex"]');
            
            if (trustWidgets.length && containerRef.current) {
              // Move each widget into our container
              trustWidgets.forEach(widget => {
                if (!containerRef.current.contains(widget)) {
                  containerRef.current.appendChild(widget);
                }
              });
            }
          }
        }
      });
      
      // Start observing the document body for added nodes
      observer.observe(document.body, { childList: true, subtree: true });
      
      // Clean up the observer when component unmounts
      return () => observer.disconnect();
    }
  }, []);

  // Handle custom styles based on theme
  useEffect(() => {
    let style = document.getElementById('trustindex-override');
    if (!style) {
      style = document.createElement('style');
      style.id = 'trustindex-override';
      document.head.appendChild(style);
    }

    style.innerHTML = `
      /* Always make backgrounds transparent */
      .trustindex-widget,
      .trustindex-widget-container,
      .trustindex-widget * {
        background-color: transparent !important;
      }

      /* Only in dark mode: slightly brighten star icons */
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

    // Optional: cleanup
    return () => {
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isDarkMode]);

  return (
    <section className="mt-0 pt-0 !bg-transparent relative z-10">
      {isDarkMode && (
        <div className="absolute inset-0 z-0 bg-transparent"></div>
      )}

      <div 
        ref={containerRef}
        className={`trustindex-container ${isDarkMode ? 'dark-mode' : 'light-mode'} min-h-[200px]`}
      >
        {/* TrustIndex widget will be moved here */}
      </div>
    </section>
  );
};

export default TestimonialSection;
