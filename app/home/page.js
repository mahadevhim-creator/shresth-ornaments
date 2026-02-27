'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'

export default function HomePage() {
  const featuredProducts = [
    { id: 1, code: 'SO-RING-1486', weight: '2.450 gm', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500' },
    { id: 2, code: 'SO-PEND-2291', weight: '5.120 gm', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500' },
    { id: 3, code: 'SO-BANG-9902', weight: '12.300 gm', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500' },
    { id: 4, code: 'SO-EAR-1102', weight: '3.960 gm', img: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=500' },
  ]

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600" 
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Exquisite<br/>
              <span className="text-amber-400">Gold Jewelry</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light">
              Premium 22KT gold ornaments crafted with precision and tradition from Jaipur
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/collections" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl">
                Explore Collections
              </Link>
              <Link href="/about" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition border-2 border-white/30">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '✓', title: 'Certified Gold', desc: '100% Pure 22KT Gold with BIS Hallmark' },
              { icon: '🚚', title: 'Free Shipping', desc: 'On orders above ₹50,000' },
              { icon: '↻', title: 'Easy Returns', desc: '7-day return policy on all products' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white-900 mb-4">Featured Collection</h2>
            <p className="text-gray-600 text-lg">Handpicked designs for you</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/collections" className="inline-block bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-lg font-bold text-lg transition shadow-lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find the perfect piece for every occasion</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Rings', icon: '💍', count: 203 },
              { name: 'Necklaces', icon: '📿', count: 245 },
              { name: 'Earrings', icon: '👂', count: 189 },
              { name: 'Bangles', icon: '⭕', count: 156 },
              { name: 'Bracelets', icon: '🔗', count: 134 },
              { name: 'Pendants', icon: '💎', count: 98 }
            ].map((cat, i) => (
              <Link href={`/categories/${cat.name.toLowerCase()}`} key={i}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-amber-400">
                  <div className="text-5xl mb-3">{cat.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
                  <p className="text-xs text-gray-500">{cat.count} items</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Priya Sharma', text: 'Beautiful designs and excellent quality! Bought my bridal set from here.', rating: 5 },
              { name: 'Rahul Patel', text: 'Genuine 22KT gold with proper hallmark. Great service and fast delivery.', rating: 5 },
              { name: 'Anjali Singh', text: 'Love the traditional designs! Perfect for festivals and special occasions.', rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">{review.text}</p>
                <p className="font-bold text-gray-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}