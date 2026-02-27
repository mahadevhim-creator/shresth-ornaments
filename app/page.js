'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FilterSidebar from './components/FilterSidebar'

// ─── PRODUCTS DATA ────────────────────────────────────────────────────────────

const catLabels = {
  necklaces: 'Necklaces', earrings: 'Earrings', rings: 'Rings',
  bangles: 'Bangles & Kadas', bracelets: 'Bracelets',
  pendants: 'Pendants', chains: 'Chains', anklets: 'Anklets'
}

const featured = [
  { id: 1, code: 'SO-NECK-1486', name: 'Royal Temple Necklace',  weight: '45.50 gm', wastage: '12%', purity: '22KT', price: '₹2,84,375', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700', tag: 'Bestseller',  cat: 'necklaces', sub: 'Temple Jewelry'   },
  { id: 2, code: 'SO-BANG-1102', name: 'Designer Bangles Set',   weight: '65.20 gm', wastage: '18%', purity: '22KT', price: '₹4,07,500', img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=700', tag: 'New Arrival', cat: 'bangles',   sub: 'Designer Bangles' },
  { id: 3, code: 'SO-EAR-2291',  name: 'Diamond Cut Earrings',   weight: '12.30 gm', wastage: '15%', purity: '22KT', price: '₹76,875',   img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700', tag: 'Trending',    cat: 'earrings',  sub: 'Jhumkas'          },
  { id: 4, code: 'SO-NECK-5678', name: 'Bridal Necklace Set',    weight: '82.30 gm', wastage: '20%', purity: '22KT', price: '₹5,14,375', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700', tag: 'Bridal',      cat: 'necklaces', sub: 'Bridal Sets'       },
  { id: 5, code: 'SO-RING-9902', name: 'Traditional Gold Ring',  weight: '8.50 gm',  wastage: '8%',  purity: '22KT', price: '₹53,125',   img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700', tag: 'Classic',     cat: 'rings',     sub: 'Solitaire'        },
  { id: 6, code: 'SO-BRAC-7890', name: 'Gold Chain Bracelet',    weight: '15.80 gm', wastage: '14%', purity: '22KT', price: '₹98,750',   img: 'https://images.unsplash.com/photo-1611128371111-8f598b6a0da8?w=700', tag: 'Daily Wear',  cat: 'bracelets', sub: 'Chain Bracelets'  },
  { id: 7, code: 'SO-PEND-3421', name: 'Floral Gold Pendant',    weight: '5.60 gm',  wastage: '12%', purity: '18KT', price: '₹35,000',   img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700', tag: 'Elegant',     cat: 'pendants',  sub: 'Floral'           },
  { id: 8, code: 'SO-NECK-1487', name: 'Antique Gold Choker',    weight: '38.50 gm', wastage: '10%', purity: '22KT', price: '₹2,40,625', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700', tag: 'Antique',     cat: 'necklaces', sub: 'Chokers'          },
  { id: 9, code: 'SO-RING-1102', name: 'Stackable Ring Set',     weight: '6.20 gm',  wastage: '9%',  purity: '18KT', price: '₹38,750',   img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700', tag: 'Trendy',      cat: 'rings',     sub: 'Stackable'        },
]

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [selectedCat,    setSelectedCat]    = useState(null)
  const [selectedSub,    setSelectedSub]    = useState(null)
  const [selectedPurity, setSelectedPurity] = useState('All')
  const [mobileFilter,   setMobileFilter]   = useState(false)

  const handleSelectCat    = (catId) => { setSelectedCat(catId); setSelectedSub(null) }
  const handleSelectSub    = (catId, sub) => { setSelectedCat(catId); setSelectedSub(sub) }
  const handleSelectPurity = (p) => setSelectedPurity(p)
  const handleClearAll     = () => { setSelectedCat(null); setSelectedSub(null); setSelectedPurity('All') }

  const filtered = featured.filter(p => {
    const catMatch    = !selectedCat || p.cat === selectedCat
    const subMatch    = !selectedSub || p.sub === selectedSub
    const purityMatch = selectedPurity === 'All' || p.purity === selectedPurity
    return catMatch && subMatch && purityMatch
  })

  const headingLabel = selectedSub
    ? selectedSub
    : selectedCat
      ? catLabels[selectedCat]
      : 'Featured Collection'

  const subLabel = selectedSub
    ? catLabels[selectedCat]
    : selectedCat
      ? 'Category'
      : 'Handpicked for You'

  return (
    <div className="min-h-screen bg-[#faf8f4]" style={{ fontFamily: 'Georgia, serif' }}>

      {/* NAVBAR */}
      <Navbar />

      {/* MARQUEE */}
      <div className="bg-amber-700 text-amber-50 py-2 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-xs tracking-widest uppercase mx-12 flex-shrink-0">
              ✦&nbsp; Free Shipping above ₹50,000 &nbsp;&nbsp;
              ✦&nbsp; BIS Hallmarked 22KT Gold &nbsp;&nbsp;
              ✦&nbsp; 7-Day Easy Returns &nbsp;&nbsp;
              ✦&nbsp; Authentic Craftsmanship Since 1994 &nbsp;&nbsp;
              ✦&nbsp; Visit Our Jaipur Showroom &nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative h-[88vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1800"
          alt="Hero jewelry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-5 border border-amber-400/25 pointer-events-none" />
        <div className="absolute inset-8 border border-amber-400/10 pointer-events-none" />

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-5 font-semibold">
              Crafted in Jaipur · Since 1994
            </p>
            <h1 className="text-white font-black leading-[1.0] mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
              Timeless<br />
              <span className="text-amber-400">Gold</span><br />
              Elegance
            </h1>
            <p className="text-gray-300 text-lg max-w-lg mb-10 leading-relaxed font-light">
              Premium 22KT gold ornaments, handcrafted by master artisans with three decades of heritage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/categories"
                className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 font-bold tracking-widest uppercase text-sm transition-all shadow-lg">
                Explore Collections
              </Link>
              <Link href="/about"
                className="border border-white/40 hover:border-amber-400 text-white hover:text-amber-400 px-10 py-4 font-bold tracking-widest uppercase text-sm transition-all">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 inset-x-0 bg-black/65 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-4 divide-x divide-white/15">
            {[
              { n: '30+',   l: 'Years of Excellence' },
              { n: '50K+',  l: 'Happy Customers'     },
              { n: '1200+', l: 'Unique Designs'      },
              { n: '22KT',  l: 'Purity Guaranteed'   },
            ].map((s, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-amber-400 text-2xl font-black">{s.n}</div>
                <div className="text-gray-400 text-[11px] uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* Mobile filter button — ONLY on small screens */}
        <div className="lg:hidden mb-6">
          <button onClick={() => setMobileFilter(!mobileFilter)}
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 font-bold tracking-wider uppercase text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            {mobileFilter ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className="flex gap-8 items-start">

          {/* LEFT SIDEBAR — always visible on desktop, toggle on mobile */}
          <div className={`${mobileFilter ? 'block' : 'hidden'} lg:block`}>
            <FilterSidebar
              selectedCat={selectedCat}
              selectedSub={selectedSub}
              selectedPurity={selectedPurity}
              onSelectCat={handleSelectCat}
              onSelectSub={handleSelectSub}
              onSelectPurity={handleSelectPurity}
              onClearAll={handleClearAll}
            />
          </div>

          {/* RIGHT — PRODUCTS */}
          <div className="flex-1 min-w-0">

            {/* Heading */}
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-amber-600 text-xs tracking-[0.4em] uppercase font-semibold mb-1">
                  {subLabel}
                </p>
                {/* ✅ FIXED: text-gray-900 instead of text-white-900 */}
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                  {headingLabel}
                </h2>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="text-sm text-gray-400 font-semibold">{filtered.length} items</span>
                <Link href="/categories"
                  className="text-sm font-bold text-amber-600 hover:text-amber-700 tracking-wider uppercase flex items-center gap-1 transition">
                  View All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Products Grid or Empty State */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-5xl mb-4">🔍</p>
                <p className="font-bold text-lg text-gray-600">No products found</p>
                <p className="text-sm text-gray-400 mt-1 mb-4">Try a different filter</p>
                <button onClick={handleClearAll}
                  className="text-amber-600 font-bold underline underline-offset-4 hover:text-amber-700">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map(product => (
                  <Link href={`/product/${product.id}`} key={product.id}
                    className="group bg-white border border-gray-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-500 block overflow-hidden">

                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      <img src={product.img} alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span className="absolute top-3 left-3 bg-amber-700 text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                        {product.tag}
                      </span>
                      <button onClick={e => e.preventDefault()}
                        className="absolute top-3 right-3 bg-white/90 p-2 opacity-0 group-hover:opacity-100 transition hover:bg-red-50">
                        <svg className="w-4 h-4 text-gray-500 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>

                    <div className="p-5 border-t border-gray-100">
                      <p className="text-[10px] font-bold text-amber-600 tracking-widest uppercase mb-1">{product.code}</p>
                      <h3 className="font-black text-gray-900 text-base mb-3 group-hover:text-amber-700 transition">{product.name}</h3>
                      <div className="flex justify-between text-xs text-gray-500 mb-3 pb-3 border-b border-gray-100">
                        <span>Net Wt: <b className="text-gray-700">{product.weight}</b></span>
                        <span>Wastage: <b className="text-amber-600">{product.wastage}</b></span>
                        <b className="text-gray-700">{product.purity}</b>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black text-gray-900">{product.price}</span>
                        <button onClick={e => e.preventDefault()}
                          className="bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold px-4 py-2 tracking-wider uppercase transition">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Link href="/categories"
                className="inline-block border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-12 py-4 font-bold tracking-widest uppercase text-sm transition-all">
                Browse All Products
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-8 text-center mb-8">
          <p className="text-amber-400 text-xs tracking-[0.5em] uppercase font-semibold mb-3">Our Promise</p>
          <h2 className="text-white text-3xl md:text-4xl font-black">
            Certified. Hallmarked. <span className="text-amber-400">Trusted.</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-px bg-gray-700">
          {[
            { icon: '✓',  t: 'BIS Hallmarked', d: '100% Certified' },
            { icon: '🚚', t: 'Free Delivery',   d: 'Above ₹50,000' },
            { icon: '↻',  t: '7-Day Returns',   d: 'Hassle Free'   },
          ].map((f, i) => (
            <div key={i} className="bg-gray-900 py-7 px-4 text-center">
              <div className="text-amber-400 text-2xl mb-2">{f.icon}</div>
              <div className="text-white font-bold text-sm">{f.t}</div>
              <div className="text-gray-500 text-xs mt-1">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#faf8f4] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <p className="text-amber-600 text-xs tracking-[0.4em] uppercase font-semibold mb-2">Testimonials</p>
            {/* ✅ FIXED: text-gray-900 */}
            <h2 className="text-4xl font-black text-white-900">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Priya Sharma', text: 'Beautiful designs and excellent quality! Bought my entire bridal set from Shresth and got compliments all night.', rating: 5 },
              { name: 'Rahul Patel',  text: 'Genuine 22KT gold with proper hallmark. Great service, fast delivery and transparent pricing.',                   rating: 5 },
              { name: 'Anjali Singh', text: 'Love the traditional temple jewelry designs! Perfect for festivals. Will definitely shop again.',                  rating: 5 },
            ].map((r, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-5">{r.text}</p>
                <p className="font-black text-gray-900 text-sm tracking-wide">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0);    }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  )
}