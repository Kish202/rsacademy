// App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import {useEffect} from 'react';
// Import your page components

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
     
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>  
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-blue-200 to-blue-100 dark:from-blue-950 dark:to-blue-900 ">
       
        <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
    
          </Routes>
        </div>
      </div>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;


