import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, CheckCircle, Loader } from 'lucide-react';

const DeliveryMap: React.FC = () => {
  const [pincode, setPincode] = useState('');
  const [checking, setChecking] = useState(false);
  const [deliverable, setDeliverable] = useState<boolean | null>(null);

  const checkDelivery = () => {
    if (pincode.length < 6) return;
    setChecking(true);
    setDeliverable(null);
    
    // Fake API check
    setTimeout(() => {
      setChecking(false);
      // Chandigarh pincodes approx range
      const pin = parseInt(pincode);
      if (pin >= 160001 && pin <= 160103) {
        setDeliverable(true);
      } else {
        setDeliverable(false);
      }
    }, 1500);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      setChecking(true);
      navigator.geolocation.getCurrentPosition(
        () => {
          setTimeout(() => {
            setChecking(false);
            setDeliverable(true); // Assume success for demo if permission granted
            setPincode('160017');
          }, 1500);
        },
        () => {
          setChecking(false);
          alert("Could not access location.");
        }
      );
    }
  };

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Text Side */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Hot & Fresh to <span className="text-brand-orange">Your Doorstep</span>
            </h2>
            <p className="text-gray-500 font-medium">
              Most orders delivered in approx. 30 minutes across Chandigarh, Mohali, and Panchkula.
            </p>
          </motion.div>

          <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm">
            <label className="text-sm text-gray-500 uppercase tracking-wider font-bold">Check Availability</label>
            <div className="flex gap-2 mt-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g,'').slice(0,6))}
                  placeholder="Enter Pincode" 
                  className="w-full bg-white border border-gray-200 rounded-lg py-3 pl-10 pr-4 text-gray-900 focus:outline-none focus:border-brand-orange transition-colors shadow-sm"
                />
              </div>
              <button 
                onClick={checkDelivery}
                className="px-6 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Check
              </button>
            </div>

            <div className="my-4 flex items-center gap-2 text-sm text-gray-400 font-medium">
              <div className="h-px flex-1 bg-gray-200" />
              <span>OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <button 
              onClick={getLocation}
              className="w-full py-3 border border-brand-orange text-brand-orange font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-brand-orange/5 transition-colors"
            >
              <Navigation size={18} /> Use Current Location
            </button>

            {/* Status Messages */}
            <div className="mt-4 min-h-[40px]">
              {checking && (
                <div className="flex items-center gap-2 text-gray-500">
                  <Loader className="animate-spin text-brand-orange" size={18} /> Checking coverage...
                </div>
              )}
              {!checking && deliverable === true && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-600 font-bold">
                  <CheckCircle size={18} /> Great! You are in our delivery zone.
                </motion.div>
              )}
              {!checking && deliverable === false && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 font-bold">
                  Sorry, we don't deliver there yet. Coming soon!
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Map Visual */}
        <div className="flex-1 w-full h-[400px] bg-gray-100 rounded-3xl overflow-hidden relative border border-gray-200 group shadow-lg">
           <img 
            src="https://media.istockphoto.com/id/1189064346/vector/chandigarh-india-city-map-in-retro-style.jpg?s=612x612&w=0&k=20&c=6F5k2F5j6z1B4l7n1q5r9t3u7v9x2z4a6c8e0g2i4k=" 
            alt="Chandigarh Map" 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
          
          {/* Pulse Dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75 animate-ping"></span>
            <div className="relative inline-flex rounded-full h-4 w-4 bg-brand-orange shadow-lg border-2 border-white" />
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <Navigation size={20} />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Delivery Partner Nearby</p>
                <p className="text-gray-500 text-xs font-medium">Usually arrives in 25-35 mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryMap;