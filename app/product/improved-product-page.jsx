'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('Free Size')
  const [showShareModal, setShowShareModal] = useState(false)

  const images = [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200'
  ]

  const product = {
    code: 'SO-NECK-1486',
    name: 'Royal Temple Necklace Set',
    category: 'Necklaces',
    subCategory: 'Temple Jewelry',
    netWeight: '45.500 gm',
    grossWeight: '48.200 gm',
    wastage: '12%',
    makingCharges: '₹6,840',
    purity: '22KT',
    size: 'Adjustable',
    color: 'Yellow Gold',
    availability: 'In Stock',
    expectedDelivery: '5-7 Business Days',
    goldRate: '₹6,250/gm',
    price: '₹2,84,375',
    originalPrice: '₹3,15,000',
    description: 'Exquisite handcrafted 22KT gold temple necklace set featuring intricate traditional South Indian designs with deity motifs. Perfect for weddings, festivals, and special occasions.',
    features: [
      'BIS Hallmarked 22KT Gold',
      'Traditional Temple Design',
      'Handcrafted by Expert Artisans',
      'Comes with Authenticity Certificate',
      '7-Day Easy Return Policy'
    ]
  }

  const relatedProducts = [
    { id: 1, code: 'SO-NECK-1487', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400', weight: '38.5 gm', price: '₹2,40,625' },
    { id: 2, code: 'SO-NECK-1488', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400', weight: '42.3 gm', price: '₹2,64,375' },
    { id: 3, code: 'SO-NECK-1489', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400', weight: '51.2 gm', price: '₹3,20,000' },
    { id: 4, code: 'SO-NECK-1490', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400', weight: '46.8 gm', price: '₹2,92,500' }
  ]

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="" className="hover:text-amber-600 transition">Home</a>
            <span>/</span>
            <a href="/categories" className="hover:text-amber-600 transition">Categories</a>
            <span>/</span>
            <a href="/categories/necklaces" className="hover:text-amber-600 transition">Necklaces</a>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.code}</span>
          </div>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-100 relative group">
                <Image 
                  src={images[selectedImage]} 
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button 
                    onClick={() => setShowShareModal(true)}
                    className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-amber-600 hover:text-white transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* Stock Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ✓ In Stock
                  </span>
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-4 transition-all ${
                      selectedImage === index 
                        ? 'border-amber-600 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-amber-300 hover:scale-105'
                    }`}
                  >
                    <Image 
                      src={img} 
                      alt={`View ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title & Code */}
              <div>
                <p className="text-sm font-bold text-amber-600 mb-2 tracking-wider">PRODUCT CODE: {product.code}</p>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 leading-tight">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">(158 Reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-4xl font-black text-amber-600">{product.price}</span>
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    SAVE ₹30,625
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Gold Rate:</span> {product.goldRate} (Todays Rate)
                </p>
              </div>

              {/* Specifications Table */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4">
                  <h3 className="text-lg font-bold">Product Specifications</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { label: 'Net Weight', value: product.netWeight, icon: '⚖️' },
                    { label: 'Gross Weight', value: product.grossWeight, icon: '📊' },
                    { label: 'Wastage', value: product.wastage, icon: '📈', highlight: true },
                    { label: 'Making Charges', value: product.makingCharges, icon: '💰' },
                    { label: 'Purity', value: product.purity, icon: '✨' },
                    { label: 'Size', value: product.size, icon: '📏' },
                    { label: 'Color', value: product.color, icon: '🎨' },
                    { label: 'Category', value: product.category, icon: '📂' },
                    { label: 'Sub-Category', value: product.subCategory, icon: '📁' },
                    { label: 'Expected Delivery', value: product.expectedDelivery, icon: '🚚' }
                  ].map((spec, i) => (
                    <div 
                      key={i} 
                      className={`flex justify-between items-center p-4 hover:bg-amber-50 transition ${
                        spec.highlight ? 'bg-amber-50 font-bold' : ''
                      }`}
                    >
                      <span className="text-gray-700 flex items-center gap-2">
                        <span className="text-xl">{spec.icon}</span>
                        {spec.label}
                      </span>
                      <span className={`font-bold ${spec.highlight ? 'text-amber-600 text-lg' : 'text-gray-900'}`}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Select Size</label>
                <div className="grid grid-cols-4 gap-3">
                  {['2.4', '2.6', '2.8', 'Free Size'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 rounded-lg border-2 font-bold transition ${
                        selectedSize === size
                          ? 'border-amber-600 bg-amber-50 text-amber-600'
                          : 'border-gray-300 hover:border-amber-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl transition"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold w-16 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
                <button className="bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Buy Now
                </button>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Product Highlights
                </h4>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Description & Details Tabs */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden mb-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
              <h2 className="text-2xl font-black">Product Description</h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {product.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Care Instructions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      Store in a dry place away from moisture
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      Clean with soft cloth regularly
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      Avoid contact with chemicals and perfumes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      Remove before bathing or swimming
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      100% BIS Hallmarked Gold
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      Certified Authenticity Guaranteed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      Expert Craftsmanship Since 30+ Years
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      Transparent Pricing & No Hidden Charges
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Similar Products</h2>
              <a href="/categories/necklaces" className="text-amber-600 font-bold hover:text-amber-700 transition flex items-center gap-2">
                View All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-amber-400">
                  <div className="relative aspect-square overflow-hidden">
                    <Image 
                      src={item.img} 
                      alt={item.code}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold text-amber-600 mb-2">{item.code}</p>
                    <p className="text-sm text-gray-600 mb-2">Net Wt: {item.weight}</p>
                    <p className="text-xl font-black text-gray-900">{item.price}</p>
                    <button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-bold text-sm transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowShareModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-gray-900">Share Product</h3>
              <button onClick={() => setShowShareModal(false)} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { name: 'WhatsApp', icon: '💬', color: 'bg-green-600' },
                { name: 'Facebook', icon: '📘', color: 'bg-blue-600' },
                { name: 'Twitter', icon: '🐦', color: 'bg-sky-500' },
                { name: 'Email', icon: '✉️', color: 'bg-gray-600' }
              ].map((platform) => (
                <button key={platform.name} className={`${platform.color} hover:opacity-90 text-white p-4 rounded-xl font-bold text-2xl transition`}>
                  {platform.icon}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
              <input 
                type="text" 
                value={`https://shresth.com/product/${product.code}`}
                readOnly
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition">
                Copy
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}