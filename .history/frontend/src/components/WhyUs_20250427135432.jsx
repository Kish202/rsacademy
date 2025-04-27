import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';

// Sample images - replace with your actual imports
const imageUrls = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
  '/images/slide5.jpg',
  '/images/slide6.jpg',
];

const WhyUsSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const sliderRef = useRef(null);
  const [sliderHeight, setSliderHeight] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate slider total height once mounted
  useEffect(() => {
    if (sliderRef.current) {
      const height = sliderRef.current.scrollHeight;
      setSliderHeight(height);
    }
  }, []);

  // Animation for the slider
  useEffect(() => {
    const slideSpeed = isHovered ? 0.5 : 1; // Slow down when hovered
    const animationFrame = requestAnimationFrame(function animate() {
      setSliderPosition(prev => {
        // Reset position when slider has scrolled through once
        if (Math.abs(prev) >= sliderHeight / 2) {
          return 0;
        }
        return prev - slideSpeed;
      });
      
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [sliderHeight, isHovered]);

  // Dynamic styles based on theme
  const sectionStyles = isDarkMode 
    ? 'bg-gray-900 text-yellow-300'
    : 'bg-yellow-50 text-blue-900';

  const cardStyles = isDarkMode
    ? 'bg-gray-800/80 border-yellow-600/30 shadow-[8px_8px_16px_rgba(0,0,0,0.3),-4px_-4px_16px_rgba(255,255,200,0.05)]'
    : 'bg-white/80 border-yellow-400/30 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-6px_-6px_16px_rgba(255,255,255,0.8)]';

  const headingGradient = isDarkMode
    ? 'bg-gradient-to-r from-yellow-300 via-pink-400 to-green-300 bg-clip-text text-transparent'
    : 'bg-gradient-to-r from-yellow-600 via-pink-600 to-green-600 bg-clip-text text-transparent';

  const featureCardStyle = (index) => {
    const isEven = index % 2 === 0;
    return isDarkMode
      ? `bg-gray-800/50 border-${isEven ? 'yellow' : 'blue'}-500/20 shadow-[5px_5px_10px_rgba(0,0,0,0.3),-3px_-3px_8px_rgba(255,255,200,0.05)]`
      : `bg-white/60 border-${isEven ? 'yellow' : 'blue'}-300/30 shadow-[5px_5px_12px_rgba(0,0,0,0.08),-5px_-5px_12px_rgba(255,255,255,0.9)]`;
  };

  return (
    <section className={`py-20 overflow-hidden ${sectionStyles}`}>
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl -z-10 bg-yellow-400/10"></div>
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full blur-3xl -z-10 bg-pink-400/10"></div>
      {isDarkMode && (
        <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Why Us Content */}
          <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right" data-aos-duration="1000" data-aos-once="false">
            <div>
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold font-satoshi ${headingGradient} mb-6`}>
                Why Us?
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-yellow-100/80' : 'text-yellow-800/80'} max-w-lg mb-8`}>
                We combine innovation, expertise, and personalized attention to bring you the best experience in the industry.
              </p>
            </div>

            {/* Features Cards - with neuomorphic design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Expert Guidance", description: "Learn from industry leaders with years of experience", icon: "✨" },
                { title: "Personalized Approach", description: "Customized learning paths for your unique needs", icon: "🔍" },
                { title: "Cutting-Edge Technology", description: "Access to the latest tools and platforms", icon: "💻" },
                { title: "Community Support", description: "Join our thriving community of learners", icon: "👥" }
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className={`rounded-xl border p-4 transition-all duration-300 hover:translate-y-[-5px] ${featureCardStyle(index)}`}
                  data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                  data-aos-delay={200 + (index * 100)}
                  data-aos-once="false"
                >
                  <CardContent className="p-2">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                      {feature.title}
                    </h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Upward Image Slider */}
          <div 
            className="w-full lg:w-2/5 h-[500px] overflow-hidden rounded-2xl relative"
            data-aos="fade-left" 
            data-aos-duration="1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Neuomorphic frame for the slider */}
            <div className={`
              absolute inset-0 rounded-2xl z-10 pointer-events-none
              ${isDarkMode 
                ? 'shadow-[inset_4px_4px_10px_rgba(0,0,0,0.7),inset_-2px_-2px_5px_rgba(255,255,200,0.06)]' 
                : 'shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]'}
            `}></div>

            {/* The slider container */}
            <div 
              ref={sliderRef}
              className="flex flex-col transition-transform ease-linear"
              style={{ transform: `translateY(${sliderPosition}px)` }}
            >
              {/* Double the images to create seamless looping effect */}
              {[...imageUrls, ...imageUrls].map((src, index) => (
                <div 
                  key={index} 
                  className="p-3 transition-opacity duration-300"
                  style={{ opacity: isHovered ? '1' : '0.85' }}
                >
                  <Card className={`overflow-hidden aspect-[3/4] border-0 ${cardStyles}`}>
                    <div className="relative h-full">
                      {/* Placeholder if you don't have actual images */}
                      <div 
                        className={`absolute inset-0 flex items-center justify-center 
                          ${isDarkMode 
                            ? 'bg-gradient-to-br from-yellow-700/40 via-pink-700/30 to-blue-700/50' 
                            : 'bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-100'}`}
                      >
                        {/* You can replace this with actual images */}
                        <img 
                          src={src || `/api/placeholder/300/400`} 
                          alt="Feature"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;