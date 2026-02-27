'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600" 
              alt="About Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">
              <h1 className="text-5xl md:text-7xl font-black mb-6">Our Story</h1>
              <p className="text-xl md:text-2xl max-w-2xl font-light">
                Crafting timeless gold jewelry with heritage, passion, and excellence since generations
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Welcome to<br/>
                  <span className="text-amber-600">Shresth Ornaments</span>
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Founded in the heart of Jaipur, Shresth Ornaments has been a trusted name in premium gold jewelry for over three decades. Our journey began with a simple vision: to bring authentic, high-quality gold ornaments to every Indian household.
                  </p>
                  <p>
                    We specialize in 22KT plain casting, temple jewelry, bridal sets, and daily wear collections. Each piece is crafted with precision by skilled artisans who have inherited their craft through generations.
                  </p>
                  <p>
                    Today, we stand as one of Jaipurs most trusted jewelry houses, serving thousands of happy customers across India with our commitment to quality, authenticity, and exceptional service.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" 
                  alt="Jewelry 1"
                  className="rounded-2xl shadow-xl h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" 
                  alt="Jewelry 2"
                  className="rounded-2xl shadow-xl h-64 object-cover mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" 
                  alt="Jewelry 3"
                  className="rounded-2xl shadow-xl h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400" 
                  alt="Jewelry 4"
                  className="rounded-2xl shadow-xl h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">What makes us different</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '💎',
                  title: 'Authenticity',
                  desc: 'Every piece is BIS hallmarked with guaranteed 22KT purity'
                },
                {
                  icon: '🎨',
                  title: 'Craftsmanship',
                  desc: 'Handcrafted by skilled artisans with decades of experience'
                },
                {
                  icon: '🤝',
                  title: 'Trust',
                  desc: 'Transparent pricing and honest dealings with every customer'
                },
                {
                  icon: '⭐',
                  title: 'Excellence',
                  desc: 'Committed to delivering the highest quality in every piece'
                }
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition text-center">
                  <div className="text-6xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '30+', label: 'Years of Excellence' },
                { number: '50,000+', label: 'Happy Customers' },
                { number: '1,200+', label: 'Unique Designs' },
                { number: '100%', label: 'Purity Guaranteed' }
              ].map((stat, i) => (
                <div key={i} className="p-6">
                  <div className="text-5xl md:text-6xl font-black text-amber-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Craft Process</h2>
              <p className="text-xl text-gray-600">From design to delivery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Design', desc: 'Expert designers create unique patterns' },
                { step: '02', title: 'Craft', desc: 'Skilled artisans handcraft each piece' },
                { step: '03', title: 'Quality Check', desc: 'Rigorous testing for purity and finish' },
                { step: '04', title: 'Certification', desc: 'BIS hallmarking and certification' }
              ].map((process, i) => (
                <div key={i} className="relative">
                  <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-black text-2xl mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{process.title}</h3>
                  <p className="text-gray-600 text-center">{process.desc}</p>
                  
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-amber-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Meet Our Artisans</h2>
              <p className="text-xl text-gray-600">The masters behind our masterpieces</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Rajesh Kumar', role: 'Master Craftsman', experience: '35 years' },
                { name: 'Sunita Devi', role: 'Design Specialist', experience: '28 years' },
                { name: 'Anil Sharma', role: 'Quality Expert', experience: '32 years' }
              ].map((member, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-100"></div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-amber-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.experience} of experience</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Ready to Find Your Perfect Piece?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our collections or visit our showroom in Jaipur
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/collections" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Browse Collections
              </Link>
              <Link href="/contact" className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}