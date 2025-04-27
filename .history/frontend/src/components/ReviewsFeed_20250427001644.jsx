import { useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Note: You'll need to add these CSS imports at the top of your file or in your global CSS:
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
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
    <div className="w-full py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent mb-6 border-b-2 border-transparent hover:border-b-2 hover:border-blue-700">
            Student Success Stories
          </h2>
          <p className="text-lg text-blue-700/70 max-w-2xl mx-auto">
            Hear from students who found their perfect academic fit through our platform.
          </p>
        </div>

        {/* Google Reviews Section - Main content */}
        <div className="relative px-8 mb-10">
          {/* Custom navigation arrows for Trustindex widget */}
          <button 
            onClick={() => {
              if (typeof window !== 'undefined' && window.Trustindex) {
                window.Trustindex.changeSlide('e8f4a94456ec335e1a86833fb4e', 'prev');
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="text-blue-700" size={20} />
          </button>
          
          <button 
            onClick={() => {
              if (typeof window !== 'undefined' && window.Trustindex) {
                window.Trustindex.changeSlide('e8f4a94456ec335e1a86833fb4e', 'next');
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="text-blue-700" size={20} />
          </button>

          {/* Google Reviews wrapper */}
          <div className="rounded-xl shadow-lg p-6 mx-auto max-w-6xl bg-gradient-to-tr from-blue-50 via-white to-green-50">
            {/* Trustindex widget container */}
            <div 
              className="trustindex-widget transform transition-all" 
              data-widget-id="e8f4a94456ec335e1a86833fb4e"
              data-no-script="1"
            ></div>
            
            {/* Custom styling to override Trustindex defaults */}
            <style jsx>{`
              /* Custom styles to match your theme and make the widget responsive */
              :global(.ti-widget) {
                max-width: 100% !important;
                background: transparent !important;
                border-radius: 1rem !important;
                overflow: hidden !important;
              }
              
              :global(.ti-stars .ti-star) {
                color: #FBBF24 !important; /* Match your yellow star color */
              }
              
              :global(.ti-widget .ti-review-item) {
                background: rgba(255, 255, 255, 0.7) !important;
                backdrop-filter: blur(5px) !important;
                border-radius: 0.75rem !important;
                margin: 0.5rem !important;
                transition: all 0.3s ease !important;
                border: 1px solid rgba(59, 130, 246, 0.2) !important;
                box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #ffffff !important;
              }
              
              :global(.ti-widget .ti-review-item:hover) {
                transform: translateY(-5px) !important;
                box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff !important;
              }

              :global(.ti-widget .ti-review-content) {
                color: #1e40af !important; /* Blue-800 color for review text */
                font-style: italic !important;
              }

              :global(.ti-widget .ti-review-header) {
                margin-bottom: 0.75rem !important;
              }

              :global(.ti-widget .ti-profile-img) {
                border: 2px solid #bfdbfe !important; /* Blue-200 */
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1) !important;
              }

              :global(.ti-widget .ti-name) {
                color: #1e40af !important; /* Blue-800 */
                font-weight: 600 !important;
              }

              :global(.ti-widget .ti-date) {
                color: #3b82f6 !important; /* Blue-500 */
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

        {/* Additional Featured Testimonials Section */}
      
      </div>
    </div>
  );
};

export default TestimonialSection;