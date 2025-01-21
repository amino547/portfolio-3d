import React, { useState, useRef, useEffect } from 'react';
import './ChatAi.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes, FaComments } from 'react-icons/fa';

const ChatAi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pageContent, setPageContent] = useState('');
  const chatContainerRef = useRef(null);

  const GEMINI_API_KEY = 'AIzaSyBxJMQJP5iCXiZ6vtulL-zgLAZ8pR9T1Ho';
  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

  const gatherPageContent = () => {
    // Get all the main content sections
    const mainContent = Array.from(document.querySelectorAll('main, section, article, div[role="main"]'))
      .map(element => element.innerText)
      .join('\n');
    
    // Get navigation links for structure understanding
    const navLinks = Array.from(document.querySelectorAll('nav a'))
      .map(link => link.textContent)
      .join(', ');

    // Get headings for structure
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
      .map(heading => heading.textContent)
      .join('\n');

    const title = document.title;
    const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
    
    return `
Page Title: ${title}
Meta Description: ${metaDescription}
Main Headings: ${headings}
Navigation Sections: ${navLinks}
Page Content: ${mainContent}
    `.trim();
  };

  useEffect(() => {
    // Wait for the page to be fully loaded and rendered
    const loadContent = () => {
      // Add a small delay to ensure dynamic content is loaded
      setTimeout(() => {
        const content = gatherPageContent();
        if (content && content.length > 50) { // Only update if we got meaningful content
          setPageContent(content);
        }
      }, 1500); // 1.5 second delay
    };

    // Initial load
    loadContent();

    // Set up an interval to refresh content periodically
    const refreshInterval = setInterval(loadContent, 5000); // Refresh every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(refreshInterval);
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Create a prompt that includes the page context
      const prompt = `As an AI assistant for this website, please answer the following question about the page content. Use the provided context to give accurate information.

Context about the page:
${pageContent}

User Question: ${inputMessage}

Please provide a helpful and accurate response based on the page content.`;

      const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      });

      const data = await response.json();
      const aiResponse = {
        type: 'ai',
        content: data.candidates[0].content.parts[0].text
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      const errorResponse = {
        type: 'ai',
        content: "I apologize, but I encountered an error while processing your request. Please try again."
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <motion.div
        className="chat-icon"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <FaComments />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="chat-header">
              <div className="chat-title">
                <FaRobot className="robot-icon" />
                <span>AI Assistant</span>
              </div>
              <motion.button
                className="close-button"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
            </div>

            <div className="chat-messages" ref={chatContainerRef}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {message.type === 'ai' && <FaRobot className="message-icon" />}
                  <p>{message.content}</p>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className="loading-dots"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </motion.div>
              )}
            </div>

            <div className="chat-input">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
              />
              <motion.button
                onClick={handleSendMessage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={isLoading}
              >
                <FaPaperPlane />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAi;
