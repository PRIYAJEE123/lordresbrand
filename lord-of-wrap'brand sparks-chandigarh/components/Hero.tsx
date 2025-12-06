import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    menuElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10" />
      
      {/* Floating Elements (Parallax) */}
      <motion.div style={{ y: y1, rotate: 15 }} className="absolute top-1/4 left-10 opacity-80 pointer-events-none hidden md:block">
        <img src="https://em-content.zobj.net/source/microsoft-teams/363/burrito_1f32f.png" alt="Wrap" className="w-32 drop-shadow-2xl animate-float" />
      </motion.div>
      <motion.div style={{ y: y2, rotate: -15 }} className="absolute bottom-1/4 right-10 opacity-80 pointer-events-none hidden md:block">
        <img src="https://em-content.zobj.net/source/microsoft-teams/363/fire_1f525.png" alt="Fire" className="w-24 drop-shadow-2xl animate-float" style={{ animationDelay: '1s' }} />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-6 leading-tight tracking-tight mt-4">
            LORD OF <br /><span className="text-brand-orange">WRAP'S</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 mb-8 font-medium max-w-2xl mx-auto leading-relaxed">
            Chandigarh’s Fastest & Freshest Wrap Kitchen. <br />
            <span className="text-gray-800 italic">Taste the legend in every bite.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,69,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToMenu}
              className="px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-xl flex items-center gap-2 shadow-xl shadow-brand-orange/20 transition-all"
            >
              Order Now <Flame className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToMenu}
              className="px-8 py-4 border-2 border-gray-200 text-gray-900 text-lg font-bold rounded-xl bg-white/50 backdrop-blur-md flex items-center gap-2 transition-all hover:border-gray-900"
            >
              Explore Menu <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {[
            { label: "10 Years Exp.", icon: "🏆" },
            { label: "30-Min Delivery", icon: "⚡" },
            { label: "100% Hygienic", icon: "🧼" },
            { label: "Chandigarh Only", icon: "📍" },
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, color: '#FF4500' }}
              className="flex flex-col items-center gap-2 text-gray-500 cursor-default"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-wide">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;