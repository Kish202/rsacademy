import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReviewsFeed({ darkMode }) {
  const reviewsRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Mock reviews data (in a real implementation, this would come from Google Reviews API)
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "RefiningSkills has been transformational for my daughter. She's more confident and excited about learning than ever before!",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      text: "The personalized approach really makes a difference. My son has improved tremendously in mathematics and critical thinking.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Priya Patel",
      rating: 5,
      text: "Excellent teachers who know how to make learning fun. My kids actually look forward to their sessions!",
      date: "2 months ago"
    },
    {
      id: 4,
      name: "James Wilson",
      rating: 4,
      text: "Great curriculum and teaching methods. Very happy with our experience so far.",
      date: "3 months ago"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    const current = reviewsRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const totalSlides = Math.ceil(reviews.length / (window.innerWidth >= 768 ? 3 : 1));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const neuCard = darkMode
    ? 'bg-blue-800 shadow-lg border border-blue-700'
    : 'bg-blue-50 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)]';

  const neuButton = darkMode
    ? 'bg-blue-700 hover:bg-blue-600 text-blue-100'
    : 'bg-blue-100 hover:bg-blue-200 text-blue-700 shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]';

  return (
    <section 
      ref={reviewsRef}
      id="testimonials"
      className="py-16 md:py-24 transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center mb-4 ${
            darkMode ? 'text-yellow-300' : 'text-yellow-500'
          }`}>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} fill="currentColor" size={20} />
              ))}
            </div>
            <span className="ml-2 font-medium">4.9/5 on Google Reviews</span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-yellow-300' : 'text-blue-600'
          }`}>
            What Parents Are <span className={darkMode ? 'text-pink-300' : 'text-pink-500'}>Saying</span>
          </h2>
          
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-blue-100' : 'text-blue-700'
          }`}>
            Hear from families who've experienced the RefiningSkills difference.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full md:w-1/3 flex-shrink-0 px-3">
                  <div className={`h-full ${neuCard} rounded-xl p-6`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full mr-3 flex items-center justify-center ${
                        darkMode ? 'bg-blue-700' : 'bg-yellow-200'
                      }`}>
                        <span className={`font-bold ${
                          darkMode ? 'text-yellow-300' : 'text-blue-700'
                        }`}>
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className={`font-medium ${
                          darkMode ? 'text-blue-100' : 'text-blue-700'
                        }`}>
                          {review.name}
                        </div>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={darkMode ? 'text-yellow-300' : 'text-yellow-500'} 
                              fill="currentColor" 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className={`mb-3 ${
                      darkMode ? 'text-blue-100' : 'text-blue-700'
                    }`}>
                      "{review.text}"
                    </p>
                    
                    <div className={`text-sm ${
                      darkMode ? 'text-blue-300' : 'text-blue-500'
                    }`}>
                      {review.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevSlide}
                className={`p-2 rounded-full ${neuButton}`}
                aria-label="Previous reviews"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex items-center gap-2">
                {[...Array(totalSlides)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentSlide
                        ? (darkMode ? 'bg-pink-400' : 'bg-pink-500')
                        : (darkMode ? 'bg-blue-600' : 'bg-blue-200')
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className={`p-2 rounded-full ${neuButton}`}
                aria-label="Next reviews"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
          
          <div className="flex justify-center mt-8">
            <a 
              href="https://g.co/kgs/example" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center ${
                darkMode ? 'text-yellow-300 hover:text-yellow-400' : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              View all reviews on Google
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}