import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero({ darkMode }) {
  const heroRef = useRef(null);

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

    const current = heroRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const neuStyle = darkMode
    ? 'bg-blue-800 shadow-lg'
    : 'bg-blue-50 shadow-[10px_10px_20px_rgba(0,0,0,0.1),-10px_-10px_20px_rgba(255,255,255,0.7)]';

  return (
    <section 
      ref={heroRef}
      className="py-16 md:py-24 transition-all duration-700 opacity-0 translate-y-10"
      id="home"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              darkMode ? 'bg-blue-700 text-pink-300' : 'bg-yellow-100 text-pink-500'
            }`}>
              Helping Children Learn & Grow
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
              darkMode ? 'text-yellow-300' : 'text-blue-600'
            }`}>
              Refining Skills For <span className={darkMode ? 'text-pink-300' : 'text-pink-500'}>Young Minds</span>
            </h1>
            
            <p className={`text-lg md:text-xl ${
              darkMode ? 'text-blue-100' : 'text-blue-700'
            }`}>
              Building creativity, confidence, and capabilities through engaging learning experiences designed for children.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className={`rounded-full px-6 py-6 ${
                darkMode 
                  ? 'bg-pink-500 hover:bg-pink-600 text-white' 
                  : 'bg-yellow-400 hover:bg-yellow-500 text-blue-800'
              }`}>
                Book a Free Demo <ArrowRight size={20} className="ml-2" />
              </Button>
              
              <Button variant="outline" className={`rounded-full px-6 py-6 ${
                darkMode 
                  ? 'border-blue-200 text-blue-100 hover:bg-blue-700' 
                  : 'border-blue-300 text-blue-700 hover:bg-blue-100'
              }`}>
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className={`rounded-2xl p-4 ${neuStyle}`}>
              {/* Doodle art or animation would go here */}
              <div className="aspect-video rounded-xl bg-gradient-to-br from-yellow-400 via-pink-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-xl font-bold">Interactive Learning Illustration</div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-4">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === 1 
                      ? (darkMode ? 'bg-yellow-300' : 'bg-yellow-500') 
                      : (darkMode ? 'bg-blue-600' : 'bg-blue-200')
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}