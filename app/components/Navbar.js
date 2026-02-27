import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-amber-600">
            Shresth Ornaments
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition">
              Home
            </Link>

            <Link href="/categories" className="text-gray-700 hover:text-amber-600 transition">
              Categories
            </Link>

            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition">
              About
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </div>
    </nav>
  );
}
