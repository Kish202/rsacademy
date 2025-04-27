// ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create theme context
const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
  // Initialize theme state from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    // Check for saved theme in localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      
      // If there's a saved theme, use it
      if (savedTheme) {
        return savedTheme;
      }
      
      // Otherwise, check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    
    // Default to light if no preference found
    return 'light';
  });

  // Update document class and localStorage when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove previous theme class
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = () => {
        // Only update if theme is based on system preference
        if (!localStorage.getItem('theme')) {
          setTheme(mediaQuery.matches ? 'dark' : 'light');
        }
      };
      
      // Add event listener
      mediaQuery.addEventListener('change', handleChange);
      
      // Cleanup
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Theme toggle function
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide theme context to children
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};