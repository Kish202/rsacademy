import { useEffect, useRef } from 'react';
import { useTheme } from "../context/ThemeContext";

const TestimonialSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const widgetContainerRef = useRef(null);
  
  useEffect(() => {
    // Only proceed if we have a container reference
    if (!widgetContainerRef.current) return;
    
    // Create a unique container ID
    const containerId = 'trustindex-widget-container-' + Math.random().toString(36).substring(2, 10);
    widgetContainerRef.current.id = containerId;
    
    // Create a div to hold TrustIndex widget
    const trustDiv = document.createElement('div');
    trustDiv.className = 'trustindex-widget';
    trustDiv.setAttribute('data-widget-id', '8f93f8945523338f0146d60a1b4');
    trustDiv.setAttribute('data-no-auto-init', 'true'); // Prevent auto-initialization
    
    // Add it to our container
    widgetContainerRef.current.appendChild(trustDiv);
    
    // Create and load the TrustIndex script
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js';
    script.async = true;
    
    // Important: Initialize the widget after the script loads
    script.onload = () => {
      if (window.Trustindex) {
        // Initialize the widget with your ID
        window.Trustindex.init('8f93f8945523338f0146d60a1b4');
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  
  // Apply theme styles
  useEffect(() => {
    const styleId = 'trustindex-style-override';
    let style = document.getElementById(styleId);
    
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }
    
    style.textContent = `
      .trustindex-widget,
      [class*="trustindex"] {
        background: transparent !important;
      }
      
      .trustindex-widget *,
      [class*="trustindex"] * {
        background-color: transparent !important;
      }
      
      ${isDarkMode ? `
        .ti-widget .ti-header,
        .ti-widget .ti-footer, 
        .ti-widget .ti-reviews-container,
        .ti-widget .ti-review-content,
        .ti-widget .ti-review-header {
          color: #f0f0f0 !important;
        }
        .ti-widget .ti-star {
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
      
      {/* This container will hold our TrustIndex widget */}
      <div 
        ref={widgetContainerRef}
        className="max-w-5xl mx-auto px-4 min-h-[300px]"
      >
        {/* TrustIndex widget will be rendered here */}
      </div>
    </section>
  );
};

export default TestimonialSection;