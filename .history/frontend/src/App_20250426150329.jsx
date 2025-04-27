import { useState,useEffect } from 'react'
import './App.css'
import './index.css'

import Layout from './Layout';

export default function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
  );
 

  const element = document.documentElement;

useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
                  }, [theme]);

  return 
  
 
 <Layout />;

  
 
  }

