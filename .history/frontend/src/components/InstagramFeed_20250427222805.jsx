import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from "../context/ThemeContext";

const InstagramFeed = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
    
    // Clean up function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements - similar to your HeroSection for consistent styling */}
      <div className={`absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl -z-10
        ${isDarkMode ? 'bg-pink-400/10' : 'bg-blue-300/20'}`}></div>
      <div className={`absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl -z-10
        ${isDarkMode ? 'bg-blue-500/10' : 'bg-green-300/20'}`}></div>
        
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <h2 className={`text-3xl md:text-4xl font-bold font-satoshi mb-4
            ${isDarkMode 
              ? 'bg-gradient-to-r from-yellow-300 via-pink-400 to-green-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-blue-800 via-blue-600 to-green-600 bg-clip-text text-transparent'}`}>
            Follow Our Journey
          </h2>
          <p className={`text-lg max-w-2xl mx-auto font-satoshi
            ${isDarkMode ? 'text-blue-100/80' : 'text-blue-800/80'}`}>
            Stay connected with our latest updates, events, and inspirations through our Instagram feed.
          </p>
        </div>
        
        {/* Instagram Feed Container */}
        <Card className={`w-full overflow-hidden border ${
          isDarkMode 
            ? 'border-blue-700/20 bg-blue-900/50 shadow-lg shadow-blue-900/20' 
            : 'border-blue-200 bg-white/80 shadow-lg shadow-blue-200/30'
        }`} data-aos="zoom-in" data-aos-duration="1200">
          <CardContent className="p-6">
            {/* Elfsight Instagram Feed Widget */}
            <div 
              className="elfsight-app-349036a5-61e9-4fe7-93b6-4f6efe5cc23d" 
              data-elfsight-app-lazy>
            </div>
          </CardContent>
        </Card>
        
        {/* Follow Us Button */}
        <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="300">
          <a 
            href="https://instagram.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`
              inline-block px-6 py-3 rounded-xl text-lg font-satoshi transition-all duration-300
              hover:translate-y-0.5
              ${isDarkMode 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-yellow-100 hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(80,120,200,0.1)] shadow-[6px_6px_12px_rgba(0,0,0,0.4),-3px_-3px_8px_rgba(70,100,150,0.2)]' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[inset_3px_3px_7px_rgba(0,0,100,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.8)]'}
            `}>
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;