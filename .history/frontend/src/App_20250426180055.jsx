// App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';


function App() {
  return (
    <Router>  
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
    </Router>
  );
}

export default App;


