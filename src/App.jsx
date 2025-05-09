import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ChatWidget from './ChatWidget';
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', licenseType: '', message: ''
  });
  const [errors, setErrors] = useState({});

  // Dark mode handling
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    const isDark = savedTheme ? JSON.parse(savedTheme) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
      newErrors.email = 'Valid email is required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'License type is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 left-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Header with Logo */}
      <header className="flex items-center justify-between p-4 bg-blue-600 dark:bg-blue-800 sticky top-0 z-40 shadow-md">
        <div className="flex items-center space-x-3">
          <svg width="40" height="40" viewBox="0 0 40 40" className="h-10 w-10">
            <rect width="40" height="40" rx="8" className="fill-blue-400 dark:fill-blue-600"/>
            <path d="M20 12L25 20L20 28L15 20L20 12Z" className="fill-white"/>
            <circle cx="20" cy="20" r="4" className="fill-blue-400 dark:fill-blue-600"/>
          </svg>
          <span className="text-xl font-bold text-white">SoftSell</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="text-white hover:text-blue-200 transition-colors">Home</a>
          <a href="#why" className="text-white hover:text-blue-200 transition-colors">How It Works</a>
          <a href="#ter" className="text-white hover:text-blue-200 transition-colors">Testimonials</a>
          <a href="#con" className="text-white hover:text-blue-200 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white pt-24 pb-20 text-center relative overflow-hidden">
        {/* Shooting Stars */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`hero-star-${i}`}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 relative z-10"
        >
          Sell Your Software Licenses with Ease
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mb-6"
        >
          Get top value for your unused software licenses in just a few clicks.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
        >
          Get a Quote
        </motion.button>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 dark:bg-gray-800" id='work'>
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Upload License', desc: 'Submit your software license details securely.', icon: '📤' },
            { title: 'Get Valuation', desc: 'Receive a fair and transparent valuation.', icon: '💸' },
            { title: 'Get Paid', desc: 'Cash out quickly with secure payments.', icon: '🏦' }
          ].map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow dark:shadow-gray-600"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{step.title}</h3>
              <p className="dark:text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 dark:bg-gray-700 py-16 px-4" id='why'>
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Why Choose SoftSell?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: 'Trusted Platform', desc: 'Secure and reliable transactions.', icon: '🔒' },
            { title: 'Fast Payments', desc: 'Get paid in days, not weeks.', icon: '⚡' },
            { title: 'Expert Support', desc: '24/7 help from our team.', icon: '🤝' },
            { title: 'Fair Valuations', desc: 'Maximize your license value.', icon: '📈' }
          ].map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-gray-600"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">{reason.title}</h3>
              <p className="dark:text-gray-300">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 dark:bg-gray-800" id='ter'>
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What Our Customers Say</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'Jane Doe', role: 'IT Manager', company: 'TechCorp', quote: 'SoftSell made selling our unused licenses a breeze. Fast and reliable!' },
            { name: 'John Smith', role: 'CFO', company: 'Innovate Ltd', quote: 'The valuation was fair, and we got paid quickly. Highly recommend!' }
          ].map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow dark:shadow-gray-600"
            >
              <p className="italic mb-4 dark:text-gray-300">"{review.quote}"</p>
              <p className="font-semibold dark:text-white">{review.name}</p>
              <p className="text-gray-600 dark:text-gray-400">{review.role}, {review.company}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-16 px-4 relative overflow-hidden">
        {/* Shooting Stars */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={`contact-star-${i}`}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        <h2 className="text-3xl font-bold text-center mb-12 relative z-10">Get In Touch</h2>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full p-3 rounded text-gray-800"
            />
            {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-3 rounded text-gray-800"
            />
            {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company"
              className="w-full p-3 rounded text-gray-800"
            />
            {errors.company && <p className="text-red-300 text-sm">{errors.company}</p>}
          </div>
          <div>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleInputChange}
              className="w-full p-3 rounded text-gray-800"
            >
              <option value="">Select License Type</option>
              <option value="SaaS">SaaS</option>
              <option value="Perpetual">Perpetual</option>
              <option value="Subscription">Subscription</option>
            </select>
            {errors.licenseType && <p className="text-red-300 text-sm">{errors.licenseType}</p>}
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="w-full p-3 rounded text-gray-800"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-300 text-sm">{errors.message}</p>}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
          >
            Submit
          </motion.button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 text-center">
        <p>© 2025 SoftSell. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;