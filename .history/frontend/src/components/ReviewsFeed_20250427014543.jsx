import { useEffect } from 'react';
import { useTheme } from "../context/ThemeContext";

const TestimonialSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Load Trustindex script only once
  useEffect(() => {
    if (!document.getElementById('trustindex-script')) {
      const script = document.createElement('script');
      script.id = 'trustindex-script';
      script.src = 'https://cdn.trustindex.io/loader.js?8f93f8945523338f0146d60a1b4';
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []); // <- run once only!

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
    <section className="mt-0 pt-0 !bg-transparent">
      {isDarkMode && (
        <div className="absolute inset-0 z-0 bg-transparent"></div>
      )}

      <div className={`trustindex-container ${isDarkMode ? 'bg' : 'light-mode'} ml-10 mr-10`}>
        <div className="trustindex-widget"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;
