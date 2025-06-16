import React, { useState } from 'react';
import { Mail, Gift, Bell, ArrowRight, Smartphone, Zap, Users } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setIsLoading(false);
        
        // Track newsletter signup
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: 'footer_newsletter'
          });
        }
        // Facebook pixel tracking
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead');
        }
      }, 1500);
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <Gift className="text-white" size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Bienvenue dans la communauté ShopySales ! 🎉
              </h3>
              <p className="text-blue-100 text-base md:text-lg mb-4">
                Votre code promo <span className="font-bold text-yellow-300">WELCOME15</span> vous attend dans votre boîte mail !
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-blue-100">
                <span>📧 Email envoyé</span>
                <span>🎁 -15% sur votre 1ère commande</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 relative overflow-hidden">
      {/* Background decorations - Mobile optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 md:w-32 h-20 md:h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 md:w-24 h-16 md:h-24 bg-green-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-400/20 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header - Mobile first */}
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-full mb-4">
              <Zap size={16} />
              <span className="text-sm font-medium">Communauté exclusive</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Rejoignez 50K+ jeunes connectés
            </h2>
            <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
              Soyez les premiers informés des drops, deals exclusifs et tendances tech qui font le buzz !
            </p>
          </div>

          {/* Benefits - Mobile optimized grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Gift className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Deals exclusifs</h3>
              <p className="text-blue-100 text-xs md:text-sm">Accès prioritaire aux ventes flash et codes promo VIP</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Smartphone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Drops en avant-première</h3>
              <p className="text-blue-100 text-xs md:text-sm">Nouveautés tech et lifestyle avant tout le monde</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 transform hover:scale-105 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Communauté VIP</h3>
              <p className="text-blue-100 text-xs md:text-sm">Conseils d'experts et avis de la communauté</p>
            </div>
          </div>

          {/* Newsletter form - Enhanced mobile UX */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@exemple.com"
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-900 bg-white shadow-lg text-sm md:text-base"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-400 to-yellow-400 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:from-green-500 hover:to-yellow-500 transform hover:scale-105 transition-all shadow-lg flex items-center justify-center space-x-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-900 border-t-transparent"></div>
                    <span>Inscription en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Rejoindre la communauté</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
            
            {/* Trust indicators */}
            <div className="mt-4 md:mt-6 flex items-center justify-center space-x-4 md:space-x-6 text-blue-100 text-xs md:text-sm">
              <div className="flex items-center space-x-1">
                <span>🔒</span>
                <span>100% sécurisé</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📧</span>
                <span>Pas de spam</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>✨</span>
                <span>Désabonnement facile</span>
              </div>
            </div>
            
            <p className="text-blue-100 text-xs mt-3 md:mt-4">
              En vous inscrivant, vous acceptez de recevoir nos emails promotionnels. 
              <br className="hidden sm:inline" />
              Vous pouvez vous désinscrire à tout moment.
            </p>
          </div>

          {/* Social proof - Mobile friendly */}
          <div className="mt-8 md:mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
            <div className="flex items-center justify-center space-x-4 md:space-x-8 text-white">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold">50K+</div>
                <div className="text-xs md:text-sm text-blue-100">Abonnés actifs</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold">4.9★</div>
                <div className="text-xs md:text-sm text-blue-100">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold">24h</div>
                <div className="text-xs md:text-sm text-blue-100">Support réactif</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;