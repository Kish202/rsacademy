import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

export default function AboutUs({ darkMode }) {
  const aboutRef = useRef(null);

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

    const current = aboutRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const benefits = [
    "Personalized learning paths for each child",
    "Experienced teachers with education backgrounds",
    "Fun, interactive curriculum that builds confidence",
    "Regular progress updates for parents",
    "Small group sizes for better attention"
  ];

  const neuCard = darkMode
    ? 'bg-blue-800 shadow-lg border border-blue-700'
    : 'bg-blue-50 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)]';

  return (
    <section 
      ref={aboutRef}
      id="about"
      className="py-16 md:py-24 transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-yellow-300' : 'text-blue-600'
          }`}>
            Why Choose <span className={darkMode ? 'text-pink-300' : 'text-pink-500'}>Us</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-blue-100' : 'text-blue-700'
          }`}>
            At RefiningSkills, we believe in nurturing young minds through creative and engaging learning experiences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className={`rounded-2xl p-6 ${neuCard}`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-pink-300' : 'text-pink-500'
              }`}>
                Our Approach to Learning
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`mt-1 mr-3 p-1 rounded-full ${
                      darkMode ? 'bg-yellow-400 text-blue-900' : 'bg-yellow-400 text-blue-800'
                    }`}>
                      <Check size={16} />
                    </div>
                    <p className={darkMode ? 'text-blue-100' : 'text-blue-700'}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className={`mt-8 p-4 rounded-lg ${
                darkMode ? 'bg-blue-700' : 'bg-blue-100'
              }`}>
                <p className={`italic text-sm ${
                  darkMode ? 'text-blue-100' : 'text-blue-700'
                }`}>
                  "We don't just teach—we inspire. Every child deserves an education that sparks curiosity and builds confidence for a lifetime of learning."
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className={`rounded-2xl overflow-hidden ${
              darkMode ? 'shadow-lg' : 'shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.7)]'
            }`}>
              {/* This would be an image or animation in the final implementation */}
              <div className="aspect-square bg-gradient-to-br from-blue-400 via-pink-400 to-yellow-400 flex items-center justify-center p-8">
                <div className={`text-center ${darkMode ? 'text-white' : 'text-blue-800'}`}>
                  <div className="text-xl font-bold mb-2">15+ Years Experience</div>
                  <div className="text-lg font-medium mb-2">500+ Happy Students</div>
                  <div className="text-lg font-medium">100% Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}