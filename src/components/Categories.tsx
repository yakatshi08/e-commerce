import React from 'react';
import { Smartphone, Headphones, Watch, Camera, Gamepad2, Laptop, Zap, TrendingUp } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Smartphones',
    icon: Smartphone,
    color: 'from-blue-500 to-blue-600',
    count: '120+ produits',
    trending: true,
    emoji: '📱'
  },
  {
    id: 2,
    name: 'Audio',
    icon: Headphones,
    color: 'from-green-400 to-green-500',
    count: '85+ produits',
    trending: false,
    emoji: '🎧'
  },
  {
    id: 3,
    name: 'Montres',
    icon: Watch,
    color: 'from-purple-500 to-purple-600',
    count: '65+ produits',
    trending: true,
    emoji: '⌚'
  },
  {
    id: 4,
    name: 'Photo',
    icon: Camera,
    color: 'from-pink-500 to-pink-600',
    count: '40+ produits',
    trending: false,
    emoji: '📸'
  },
  {
    id: 5,
    name: 'Gaming',
    icon: Gamepad2,
    color: 'from-orange-500 to-orange-600',
    count: '95+ produits',
    trending: true,
    emoji: '🎮'
  },
  {
    id: 6,
    name: 'Ordinateurs',
    icon: Laptop,
    color: 'from-indigo-500 to-indigo-600',
    count: '75+ produits',
    trending: false,
    emoji: '💻'
  }
];

const Categories = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header - Mobile optimized */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-400 text-white px-3 md:px-4 py-2 rounded-full mb-4">
            <Zap size={16} />
            <span className="text-sm font-medium">Catégories populaires</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Trouvez ce qui vous passionne
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Des produits tech aux dernières tendances lifestyle, découvrez notre sélection pensée pour votre génération.
          </p>
        </div>

        {/* Categories grid - Enhanced mobile layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 text-center border border-gray-100 hover:border-transparent relative overflow-hidden">
                  
                  {/* Trending badge */}
                  {category.trending && (
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <TrendingUp size={10} />
                      <span className="hidden sm:inline">Trend</span>
                    </div>
                  )}

                  {/* Icon container - Mobile optimized */}
                  <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative`}>
                    <IconComponent className="text-white" size={20} />
                    {/* Emoji overlay for mobile */}
                    <span className="absolute -bottom-1 -right-1 text-lg md:text-xl">
                      {category.emoji}
                    </span>
                  </div>
                  
                  {/* Category name - Responsive typography */}
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors text-sm md:text-base">
                    {category.name}
                  </h3>
                  
                  {/* Product count - Mobile friendly */}
                  <p className="text-xs md:text-sm text-gray-500">
                    {category.count}
                  </p>

                  {/* Hover effect background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl md:rounded-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick access section - Mobile first */}
        <div className="mt-8 md:mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6">
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Accès rapide
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Les catégories les plus recherchées par votre génération
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['🔥 Deals du jour', '⚡ Nouveautés', '💎 Premium', '🎯 Tendances', '💝 Cadeaux', '🚀 Express'].map((tag) => (
              <button 
                key={tag}
                className="bg-white text-gray-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Section - Mobile optimized */}
        <div className="text-center mt-8 md:mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-green-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:from-blue-700 hover:to-green-500 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
            Explorer toutes les catégories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;