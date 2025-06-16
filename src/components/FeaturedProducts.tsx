import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye, Zap, TrendingUp, Clock, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 1199,
    originalPrice: 1399,
    rating: 4.9,
    reviews: 2847,
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Bestseller',
    badgeColor: 'bg-green-400',
    trending: true,
    timeLeft: '2h 15m'
  },
  {
    id: 2,
    name: 'AirPods Pro (2ème gen)',
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviews: 1563,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Nouveau',
    badgeColor: 'bg-blue-600',
    trending: true,
    timeLeft: null
  },
  {
    id: 3,
    name: 'Apple Watch Ultra 2',
    price: 849,
    originalPrice: 999,
    rating: 4.7,
    reviews: 892,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Promo Flash',
    badgeColor: 'bg-red-500',
    trending: false,
    timeLeft: '5h 42m'
  },
  {
    id: 4,
    name: 'MacBook Pro M3',
    price: 2199,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 674,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Pro Choice',
    badgeColor: 'bg-purple-600',
    trending: true,
    timeLeft: null
  },
  {
    id: 5,
    name: 'Sony A7 IV',
    price: 2299,
    originalPrice: 2699,
    rating: 4.8,
    reviews: 423,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Créateurs',
    badgeColor: 'bg-orange-500',
    trending: false,
    timeLeft: null
  },
  {
    id: 6,
    name: 'PlayStation 5 Pro',
    price: 699,
    originalPrice: 799,
    rating: 4.9,
    reviews: 1205,
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Gaming',
    badgeColor: 'bg-pink-500',
    trending: true,
    timeLeft: '1h 33m'
  }
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header - Mobile optimized */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-400 text-white px-3 md:px-4 py-2 rounded-full mb-4">
            <Flame size={16} />
            <span className="text-sm font-medium">Sélection Premium</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Les incontournables du moment
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les produits qui font le buzz chez les 18-45 ans. Qualité premium, prix malins.
          </p>
        </div>

        {/* Products grid - Enhanced mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product image container */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Multiple badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  <div className={`${product.badgeColor} text-white px-2 md:px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                    {product.badge}
                  </div>
                  {product.trending && (
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
                      <TrendingUp size={10} />
                      <span>Trend</span>
                    </div>
                  )}
                </div>

                {/* Discount percentage */}
                {product.originalPrice > product.price && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </div>
                )}

                {/* Time left for flash sales */}
                {product.timeLeft && (
                  <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Clock size={10} />
                    <span>{product.timeLeft}</span>
                  </div>
                )}

                {/* Hover actions - Mobile friendly */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <button className="bg-white text-gray-700 p-2 md:p-3 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110 shadow-lg">
                    <Eye size={16} />
                  </button>
                  <button 
                    onClick={() => toggleLike(product.id)}
                    className={`p-2 md:p-3 rounded-full transition-colors transform hover:scale-110 shadow-lg ${
                      likedProducts.includes(product.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Heart size={16} className={likedProducts.includes(product.id) ? 'fill-current' : ''} />
                  </button>
                </div>
              </div>

              {/* Product info - Mobile optimized */}
              <div className="p-4 md:p-6">
                {/* Rating - Compact mobile version */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={i < Math.floor(product.rating) ? 'fill-current' : ''}
                        />
                      ))}
                    </div>
                    <span className="text-xs md:text-sm text-gray-600">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>
                </div>

                {/* Product name - Responsive */}
                <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors text-sm md:text-base line-clamp-2">
                  {product.name}
                </h3>

                {/* Price - Enhanced mobile display */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg md:text-xl font-bold text-gray-900">
                      {product.price.toLocaleString()}€
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice.toLocaleString()}€
                      </span>
                    )}
                  </div>
                  {product.originalPrice > product.price && (
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Économie {(product.originalPrice - product.price).toLocaleString()}€
                    </span>
                  )}
                </div>

                {/* Add to cart button - Mobile optimized */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-400 text-white py-2.5 md:py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-500 transition-all flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg text-sm md:text-base"
                >
                  <ShoppingCart size={16} />
                  <span>Ajouter au panier</span>
                </button>

                {/* Quick info - Mobile friendly */}
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                  <span>🚚 Livraison express</span>
                  <span>✅ En stock</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more section - Enhanced */}
        <div className="text-center mt-8 md:mt-12">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg max-w-md mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Plus de 10 000 produits vous attendent
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Découvrez toute notre collection pensée pour votre style de vie
            </p>
            <button className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:from-green-500 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg w-full sm:w-auto">
              Explorer tous les produits
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;