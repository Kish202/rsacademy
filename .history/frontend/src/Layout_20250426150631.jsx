import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReviewsFeed from './components/ReviewsFeed';
import InstagramFeed from './components/InstagramFeed';
import AboutUs from './components/AboutUs';
import PlayStoreSection from './components/PlayStoreSection';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';

export default function Layout() {
  // const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white' : 'bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800'}`}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full ${darkMode ? 'bg-blue-800 shadow-inner shadow-blue-950' : 'bg-blue-100 shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]'}`}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
      
      <Header darkMode={darkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <AboutUs darkMode={darkMode} />
        <ReviewsFeed darkMode={darkMode} />
        <InstagramFeed darkMode={darkMode} />
        <PlayStoreSection darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}