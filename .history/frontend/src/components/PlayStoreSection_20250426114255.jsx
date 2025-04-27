import React, { useEffect, useRef } from 'react';
import { Smartphone } from 'lucide-react';

export default function PlayStoreSection({ darkMode }) {
  const appRef = useRef(null);

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

    const current = appRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const neuCard = darkMode
    ? 'bg-blue-800 shadow-lg border border-blue-700'
    : 'bg-blue-50 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.7)]';

  return (
    <section 
      ref={appRef}
      className="py-16 md:py-24 transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4">
        <div className={`rounded-3xl overflow-hidden ${neuCard}`}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className={`inline-flex items-center mb-4 gap-2 ${
                darkMode ? 'text-yellow-300' : 'text-yellow-500'
              }`}>
                <Smartphone size={24} />
                <span className="font-medium">Mobile App</span>
              </div>
              
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                darkMode ? 'text-pink-300' : 'text-pink-500'
              }`}>
                Learning on the Go
              </h2>
              
              <p className={`text-lg mb-8 ${
                darkMode ? 'text-blue-100' : 'text-blue-700'
              }`}>
                Download our app to access learning materials, track progress, and communicate with teachers—all from your mobile device.
              </p>
              
              <div className="space-y-4 mb-8">
                {["Track your child's progress", "Access learning materials", "Get instant notifications", "Schedule sessions"].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`mr-3 p-1 rounded-full ${
                      darkMode ? 'bg-yellow-400 text-blue-900' : 'bg-yellow-400 text-blue-800'
                    }`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className={darkMode ? 'text-blue-100' : 'text-blue-700'}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://play.google.com/store/apps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="/api/placeholder/200/60" 
                  alt="Get it on Google Play" 
                  className="h-14 w-auto hover:opacity-90 transition-opacity" 
                />
              </a>
            </div>
            
            <div className={`w-full md:w-1/2 ${
              darkMode ? 'bg-blue-700' : 'bg-yellow-100'
            } p-8 md:p-0 flex items-center justify-center`}>
              <div className="relative w-64 h-96">
                <img 
                  src="/api/placeholder/320/640" 
                  alt="App screenshot" 
                  className={`rounded-3xl absolute top-0 left-0 ${
                    darkMode ? 'shadow-lg' : 'shadow-[5px_5px_10px_rgba(0,0,0,0.2)]'
                  }`} 
                />
                <img 
                  src="/api/placeholder/320/640" 
                  alt="App screenshot" 
                  className={`rounded-3xl absolute top-8 left-8 ${
                    darkMode ? 'shadow-lg' : 'shadow-[5px_5px_10px_rgba(0,0,0,0.2)]'
                  }`} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}