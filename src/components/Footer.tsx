import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-400 text-white font-bold text-xl px-3 py-2 rounded-lg">
                ShopySales
                <span className="text-xs font-normal">.blog</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre destination e-commerce de confiance pour des produits de qualité, un service exceptionnel et une expérience shopping moderne.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              {['Accueil', 'Boutique', 'Catégories', 'Blog', 'À propos', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Service client</h3>
            <ul className="space-y-3">
              {[
                'Centre d\'aide',
                'Livraison & retours',
                'Guide des tailles',
                'Politique de confidentialité',
                'Conditions générales',
                'Programme de fidélité'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Contactez-nous</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Téléphone</p>
                  <p className="font-medium">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-400 p-2 rounded-lg">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-medium">contact@shopysales.blog</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Adresse</p>
                  <p className="font-medium">123 Rue du Commerce<br />75001 Paris, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 ShopySales.blog. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Paiement sécurisé</span>
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">VISA</div>
                <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">MC</div>
                <div className="bg-blue-800 text-white px-2 py-1 rounded text-xs font-semibold">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;