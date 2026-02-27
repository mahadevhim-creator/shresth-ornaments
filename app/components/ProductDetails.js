export default function ProductDetails() {
  const categories = ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Bangles']

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Elegant Gold Necklace Set
        </h1>
        <p className="text-gray-600">Product Code: JC-1486</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-amber-600">₹45,999</span>
        <span className="text-xl text-gray-500 line-through">₹52,999</span>
        <span className="text-green-600 font-semibold">13% OFF</span>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-900">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-100 transition cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-900">Description</h3>
        <p className="text-gray-600 leading-relaxed">
          Exquisite handcrafted gold necklace set featuring intricate traditional designs. 
          Perfect for weddings, festivals, and special occasions. Made with 22K gold and 
          adorned with precious stones for a luxurious finish.
        </p>
      </div>

      {/* Specifications */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-900">Specifications</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Metal</span>
            <span className="font-medium">22K Gold</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Weight</span>
            <span className="font-medium">45.5 grams</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Making Charges</span>
            <span className="font-medium">Included</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <button className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
          Add to Cart
        </button>
        <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Buy Now
        </button>
      </div>
    </div>
  )
}