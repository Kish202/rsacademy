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
      script.src = '';
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
    <section className="testimonial-section mb-20">
      {isDarkMode && (
        <div className="absolute inset-0 z-0 bg-transparent"></div>
      )}

      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-3xl font-bold text-center mb-2">
          Student Success Stories
        </h2>
        <p className="text-center text-lg mb-8">
          Hear from students who found their perfect academic fit through our platform.
        </p>
      </div>

      <div className={`trustindex-container ${isDarkMode ? 'dark-mode' : 'light-mode'} mb-12`}>
        <div className="trustindex-widget"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;
