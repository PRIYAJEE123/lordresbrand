import React, { useState, useRef, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { MessageSquare, X, Send, Bot } from 'lucide-react';
    import { sendMessageToGemini } from '../services/geminiService';
    import { ChatMessage } from '../types';
    
    const ChatBot: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [messages, setMessages] = useState<ChatMessage[]>([
        { id: '0', role: 'model', text: "Hey! Craving a wrap? Ask me for recommendations! 🌯" }
      ]);
      const [input, setInput] = useState('');
      const [loading, setLoading] = useState(false);
      const scrollRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, [messages, isOpen]);
    
      const handleSend = async () => {
        if (!input.trim() || loading) return;
    
        const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);
    
        const response = await sendMessageToGemini(input);
        const botMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: response };
        
        setMessages(prev => [...prev, botMsg]);
        setLoading(false);
      };
    
      return (
        <>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-96 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden h-[500px]"
              >
                {/* Header */}
                <div className="p-4 bg-brand-orange/5 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center shadow-sm">
                      <Bot size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Wrap Assistant</h3>
                      <p className="text-[10px] text-green-600 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online
                      </p>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-900">
                    <X size={20} />
                  </button>
                </div>
    
                {/* Messages */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                        msg.role === 'user' 
                          ? 'bg-brand-orange text-white rounded-br-none' 
                          : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {loading && (
                     <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none flex gap-1 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-75" />
                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-150" />
                      </div>
                     </div>
                  )}
                </div>
    
                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask about spicy wraps..."
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-gray-900 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={loading}
                      className="p-2 bg-brand-orange rounded-xl text-white hover:bg-orange-600 disabled:opacity-50 shadow-sm"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-brand-orange text-white rounded-full shadow-lg shadow-brand-orange/40 flex items-center justify-center z-50 hover:bg-gray-900 transition-colors"
          >
            <MessageSquare size={24} />
          </motion.button>
        </>
      );
    };
    
    export default ChatBot;