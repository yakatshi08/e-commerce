# ShopySales.blog - E-commerce Interface

Une interface e-commerce moderne et professionnelle construite avec React, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne** : Interface responsive avec palette de couleurs électrique
- **Mobile-first** : Optimisé pour tous les appareils
- **Panier interactif** : Gestion complète du panier d'achat
- **SEO optimisé** : Métadonnées et structure optimisées
- **Analytics ready** : Intégration préparée pour Facebook Pixel et Google Analytics
- **Animations fluides** : Micro-interactions et transitions engageantes

## 🛠️ Technologies utilisées

- **React 18** avec TypeScript
- **Tailwind CSS** pour le styling
- **Vite** comme bundler
- **Lucide React** pour les icônes
- **Context API** pour la gestion d'état

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/[VOTRE-USERNAME]/shopysales-blog.git

# Naviguer dans le dossier
cd shopysales-blog

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🏗️ Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Palette de couleurs

- **Électrique** : #1E90FF (Bleu principal)
- **Menthe fraîche** : #98FF98 (Accents verts)
- **Gris clair** : #F5F5F5 (Arrière-plans)

## 📱 Responsive Design

L'interface est optimisée pour :
- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Configuration

### Analytics et Tracking

Pour activer le tracking, remplacez dans `index.html` :
- `YOUR_PIXEL_ID_HERE` par votre ID Facebook Pixel
- `GA_TRACKING_ID` par votre ID Google Analytics

### Variables d'environnement

Créez un fichier `.env` pour vos variables sensibles :
```
VITE_API_URL=your_api_url
VITE_STRIPE_KEY=your_stripe_key
```

## 📄 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Categories.tsx
│   ├── FeaturedProducts.tsx
│   ├── Testimonials.tsx
│   ├── Newsletter.tsx
│   └── Footer.tsx
├── context/            # Context API
│   └── CartContext.tsx
├── App.tsx            # Composant principal
├── main.tsx          # Point d'entrée
└── index.css         # Styles globaux
```

## 🚀 Déploiement

### Netlify
```bash
npm run build
# Déployez le dossier dist/
```

### Vercel
```bash
npm run build
# Connectez votre repository GitHub à Vercel
```

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- Website: [shopysales.blog](https://shopysales.blog)
- Email: contact@shopysales.blog

---

⭐ N'hésitez pas à donner une étoile si ce projet vous plaît !