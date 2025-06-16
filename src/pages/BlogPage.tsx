import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Les 10 tendances tech incontournables de 2024',
    excerpt: 'Découvrez les innovations qui vont révolutionner votre quotidien cette année.',
    content: 'L\'année 2024 s\'annonce riche en innovations technologiques...',
    author: 'Marie Dubois',
    date: '15 décembre 2024',
    readTime: '5 min',
    category: 'Tech',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Innovation', 'Tendances', '2024'],
    featured: true
  },
  {
    id: 2,
    title: 'Guide d\'achat : Comment choisir son smartphone en 2024',
    excerpt: 'Tous nos conseils pour faire le bon choix selon vos besoins et votre budget.',
    content: 'Choisir un smartphone peut sembler complexe...',
    author: 'Thomas Martin',
    date: '12 décembre 2024',
    readTime: '8 min',
    category: 'Guide',
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Smartphone', 'Guide', 'Achat'],
    featured: false
  },
  {
    id: 3,
    title: 'Écologie et tech : Les marques qui s\'engagent vraiment',
    excerpt: 'Focus sur les entreprises qui placent la durabilité au cœur de leur stratégie.',
    content: 'L\'impact environnemental de la tech est un enjeu majeur...',
    author: 'Sophie Laurent',
    date: '10 décembre 2024',
    readTime: '6 min',
    category: 'Écologie',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Écologie', 'Durabilité', 'Tech'],
    featured: true
  },
  {
    id: 4,
    title: 'Gaming : Les accessoires indispensables pour 2024',
    excerpt: 'Découvrez notre sélection d\'accessoires gaming pour améliorer vos performances.',
    content: 'Le gaming évolue constamment et les accessoires aussi...',
    author: 'Alex Chen',
    date: '8 décembre 2024',
    readTime: '7 min',
    category: 'Gaming',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Gaming', 'Accessoires', 'Performance'],
    featured: false
  }
];

const categories = ['Tous', 'Tech', 'Guide', 'Écologie', 'Gaming', 'Lifestyle'];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog ShopySales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conseils, guides d'achat, tendances tech et lifestyle pour rester connecté à l'innovation
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles à la une</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-1">
                    <span>Lire la suite</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher un article..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 text-xs text-gray-600 mb-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-green-400 rounded-2xl p-8 text-center text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">
            Restez informé des dernières tendances
          </h3>
          <p className="text-blue-100 mb-6">
            Recevez nos meilleurs articles directement dans votre boîte mail
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;