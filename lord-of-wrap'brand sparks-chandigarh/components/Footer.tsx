import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">LORD OF WRAP'S</h2>
          <p className="text-gray-500 text-sm font-medium">
            Chandigarh's premium wrap destination. <br/>Experience the taste of perfection.
          </p>
        </div>
        
        <div>
          <h3 className="text-gray-900 font-bold mb-4">Contact</h3>
          <p className="text-gray-500 text-sm">{CONTACT_INFO.address}</p>
          <p className="text-gray-500 text-sm">Ph: {CONTACT_INFO.phone}</p>
          <p className="text-gray-500 text-sm">Mail: {CONTACT_INFO.email}</p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-gray-900 font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
             <a href="#" className="p-2 rounded-full bg-white border border-gray-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange text-gray-500 transition-colors shadow-sm">
               <Instagram size={20} />
             </a>
             <a href="#" className="p-2 rounded-full bg-white border border-gray-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange text-gray-500 transition-colors shadow-sm">
               <Facebook size={20} />
             </a>
             <a href="#" className="p-2 rounded-full bg-white border border-gray-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange text-gray-500 transition-colors shadow-sm">
               <Twitter size={20} />
             </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-gray-400 text-xs font-medium">
        © {new Date().getFullYear()} Lord of Wrap's. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;