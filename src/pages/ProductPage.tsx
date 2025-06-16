import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Share2, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Mock product data
const productData = {
  id: 1,
  name: 'iPhone 15 Pro Max',
  price: 1199,
  originalPrice: 1399,
  rating: 4.9,
  reviews: 2847,
  images: [
    'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  category: 'Smartphones',
  brand: 'Apple',
  sku: 'IPH15PM-256-TIT',
  inStock: true,
  stockCount: 15,
  description: `Le iPhone 15 Pro Max redéfinit l'excellence mobile avec sa puce A17 Pro révolutionnaire et son système de caméras professionnel. Conçu en titane de qualité aérospatiale, il offre une résistance exceptionnelle tout en restant étonnamment léger.

Caractéristiques principales :
• Écran Super Retina XDR de 6,7 pouces avec ProMotion
• Puce A17 Pro gravée en 3 nanomètres
• Système de caméras Pro avec téléobjectif 5x
• Action Button personnalisable
• Connecteur USB-C avec USB 3
• Jusqu'à 29 heures de lecture vidéo`,
  features: [
    'Écran Super Retina XDR 6,7"',
    'Puce A17 Pro 3nm',
    'Caméras Pro 48MP',
    'Téléobjectif 5x',
    'Action Button',
    'USB-C avec USB 3',
    'Titane qualité aérospatiale',
    'Résistant à l\'eau IP68'
  ],
  specifications: {
    'Écran': '6,7 pouces Super Retina XDR',
    'Processeur': 'Puce A17 Pro',
    'Stockage': '256 Go',
    'Caméra': '48MP + 12MP + 12MP',
    'Batterie': 'Jusqu\'à 29h de vidéo',
    'Connectivité': '5G, Wi-Fi 6E, Bluetooth 5.3',
    'Dimensions': '159,9 × 76,7 × 8,25 mm',
    'Poids': '221 grammes'
  },
  variants: [
    { id: 1, name: '128 Go', price: 1199, available: true },
    { id: 2, name: '256 Go', price: 1299, available: true },
    { id: 3, name: '512 Go', price: 1499, available: true },
    { id: 4, name: '1 To', price: 1699, available: false }
  ],
  colors: [
    { id: 1, name: 'Titane naturel', color: '#F5F5DC', available: true },
    { id: 2, name: 'Titane bleu', color: '#4169E1', available: true },
    { id: 3, name: 'Titane blanc', color: '#FFFFFF', available: true },
    { id: 4, name: 'Titane noir', color: '#2F2F2F', available: true }
  ]
};

const reviews = [
  {
    id: 1,
    author: 'Marie L.',
    rating: 5,
    date: '15 décembre 2024',
    title: 'Excellent smartphone !',
    content: 'La qualité photo est exceptionnelle, surtout en mode portrait. La batterie tient facilement la journée même avec une utilisation intensive.',
    verified: true,
    helpful: 24
  },
  {
    id: 2,
    author: 'Thomas M.',
    rating: 5,
    date: '12 décembre 2024',
    title: 'Performance au top',
    content: 'Très fluide pour les jeux et applications. L\'écran est magnifique et l\'Action Button est vraiment pratique au quotidien.',
    verified: true,
    helpful: 18
  },
  {
    id: 3,
    author: 'Sophie D.',
    rating: 4,
    date: '10 décembre 2024',
    title: 'Bon produit mais cher',
    content: 'Qualité Apple irréprochable mais le prix reste élevé. Heureusement que ShopySales propose des prix compétitifs !',
    verified: true,
    helpful: 12
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0]);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const handleAddToCart = () => {
    addToCart({
      id: productData.id,
      name: `${productData.name} - ${selectedVariant.name} - ${selectedColor.name}`,
      price: selectedVariant.price,
      image: productData.images[0],
      quantity: quantity
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productData.images.length) % productData.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Accueil</a></li>
            <li>/</li>
            <li><a href="/boutique" className="hover:text-blue-600">Boutique</a></li>
            <li>/</li>
            <li><a href="/boutique?category=smartphones" className="hover:text-blue-600">{productData.category}</a></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{productData.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group">
              <img
                src={productData.images[currentImageIndex]}
                alt={productData.name}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              >
                <ChevronRight size={20} />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productData.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`bg-white rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${productData.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-blue-600 font-medium">{productData.brand}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-600">SKU: {productData.sku}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {productData.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < Math.floor(productData.rating) ? 'fill-current' : ''}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{productData.rating}</span>
                </div>
                <span className="text-gray-600">
                  ({productData.reviews.toLocaleString()} avis)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-3xl font-bold text-gray-900">
                  {selectedVariant.price.toLocaleString()}€
                </span>
                {productData.originalPrice > selectedVariant.price && (
                  <span className="text-xl text-gray-500 line-through">
                    {productData.originalPrice.toLocaleString()}€
                  </span>
                )}
              </div>
              {productData.originalPrice > selectedVariant.price && (
                <div className="flex items-center space-x-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{Math.round(((productData.originalPrice - selectedVariant.price) / productData.originalPrice) * 100)}%
                  </span>
                  <span className="text-green-600 font-medium">
                    Économisez {(productData.originalPrice - selectedVariant.price).toLocaleString()}€
                  </span>
                </div>
              )}
            </div>

            {/* Variants */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Capacité de stockage</h3>
              <div className="grid grid-cols-2 gap-3">
                {productData.variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    disabled={!variant.available}
                    className={`p-3 rounded-lg border-2 transition-all text-center ${
                      selectedVariant.id === variant.id
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : variant.available
                        ? 'border-gray-200 hover:border-gray-300'
                        : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <div className="font-medium">{variant.name}</div>
                    <div className="text-sm">
                      {variant.available ? `${variant.price.toLocaleString()}€` : 'Indisponible'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Couleur</h3>
              <div className="flex space-x-3">
                {productData.colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    disabled={!color.available}
                    className={`w-12 h-12 rounded-full border-4 transition-all ${
                      selectedColor.id === color.id
                        ? 'border-blue-500 scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    } ${!color.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">{selectedColor.name}</p>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantité</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(productData.stockCount, quantity + 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {productData.stockCount} en stock
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-blue-600 to-green-400 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-500 transition-all flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg"
              >
                <ShoppingCart size={20} />
                <span>Ajouter au panier - {(selectedVariant.price * quantity).toLocaleString()}€</span>
              </button>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 ${
                    isLiked
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-red-300 hover:text-red-500'
                  }`}
                >
                  <Heart size={18} className={isLiked ? 'fill-current' : ''} />
                  <span>{isLiked ? 'Ajouté aux favoris' : 'Ajouter aux favoris'}</span>
                </button>
                
                <button className="px-4 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-all">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="text-green-600" size={20} />
                </div>
                <div className="text-sm font-medium text-gray-900">Livraison gratuite</div>
                <div className="text-xs text-gray-600">Dès 50€ d'achat</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="text-blue-600" size={20} />
                </div>
                <div className="text-sm font-medium text-gray-900">Garantie 2 ans</div>
                <div className="text-xs text-gray-600">Constructeur</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <RotateCcw className="text-purple-600" size={20} />
                </div>
                <div className="text-sm font-medium text-gray-900">Retour 30 jours</div>
                <div className="text-xs text-gray-600">Satisfait ou remboursé</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'description', label: 'Description' },
                { id: 'specifications', label: 'Caractéristiques' },
                { id: 'reviews', label: `Avis (${reviews.length})` }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {productData.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Points forts</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {productData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(productData.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-900">{key}</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {/* Reviews Summary */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {productData.rating}
                      </div>
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < Math.floor(productData.rating) ? 'fill-current' : ''}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">
                        {productData.reviews.toLocaleString()} avis
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map(rating => (
                        <div key={rating} className="flex items-center space-x-3">
                          <span className="text-sm w-8">{rating}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: `${rating === 5 ? 75 : rating === 4 ? 20 : 5}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-12">
                            {rating === 5 ? '75%' : rating === 4 ? '20%' : '5%'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-100 pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="font-medium text-gray-900">{review.author}</span>
                            {review.verified && (
                              <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                                Achat vérifié
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className={i < review.rating ? 'fill-current' : ''}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="font-medium text-gray-900 mb-2">{review.title}</h4>
                      <p className="text-gray-700 mb-3">{review.content}</p>
                      
                      <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        👍 Utile ({review.helpful})
                      </button>
                    </div>
                  ))}
                </div>

                {/* Write Review Button */}
                <div className="text-center">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                    Écrire un avis
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Produits similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would be populated with related products */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-medium text-gray-900 mb-2">Produit similaire</h3>
              <p className="text-blue-600 font-bold">À partir de 999€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;