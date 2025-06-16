import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Search, ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';

const faqCategories = [
  {
    id: 'orders',
    name: 'Commandes & Livraison',
    questions: [
      {
        question: 'Comment suivre ma commande ?',
        answer: 'Vous pouvez suivre votre commande en vous connectant à votre compte et en consultant la section "Mes commandes". Vous recevrez également un email avec le numéro de suivi dès l\'expédition.'
      },
      {
        question: 'Quels sont vos délais de livraison ?',
        answer: 'Livraison standard : 3-5 jours ouvrés. Livraison express : 24-48h. Livraison gratuite dès 50€ d\'achat.'
      },
      {
        question: 'Puis-je modifier ma commande après validation ?',
        answer: 'Vous pouvez modifier votre commande dans les 2 heures suivant la validation, en nous contactant directement. Passé ce délai, la commande est en préparation.'
      }
    ]
  },
  {
    id: 'returns',
    name: 'Retours & Remboursements',
    questions: [
      {
        question: 'Comment retourner un produit ?',
        answer: 'Vous avez 30 jours pour retourner un produit. Connectez-vous à votre compte, sélectionnez la commande et cliquez sur "Retourner un article". Nous vous fournirons une étiquette de retour prépayée.'
      },
      {
        question: 'Quand serai-je remboursé ?',
        answer: 'Le remboursement est effectué sous 5-7 jours ouvrés après réception et vérification du produit retourné.'
      },
      {
        question: 'Puis-je échanger un produit ?',
        answer: 'Oui, vous pouvez échanger un produit dans les 30 jours. Les frais de retour sont gratuits pour les échanges.'
      }
    ]
  },
  {
    id: 'payment',
    name: 'Paiement & Facturation',
    questions: [
      {
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer: 'Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, et le paiement en 3x sans frais dès 100€ d\'achat.'
      },
      {
        question: 'Mes données de paiement sont-elles sécurisées ?',
        answer: 'Oui, toutes les transactions sont sécurisées par cryptage SSL et nous ne stockons jamais vos données bancaires.'
      },
      {
        question: 'Comment obtenir ma facture ?',
        answer: 'Votre facture est disponible dans votre compte, section "Mes commandes". Vous pouvez la télécharger au format PDF.'
      }
    ]
  },
  {
    id: 'account',
    name: 'Compte & Connexion',
    questions: [
      {
        question: 'J\'ai oublié mon mot de passe',
        answer: 'Cliquez sur "Mot de passe oublié" sur la page de connexion. Vous recevrez un email pour réinitialiser votre mot de passe.'
      },
      {
        question: 'Comment modifier mes informations personnelles ?',
        answer: 'Connectez-vous à votre compte et rendez-vous dans la section "Mon profil" pour modifier vos informations.'
      },
      {
        question: 'Comment supprimer mon compte ?',
        answer: 'Vous pouvez supprimer votre compte dans les paramètres de votre profil ou en contactant notre support client.'
      }
    ]
  }
];

const SupportPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('orders');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Centre d'aide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions ou contactez notre équipe support
          </p>
        </div>

        {/* Quick Contact */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white text-center">
            <MessageCircle size={48} className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Chat en direct</h3>
            <p className="text-blue-100 text-sm mb-4">
              Assistance instantanée
            </p>
            <p className="text-blue-100 text-xs mb-4">
              Disponible 9h-18h (Lun-Ven)
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Démarrer le chat
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <Phone size={48} className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Téléphone</h3>
            <p className="text-green-100 text-sm mb-4">
              +33 1 23 45 67 89
            </p>
            <p className="text-green-100 text-xs mb-4">
              Lun-Ven: 9h-18h | Sam: 9h-17h
            </p>
            <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Appeler maintenant
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white text-center">
            <Mail size={48} className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-purple-100 text-sm mb-4">
              support@shopysales.blog
            </p>
            <p className="text-purple-100 text-xs mb-4">
              Réponse sous 24h
            </p>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Envoyer un email
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher dans la FAQ..."
              className="w-full pl-12 pr-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            {filteredCategories.map(category => (
              <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(
                    expandedCategory === category.id ? null : category.id
                  )}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="text-blue-600" size={24} />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {category.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
                      {category.questions.length}
                    </span>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronDown size={24} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={24} className="text-gray-400" />
                  )}
                </button>

                {expandedCategory === category.id && (
                  <div className="border-t border-gray-200">
                    {category.questions.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0">
                        <button
                          onClick={() => setExpandedQuestion(
                            expandedQuestion === `${category.id}-${index}` 
                              ? null 
                              : `${category.id}-${index}`
                          )}
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900 pr-4">
                              {faq.question}
                            </h4>
                            {expandedQuestion === `${category.id}-${index}` ? (
                              <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                            ) : (
                              <ChevronRight size={20} className="text-gray-400 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {expandedQuestion === `${category.id}-${index}` && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun résultat trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez avec d'autres mots-clés ou contactez notre support
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contacter le support
              </button>
            </div>
          )}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Vous n'avez pas trouvé votre réponse ?
          </h3>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sujet
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Question sur une commande</option>
                <option>Problème de livraison</option>
                <option>Retour/Échange</option>
                <option>Problème technique</option>
                <option>Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Décrivez votre problème ou votre question..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-400 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-500 transition-all transform hover:scale-105 shadow-lg"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        {/* Status Page */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            État des services
          </h3>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-600 font-medium">Tous les services opérationnels</span>
          </div>
          <p className="text-gray-600">
            Dernière mise à jour: {new Date().toLocaleString('fr-FR')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;