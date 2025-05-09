import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Predefined AI responses for common queries
  const aiResponses = {
    'how does it work': 'To sell your software licenses, simply upload your license details, receive a fair valuation, and get paid quickly. Visit our "How It Works" section for more details!',
    'what is softsell': 'SoftSell is a trusted platform to buy and sell software licenses securely and efficiently, ensuring fair valuations and fast payments.',
    'payment time': 'Payments are processed securely and typically completed within a few days after license verification.',
    'license types': 'We support various license types, including SaaS, Perpetual, and Subscription licenses. Select your license type in the contact form for a quote!',
    'support': 'Our expert support team is available 24/7. Submit a message via our contact form or continue chatting here!',
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);

    // Simulate AI response
    const lowerInput = input.toLowerCase();
    let response = 'Sorry, I didn’t understand that. Could you clarify or contact our support team?';
    
    for (const [key, value] of Object.entries(aiResponses)) {
      if (lowerInput.includes(key)) {
        response = value;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, sender: 'ai' }]);
    }, 500);

    setInput('');
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 rounded-full bg-blue-600 dark:bg-blue-800 text-white shadow-lg"
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-blue-600 dark:bg-blue-800 text-white p-3 font-semibold">
              SoftSell AI Assistant
            </div>

            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Ask about SoftSell, payments, or licenses!
                </p>
              )}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t dark:border-gray-700">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="w-full p-2 rounded text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 focus:outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;