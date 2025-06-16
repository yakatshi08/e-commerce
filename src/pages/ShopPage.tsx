import React, { useState } from 'react';
import { Filter, Grid, List, SlidersHorizontal, Search, Star, Heart, ShoppingCart } from 'lucide-react';
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
    category: 'smartphones',
    badge: 'Bestseller',
    isNew: false,
    inStock: true
  },
  {
    id: 2,
    name: 'AirPods Pro (2ème gen)',
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviews: 1563,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'audio',
    badge: 'Nouveau',
    isNew: true,
    inStock: true
  },
  {
    id: 3,
    name: 'Apple Watch Ultra 2',
    price: 849,
    originalPrice: 999,
    rating: 4.7,
    reviews: 892,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'montres',
    badge: 'Promo',
    isNew: false,
    inStock: true
  },
  {
    id: 4,
    name: 'MacBook Pro M3',
    price: 2199,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 674,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'ordinateurs',
    badge: 'Pro',
    isNew: false,
    inStock: true
  },
  {
    id: 5,
    name: 'Sony A7 IV',
    price: 2299,
    originalPrice: 2699,
    rating: 4.8,
    reviews: 423,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'photo',
    badge: 'Créateurs',
    isNew: false,
    inStock: false
  },
  {
    id: 6,
    name: 'PlayStation 5 Pro',
    price: 699,
    originalPrice: 799,
    rating: 4.9,
    reviews: 1205,
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'gaming',
    badge: 'Gaming',
    isNew: true,
    inStock: true
  }
];

const categories = [
  { id: 'all', name: 'Tous les produits', count: products.length },
  { id: 'smartphones', name: 'Smartphones', count: 1 },
  { id: 'audio', name: 'Audio', count: 1 },
  { id: 'montres', name: 'Montres', count: 1 },
  { id: 'ordinateurs', name: 'Ordinateurs', count: 1 },
  { id: 'photo', name: 'Photo', count: 1 },
  { id: 'gaming', name: 'Gaming', count: 1 }
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.isNew ? 1 : -1;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Accueil</a></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Boutique</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Boutique
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Découvrez notre sélection de produits tech et lifestyle, choisis avec soin pour votre génération connectée.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Filtres</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rechercher
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nom du produit..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Catégories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 text-blue-600 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Prix</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{priceRange[0]}€</span>
                    <span>{priceRange[1]}€</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Disponibilité</h4>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                  <span className="text-sm text-gray-600">En stock uniquement</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <SlidersHorizontal size={16} />
                    <span>Filtres</span>
                  </button>
                  
                  <span className="text-sm text-gray-600">
                    {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="popularity">Popularité</option>
                    <option value="newest">Nouveautés</option>
                    <option value="price-low">Prix croissant</option>
                    <option value="price-high">Prix décroissant</option>
                    <option value="rating">Meilleures notes</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                      }`}
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                      }`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map(product => (
                <div
                  key={product.id}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 flex-shrink-0' : ''
                  }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                        viewMode === 'list' ? 'h-full' : 'h-48'
                      }`}
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </span>
                    </div>

                    {/* Stock Status */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                          Rupture de stock
                        </span>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => toggleLike(product.id)}
                        className={`p-2 rounded-full transition-colors ${
                          likedProducts.includes(product.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Heart size={16} className={likedProducts.includes(product.id) ? 'fill-current' : ''} />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1">
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(product.rating) ? 'fill-current' : ''}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews.toLocaleString()})
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-xl font-bold text-gray-900">
                        {product.price.toLocaleString()}€
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice.toLocaleString()}€
                        </span>
                      )}
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-400 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-500 transition-all flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <ShoppingCart size={16} />
                      <span>{product.inStock ? 'Ajouter au panier' : 'Indisponible'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            {sortedProducts.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-white text-gray-700 px-8 py-3 rounded-full font-semibold border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all">
                  Charger plus de produits
                </button>
              </div>
            )}

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos filtres ou votre recherche
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                    setPriceRange([0, 3000]);
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;