// App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
// Import your page components



function App() {
  return (
    <BrowserRouterRouter>  
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-blue-900 bg-gray-50">
       
        <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
    
          </Routes>
        </div>
      </div>
    </ThemeProvider>
    </BrowserRouterRouter>
  );
}

export default App;


