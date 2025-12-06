
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const About: React.FC = () => {
  const videos = [
    { 
      id: 1, 
      title: 'Making of the Legend', 
      img: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80', 
      duration: '2:30' 
    },
    { 
      id: 2, 
      title: 'Fresh Ingredients Only', 
      img: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80', 
      duration: '1:15' 
    },
    { 
      id: 3, 
      title: 'Speed & Hygiene', 
      img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80', 
      duration: '0:45' 
    },
  ];

  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Kitchen <span className="text-brand-orange">Stories</span>
          </motion.h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Witness the passion, speed, and freshness that goes into every single wrap.
          </p>
        </div>

        {/* Main Feature Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-12 group cursor-pointer border border-gray-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2080&auto=format&fit=crop" 
            alt="Main Kitchen Video" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
             <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-xl group-hover:scale-110 transition-transform mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-orange rounded-full flex items-center justify-center shadow-lg relative z-10">
                   <Play fill="white" className="text-white ml-1" size={32} />
                </div>
             </div>
             <h3 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">Behind the Taste</h3>
             <p className="text-white/90 font-medium mt-2">A day in the life at Lord of Wrap's</p>
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {videos.map((vid, idx) => (
             <motion.div
               key={vid.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="group cursor-pointer"
             >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-lg border border-gray-100">
                   <img src={vid.img} alt={vid.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                   
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                         <Play fill="#FF4500" className="text-brand-orange ml-1" size={20} />
                      </div>
                   </div>
                   
                   <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm">
                      {vid.duration}
                   </div>
                </div>
                <h4 className="font-bold text-gray-900 text-lg group-hover:text-brand-orange transition-colors">{vid.title}</h4>
                <p className="text-sm text-gray-400 font-medium">Watch Now</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default About;
