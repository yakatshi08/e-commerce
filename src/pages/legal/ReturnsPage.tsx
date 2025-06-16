import React from 'react';
import { ArrowLeft, RotateCcw, Package, Truck, CreditCard, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReturnsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          <span>Retour à l'accueil</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="text-green-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Retours & Échanges
            </h1>
            <p className="text-gray-600">
              Politique de retour simple et transparente - Satisfait ou remboursé
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Clock className="mx-auto mb-3 text-blue-600" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">30 jours</h3>
              <p className="text-sm text-gray-600">pour retourner vos produits</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Truck className="mx-auto mb-3 text-green-600" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Retour gratuit</h3>
              <p className="text-sm text-gray-600">étiquette prépayée fournie</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <CreditCard className="mx-auto mb-3 text-purple-600" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Remboursement</h3>
              <p className="text-sm text-gray-600">sous 5-7 jours ouvrés</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Package className="mx-auto mb-3 text-orange-600" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">État neuf</h3>
              <p className="text-sm text-gray-600">produits non utilisés</p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
            <h2>1. Droit de rétractation</h2>
            <p>
              Conformément à l'article L. 121-21 du Code de la consommation, vous disposez d'un délai de 
              <strong> 30 jours francs</strong> à compter de la réception de votre commande pour exercer votre 
              droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalité.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 not-prose">
              <h3 className="font-bold text-blue-900 mb-3">💡 Bon à savoir</h3>
              <p className="text-blue-800 text-sm">
                Le délai de 30 jours commence à courir dès la réception de votre dernier article en cas de 
                commande multiple avec livraisons séparées.
              </p>
            </div>

            <h2>2. Conditions de retour</h2>
            <p>
              Pour être acceptés, les produits retournés doivent respecter les conditions suivantes :
            </p>

            <h3>2.1 État du produit</h3>
            <ul>
              <li>Produit en parfait état, non utilisé et non endommagé</li>
              <li>Emballage d'origine intact avec tous les accessoires</li>
              <li>Étiquettes et films de protection non retirés</li>
              <li>Notice d'utilisation et certificat de garantie inclus</li>
            </ul>

            <h3>2.2 Produits non retournables</h3>
            <p>
              Certains produits ne peuvent pas être retournés pour des raisons d'hygiène ou de sécurité :
            </p>
            <ul>
              <li>Produits personnalisés ou sur-mesure</li>
              <li>Produits d'hygiène (écouteurs intra-auriculaires, etc.)</li>
              <li>Logiciels dont l'emballage a été descellé</li>
              <li>Produits périssables ou à durée de vie limitée</li>
            </ul>

            <h2>3. Procédure de retour</h2>
            <p>
              Pour retourner un produit, suivez ces étapes simples :
            </p>

            <div className="bg-gray-50 rounded-lg p-6 not-prose">
              <ol className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Connectez-vous à votre compte</h4>
                    <p className="text-sm text-gray-600">Rendez-vous dans la section "Mes commandes"</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sélectionnez votre commande</h4>
                    <p className="text-sm text-gray-600">Cliquez sur "Retourner un article"</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Indiquez le motif</h4>
                    <p className="text-sm text-gray-600">Sélectionnez la raison du retour</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Téléchargez l'étiquette</h4>
                    <p className="text-sm text-gray-600">Étiquette de retour prépayée fournie</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expédiez le colis</h4>
                    <p className="text-sm text-gray-600">Déposez-le dans un point relais ou bureau de poste</p>
                  </div>
                </li>
              </ol>
            </div>

            <h3>3.1 Sans compte client</h3>
            <p>
              Si vous n'avez pas de compte, contactez notre service client avec votre numéro de commande :
            </p>
            <ul>
              <li><strong>Email :</strong> retours@shopysales.blog</li>
              <li><strong>Téléphone :</strong> +33 1 23 45 67 89</li>
            </ul>

            <h2>4. Frais de retour</h2>
            <p>
              Les frais de retour sont <strong>entièrement gratuits</strong> dans les cas suivants :
            </p>
            <ul>
              <li>Exercice du droit de rétractation</li>
              <li>Produit défectueux ou non conforme</li>
              <li>Erreur de livraison de notre part</li>
              <li>Échange contre un autre produit</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 not-prose">
              <h3 className="font-bold text-green-900 mb-3">🎁 Avantage client</h3>
              <p className="text-green-800 text-sm">
                Chez ShopySales, tous les retours sont gratuits ! Nous prenons en charge les frais de retour 
                pour vous offrir une expérience d'achat sans risque.
              </p>
            </div>

            <h2>5. Remboursement</h2>
            <p>
              Une fois votre retour reçu et vérifié dans nos entrepôts, nous procédons au remboursement :
            </p>

            <h3>5.1 Délai de remboursement</h3>
            <ul>
              <li><strong>Vérification :</strong> 1-2 jours ouvrés après réception</li>
              <li><strong>Remboursement :</strong> 5-7 jours ouvrés selon votre banque</li>
              <li><strong>Notification :</strong> Email de confirmation envoyé</li>
            </ul>

            <h3>5.2 Mode de remboursement</h3>
            <p>
              Le remboursement s'effectue automatiquement sur le moyen de paiement utilisé lors de l'achat :
            </p>
            <ul>
              <li>Carte bancaire : crédit sur votre compte</li>
              <li>PayPal : crédit sur votre compte PayPal</li>
              <li>Paiement en plusieurs fois : annulation des échéances restantes</li>
            </ul>

            <h2>6. Échanges</h2>
            <p>
              Vous souhaitez échanger votre produit ? C'est possible et gratuit !
            </p>

            <h3>6.1 Conditions d'échange</h3>
            <ul>
              <li>Même produit dans une taille/couleur différente</li>
              <li>Produit de valeur équivalente ou supérieure</li>
              <li>Stock disponible au moment de la demande</li>
              <li>Respect des conditions de retour</li>
            </ul>

            <h3>6.2 Procédure d'échange</h3>
            <p>
              L'échange suit la même procédure qu'un retour, mais sélectionnez "Échange" comme motif. 
              Nous expédierons le nouveau produit dès réception de l'ancien.
            </p>

            <h2>7. Produits défectueux</h2>
            <p>
              En cas de produit défectueux ou non conforme, nous nous engageons à trouver une solution rapide :
            </p>

            <h3>7.1 Signalement</h3>
            <p>
              Signalez tout défaut dans les <strong>48 heures</strong> suivant la réception :
            </p>
            <ul>
              <li>Prenez des photos du défaut</li>
              <li>Contactez notre service client</li>
              <li>Conservez l'emballage d'origine</li>
            </ul>

            <h3>7.2 Solutions proposées</h3>
            <ul>
              <li><strong>Remplacement :</strong> envoi d'un produit neuf</li>
              <li><strong>Réparation :</strong> prise en charge par le SAV</li>
              <li><strong>Remboursement :</strong> intégral si réparation impossible</li>
            </ul>

            <h2>8. Garanties</h2>
            <p>
              Tous nos produits bénéficient des garanties légales et commerciales :
            </p>

            <h3>8.1 Garantie légale de conformité</h3>
            <ul>
              <li><strong>Durée :</strong> 2 ans à partir de la livraison</li>
              <li><strong>Couverture :</strong> défauts de conformité</li>
              <li><strong>Présomption :</strong> 24 mois pour les défauts apparents</li>
            </ul>

            <h3>8.2 Garantie constructeur</h3>
            <ul>
              <li>Durée variable selon les marques</li>
              <li>Conditions spécifiques à chaque fabricant</li>
              <li>Certificat de garantie fourni avec le produit</li>
            </ul>

            <h2>9. Contact service retours</h2>
            <p>
              Notre équipe dédiée aux retours est à votre disposition :
            </p>

            <div className="bg-blue-50 rounded-lg p-6 not-prose">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">📧 Email</h4>
                  <p className="text-sm text-gray-700">retours@shopysales.blog</p>
                  <p className="text-xs text-gray-600">Réponse sous 24h</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">📞 Téléphone</h4>
                  <p className="text-sm text-gray-700">+33 1 23 45 67 89</p>
                  <p className="text-xs text-gray-600">Lun-Ven: 9h-18h</p>
                </div>
              </div>
            </div>

            <h2>10. Adresse de retour</h2>
            <p>
              <strong>Important :</strong> N'envoyez jamais un colis sans avoir au préalable déclaré votre retour 
              et obtenu une étiquette prépayée.
            </p>
            
            <div className="bg-gray-100 rounded-lg p-4 not-prose">
              <p className="font-mono text-sm">
                <strong>ShopySales - Service Retours</strong><br />
                Entrepôt Logistique<br />
                456 Avenue de la Logistique<br />
                77000 Melun<br />
                France
              </p>
            </div>

            <h2>11. Suivi de votre retour</h2>
            <p>
              Vous pouvez suivre l'état de votre retour à tout moment :
            </p>
            <ul>
              <li>Dans votre compte client, section "Mes retours"</li>
              <li>Par email : notifications automatiques à chaque étape</li>
              <li>Par téléphone : notre service client vous renseigne</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 not-prose">
              <h3 className="font-bold text-yellow-900 mb-3">⚠️ Important</h3>
              <p className="text-yellow-800 text-sm">
                Conservez votre numéro de suivi jusqu'à confirmation du remboursement. En cas de colis perdu, 
                ce numéro sera nécessaire pour ouvrir une enquête.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPage;