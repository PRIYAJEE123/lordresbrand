import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

const Showcase: React.FC = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900"
          >
            Inside <span className="text-brand-orange">Lord of Wrap's</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 font-medium">Where flavour comes alive.</p>
        </div>

        {/* Video Placeholder */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white shadow-2xl group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop" 
            alt="Kitchen" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white text-brand-orange flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Play fill="currentColor" size={32} />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-2xl font-bold text-white">The Art of Wrapping</h3>
            <p className="text-gray-200 text-sm">Watch our master chefs in action</p>
          </div>
        </motion.div>

        {/* Parallax Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 h-[300px] md:h-[400px]">
          <motion.div style={{ y }} className="h-full bg-white rounded-2xl overflow-hidden relative shadow-lg">
            <img src="https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Fresh" />
            <div className="absolute bottom-4 left-4 font-bold text-white text-lg drop-shadow-md">Fresh</div>
          </motion.div>
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }} className="h-full bg-white rounded-2xl overflow-hidden relative mt-8 md:mt-16 shadow-lg">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Organic" />
             <div className="absolute bottom-4 left-4 font-bold text-white text-lg drop-shadow-md">Organic</div>
          </motion.div>
          <motion.div style={{ y }} className="h-full bg-white rounded-2xl overflow-hidden relative shadow-lg">
             <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Spicy" />
             <div className="absolute bottom-4 left-4 font-bold text-white text-lg drop-shadow-md">Spicy</div>
          </motion.div>
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }} className="h-full bg-white rounded-2xl overflow-hidden relative mt-8 md:mt-16 shadow-lg">
             <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Tasty" />
             <div className="absolute bottom-4 left-4 font-bold text-white text-lg drop-shadow-md">Tasty</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;