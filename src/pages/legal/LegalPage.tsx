import React from "react";

const LegalPage = () => {
  return (
    <div className="legal-page">
      <h1>Mentions légales</h1>

      <h2>1. Éditeur du site</h2>
      <ul>
        <li><strong>Nom : </strong>Votre Société</li>
        <li><strong>Adresse : </strong>2 rue Kellermann, 59100 Roubaix, France</li>
        <li><strong>Téléphone : </strong>1007</li>
        <li>
          <strong>Site web : </strong>
          <a
            href="https://www.ovh.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ovh.com
          </a>
        </li>
      </ul>

      <h2>2. Hébergeur</h2>
      <p>Le site est hébergé par OVH, 2 rue Kellermann, 59100 Roubaix, France.</p>

      <h2>3. Conditions d'utilisation</h2>
      <p>
        L'utilisation de ce site implique l'acceptation pleine et entière des
        conditions générales d'utilisation décrites ci-après.
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        Tous les éléments accessibles sur le site (textes, images, graphismes, logo,
        icônes, sons, logiciels) restent la propriété exclusive de l'éditeur.
      </p>
    </div>
  );
};

export default LegalPage;