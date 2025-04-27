import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer({ darkMode }) {
  const neuCard = darkMode
    ? 'bg-blue-800 shadow-inner shadow-blue-900'
    : 'bg-blue-50 shadow-inner shadow-blue-100';

  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className={`pt-16 pb-8 ${darkMode ? 'bg-blue-900' : 'bg-blue-100'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className={`text-2xl font-bold mb-4 ${darkMode ? 'text-pink-300' : 'text-pink-500'}`}>
              RefiningSkills
            </div>
            <p className={`mb-6 ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>
              Nurturing young minds through creative and engaging learning experiences.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`p-2 rounded-full ${
                    darkMode 
                      ? 'bg-blue-800 hover:bg-blue-700 text-blue-100' 
                      : 'bg-white hover:bg-blue-50 text-blue-700 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]'
                  }`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className={`font-bold mb-4 ${darkMode ? 'text-yellow-300' : 'text-blue-600'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Programs', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className={`hover:underline ${
                      darkMode ? 'text-blue-100 hover:text-yellow-300' : 'text-blue-700 hover:text-pink-500'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`font-bold mb-4 ${darkMode ? 'text-yellow-300' : 'text-blue-600'}`}>
              Programs
            </h3>
            <ul className="space-y-2">
              {['Early Learning', 'Elementary Education', 'Middle School', 'High School', 'Summer Camps'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className={`hover:underline ${
                      darkMode ? 'text-blue-100 hover:text-yellow-300' : 'text-blue-700 hover:text-pink-500'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`font-bold mb-4 ${darkMode ? 'text-yellow-300' : 'text-blue-600'}`}>
              Contact
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: '+1 (555) 123-4567' },
                { icon: Mail, text: 'info@refiningskills.org' },
                { icon: MapPin, text: '123 Learning Lane, Education City, EC 12345' }
              ].map((item, index) => (
                <li key={index} className="flex">
                  <item.icon 
                    size={18} 
                    className={`mr-2 flex-shrink-0 ${
                      darkMode ? 'text-pink-300' : 'text-pink-500'
                    }`} 
                  />
                  <span className={darkMode ? 'text-blue-100' : 'text-blue-700'}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={`rounded-2xl ${neuCard} p-6 mb-12`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-yellow-300' : 'text-blue-600'
              }`}>
                Subscribe to Our Newsletter
              </h3>
              <p className={darkMode ? 'text-blue-100' : 'text-blue-700'}>
                Stay updated with our latest programs and educational tips.
              </p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className={`px-4 py-2 rounded-lg md:w-64 ${
                  darkMode 
                    ? 'bg-blue-700 text-white placeholder-blue-300 border border-blue-600' 
                    : 'bg-white text-blue-800 placeholder-blue-400 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]'
                }`}
              />
              
              <Button className={`rounded-lg ${
                darkMode 
                  ? 'bg-yellow-400 hover:bg-yellow-500 text-blue-900' 
                  : 'bg-pink-500 hover:bg-pink-600 text-white'
              }`}>
                Subscribe <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className={`text-center pt-8 border-t ${
          darkMode ? 'border-blue-800 text-blue-300' : 'border-blue-200 text-blue-600'
        }`}>
          <p>© {currentYear} RefiningSkills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}