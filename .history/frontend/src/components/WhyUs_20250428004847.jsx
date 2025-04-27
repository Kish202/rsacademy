import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from '@/components/ui/card';
import student1 from '@/assets/student1.jpg';
import student2 from '@/assets/student2.jpg';
import student3 from ''

// Sample images - replace with your actual imports
const imageUrls = [
  
];

const WhyUsSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const imageHeight = 150; // Height of each image "frame"
  
  useEffect(() => {
    // Clone the first image set and append it at the end to create the illusion of an infinite loop
    const displayedImages = [...imageUrls, ...imageUrls];
    const totalHeight = imageUrls.length * imageHeight;
    let startTime;
    let animationFrameId;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Use elapsed time to calculate position - creates smoother animation
      // Slow down when hovered
      const speed = isHovered ? 0.03 : 0.07;
      const position = -(elapsed * speed) % totalHeight;
      
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateY(${position}px)`;
        
        // If we're near the end of the original set, reset the animation time
        // This creates a perfect loop without any visual jumps
        if (Math.abs(position) >= totalHeight - 5) {
          startTime = timestamp;
        }
      }
      
      animationFrameId = requestAnimationFrame(step);
    };
    
    animationFrameId = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, imageHeight]);

  // Dynamic styles based on theme
  const sectionStyles = isDarkMode 
    ? 'bg-transparent text-yellow-300'
    : 'bg-yellow-500/70 text-blue-900';

  const filmReelStyles = isDarkMode
    ? 'bg-blue-800/70 border-yellow-600/20 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_rgba(255,255,100,0.03)]'
    : 'bg-yellow-200/80 border-yellow-400/30 shadow-[inset_5px_5px_10px_rgba(0,0,0,0.07),inset_-5px_-5px_10px_rgba(255,255,255,0.8)]';

  const headingGradient = isDarkMode
    ? 'bg-gradient-to-r from-yellow-300 via-pink-400 to-green-300 bg-clip-text text-transparent'
    : 'bg-gradient-to-r from-yellow-600 via-pink-600 to-green-600 bg-clip-text text-transparent';

  const featureCardStyle = (index) => {
    // if only thee is need of border
    // const isEven = index % 2 === 0;
    return isDarkMode
    ? `bg-blue-950/50 shadow-[5px_5px_10px_rgba(0,0,0,0.5),-3px_-3px_8px_rgba(30,58,138,0.15)]`
    : `bg-white/60 shadow-[5px_5px_12px_rgba(203,213,225,0.3),-5px_-5px_12px_rgba(255,255,255,0.8)]`; 
  };

  return (
    <section className={`py-20 overflow-hidden ${sectionStyles} bg-yellow-300 backdrop-blur-sm rounded-2xl ${isDarkMode?"!bg-blue-900":""}  `}>
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl -z-10 bg-yellow-400/10"></div>
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full blur-3xl -z-10 bg-pink-400/10"></div>
      {isDarkMode && (
        <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Why Us Content */}
          <div className="w-full lg:w-1/2 space-y-8 pl-20
          " data-aos="fade-right" data-aos-duration="1000" data-aos-once="false">
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

          {/* Right side - Film Reel Slider */}
          <div 
            className="w-full lg:w-1/3 flex justify-center"
            data-aos="fade-left" 
            data-aos-duration="1000"
          >
            {/* Film reel container with film strip design */}
            <div 
              className={`
                relative w-64 h-[500px] rounded-xl overflow-hidden
                ${filmReelStyles}
                before:absolute before:left-0 before:w-full before:h-full before:z-20 
                before:pointer-events-none before:border-y-4 
                ${isDarkMode ? 'before:border-yellow-700/30' : 'before:border-yellow-600/20'}
                before:shadow-[0_0_10px_rgba(0,0,0,0.2)]
              `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Film sprocket holes - left side */}
              <div className="absolute left-1 top-0 bottom-0 w-4 z-10 flex flex-col justify-between py-4 pointer-events-none">
                {Array.from({ length: 20 }).map((_, idx) => (
                  <div 
                    key={`left-${idx}`} 
                    className={`w-2 h-2 rounded-full mx-auto ${isDarkMode ? 'bg-yellow-700/70' : 'bg-yellow-800/50'}`}
                  ></div>
                ))}
              </div>
              
              {/* Film sprocket holes - right side */}
              <div className="absolute right-1 top-0 bottom-0 w-4 z-10 flex flex-col justify-between py-4 pointer-events-none">
                {Array.from({ length: 20 }).map((_, idx) => (
                  <div 
                    key={`right-${idx}`} 
                    className={`w-2 h-2 rounded-full mx-auto ${isDarkMode ? 'bg-yellow-700/70' : 'bg-yellow-800/50'}`}
                  ></div>
                ))}
              </div>
              
              {/* Frame indicator lines */}
              <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
                {Array.from({ length: 10 }).map((_, idx) => (
                  <div 
                    key={`frame-${idx}`} 
                    className={`border-b border-dashed h-[50px] ${isDarkMode ? 'border-yellow-600/20' : 'border-yellow-700/10'}`}
                  ></div>
                ))}
              </div>

              {/* The actual slider content - with a wrapper for positioning */}
              <div className="absolute inset-0 overflow-hidden mx-6">
                <div
                  ref={sliderRef}
                  className="absolute top-0 left-0 right-0"
                >
                  {/* Original image set */}
                  {imageUrls.map((src, imgIndex) => (
                    <div 
                      key={`img-${imgIndex}`} 
                      className="p-2"
                      style={{ height: `${imageHeight}px` }}
                    >
                      <div 
                        className={`
                          relative w-full h-full rounded-md overflow-hidden
                          ${isDarkMode 
                            ? 'bg-gradient-to-br from-yellow-700/40 via-pink-700/30 to-blue-700/40' 
                            : 'bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-100'}
                        `}
                      >
                        <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
                        <img 
                          src={src || `/api/placeholder/180/${imageHeight - 20}`} 
                          alt={`Feature ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-noise-pattern opacity-10 mix-blend-overlay"></div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Duplicate image set for seamless looping */}
                  {imageUrls.map((src, imgIndex) => (
                    <div 
                      key={`img-dup-${imgIndex}`} 
                      className="p-2"
                      style={{ height: `${imageHeight}px` }}
                    >
                      <div 
                        className={`
                          relative w-full h-full rounded-md overflow-hidden
                          ${isDarkMode 
                            ? 'bg-gradient-to-br from-yellow-700/40 via-pink-700/30 to-blue-700/40' 
                            : 'bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-100'}
                        `}
                      >
                        <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
                        <img 
                          src={src || `/api/placeholder/180/${imageHeight - 20}`} 
                          alt={`Feature ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-noise-pattern opacity-10 mix-blend-overlay"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Top and bottom vignette shadows */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/30 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;