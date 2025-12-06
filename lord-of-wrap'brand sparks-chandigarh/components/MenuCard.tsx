import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onAdd }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col h-full cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden">
        <motion.img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
           <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded backdrop-blur-md shadow-sm ${
             item.category === 'Veg' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
           }`}>
             {item.category}
           </span>
        </div>
         {item.isBestseller && (
          <div className="absolute top-3 right-3">
             <motion.span 
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-brand-yellow text-black flex items-center gap-1 shadow-sm"
             >
               <Star size={10} fill="currentColor" /> Bestseller
             </motion.span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1 relative bg-white">
        <h3 className="text-gray-900 font-bold text-lg leading-tight mb-1">{item.name}</h3>
        <p className="text-gray-500 text-xs line-clamp-2 mb-4 font-medium">
          {item.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-gray-900 font-bold text-lg">₹{item.price}</span>
          
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(item);
            }}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 text-brand-orange flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors shadow-sm"
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;