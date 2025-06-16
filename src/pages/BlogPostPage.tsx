import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, MessageCircle } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Mock blog post data
  const post = {
    id: 1,
    title: 'Les 10 tendances tech incontournables de 2024',
    content: `
      <p>L'année 2024 s'annonce riche en innovations technologiques qui vont transformer notre quotidien. De l'intelligence artificielle générative aux nouvelles interfaces utilisateur, découvrons ensemble les tendances qui définiront cette année.</p>

      <h2>1. L'IA générative accessible à tous</h2>
      <p>L'intelligence artificielle générative n'est plus réservée aux experts. Des outils comme ChatGPT, Midjourney ou Stable Diffusion démocratisent l'accès à ces technologies révolutionnaires.</p>

      <h2>2. La réalité augmentée dans le quotidien</h2>
      <p>Avec l'arrivée de nouveaux casques AR/VR plus accessibles, la réalité augmentée s'invite dans nos maisons, nos bureaux et nos loisirs.</p>

      <h2>3. Les smartphones pliables se démocratisent</h2>
      <p>Après plusieurs années de développement, les smartphones pliables deviennent enfin abordables et fiables pour le grand public.</p>

      <h2>4. L'informatique quantique sort des laboratoires</h2>
      <p>Les premiers ordinateurs quantiques commerciaux commencent à voir le jour, ouvrant de nouvelles perspectives pour la recherche et l'industrie.</p>

      <h2>5. La 6G en préparation</h2>
      <p>Alors que la 5G se déploie encore, les recherches sur la 6G s'intensifient avec des promesses de vitesses encore plus impressionnantes.</p>
    `,
    author: 'Marie Dubois',
    date: '15 décembre 2024',
    readTime: '5 min',
    category: 'Tech',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Innovation', 'Tendances', '2024', 'IA', 'Tech']
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Guide d\'achat : Comment choisir son smartphone en 2024',
      image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '12 décembre 2024'
    },
    {
      id: 3,
      title: 'Écologie et tech : Les marques qui s\'engagent vraiment',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '10 décembre 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          <span>Retour au blog</span>
        </Link>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main content */}
          <article className="lg:col-span-3">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>

                {/* Social actions */}
                <div className="flex items-center space-x-4 pb-6 border-b border-gray-200">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart size={20} />
                    <span>42</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                    <MessageCircle size={20} />
                    <span>12</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                    <Share2 size={20} />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Author bio */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{post.author}</h3>
                  <p className="text-gray-600">Experte en technologies émergentes</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Passionnée par l'innovation, Marie partage les dernières tendances tech qui façonnent notre avenir.
                  </p>
                </div>
              </div>
            </div>

            {/* Comments section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Commentaires (12)</h3>
              
              {/* Comment form */}
              <div className="mb-8">
                <textarea
                  placeholder="Partagez votre avis..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={4}
                />
                <div className="flex justify-end mt-3">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Publier
                  </button>
                </div>
              </div>

              {/* Sample comments */}
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                      JD
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-gray-900">Jean Dupont</span>
                        <span className="text-sm text-gray-500">il y a 2 heures</span>
                      </div>
                      <p className="text-gray-700">
                        Excellent article ! J'ai hâte de voir comment l'IA va évoluer cette année.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Related posts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Articles similaires</h3>
                <div className="space-y-4">
                  {relatedPosts.map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-blue-600 to-green-400 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3">Newsletter</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Recevez nos derniers articles directement par email
                </p>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm mb-3"
                />
                <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                  S'abonner
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;