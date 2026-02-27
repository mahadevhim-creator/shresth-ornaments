'use client'

import Link from 'next/link'

export default function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={item.img}
        alt={item.code}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2">{item.code}</h3>
        <p className="text-gray-600 mb-3">Weight: {item.weight}</p>
       <Link
  href="/categories"
  className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition"
>
          View Details
        </Link>
      </div>
    </div>
  )
}