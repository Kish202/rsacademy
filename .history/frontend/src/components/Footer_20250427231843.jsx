import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaArrowRight
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

function Footer() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={`mt-14 rounded-t-3xl flex justify-center relative overflow-hidden
      ${isDarkMode 
        ? ' text-blue-100' 
        : ' text-blue-900'}`}>
      <div className="w-3/6 h-0.5 bg-blue-900 rounded-full absolute drop-shadow-2xl"></div>

      {/* Background Elements */}
      <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl -z-10
        ${isDarkMode ? 'bg-blue-700/5' : 'bg-blue-300/30'}`}></div>
      <div className={`absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl -z-10
        ${isDarkMode ? 'bg-pink-500/5' : 'bg-green-300/20'}`}></div>
        
      <section className="container" data-aos="fade-up" data-aos-duration="1000">
        <div className="grid md:grid-cols-3 py-8 md:px-10">
          {/* Company Info */}
          <div className="py-8 px-4">
            <h1 className={`text-2xl font-bold sm:text-left text-justify mb-4 flex items-center gap-3 font-satoshi
              ${isDarkMode 
                ? 'bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-300 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent'}`}>
              Your Brand
            </h1>
            <p className={`text-sm ${isDarkMode ? 'text-blue-100/80' : 'text-blue-800/80'}`}>
              Discover your inner potential to innovate and create. 
              We will help you, we will stand with you throughout this entire journey.
            </p>
            <br />
            
            {/* Contact Info with Neuomorphic Cards */}
            <div className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300
              ${isDarkMode 
                ? 'bg-blue-800/50 shadow-[3px_3px_5px_rgba(0,0,0,0.4),-2px_-2px_5px_rgba(70,100,150,0.1)]' 
                : 'bg-white/80 shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]'}`}>
              <FaLocationArrow className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
              <p>Your Location</p>
            </div>
            
            <div className={`flex items-center gap-3 mt-4 p-3 rounded-lg transition-all duration-300
              ${isDarkMode 
                ? 'bg-blue-800/50 shadow-[3px_3px_5px_rgba(0,0,0,0.4),-2px_-2px_5px_rgba(70,100,150,0.1)]' 
                : 'bg-white/80 shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]'}`}>
              <FaMobileAlt className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
              <p>+91 123456-7890</p>
            </div>
          
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className={`text-2xl transition-all duration-300 transform hover:scale-110
                  ${isDarkMode 
                    ? 'text-pink-400 hover:text-pink-300' 
                    : 'text-blue-600 hover:text-blue-500'}`}>
                <FaInstagram />
              </a>

              <a 
                href="#" 
                className={`text-2xl transition-all duration-300 transform hover:scale-110
                  ${isDarkMode 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-500'}`}>
                <FaFacebook />
              </a>

              <a 
                href="#" 
                className={`text-2xl transition-all duration-300 transform hover:scale-110
                  ${isDarkMode 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-500'}`}>
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-3 sm:grid-cols-3 col-span-2 sm:pl-10">
            {/* Important Links Column */}
            <div className="md:pl-10">
              <div className="py-8 px-4">
                <h1 className={`text-xl font-bold sm:text-left text-justify mb-4 font-satoshi
                  ${isDarkMode 
                    ? 'bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent'}`}>
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li key={index} className="transition-all duration-300 group">
                      <a 
                        href={link.link}
                        className="flex items-center gap-2">
                        <FaArrowRight 
                          className={`text-xs transition-all duration-300
                          ${isDarkMode ? 'text-blue-400 hover:text-yellow-300 group-hover:translate-x-1' : 'text-blue-600 hover:text-green-600 hover:translate-x-1 hover:rotate-90'}`} 
                        />
                        <span 
                          className={`transition-all duration-300
                          ${isDarkMode ? 'text-blue-100/70 hover:text-yellow-300 group-hover:translate-x-1' : 'text-blue-800/70 hover:text-green-600 hover:translate-x-1'}`}>
                          {link.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Links Column */}
            <div className="md:pl-10">
              <div className="py-8 px-4">
                <h1 className={`text-xl font-bold sm:text-left text-justify mb-4 font-satoshi
                  ${isDarkMode 
                    ? 'bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'}`}>
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li key={index} className="transition-all duration-300 group">
                      <a 
                        href={link.link}
                        className="flex items-center gap-2">
                        <FaArrowRight 
                          className={`text-xs transition-all duration-300
                          ${isDarkMode ? 'text-blue-400 hover:text-yellow-300 group-hover:translate-x-1 ' : 'text-blue-600 hover:text-green-600 hover:translate-x-1 hover:rotate-90'}`} 
                        />
                        <span 
                          className={`transition-all duration-300
                          ${isDarkMode ? 'text-blue-100/70 hover:text-yellow-300 group-hover:translate-x-1' : 'text-blue-800/70 hover:text-green-600 hover:translate-x-1'}`}>
                          {link.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Location Column */}
            <div className="md:pl-10">
              <div className="py-8 px-4">
                <h1 className={`text-xl font-bold sm:text-left text-justify mb-4 font-satoshi
                  ${isDarkMode 
                    ? 'bg-gradient-to-br from-yellow-300 via-pink-400 to-yellow-200 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-br from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent'}`}>
                  Services
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li key={index} className="transition-all duration-300 group">
                      <a 
                        href={link.link}
                        className="flex items-center gap-2">
                        <FaArrowRight 
                          className={`text-xs transition-all duration-300
                          ${isDarkMode ? 'text-blue-400 hover:text-yellow-300 group-hover:translate-x-1 ' : 'text-blue-600 hover:text-green-600 hover:translate-x-1 hover:rotate-90'}`} 
                        />
                        <span 
                          className={`transition-all duration-300
                          ${isDarkMode ? 'text-blue-100/70 hover:text-yellow-300 hover:translate-x-1' : 'text-blue-800/70 hover:text-green-600 hover:translate-x-1'}`}>
                          {link.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section with Neuomorphic Divider */}
        <div className={`text-center py-4 relative
          ${isDarkMode ? 'text-blue-100/70' : 'text-blue-800/70'}`}>
          <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 h-px w-4/5 
            ${isDarkMode 
              ? 'bg-gradient-to-r from-transparent via-blue-500/20 to-transparent' 
              : 'bg-gradient-to-r from-transparent via-blue-300 to-transparent'}`}>
          </div>
          <p className="text-sm font-satoshi">
            © {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
