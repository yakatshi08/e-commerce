import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsPage = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Conditions Générales de Vente
            </h1>
            <p className="text-gray-600">
              Dernière mise à jour : 15 décembre 2024
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre ShopySales, 
              société par actions simplifiée au capital de 100 000 euros, immatriculée au RCS de Paris sous le numéro 
              123 456 789, dont le siège social est situé 123 Rue du Commerce, 75001 Paris, France, et toute personne 
              physique ou morale souhaitant effectuer un achat via le site internet shopysales.blog.
            </p>

            <h2>2. Acceptation des conditions</h2>
            <p>
              Toute commande implique l'acceptation pleine et entière des présentes conditions générales de vente. 
              L'acheteur déclare avoir pris connaissance de ces conditions et les accepter sans réserve.
            </p>

            <h2>3. Produits</h2>
            <p>
              Les produits proposés sont ceux qui figurent dans le catalogue publié sur le site shopysales.blog. 
              Ces produits sont proposés dans la limite des stocks disponibles. ShopySales se réserve le droit de 
              modifier à tout moment l'assortiment de produits.
            </p>

            <h3>3.1 Descriptions</h3>
            <p>
              Les photographies et descriptifs figurant sur le site ne sont pas contractuels. ShopySales s'efforce 
              de présenter les produits avec la plus grande exactitude possible, mais ne peut garantir que les couleurs 
              apparaissant sur l'écran correspondent exactement aux couleurs réelles des produits.
            </p>

            <h2>4. Prix</h2>
            <p>
              Les prix sont indiqués en euros toutes taxes comprises (TTC), hors frais de livraison. ShopySales se 
              réserve le droit de modifier ses prix à tout moment, étant toutefois entendu que le prix figurant au 
              catalogue le jour de la commande sera le seul applicable à l'acheteur.
            </p>

            <h3>4.1 Frais de livraison</h3>
            <p>
              Les frais de livraison sont calculés en fonction du poids, du volume et de la destination. Ils sont 
              indiqués avant la validation définitive de la commande. La livraison est gratuite pour toute commande 
              supérieure à 50 euros en France métropolitaine.
            </p>

            <h2>5. Commande</h2>
            <p>
              La commande est ferme et définitive dès validation du paiement. ShopySales se réserve le droit d'annuler 
              toute commande d'un client avec lequel existerait un litige relatif au paiement d'une commande antérieure.
            </p>

            <h3>5.1 Processus de commande</h3>
            <ol>
              <li>Sélection des produits et ajout au panier</li>
              <li>Vérification du contenu du panier</li>
              <li>Identification ou création de compte</li>
              <li>Saisie des adresses de facturation et de livraison</li>
              <li>Choix du mode de livraison</li>
              <li>Choix du mode de paiement et paiement</li>
              <li>Confirmation de la commande</li>
            </ol>

            <h2>6. Paiement</h2>
            <p>
              Le paiement s'effectue comptant, par carte bancaire (Visa, Mastercard) ou par PayPal. Le débit de la 
              carte a lieu au moment de la validation de la commande. Les données de paiement sont sécurisées par 
              cryptage SSL.
            </p>

            <h3>6.1 Paiement en plusieurs fois</h3>
            <p>
              Pour les commandes supérieures à 100 euros, un paiement en 3 fois sans frais est proposé via notre 
              partenaire financier, sous réserve d'acceptation du dossier.
            </p>

            <h2>7. Livraison</h2>
            <p>
              Les produits sont livrés à l'adresse indiquée par l'acheteur lors de la commande. Les délais de livraison 
              sont donnés à titre indicatif et ne sont pas garantis.
            </p>

            <h3>7.1 Délais de livraison</h3>
            <ul>
              <li>Livraison standard : 3 à 5 jours ouvrés</li>
              <li>Livraison express : 24 à 48 heures</li>
              <li>Livraison en point relais : 2 à 4 jours ouvrés</li>
            </ul>

            <h3>7.2 Réception de la commande</h3>
            <p>
              L'acheteur doit vérifier l'état des produits à la livraison et signaler toute anomalie dans les 48 heures. 
              À défaut, les produits seront réputés conformes et exempts de tout vice apparent.
            </p>

            <h2>8. Droit de rétractation</h2>
            <p>
              Conformément à l'article L. 121-21 du Code de la consommation, l'acheteur dispose d'un délai de 14 jours 
              francs pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalité.
            </p>

            <h3>8.1 Modalités de retour</h3>
            <p>
              Les produits doivent être retournés dans leur emballage d'origine, en parfait état, accompagnés de tous 
              les accessoires. Les frais de retour sont à la charge de l'acheteur, sauf en cas de produit défectueux 
              ou d'erreur de livraison.
            </p>

            <h2>9. Garanties</h2>
            <p>
              Tous les produits bénéficient de la garantie légale de conformité et de la garantie contre les vices cachés. 
              En outre, certains produits peuvent bénéficier d'une garantie commerciale du fabricant.
            </p>

            <h3>9.1 Garantie légale de conformité</h3>
            <p>
              L'acheteur bénéficie de la garantie légale de conformité prévue aux articles L. 217-4 et suivants du 
              Code de la consommation et de la garantie des défauts de la chose vendue prévue aux articles 1641 et 
              suivants du Code civil.
            </p>

            <h2>10. Responsabilité</h2>
            <p>
              La responsabilité de ShopySales ne saurait être engagée pour tous les inconvénients ou dommages inhérents 
              à l'utilisation du réseau Internet, notamment une rupture de service, une intrusion extérieure ou la 
              présence de virus informatiques.
            </p>

            <h2>11. Données personnelles</h2>
            <p>
              Les informations recueillies font l'objet d'un traitement informatique destiné à la gestion des commandes 
              et de la relation client. Conformément au RGPD, l'acheteur dispose d'un droit d'accès, de rectification 
              et de suppression des données le concernant.
            </p>

            <h2>12. Propriété intellectuelle</h2>
            <p>
              Tous les éléments du site shopysales.blog sont et restent la propriété intellectuelle et exclusive de 
              ShopySales. Personne n'est autorisé à reproduire, exploiter, rediffuser, ou utiliser à quelque titre 
              que ce soit, même partiellement, des éléments du site qu'ils soient logiciels, visuels ou sonores.
            </p>

            <h2>13. Droit applicable et juridiction</h2>
            <p>
              Les présentes conditions générales de vente sont soumises à la loi française. En cas de litige, et après 
              échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents.
            </p>

            <h2>14. Contact</h2>
            <p>
              Pour toute question relative aux présentes conditions générales de vente, vous pouvez nous contacter :
            </p>
            <ul>
              <li>Par email : legal@shopysales.blog</li>
              <li>Par téléphone : +33 1 23 45 67 89</li>
              <li>Par courrier : ShopySales, 123 Rue du Commerce, 75001 Paris, France</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;