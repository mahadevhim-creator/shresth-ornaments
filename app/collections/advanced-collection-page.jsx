'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function AdvancedCollectionPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSubCategory, setSelectedSubCategory] = useState('all')
  const [selectedPurity, setSelectedPurity] = useState('all')
  const [wastageRange, setWastageRange] = useState([0, 30])
  const [weightRange, setWeightRange] = useState([0, 100])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [sortBy, setSortBy] = useState('trending')
  const [viewMode, setViewMode] = useState('grid')
  
  const categories = ['All', 'Necklaces', 'Earrings', 'Rings', 'Bangles', 'Bracelets', 'Pendants']
  const subCategories = ['All', 'Temple Jewelry', 'Bridal Sets', 'Daily Wear', 'Party Wear', 'Traditional']
  const purities = ['All', '22KT', '18KT', '14KT']
  const sizes = ['2.2', '2.4', '2.6', '2.8', 'Free Size']
  const sortOptions = [
    { value: 'trending', label: 'Trending' },
    { value: 'latest', label: 'Latest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'weight-low', label: 'Weight: Low to High' },
    { value: 'weight-high', label: 'Weight: High to Low' },
    { value: 'wastage-low', label: 'Wastage: Low to High' },
    { value: 'wastage-high', label: 'Wastage: High to Low' }
  ]

  const products = [
    { 
      id: 1, 
      code: 'SO-NECK-1486', 
      name: 'Royal Temple Necklace',
      category: 'Necklaces',
      subCategory: 'Temple Jewelry',
      netWeight: '45.50 gm',
      grossWeight: '48.20 gm',
      wastage: '12%',
      purity: '22KT',
      price: '₹2,84,375',
      img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600',
      inStock: true,
      isNew: true
    },
    { 
      id: 2, 
      code: 'SO-NECK-1487', 
      name: 'Antique Gold Choker',
      category: 'Necklaces',
      subCategory: 'Bridal Sets',
      netWeight: '38.50 gm',
      grossWeight: '40.50 gm',
      wastage: '10%',
      purity: '22KT',
      price: '₹2,40,625',
      img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600',
      inStock: true,
      isNew: false
    },
    { 
      id: 3, 
      code: 'SO-EAR-2291', 
      name: 'Diamond Cut Earrings',
      category: 'Earrings',
      subCategory: 'Daily Wear',
      netWeight: '12.30 gm',
      grossWeight: '13.20 gm',
      wastage: '15%',
      purity: '22KT',
      price: '₹76,875',
      img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600',
      inStock: true,
      isNew: true
    },
    { 
      id: 4, 
      code: 'SO-RING-9902', 
      name: 'Traditional Gold Ring',
      category: 'Rings',
      subCategory: 'Traditional',
      netWeight: '8.50 gm',
      grossWeight: '9.00 gm',
      wastage: '8%',
      purity: '22KT',
      price: '₹53,125',
      img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600',
      inStock: false,
      isNew: false
    },
    { 
      id: 5, 
      code: 'SO-BANG-1102', 
      name: 'Designer Bangles Set',
      category: 'Bangles',
      subCategory: 'Party Wear',
      netWeight: '65.20 gm',
      grossWeight: '69.50 gm',
      wastage: '18%',
      purity: '22KT',
      price: '₹4,07,500',
      img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600',
      inStock: true,
      isNew: true
    },
    { 
      id: 6, 
      code: 'SO-PEND-3421', 
      name: 'Heart Pendant',
      category: 'Pendants',
      subCategory: 'Daily Wear',
      netWeight: '5.60 gm',
      grossWeight: '6.10 gm',
      wastage: '12%',
      purity: '18KT',
      price: '₹35,000',
      img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600',
      inStock: true,
      isNew: false
    },
    { 
      id: 7, 
      code: 'SO-NECK-5678', 
      name: 'Bridal Necklace Set',
      category: 'Necklaces',
      subCategory: 'Bridal Sets',
      netWeight: '82.30 gm',
      grossWeight: '88.50 gm',
      wastage: '20%',
      purity: '22KT',
      price: '₹5,14,375',
      img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600',
      inStock: true,
      isNew: true
    },
    { 
      id: 8, 
      code: 'SO-BRAC-7890', 
      name: 'Gold Chain Bracelet',
      category: 'Bracelets',
      subCategory: 'Daily Wear',
      netWeight: '15.80 gm',
      grossWeight: '16.80 gm',
      wastage: '14%',
      purity: '22KT',
      price: '₹98,750',
      img: 'https://images.unsplash.com/photo-1611128371111-8f598b6a0da8?w=600',
      inStock: true,
      isNew: false
    }
  ]

  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    )
  }

  const resetFilters = () => {
    setSelectedCategory('all')
    setSelectedSubCategory('all')
    setSelectedPurity('all')
    setWastageRange([0, 30])
    setWeightRange([0, 100])
    setSelectedSizes([])
  }

  const totalNetWeight = products.reduce((sum, p) => sum + parseFloat(p.netWeight), 0).toFixed(2)

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-gray-900 via-amber-900 to-gray-900 text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative">
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
              All Collections
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90">
              Explore our complete range of 22KT gold jewelry
            </p>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="bg-white border-y-2 border-amber-200 sticky top-16 z-40 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-amber-600">{products.length}</span>
                  <span className="text-gray-600 text-sm font-medium">Items</span>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-amber-600">{totalNetWeight} gm</span>
                  <span className="text-gray-600 text-sm font-medium">Total Net Wt.</span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Filters Sidebar */}
            <aside className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 sticky top-32 overflow-hidden">
                
                {/* Filter Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-5 flex items-center justify-between">
                  <h2 className="text-lg font-black flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    FILTERS
                  </h2>
                  <button 
                    onClick={resetFilters}
                    className="text-amber-400 hover:text-amber-300 text-sm font-bold transition"
                  >
                    Reset All
                  </button>
                </div>

                <div className="p-5 space-y-6 max-h-[calc(100vh-250px)] overflow-y-auto">
                  
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-amber-600">📂</span>
                      Category
                    </h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="radio"
                            name="category"
                            checked={selectedCategory === cat.toLowerCase()}
                            onChange={() => setSelectedCategory(cat.toLowerCase())}
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700 group-hover:text-amber-600 transition">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6"></div>

                  {/* Sub-Category Filter */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-amber-600">📁</span>
                      Sub-Category
                    </h3>
                    <div className="space-y-2">
                      {subCategories.map((sub) => (
                        <label key={sub} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="radio"
                            name="subcategory"
                            checked={selectedSubCategory === sub.toLowerCase()}
                            onChange={() => setSelectedSubCategory(sub.toLowerCase())}
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="text-gray-700 group-hover:text-amber-600 transition text-sm">{sub}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6"></div>

                  {/* Purity Filter */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-amber-600">✨</span>
                      Purity
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {purities.map((purity) => (
                        <button
                          key={purity}
                          onClick={() => setSelectedPurity(purity.toLowerCase())}
                          className={`py-2 px-3 rounded-lg border-2 font-bold text-sm transition ${
                            selectedPurity === purity.toLowerCase()
                              ? 'border-amber-600 bg-amber-50 text-amber-600'
                              : 'border-gray-300 hover:border-amber-400'
                          }`}
                        >
                          {purity}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6"></div>

                  {/* Wastage Range */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-amber-600">📈</span>
                      Wastage Range
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm font-bold text-gray-700">
                        <span>{wastageRange[0]}%</span>
                        <span>{wastageRange[1]}%</span>
                      </div>
                      <input 
                        type="range"
                        min="0"
                        max="30"
                        value={wastageRange[1]}
                        onChange={(e) => setWastageRange([wastageRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6"></div>

                  {/* Weight Range */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-amber-600">⚖️</span>
                      Weight Range (gm)
                    </h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <input 
                          type="number"
                          placeholder="Min"
                          value={weightRange[0]}
                          onChange={(e) => setWeightRange([parseFloat(e.target.value) || 0, weightRange[1]])}
                          className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-amber-600 outline-none text-sm font-bold"
                        />
                        <input 
                          type="number"
                          placeholder="Max"
                          value={weightRange[1]}
                          onChange={(e) => setWeightRange([weightRange[0], parseFloat(e.target.value) || 100])}
                          className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-amber-600 outline-none text-sm font-bold"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6"></div>

                  {/* Size Filter */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-amber-600">📏</span>
                      Size
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`py-2 px-2 rounded-lg border-2 font-bold text-xs transition ${
                            selectedSizes.includes(size)
                              ? 'border-amber-600 bg-amber-50 text-amber-600'
                              : 'border-gray-300 hover:border-amber-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              
              {/* Sort & View Controls */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-4 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  
                  {/* Sort Dropdown */}
                  <div className="flex items-center gap-3">
                    <label className="text-sm font-bold text-gray-700">Sort By:</label>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg font-bold text-sm focus:border-amber-600 outline-none"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* View Toggle */}
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button 
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition ${
                        viewMode === 'grid' ? 'bg-white shadow-md' : 'hover:bg-white/50'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition ${
                        viewMode === 'list' ? 'bg-white shadow-md' : 'hover:bg-white/50'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'space-y-6'
              }>
                {products.map((product) => (
                  <div 
                    key={product.id} 
                    className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-amber-400 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className={`relative ${viewMode === 'list' ? 'w-48' : 'aspect-square'} overflow-hidden bg-gray-100`}>
                      <Image 
                        src={product.img} 
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            NEW
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            OUT OF STOCK
                          </span>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-amber-600 hover:text-white transition mb-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1">
                      <p className="text-xs font-bold text-amber-600 mb-2 tracking-wider">{product.code}</p>
                      <h3 className="text-lg font-black text-gray-900 mb-3 group-hover:text-amber-600 transition">
                        {product.name}
                      </h3>

                      {/* Specs */}
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Net Weight:</span>
                          <span className="font-bold text-gray-900">{product.netWeight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Wastage:</span>
                          <span className="font-bold text-amber-600">{product.wastage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Purity:</span>
                          <span className="font-bold text-gray-900">{product.purity}</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <p className="text-2xl font-black text-gray-900">{product.price}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-bold text-sm transition">
                          Add to Cart
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}