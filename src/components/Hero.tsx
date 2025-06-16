import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Zap, Shield, TrendingUp, Smartphone, Headphones, Watch } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Les dernières tendances tech",
      subtitle: "Découvrez l'innovation à portée de main",
      cta: "Explorer maintenant",
      badge: "Nouveautés 2024",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Deals exclusifs jusqu'à -70%",
      subtitle: "Offres limitées sur vos marques préférées",
      cta: "Voir les promos",
      badge: "Ventes flash",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Gaming next-gen",
      subtitle: "Équipez-vous pour dominer",
      cta: "Shop gaming",
      badge: "Pro gamers",
      color: "from-green-500 to-blue-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden min-h-[85vh] md:min-h-[90vh]">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 md:w-32 h-20 md:h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 md:w-24 h-16 md:h-24 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-blue-100 to-green-100 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content - Mobile optimized */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Dynamic badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full shadow-lg mb-4 md:mb-6 transform hover:scale-105 transition-all duration-300">
              <Zap className="text-blue-600" size={16} />
              <span className="text-sm font-medium text-gray-700">{slides[currentSlide].badge}</span>
            </div>

            {/* Main headline - Responsive typography */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              {slides[currentSlide].title.split(' ').map((word, index) => (
                <span key={index} className={index === slides[currentSlide].title.split(' ').length - 1 ? 
                  `text-transparent bg-clip-text bg-gradient-to-r ${slides[currentSlide].color} block` : ''
                }>
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Subtitle - Mobile optimized */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              {slides[currentSlide].subtitle}
            </p>

            {/* Trust indicators - Mobile first */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-6 mb-6 md:mb-8">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                <Star className="text-yellow-500" size={16} />
                <span className="text-sm font-medium">4.9/5 ⭐</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                <Shield className="text-green-500" size={16} />
                <span className="text-sm font-medium">Paiement sécurisé</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                <TrendingUp className="text-blue-500" size={16} />
                <span className="text-sm font-medium">50K+ clients</span>
              </div>
            </div>

            {/* CTA buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-12">
              <button className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 min-w-[200px]`}>
                <span>{slides[currentSlide].cta}</span>
                <ArrowRight size={20} />
              </button>
              <button className="bg-white/90 backdrop-blur-sm text-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg border-2 border-gray-200 hover:border-green-400 hover:text-green-600 transform hover:scale-105 transition-all shadow-lg min-w-[200px]">
                Voir les tendances
              </button>
            </div>

            {/* Social proof - Compact mobile version */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-8 opacity-80">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-xs md:text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-900">24h</div>
                <div className="text-xs md:text-sm text-gray-600">Livraison express</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-xs md:text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right content - Enhanced mobile experience */}
          <div className="relative order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
              {/* Product showcase - Mobile optimized grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {/* Product cards with icons */}
                <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg transform hover:rotate-2 transition-all duration-300">
                  <div className="w-full h-20 md:h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg md:rounded-xl mb-2 md:mb-4 flex items-center justify-center">
                    <Smartphone className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">iPhone 15 Pro</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold text-sm md:text-base">1199€</span>
                    <div className="flex text-yellow-400 text-xs">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg transform hover:-rotate-2 transition-all duration-300">
                  <div className="w-full h-20 md:h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-lg md:rounded-xl mb-2 md:mb-4 flex items-center justify-center">
                    <Headphones className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">AirPods Pro</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-bold text-sm md:text-base">279€</span>
                    <div className="flex text-yellow-400 text-xs">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg transform hover:rotate-1 transition-all duration-300 col-span-2">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex items-center justify-center">
                      <Watch className="text-purple-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Apple Watch Ultra</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-600 font-bold text-sm md:text-base">899€</span>
                        <div className="flex text-yellow-400 text-xs">
                          ⭐⭐⭐⭐⭐
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating promotional elements */}
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg animate-bounce">
                -30% OFF
              </div>
              <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg animate-pulse">
                Livraison gratuite
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-6 md:w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;