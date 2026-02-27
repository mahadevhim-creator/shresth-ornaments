export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold text-amber-400 mb-4">Shresth Ornaments</h4>
            <p className="text-gray-400 text-sm">
              Premium quality jewelry for every occasion. Crafted with love and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Collections</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition">Necklaces</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Earrings</a></li>
              <li><a href="#" className="hover:text-amber-400 transition">Rings</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@shresthornaments.com</li>
              <li>Phone: +91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Shresth Ornaments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}