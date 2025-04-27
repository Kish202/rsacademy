import { useTheme } from "../context/ThemeContext";

const TestimonialSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Use the direct embed iframe code that TrustIndex provides in their dashboard
  // Replace this with your actual embed code from TrustIndex
  const embedCode = `<iframe src="https://www.trustindex.io/widget-iframe/8f93f8945523338f0146d60a1b4" 
    scrolling="no" 
    width="100%" 
    height="350" 
    frameborder="0">
  </iframe>`;
  
  return (
    <section className="py-16 relative">
      <h2 className={`text-center text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        What Our Customers Say
      </h2>
      
      <div className="max-w-5xl mx-auto px-4">
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      </div>
    </section>
  );
};

export default TestimonialSection;