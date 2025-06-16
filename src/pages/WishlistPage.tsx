import React, { useState } from 'react';
import { Heart, ShoppingCart, X, Share2, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const wishlistItems = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 1199,
    originalPrice: 1399,
    rating: 4.9,
    reviews: 2847,
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=400',
    inStock: true,
    dateAdded: '2024-12-10'
  },
  {
    id: 2,
    name: 'MacBook Pro M3',
    price: 2199,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 674,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    inStock: true,
    dateAdded: '2024-12-08'
  },
  {
    id: 3,
    name: 'Sony A7 IV',
    price: 2299,
    originalPrice: 2699,
    rating: 4.8,
    reviews: 423,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
    inStock: false,
    dateAdded: '2024-12-05'
  }
];

const WishlistPage = () => {
  const [items, setItems] = useState(wishlistItems);
  const { addToCart } = useCart();

  const removeFromWishlist = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleAddToCart = (item: typeof wishlistItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    });
  };

  const addAllToCart = () => {
    items.filter(item => item.inStock).forEach(item => {
      handleAddToCart(item);
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-6xl mb-6">💝</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Votre liste de souhaits est vide
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez nos produits et ajoutez vos favoris à votre wishlist
            </p>
            <a
              href="/boutique"
              className="bg-gradient-to-r from-blue-600 to-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-green-500 transition-all inline-flex items-center space-x-2"
            >
              <Heart size={20} />
              <span>Découvrir nos produits</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Ma liste de souhaits</h1>
            <p className="text-gray-600">{items.length} produit{items.length > 1 ? 's' : ''} sauvegardé{items.length > 1 ? 's' : ''}</p>
          </div>
          
          {items.some(item => item.inStock) && (
            <button
              onClick={addAllToCart}
              className="bg-gradient-to-r from-blue-600 to-green-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-500 transition-all flex items-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span>Tout ajouter au panier</span>
            </button>
          )}
        </div>

        {/* Wishlist Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group relative">
              {/* Remove Button */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <X size={16} className="text-gray-600" />
              </button>

              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Stock Status */}
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                      Rupture de stock
                    </span>
                  </div>
                )}

                {/* Discount Badge */}
                {item.originalPrice > item.price && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(item.rating) ? 'fill-current' : ''}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {item.rating} ({item.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {item.name}
                </h3>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">
                    {item.price.toLocaleString()}€
                  </span>
                  {item.originalPrice > item.price && (
                    <span className="text-sm text-gray-500 line-through">
                      {item.originalPrice.toLocaleString()}€
                    </span>
                  )}
                </div>

                {/* Date Added */}
                <p className="text-xs text-gray-500 mb-4">
                  Ajouté le {new Date(item.dateAdded).toLocaleDateString('fr-FR')}
                </p>

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.inStock}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-500 transition-all flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <ShoppingCart size={16} />
                    <span>{item.inStock ? 'Ajouter au panier' : 'Indisponible'}</span>
                  </button>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-white text-gray-700 py-2 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center space-x-2">
                      <Share2 size={16} />
                      <span>Partager</span>
                    </button>
                    
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="flex-1 bg-white text-red-600 py-2 rounded-lg border-2 border-red-200 hover:border-red-300 hover:bg-red-50 transition-all flex items-center justify-center space-x-2"
                    >
                      <Heart size={16} className="fill-current" />
                      <span>Retirer</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vous pourriez aussi aimer</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sample recommendation items */}
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-3"></div>
                <h3 className="font-medium text-gray-900 mb-2">Produit recommandé {i}</h3>
                <p className="text-blue-600 font-bold mb-3">À partir de 99€</p>
                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                  <Heart size={16} />
                  <span>Ajouter aux favoris</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Share Wishlist */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-400 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Partagez votre liste de souhaits</h3>
          <p className="text-blue-100 mb-6">
            Laissez vos proches découvrir vos produits préférés pour vos cadeaux
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Partager par email
            </button>
            <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Copier le lien
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;