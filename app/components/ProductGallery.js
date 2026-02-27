'use client'
import { useState } from 'react'

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800'
  ]

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src={images[selectedImage]} 
          alt="Product" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-lg overflow-hidden border-2 ${
              selectedImage === index ? 'border-amber-600' : 'border-gray-200'
            }`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}