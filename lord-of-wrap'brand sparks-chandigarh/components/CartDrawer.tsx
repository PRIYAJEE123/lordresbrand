import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="text-brand-orange" /> Your Order
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="text-gray-500" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <ShoppingBag size={48} className="mb-4 opacity-50" />
                  <p className="font-medium">Your cart is empty.</p>
                  <button onClick={onClose} className="mt-4 text-brand-orange font-bold hover:underline">Start Ordering</button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex gap-4 items-center bg-white p-3 rounded-xl border border-gray-200 shadow-sm"
                  >
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-bold text-sm line-clamp-1">{item.name}</h4>
                      <p className="text-brand-orange font-bold text-sm">₹{item.price * item.quantity}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-black shadow-sm"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center text-gray-900">{item.quantity}</span>
                      <button 
                         onClick={() => onUpdateQuantity(item.id, 1)}
                         className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-orange-600 shadow-sm"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-white border-t border-gray-100 space-y-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between text-gray-500 text-sm font-medium">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-gray-900 font-bold text-xl">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full py-4 bg-brand-orange text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden shadow-lg shadow-brand-orange/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Checkout <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Glow effect on button */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;