// App.jsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-blue-900 bg-gray-50">
        <Navbar />
        <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
    
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;


