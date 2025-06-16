import React from 'react';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, total } = useCart();

  const shippingCost = total >= 50 ? 0 : 5.99;
  const finalTotal = total + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Votre panier est vide
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez nos produits et ajoutez vos favoris au panier
            </p>
            <Link
              to="/boutique"
              className="bg-gradient-to-r from-blue-600 to-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-green-500 transition-all inline-flex items-center space-x-2"
            >
              <ShoppingBag size={20} />
              <span>Découvrir nos produits</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            to="/boutique"
            className="p-2 hover:bg-white rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mon Panier</h1>
            <p className="text-gray-600">{items.length} article{items.length > 1 ? 's' : ''}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={`${item.id}-${item.name}`} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-blue-600 font-bold text-lg">
                      {item.price.toLocaleString()}€
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-bold text-gray-900">
                    {(item.price * item.quantity).toLocaleString()}€
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Récapitulatif</h2>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-medium">{total.toLocaleString()}€</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className={`font-medium ${shippingCost === 0 ? 'text-green-600' : ''}`}>
                    {shippingCost === 0 ? 'Gratuite' : `${shippingCost.toFixed(2)}€`}
                  </span>
                </div>

                {total < 50 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-700">
                      Ajoutez {(50 - total).toFixed(2)}€ pour la livraison gratuite !
                    </p>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{finalTotal.toLocaleString()}€</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/commande"
                className="w-full bg-gradient-to-r from-blue-600 to-green-400 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-500 transition-all flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg mb-4"
              >
                <span>Finaliser la commande</span>
              </Link>

              <Link
                to="/boutique"
                className="w-full bg-white text-gray-700 py-3 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center space-x-2"
              >
                <span>Continuer mes achats</span>
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Truck className="text-green-500" size={16} />
                  <span>Livraison express gratuite dès 50€</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Shield className="text-blue-500" size={16} />
                  <span>Paiement 100% sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;