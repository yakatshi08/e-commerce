import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
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
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-600">
              Dernière mise à jour : 15 décembre 2024
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-4">En résumé</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start space-x-3">
                <Lock className="text-blue-600 mt-1" size={16} />
                <div>
                  <h3 className="font-semibold text-blue-900">Sécurité</h3>
                  <p className="text-blue-700">Vos données sont cryptées et protégées</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Eye className="text-blue-600 mt-1" size={16} />
                <div>
                  <h3 className="font-semibold text-blue-900">Transparence</h3>
                  <p className="text-blue-700">Vous savez exactement ce que nous collectons</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-blue-600 mt-1" size={16} />
                <div>
                  <h3 className="font-semibold text-blue-900">Contrôle</h3>
                  <p className="text-blue-700">Vous maîtrisez vos données personnelles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              ShopySales s'engage à protéger la confidentialité et la sécurité de vos données personnelles. Cette 
              politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos 
              informations personnelles lorsque vous utilisez notre site web shopysales.blog et nos services.
            </p>

            <h2>2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est :
            </p>
            <ul>
              <li><strong>Société :</strong> ShopySales SAS</li>
              <li><strong>Adresse :</strong> 123 Rue du Commerce, 75001 Paris, France</li>
              <li><strong>Email :</strong> privacy@shopysales.blog</li>
              <li><strong>Téléphone :</strong> +33 1 23 45 67 89</li>
            </ul>

            <h2>3. Données collectées</h2>
            <p>
              Nous collectons différents types de données personnelles selon votre utilisation de nos services :
            </p>

            <h3>3.1 Données d'identification</h3>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Date de naissance (optionnelle)</li>
            </ul>

            <h3>3.2 Données de commande</h3>
            <ul>
              <li>Adresses de facturation et de livraison</li>
              <li>Historique des commandes</li>
              <li>Préférences de livraison</li>
              <li>Informations de paiement (cryptées)</li>
            </ul>

            <h3>3.3 Données de navigation</h3>
            <ul>
              <li>Adresse IP</li>
              <li>Type de navigateur et version</li>
              <li>Pages visitées et temps passé</li>
              <li>Cookies et technologies similaires</li>
            </ul>

            <h2>4. Finalités du traitement</h2>
            <p>
              Nous utilisons vos données personnelles pour les finalités suivantes :
            </p>

            <h3>4.1 Gestion des commandes</h3>
            <ul>
              <li>Traitement et suivi des commandes</li>
              <li>Gestion des livraisons</li>
              <li>Facturation et comptabilité</li>
              <li>Service après-vente</li>
            </ul>

            <h3>4.2 Amélioration de nos services</h3>
            <ul>
              <li>Personnalisation de l'expérience utilisateur</li>
              <li>Recommandations de produits</li>
              <li>Analyses statistiques</li>
              <li>Amélioration de notre site web</li>
            </ul>

            <h3>4.3 Communication marketing</h3>
            <ul>
              <li>Newsletter et offres promotionnelles</li>
              <li>Notifications de nouveaux produits</li>
              <li>Enquêtes de satisfaction</li>
              <li>Programme de fidélité</li>
            </ul>

            <h2>5. Base légale du traitement</h2>
            <p>
              Nous traitons vos données personnelles sur la base de :
            </p>
            <ul>
              <li><strong>Exécution du contrat :</strong> pour traiter vos commandes et fournir nos services</li>
              <li><strong>Intérêt légitime :</strong> pour améliorer nos services et assurer la sécurité</li>
              <li><strong>Consentement :</strong> pour les communications marketing et les cookies non essentiels</li>
              <li><strong>Obligation légale :</strong> pour la comptabilité et les obligations fiscales</li>
            </ul>

            <h2>6. Partage des données</h2>
            <p>
              Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
            </p>

            <h3>6.1 Prestataires de services</h3>
            <ul>
              <li>Transporteurs pour la livraison</li>
              <li>Processeurs de paiement</li>
              <li>Hébergeurs et services cloud</li>
              <li>Services d'analyse et de marketing</li>
            </ul>

            <h3>6.2 Obligations légales</h3>
            <p>
              Nous pouvons divulguer vos données si la loi l'exige ou pour protéger nos droits légitimes.
            </p>

            <h2>7. Transferts internationaux</h2>
            <p>
              Certains de nos prestataires peuvent être situés en dehors de l'Union européenne. Dans ce cas, 
              nous nous assurons que des garanties appropriées sont en place pour protéger vos données, 
              notamment par des clauses contractuelles types approuvées par la Commission européenne.
            </p>

            <h2>8. Durée de conservation</h2>
            <p>
              Nous conservons vos données personnelles pendant les durées suivantes :
            </p>
            <ul>
              <li><strong>Données de compte :</strong> jusqu'à suppression du compte + 3 ans</li>
              <li><strong>Données de commande :</strong> 10 ans (obligations comptables)</li>
              <li><strong>Données marketing :</strong> 3 ans après le dernier contact</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            </ul>

            <h2>9. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>

            <h3>9.1 Droit d'accès</h3>
            <p>
              Vous pouvez demander une copie de toutes les données personnelles que nous détenons sur vous.
            </p>

            <h3>9.2 Droit de rectification</h3>
            <p>
              Vous pouvez demander la correction de données inexactes ou incomplètes.
            </p>

            <h3>9.3 Droit à l'effacement</h3>
            <p>
              Vous pouvez demander la suppression de vos données dans certaines circonstances.
            </p>

            <h3>9.4 Droit à la limitation</h3>
            <p>
              Vous pouvez demander la limitation du traitement de vos données.
            </p>

            <h3>9.5 Droit à la portabilité</h3>
            <p>
              Vous pouvez demander le transfert de vos données vers un autre service.
            </p>

            <h3>9.6 Droit d'opposition</h3>
            <p>
              Vous pouvez vous opposer au traitement de vos données à des fins de marketing direct.
            </p>

            <h3>9.7 Exercice de vos droits</h3>
            <p>
              Pour exercer vos droits, contactez-nous à : privacy@shopysales.blog ou via votre compte client.
            </p>

            <h2>10. Sécurité des données</h2>
            <p>
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger 
              vos données personnelles :
            </p>
            <ul>
              <li>Cryptage SSL/TLS pour toutes les transmissions</li>
              <li>Authentification à deux facteurs</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Surveillance et détection des intrusions</li>
              <li>Sauvegardes régulières et sécurisées</li>
              <li>Formation du personnel à la protection des données</li>
            </ul>

            <h2>11. Cookies et technologies similaires</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences 
              de cookies via notre bandeau de consentement ou les paramètres de votre navigateur.
            </p>

            <h3>11.1 Types de cookies</h3>
            <ul>
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
              <li><strong>Cookies de performance :</strong> pour analyser l'utilisation du site</li>
              <li><strong>Cookies de fonctionnalité :</strong> pour mémoriser vos préférences</li>
              <li><strong>Cookies marketing :</strong> pour personnaliser la publicité</li>
            </ul>

            <h2>12. Mineurs</h2>
            <p>
              Nos services ne sont pas destinés aux personnes de moins de 16 ans. Nous ne collectons pas 
              sciemment de données personnelles auprès de mineurs de moins de 16 ans.
            </p>

            <h2>13. Modifications de cette politique</h2>
            <p>
              Nous pouvons modifier cette politique de confidentialité. Les modifications importantes vous 
              seront notifiées par email ou via notre site web.
            </p>

            <h2>14. Contact et réclamations</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :
            </p>
            <ul>
              <li><strong>Email :</strong> privacy@shopysales.blog</li>
              <li><strong>Courrier :</strong> ShopySales - DPO, 123 Rue du Commerce, 75001 Paris</li>
            </ul>
            <p>
              Vous avez également le droit de déposer une réclamation auprès de la CNIL (Commission Nationale 
              de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;