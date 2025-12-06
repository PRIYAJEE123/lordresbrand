import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Hero from './components/Hero';
import MenuCard from './components/MenuCard';
import CartDrawer from './components/CartDrawer';
import DeliveryMap from './components/DeliveryMap';
import Showcase from './components/Showcase';
import About from './components/About';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import { MENU_ITEMS } from './constants';
import { MenuItem, CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-orange selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/70 border-b border-gray-100 shadow-sm">
        <span className="text-xl md:text-2xl font-bold tracking-tighter text-gray-900">
          LORD OF <span className="text-brand-orange">WRAP'S</span>
        </span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCartOpen(true)}
          className="relative p-3 rounded-full bg-gray-100 hover:bg-brand-orange transition-colors group text-gray-800 hover:text-white"
        >
          <ShoppingBag size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-orange text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white group-hover:bg-white group-hover:text-brand-orange">
              {cartCount}
            </span>
          )}
        </motion.button>
      </nav>

      {/* Hero */}
      <Hero />

      {/* Menu Section */}
      <section id="menu" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
               <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
                 The <span className="text-brand-orange">Menu</span>
               </h2>
               <p className="text-gray-500 font-medium">Handcrafted, grilled, and rolled to perfection.</p>
             </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {MENU_ITEMS.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={addToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <Showcase />

      {/* Delivery Map */}
      <DeliveryMap />

      {/* About */}
      <About />

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
      />

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
}

export default App;