'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function RoyalHomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const featuredProducts = [
    { 
      id: 1, 
      code: 'SO-NECK-1486', 
      name: 'Royal Temple Necklace',
      weight: '45.50 gm',
      wastage: '12%',
      price: '₹2,84,375',
      img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600',
      badge: 'BESTSELLER'
    },
    { 
      id: 2, 
      code: 'SO-EAR-2291', 
      name: 'Diamond Cut Earrings',
      weight: '12.30 gm',
      wastage: '15%',
      price: '₹76,875',
      img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600',
      badge: 'NEW'
    },
    { 
      id: 3, 
      code: 'SO-BANG-1102', 
      name: 'Designer Bangles Set',
      weight: '65.20 gm',
      wastage: '18%',
      price: '₹4,07,500',
      img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600',
      badge: 'TRENDING'
    },
    { 
      id: 4, 
      code: 'SO-RING-9902', 
      name: 'Traditional Gold Ring',
      weight: '8.50 gm',
      wastage: '8%',
      price: '₹53,125',
      img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600',
      badge: 'POPULAR'
    },
  ]

  const testimonials = [
    { 
      name: 'Priya Sharma', 
      location: 'Mumbai',
      text: 'Absolutely stunning collection! The quality of gold and craftsmanship is exceptional. Bought my entire bridal jewelry from Shresth Ornaments.',
      rating: 5,
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200'
    },
    { 
      name: 'Rahul Patel', 
      location: 'Delhi',
      text: 'Genuine 22KT gold with proper BIS hallmark. Transparent pricing and honest dealings. Highly recommended for traditional jewelry.',
      rating: 5,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
    },
    { 
      name: 'Anjali Singh', 
      location: 'Jaipur',
      text: 'The temple jewelry collection is simply divine! Each piece tells a story. Perfect for festivals and special occasions.',
      rating: 5,
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section - Royal Design */}
      <section className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920"
            alt="Luxury Gold Jewelry"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-3xl">
              {/* Subtitle */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                <span className="text-white font-bold text-sm tracking-wider">PREMIUM 22KT GOLD JEWELRY</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                <span className="text-white">Timeless</span>
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Elegance
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-10 font-light leading-relaxed max-w-2xl">
                Discover exquisite handcrafted gold jewelry that celebrates Indian heritage and modern sophistication
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/collections" 
                  className="group bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white px-10 py-5 rounded-xl font-black text-lg transition shadow-2xl hover:shadow-amber-500/50 flex items-center gap-3"
                >
                  Explore Collections
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  href="/about" 
                  className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition border-2 border-white/30 hover:border-white/50 flex items-center gap-3"
                >
                  Our Heritage
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 border-y-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'BIS Certified', desc: '100% Hallmarked' },
              { icon: '🚚', title: 'Free Shipping', desc: 'On orders above ₹50k' },
              { icon: '↻', title: 'Easy Returns', desc: '7-day return policy' },
              { icon: '🔒', title: 'Secure Payment', desc: 'SSL encrypted' }
            ].map((badge, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h3 className="font-black text-lg mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-400">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-6 py-2 mb-4">
              <span className="text-amber-600 font-bold text-sm tracking-wider">HANDPICKED FOR YOU</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Masterpieces</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Explore our curated collection of exquisite gold jewelry
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group relative">
                {/* Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-amber-400 transform hover:-translate-y-2">
                  
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                    <Image 
                      src={product.img} 
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-2 rounded-full text-xs font-black shadow-lg ${
                        product.badge === 'NEW' ? 'bg-green-600 text-white' :
                        product.badge === 'BESTSELLER' ? 'bg-amber-600 text-white' :
                        product.badge === 'TRENDING' ? 'bg-purple-600 text-white' :
                        'bg-blue-600 text-white'
                      }`}>
                        {product.badge}
                      </span>
                    </div>

                    {/* Quick View */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold transform scale-75 group-hover:scale-100 transition-transform">
                        Quick View
                      </button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs font-bold text-amber-600 mb-2 tracking-widest">{product.code}</p>
                    <h3 className="text-lg font-black text-gray-900 mb-4 group-hover:text-amber-600 transition">
                      {product.name}
                    </h3>
                    
                    {/* Specs */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Net Weight</span>
                        <span className="font-bold text-gray-900">{product.weight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Wastage</span>
                        <span className="font-bold text-amber-600">{product.wastage}</span>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <span className="text-2xl font-black text-gray-900">{product.price}</span>
                      <button className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-xl transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/collections" className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-10 py-5 rounded-xl font-black text-lg transition shadow-xl">
              View All Collections
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category - Royal Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">Category</span>
            </h2>
            <p className="text-gray-600 text-xl">Find the perfect piece for every occasion</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Necklaces', icon: '📿', count: 245, img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400' },
              { name: 'Earrings', icon: '👂', count: 189, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400' },
              { name: 'Rings', icon: '💍', count: 203, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400' },
              { name: 'Bangles', icon: '⭕', count: 156, img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400' },
              { name: 'Bracelets', icon: '🔗', count: 134, img: 'https://images.unsplash.com/photo-1611128371111-8f598b6a0da8?w=400' },
              { name: 'Pendants', icon: '💎', count: 98, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' }
            ].map((cat, i) => (
              <Link href={`/categories/${cat.name.toLowerCase()}`} key={i}>
                <div className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  {/* Background Image */}
                  <Image 
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="text-5xl mb-3">{cat.icon}</div>
                    <h3 className="font-black text-white text-xl mb-1">{cat.name}</h3>
                    <p className="text-amber-400 text-sm font-bold">{cat.count} Items</p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-4 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Stories</span>
            </h2>
            <p className="text-gray-400 text-xl">Hear what our customers have to say</p>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-amber-400">
                <Image 
                  src={testimonials[activeTestimonial].img}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black">{testimonials[activeTestimonial].name}</h3>
                <p className="text-amber-400">{testimonials[activeTestimonial].location}</p>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>

            <p className="text-xl text-gray-300 leading-relaxed italic mb-8">
              {testimonials[activeTestimonial].text}
            </p>

            {/* Dots */}
            <div className="flex justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeTestimonial 
                      ? 'bg-amber-400 w-10' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Visit Our Showroom
          </h2>
          <p className="text-2xl mb-10 opacity-90">
            Experience luxury jewelry in person at our Jaipur showroom
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-xl font-black text-lg transition shadow-2xl">
              Get Directions
            </Link>
            <Link href="/contact" className="bg-black/20 backdrop-blur-md hover:bg-black/30 border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg transition">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}