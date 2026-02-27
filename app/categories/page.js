'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { 
      id: 'all',
      name: 'All Jewelry', 
      count: 1225,
      img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600',
      description: 'Complete collection of gold jewelry'
    },
    { 
      id: 'rings',
      name: 'Rings', 
      count: 203,
      img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600',
      description: 'Elegant rings for every finger'
    },
    { 
      id: 'necklaces',
      name: 'Necklaces', 
      count: 245,
      img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600',
      description: 'Statement necklaces and delicate chains'
    },
    { 
      id: 'earrings',
      name: 'Earrings', 
      count: 189,
      img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600',
      description: 'Studs, hoops, and chandbalis'
    },
    { 
      id: 'bangles',
      name: 'Bangles & Kadas', 
      count: 156,
      img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600',
      description: 'Traditional and modern designs'
    },
    { 
      id: 'bracelets',
      name: 'Bracelets', 
      count: 134,
      img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600',
      description: 'Delicate wrist adornments'
    },
    { 
      id: 'pendants',
      name: 'Pendants', 
      count: 98,
      img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600',
      description: 'Beautiful pendant designs'
    },
    { 
      id: 'chains',
      name: 'Chains', 
      count: 87,
      img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600',
      description: 'Gold chains in various styles'
    },
    { 
      id: 'anklets',
      name: 'Anklets', 
      count: 67,
      img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600',
      description: 'Traditional payal designs'
    },
    { 
      id: 'nosepins',
      name: 'Nose Pins', 
      count: 46,
      img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600',
      description: 'Classic and contemporary styles'
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">Browse Categories</h1>
            <p className="text-lg md:text-xl font-medium">
              Discover our complete range of 22KT gold jewelry
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white border-b sticky top-16 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex overflow-x-auto gap-6 py-4 no-scrollbar">
              {['all', 'rings', 'necklaces', 'earrings', 'bangles', 'bracelets'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-bold text-sm uppercase whitespace-nowrap transition ${
                    activeCategory === cat
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat === 'all' ? 'All' : categories.find(c => c.id === cat)?.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories
              .filter(cat => activeCategory === 'all' || cat.id === activeCategory)
              .map((category) => (
                <Link 
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-amber-500 hover:shadow-2xl transition-all duration-500">
                    {/* Image */}
                    <div className="aspect-square bg-gradient-to-br from-gray-900 to-black overflow-hidden relative">
                      <img 
                        src={category.img} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Count Badge */}
                      <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {category.count} Items
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-amber-600 transition">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-amber-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                          View All
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Special Collections Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Special Collections</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore our curated collections for weddings, festivals, and special occasions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/collections/bridal" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold transition">
                Bridal Collection
              </Link>
              <Link href="/collections/temple" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold transition border-2 border-white/30">
                Temple Jewelry
              </Link>
              <Link href="/collections/daily" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold transition border-2 border-white/30">
                Daily Wear
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🏆', title: 'Premium Quality', desc: 'BIS Hallmarked 22KT gold' },
                { icon: '💯', title: 'Certified Purity', desc: '100% pure gold guarantee' },
                { icon: '🎨', title: 'Unique Designs', desc: 'Exclusive handcrafted pieces' },
                { icon: '💰', title: 'Best Prices', desc: 'Competitive market rates' }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-amber-50 rounded-xl hover:bg-amber-100 transition">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}