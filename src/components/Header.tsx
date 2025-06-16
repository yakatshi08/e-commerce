import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, User, Heart, Bell, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();
  const location = useLocation();

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Boutique', href: '/boutique' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top notification bar - Mobile optimized */}
        <div className="hidden sm:flex justify-between items-center py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <Zap size={14} className="text-green-400" />
            <span>Livraison express gratuite dès 50€ 🚀</span>
          </div>
          <div className="flex space-x-4">
            <Link to="/support" className="hover:text-blue-600 transition-colors flex items-center space-x-1">
              <Bell size={12} />
              <span>Aide</span>
            </Link>
            <Link to="/commandes" className="hover:text-blue-600 transition-colors">Suivi commande</Link>
          </div>
        </div>

        {/* Main header - Enhanced mobile experience */}
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo - Responsive sizing */}
          <Link to="/" className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-400 text-white font-bold text-lg md:text-xl lg:text-2xl px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="hidden sm:inline">ShopySales</span>
              <span className="sm:hidden">SS</span>
              <span className="text-xs font-normal opacity-90">.blog</span>
            </div>
          </Link>

          {/* Desktop Navigation - Modern styling */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 relative group py-2 ${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-400 transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar - Enhanced mobile UX */}
          <div className="hidden md:flex items-center flex-1 max-w-md lg:max-w-lg mx-4 lg:mx-8">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Que cherchez-vous aujourd'hui ?"
                className="w-full pl-4 pr-12 py-2.5 lg:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-md"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-green-400 text-white p-2 rounded-full hover:from-blue-700 hover:to-green-500 transition-all duration-300 shadow-md hover:shadow-lg">
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Action buttons - Mobile optimized */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Mobile search */}
            <button 
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>

            {/* Wishlist - Enhanced with notification */}
            <Link to="/favoris" className="hidden sm:flex text-gray-700 hover:text-blue-600 transition-colors relative p-2 hover:bg-gray-100 rounded-full">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                3
              </span>
            </Link>

            {/* User account - Modern styling */}
            <Link to="/compte" className="hidden sm:flex text-gray-700 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-full">
              <User size={20} />
            </Link>

            {/* Cart - Enhanced animation */}
            <Link to="/panier" className="text-gray-700 hover:text-blue-600 transition-colors relative p-2 hover:bg-gray-100 rounded-full group">
              <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-green-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce font-semibold">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile menu - Enhanced */}
            <button 
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Improved UX */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher produits, marques..."
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md"
                autoFocus
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-green-400 text-white p-2 rounded-full hover:from-blue-700 hover:to-green-500 transition-all">
                <Search size={16} />
              </button>
            </div>
            {/* Quick search suggestions */}
            <div className="mt-3 flex flex-wrap gap-2">
              {['iPhone', 'AirPods', 'Gaming', 'Mode'].map((term) => (
                <button 
                  key={term}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Menu - Enhanced with categories */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 pt-4 animate-fade-in-up">
            <div className="space-y-4">
              {/* Main navigation */}
              <div className="space-y-3">
                {navigation.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href}
                    className={`block font-medium transition-colors py-2 px-2 hover:bg-gray-50 rounded-lg ${
                      location.pathname === item.href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Quick categories */}
              <div className="border-t border-gray-100 pt-4">
                <h3 className="text-sm font-semibold text-gray-500 mb-3">Catégories populaires</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['📱 Tech', '🎧 Audio', '⌚ Montres', '🎮 Gaming'].map((cat) => (
                    <Link
                      key={cat}
                      to="/boutique"
                      className="text-left text-gray-600 hover:text-blue-600 py-2 px-3 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* User actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <Link 
                  to="/compte"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={16} />
                  <span>Mon compte</span>
                </Link>
                <Link 
                  to="/favoris"
                  className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors py-2 px-3 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart size={16} />
                  <span>Favoris (3)</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;