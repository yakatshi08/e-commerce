import React, { useState } from 'react';
import { Package, Truck, CheckCircle, XCircle, Eye, Download, RotateCcw } from 'lucide-react';

const orders = [
  {
    id: 'SH001234',
    date: '2024-12-15',
    status: 'delivered',
    total: 1299,
    items: [
      {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: 1199,
        quantity: 1,
        image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      {
        id: 2,
        name: 'Coque iPhone 15 Pro Max',
        price: 29,
        quantity: 1,
        image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    ],
    tracking: 'FR123456789',
    deliveryAddress: '123 Rue de la Paix, 75001 Paris'
  },
  {
    id: 'SH001235',
    date: '2024-12-10',
    status: 'shipped',
    total: 249,
    items: [
      {
        id: 3,
        name: 'AirPods Pro (2ème gen)',
        price: 249,
        quantity: 1,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    ],
    tracking: 'FR987654321',
    deliveryAddress: '123 Rue de la Paix, 75001 Paris'
  },
  {
    id: 'SH001236',
    date: '2024-12-05',
    status: 'processing',
    total: 899,
    items: [
      {
        id: 4,
        name: 'Apple Watch Ultra 2',
        price: 899,
        quantity: 1,
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    ],
    tracking: null,
    deliveryAddress: '123 Rue de la Paix, 75001 Paris'
  },
  {
    id: 'SH001237',
    date: '2024-11-28',
    status: 'cancelled',
    total: 2199,
    items: [
      {
        id: 5,
        name: 'MacBook Pro M3',
        price: 2199,
        quantity: 1,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=100'
      }
    ],
    tracking: null,
    deliveryAddress: '123 Rue de la Paix, 75001 Paris'
  }
];

const OrderHistoryPage = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState('all');

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'delivered':
        return {
          label: 'Livré',
          color: 'bg-green-100 text-green-600',
          icon: CheckCircle
        };
      case 'shipped':
        return {
          label: 'Expédié',
          color: 'bg-blue-100 text-blue-600',
          icon: Truck
        };
      case 'processing':
        return {
          label: 'En préparation',
          color: 'bg-yellow-100 text-yellow-600',
          icon: Package
        };
      case 'cancelled':
        return {
          label: 'Annulé',
          color: 'bg-red-100 text-red-600',
          icon: XCircle
        };
      default:
        return {
          label: 'Inconnu',
          color: 'bg-gray-100 text-gray-600',
          icon: Package
        };
    }
  };

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes commandes</h1>
          <p className="text-gray-600">Suivez l'état de vos commandes et gérez vos retours</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                statusFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toutes ({orders.length})
            </button>
            <button
              onClick={() => setStatusFilter('processing')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                statusFilter === 'processing'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              En préparation ({orders.filter(o => o.status === 'processing').length})
            </button>
            <button
              onClick={() => setStatusFilter('shipped')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                statusFilter === 'shipped'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Expédiées ({orders.filter(o => o.status === 'shipped').length})
            </button>
            <button
              onClick={() => setStatusFilter('delivered')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                statusFilter === 'delivered'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Livrées ({orders.filter(o => o.status === 'delivered').length})
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.map(order => {
            const statusInfo = getStatusInfo(order.status);
            const StatusIcon = statusInfo.icon;
            const isExpanded = selectedOrder === order.id;

            return (
              <div key={order.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Order Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-lg font-bold text-gray-900">#{order.id}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${statusInfo.color}`}>
                        <StatusIcon size={16} />
                        <span>{statusInfo.label}</span>
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedOrder(isExpanded ? null : order.id)}
                      className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1"
                    >
                      <Eye size={16} />
                      <span>{isExpanded ? 'Masquer' : 'Voir détails'}</span>
                    </button>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Date de commande</span>
                      <p className="font-medium">{new Date(order.date).toLocaleDateString('fr-FR')}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Total</span>
                      <p className="font-medium">{order.total.toLocaleString()}€</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Articles</span>
                      <p className="font-medium">{order.items.length} article{order.items.length > 1 ? 's' : ''}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Suivi</span>
                      <p className="font-medium">{order.tracking || 'Non disponible'}</p>
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                {isExpanded && (
                  <div className="p-6">
                    {/* Items */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Articles commandés</h4>
                      <div className="space-y-4">
                        {order.items.map(item => (
                          <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h5 className="font-medium text-gray-900">{item.name}</h5>
                              <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gray-900">{item.price.toLocaleString()}€</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery Address */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Adresse de livraison</h4>
                      <p className="text-gray-600">{order.deliveryAddress}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      {order.status === 'delivered' && (
                        <>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                            <Download size={16} />
                            <span>Télécharger la facture</span>
                          </button>
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                            <RotateCcw size={16} />
                            <span>Retourner un article</span>
                          </button>
                        </>
                      )}
                      
                      {order.status === 'shipped' && order.tracking && (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                          <Truck size={16} />
                          <span>Suivre le colis</span>
                        </button>
                      )}
                      
                      {order.status === 'processing' && (
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                          <XCircle size={16} />
                          <span>Annuler la commande</span>
                        </button>
                      )}
                      
                      <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                        Contacter le support
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucune commande trouvée
            </h3>
            <p className="text-gray-600 mb-6">
              {statusFilter === 'all' 
                ? 'Vous n\'avez pas encore passé de commande'
                : `Aucune commande avec le statut "${getStatusInfo(statusFilter).label}"`
              }
            </p>
            <a
              href="/boutique"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <Package size={20} />
              <span>Découvrir nos produits</span>
            </a>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-400 rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Besoin d'aide avec votre commande ?</h3>
            <p className="text-blue-100 mb-6">
              Notre équipe support est là pour vous aider avec toutes vos questions
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contacter le support
              </button>
              <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                FAQ Commandes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;