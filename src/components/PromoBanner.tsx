import React, { useState } from 'react';
import { X, Zap, Clock } from 'lucide-react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-3 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center space-x-4 text-center">
          <Zap size={20} className="animate-bounce" />
          <div className="flex-1 max-w-2xl">
            <span className="font-bold text-sm md:text-base">
              🔥 VENTES FLASH - Jusqu'à -70% sur une sélection de produits tech !
            </span>
            <div className="flex items-center justify-center space-x-2 mt-1">
              <Clock size={14} />
              <span className="text-xs md:text-sm opacity-90">
                Offre limitée - Plus que 2 jours !
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;