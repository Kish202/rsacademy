import React, { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

export default function InstagramFeed({ darkMode }) {
  const instaRef = useRef(null);

  // Mock Instagram posts
  const instaPosts = [
    {
      id: 1,
      imageUrl: "/api/placeholder/300/300",
      likes: 124,
      comments: 18,
      caption: "Our students having fun during science experiment day! #LearningIsFun"
    },
    {
      id: 2,
      imageUrl: "/api/placeholder/300/300",
      likes: 156,
      comments: 23,
      caption: "Art class creations - nurturing creativity one project at a time."
    },
    {
      id: 3,
      imageUrl: "/api/placeholder/300/300",
      likes: 98,
      comments: 12,
      caption: "Student spotlight: Congratulations to Maya for her amazing presentation!"
    },
    {
      id: 4,
      imageUrl: "/api/placeholder/300/300",
      likes: 142,
      comments: 15,
      caption: "Building problem-solving skills through fun group activities."
    },
    {
      id: 5,
      imageUrl: "/api/placeholder/300/300",
      likes: 187,
      comments: 27,
      caption: "Our annual summer camp is now open for registrations! Limited spots available."
    },
    {
      id: 6,
      imageUrl: "/api/placeholder/300/300",
      likes: 163,
      comments: 19,
      caption: "Behind the scenes - preparing for our end-of-year celebration."
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

    const current = instaRef.current;
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
    ? 'bg-blue-800 shadow-inner shadow-blue-900'
    : 'bg-blue-50 shadow-inner shadow-blue-100';

  return (
    <section 
      ref={instaRef}
      className="py-16 md:py-24 transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center mb-4 gap-2 ${
            darkMode ? 'text-pink-300' : 'text-pink-500'
          }`}>
            <Instagram size={24} />
            <span className="font-medium">@refiningskills</span>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-yellow-300' : 'text-blue-600'
          }`}>
            Follow Our <span className={darkMode ? 'text-pink-300' : 'text-pink-500'}>Journey</span>
          </h2>
          
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-blue-100' : 'text-blue-700'
          }`}>
            Get a glimpse of our engaging learning activities and student achievements.
          </p>
        </div>

        <div className={`p-6 rounded-2xl ${neuCard}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {instaPosts.map((post) => (
              <div 
                key={post.id} 
                className={`overflow-hidden rounded-lg group relative ${
                  darkMode
                    ? 'shadow-[3px_3px_6px_rgba(0,0,0,0.2)]'
                    : 'shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]'
                }`}
              >
                <img 
                  src={post.imageUrl} 
                  alt={post.caption} 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="text-white text-sm line-clamp-2 mb-2">{post.caption}</div>
                  <div className="flex text-white text-xs gap-3">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://instagram.com/refiningskills" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 py-3 rounded-full ${
                darkMode 
                  ? 'bg-pink-500 hover:bg-pink-600 text-white' 
                  : 'bg-pink-500 hover:bg-pink-600 text-white'
              }`}
            >
              <Instagram size={20} className="mr-2" />
              Follow us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}