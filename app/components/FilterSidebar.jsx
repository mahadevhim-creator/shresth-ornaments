'use client'
import { useState } from 'react'
import Link from 'next/link'

const categories = [
  { id: 'necklaces', label: 'Necklaces',      icon: '📿', sub: ['Temple Jewelry', 'Bridal Sets', 'Chokers', 'Long Haars', 'Mangalsutra'] },
  { id: 'earrings',  label: 'Earrings',        icon: '✨', sub: ['Jhumkas', 'Studs', 'Chandbalis', 'Hoops', 'Drops'] },
  { id: 'rings',     label: 'Rings',           icon: '💍', sub: ['Solitaire', 'Cocktail', 'Band Rings', 'Stackable', 'Engagement'] },
  { id: 'bangles',   label: 'Bangles & Kadas', icon: '⭕', sub: ['Plain Bangles', 'Designer Bangles', 'Kadas', 'Openable Bangles'] },
  { id: 'bracelets', label: 'Bracelets',       icon: '🔗', sub: ['Chain Bracelets', 'Charm Bracelets', 'Tennis Bracelets'] },
  { id: 'pendants',  label: 'Pendants',        icon: '💎', sub: ['Religious', 'Heart', 'Coin', 'Floral', 'Geometric'] },
  { id: 'chains',    label: 'Chains',          icon: '⛓️', sub: ['Box Chain', 'Rope Chain', 'Singapore', 'Figaro'] },
  { id: 'anklets',   label: 'Anklets',         icon: '🌸', sub: ['Traditional Payal', 'Contemporary', 'Beaded'] },
]

export default function FilterSidebar({ selectedCat, selectedSub, selectedPurity, onSelectCat, onSelectSub, onSelectPurity, onClearAll }) {
  const [openCat, setOpenCat] = useState(null)

  const handleCatClick = (catId) => {
    setOpenCat(prev => prev === catId ? null : catId)
    onSelectCat(catId)
  }

  const activeFilters = [
    selectedCat    && categories.find(c => c.id === selectedCat)?.label,
    selectedSub,
    selectedPurity !== 'All' && selectedPurity,
  ].filter(Boolean)

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24 bg-white border border-gray-200 overflow-hidden shadow-lg">

        {/* Header */}
        <div className="bg-gray-900 px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black tracking-[0.35em] uppercase text-amber-400 mb-0.5">Filter By</p>
            <p className="text-white font-black text-base" style={{ fontFamily: 'Georgia, serif' }}>Collections</p>
          </div>
          {activeFilters.length > 0 && (
            <button onClick={onClearAll}
              className="text-[10px] text-amber-400 hover:text-white font-bold tracking-wider uppercase transition border border-amber-400/40 hover:border-amber-400 px-2 py-1">
              Clear All
            </button>
          )}
        </div>

        {/* Active filter chips */}
        {activeFilters.length > 0 && (
          <div className="bg-amber-50 px-4 py-3 border-b border-amber-200 flex flex-wrap gap-1.5">
            {activeFilters.map(f => (
              <span key={f} className="bg-amber-600 text-white text-[9px] font-bold px-2.5 py-1 tracking-wider uppercase">{f}</span>
            ))}
          </div>
        )}

        <div className="divide-y divide-gray-100" style={{ maxHeight: '78vh', overflowY: 'auto' }}>

          {/* Category label */}
          <div className="px-5 py-2.5 bg-gray-50">
            <p className="text-[9px] font-black tracking-[0.35em] uppercase text-gray-400">Category</p>
          </div>

          {/* All Jewelry */}
          <button onClick={onClearAll}
            className={`w-full text-left px-5 py-3 flex items-center gap-3 transition-colors border-l-4
              ${!selectedCat ? 'bg-amber-50 border-l-amber-600' : 'hover:bg-gray-50 border-l-transparent'}`}>
            <span className="text-base">🏠</span>
            <span className={`text-sm font-bold tracking-wide flex-1 ${!selectedCat ? 'text-amber-700' : 'text-gray-700'}`}>All Jewelry</span>
            {!selectedCat && <span className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0" />}
          </button>

          {/* Each category */}
          {categories.map(cat => (
            <div key={cat.id}>
              <button onClick={() => handleCatClick(cat.id)}
                className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors border-l-4
                  ${selectedCat === cat.id ? 'bg-amber-50 border-l-amber-600' : 'hover:bg-gray-50 border-l-transparent'}`}>
                <span className="text-base flex-shrink-0">{cat.icon}</span>
                <span className={`text-sm font-bold tracking-wide flex-1 ${selectedCat === cat.id ? 'text-amber-700' : 'text-gray-800'}`}>
                  {cat.label}
                </span>
                <svg className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${openCat === cat.id ? 'rotate-180 text-amber-500' : 'text-gray-400'}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Subcategories */}
              {openCat === cat.id && (
                <div className="bg-amber-50/60 border-t border-amber-100">
                  {cat.sub.map(sub => (
                    <button key={sub} onClick={() => onSelectSub(cat.id, sub)}
                      className={`w-full text-left pl-12 pr-5 py-2.5 text-xs font-semibold tracking-wide transition-colors flex items-center gap-2.5 border-l-4
                        ${selectedSub === sub && selectedCat === cat.id
                          ? 'text-amber-700 bg-amber-100 border-l-amber-500'
                          : 'text-gray-500 hover:text-amber-700 hover:bg-amber-50 border-l-transparent'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${selectedSub === sub && selectedCat === cat.id ? 'bg-amber-600' : 'bg-gray-300'}`} />
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Purity */}
          <div className="px-5 py-2.5 bg-gray-50">
            <p className="text-[9px] font-black tracking-[0.35em] uppercase text-gray-400">Purity</p>
          </div>
          <div className="px-5 py-4 space-y-3">
            {['All', '22KT', '18KT', '14KT'].map(p => (
              <label key={p} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="purity" checked={selectedPurity === p}
                  onChange={() => onSelectPurity(p)} className="w-4 h-4 accent-amber-600" />
                <span className={`text-sm font-semibold transition-colors ${selectedPurity === p ? 'text-amber-700' : 'text-gray-700 group-hover:text-amber-600'}`}>{p}</span>
              </label>
            ))}
          </div>

          {/* Bridal CTA */}
          <div className="bg-gradient-to-br from-amber-700 to-amber-900 text-white p-5">
            <p className="text-[9px] tracking-widest uppercase font-bold text-amber-300 mb-1">✦ Exclusive</p>
            <p className="font-black text-base mb-2" style={{ fontFamily: 'Georgia, serif' }}>Bridal Collection</p>
            <p className="text-xs text-amber-200 mb-4 leading-relaxed">Curated sets for your most important day</p>
            <Link href="/collections/bridal"
              className="block text-center bg-white text-amber-800 text-[10px] font-black tracking-widest uppercase py-2.5 hover:bg-amber-100 transition">
              Explore Now →
            </Link>
          </div>

        </div>
      </div>
    </aside>
  )
}