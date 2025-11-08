'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { Zap, Battery, Shield, ChevronLeft, Gauge, Clock, CheckCircle2, Star } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params Promise for Next.js 15+
  const { slug } = use(params)
  const [selectedColor, setSelectedColor] = useState(0)

  // M'LiteEv Product Data - Matches slug from models page
  const productData: Record<string, any> = {
    'urban-elite': {
      name: 'M\'LiteEv Urban Elite',
      tagline: 'Effortless Elegance, Practical Luxury',
      description: 'The ultimate smart device — Smart Bluetooth Connectivity, seamless mobile pairing, and backed by a 3-Year Warranty. Experience premium electric mobility at its finest.',
      colors: [
        { name: 'Crimson Red', code: 'bg-red-700', border: 'border-red-500' },
        { name: 'Midnight Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'Pearl White', code: 'bg-white', border: 'border-gray-300' },
      ]
    },
    'city-pro': {
      name: 'M\'LiteEv City Pro',
      tagline: 'Smart Urban Mobility',
      description: 'Navigate city streets with confidence. The City Pro combines intelligent features with urban practicality for the modern commuter.',
      colors: [
        { name: 'Steel Gray', code: 'bg-gray-600', border: 'border-gray-400' },
        { name: 'Deep Blue', code: 'bg-blue-700', border: 'border-blue-500' },
        { name: 'Silver', code: 'bg-gray-400', border: 'border-gray-300' },
      ]
    },
    'metro-x': {
      name: 'M\'LiteEv Metro X',
      tagline: 'Express Your Style',
      description: 'Bold design meets powerful performance. The Metro X is engineered for riders who demand both style and substance.',
      colors: [
        { name: 'Teal', code: 'bg-teal-600', border: 'border-teal-400' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
      ]
    },
    'eco-plus': {
      name: 'M\'LiteEv Eco Plus',
      tagline: 'Green Performance',
      description: 'Maximum efficiency with minimum environmental impact. The Eco Plus is designed for eco-conscious riders.',
      colors: [
        { name: 'Forest Green', code: 'bg-green-700', border: 'border-green-500' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Gray', code: 'bg-gray-600', border: 'border-gray-400' },
      ]
    },
    'sport': {
      name: 'M\'LiteEv Sport',
      tagline: 'Performance Unleashed',
      description: 'Built for thrill-seekers. The Sport model delivers maximum power and acceleration for an exhilarating ride.',
      colors: [
        { name: 'Indigo', code: 'bg-indigo-700', border: 'border-indigo-500' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'Deep Red', code: 'bg-red-700', border: 'border-red-500' },
      ]
    },
    'classic': {
      name: 'M\'LiteEv Classic',
      tagline: 'Timeless Elegance',
      description: 'Vintage aesthetics with modern technology. The Classic brings retro charm to electric mobility.',
      colors: [
        { name: 'Cream', code: 'bg-amber-100', border: 'border-amber-300' },
        { name: 'Brown', code: 'bg-amber-800', border: 'border-amber-600' },
        { name: 'Beige', code: 'bg-stone-400', border: 'border-stone-300' },
      ]
    },
    'cruiser': {
      name: 'M\'LiteEv Cruiser',
      tagline: 'Comfort Redefined',
      description: 'Long-range comfort for extended journeys. The Cruiser is perfect for those who go the extra mile.',
      colors: [
        { name: 'Ocean Blue', code: 'bg-blue-700', border: 'border-blue-500' },
        { name: 'Silver', code: 'bg-gray-400', border: 'border-gray-300' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
      ]
    },
  }

  const product = productData[slug] || productData['urban-elite']
  product.keySpecs = [
    { icon: Battery, value: '80 km', label: 'Range' },
    { icon: Zap, value: '60 km/h', label: 'Top Speed' },
    { icon: Gauge, value: '2000W', label: 'Power' },
    { icon: Clock, value: '4 hrs', label: 'Charge Time' },
  ]
  product.features = [
    {
      title: 'All Digital Console',
      description: 'Speedometer, tripmeter & odometer - stay fully informed with premium digital display.',
      image: '📱'
    },
    {
      title: 'Stylish Alloy Wheels',
      description: 'Premium alloy wheels with durable tubeless tyres for a sleek, smooth ride.',
      image: '⚙️'
    },
    {
      title: 'Disc Braking System',
      description: 'Advanced disc brakes for balanced and reliable stopping power.',
      image: '🛞'
    },
    {
      title: 'Telescopic Suspension',
      description: 'Comfortable ride with dual suspension across uneven roads and speed bumps.',
      image: '🔧'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Back Button */}
      <div className="container-custom pt-8 pb-4">
        <Link href="/models" className="inline-flex items-center gap-2 px-4 py-2 text-white hover:text-teal-400 transition-all bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-teal-500/50">
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Models</span>
        </Link>
      </div>

      {/* Hero Section with Product Image */}
      <section className="py-20 pt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Product Info */}
            <div className="text-white space-y-6 text-center lg:text-left">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight break-words">{product.name}</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-teal-400 italic font-semibold">{product.tagline}</p>
              </div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {product.description}
              </p>

              {/* Key Specs - Quick View */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {product.keySpecs.map((spec: any, index: number) => {
                  const Icon = spec.icon
                  return (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 sm:p-4 hover:border-teal-500/50 transition-all hover:scale-105 group">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500 mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-xl sm:text-2xl font-bold mb-1">{spec.value}</div>
                      <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide leading-tight">{spec.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right - Product Image */}
            <div className="relative h-64 sm:h-80 lg:h-[600px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-3xl" />
              <div className="text-[120px] sm:text-[180px] md:text-[250px] lg:text-[400px] drop-shadow-2xl relative z-10 transform hover:scale-110 transition-all duration-700">🛴</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Premium Features
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
                Experience cutting-edge technology and design that sets {product.name} apart
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {product.features.map((feature: any, index: number) => (
                <div
                  key={index}
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden h-64 flex items-end p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl sm:text-8xl md:text-9xl opacity-10 group-hover:opacity-20 transition-opacity">
                    {feature.image}
                  </div>
                  <div className="relative z-10 text-white">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-teal-400 transition-colors">{feature.title}</h3>
                    <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/contact" className="w-full sm:w-auto inline-block">
                <button className="w-full sm:w-auto px-10 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition-all uppercase text-sm tracking-wide shadow-xl hover:shadow-2xl hover:scale-105">
                  BOOK TEST RIDE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Color
            </h2>
            <p className="text-base sm:text-lg text-gray-300">Available in 3 stunning colors</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Interactive Color Selector */}
            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
              {product.colors.map((color: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`group w-full py-6 px-8 rounded-2xl transition-all duration-300 flex items-center gap-6 ${
                    selectedColor === index
                      ? 'bg-gray-800/80 backdrop-blur-sm border-2 border-teal-500 shadow-xl shadow-teal-500/20 scale-105'
                      : 'bg-gray-800/40 backdrop-blur-sm border-2 border-gray-700 hover:border-teal-500/50 hover:scale-102'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full ${color.code} border-4 ${color.border} shadow-lg transition-transform duration-300 ${selectedColor === index ? 'scale-110' : 'group-hover:scale-105'}`} />
                  <div className="text-left flex-1">
                    <div className={`text-xl font-bold transition-colors ${selectedColor === index ? 'text-teal-400' : 'text-white group-hover:text-teal-400'}`}>
                      {color.name}
                    </div>
                    <div className="text-sm text-gray-400">Available now</div>
                  </div>
                  {selectedColor === index && (
                    <CheckCircle2 className="w-6 h-6 text-teal-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Right - Product Visualization */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center bg-gray-800/30 rounded-3xl border border-gray-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-3xl" />
              <div className="text-[150px] sm:text-[200px] md:text-[250px] lg:text-[280px] drop-shadow-2xl transform hover:scale-105 transition-all duration-500">🛴</div>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <div className="inline-block bg-gray-900/90 backdrop-blur-md px-6 py-3 rounded-full border border-gray-700">
                  <span className="text-white font-semibold">{product.colors[selectedColor].name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-base sm:text-lg text-gray-300 px-4">Detailed specifications for {product.name}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Motor & Performance */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700 hover:border-teal-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6 text-teal-500 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                <h3 className="text-lg sm:text-xl font-bold text-white">Motor & Performance</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 text-white">
                <div>
                  <div className="text-sm sm:text-base font-semibold mb-1 text-gray-300">Range</div>
                  <div className="text-base sm:text-lg">Upto 120 kms</div>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold mb-1 text-gray-300">Battery</div>
                  <div className="text-base sm:text-lg">Lead Acid / Lithium</div>
                </div>
              </div>
            </div>

            {/* Brake & Tyre */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700 hover:border-teal-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6 text-teal-500 group-hover:scale-105 transition-transform">
                <Battery className="w-5 h-5 sm:w-6 sm:h-6" />
                <h3 className="text-lg sm:text-xl font-bold text-white">Brake & Tyre</h3>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-white">
                <div>
                  <div className="text-xs sm:text-sm font-semibold mb-1 text-gray-300">Brake Type</div>
                  <div className="text-sm sm:text-base md:text-lg">Front Disc/Rear Drum</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold mb-1 text-gray-300">Tyre Type</div>
                  <div className="text-sm sm:text-base md:text-lg">Tubeless</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold mb-1 text-gray-300">Front Tyre</div>
                  <div className="text-sm sm:text-base md:text-lg">90/90/12</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold mb-1 text-gray-300">Rear Tyre</div>
                  <div className="text-sm sm:text-base md:text-lg">90/90/12</div>
                </div>
              </div>
            </div>

            {/* Suspension & Dimension */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700 hover:border-teal-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6 text-teal-500 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                <h3 className="text-lg sm:text-xl font-bold text-white">Suspension & Dimension</h3>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-white">
                <div>
                  <div className="text-xs sm:text-sm font-semibold mb-1 text-gray-300">Front</div>
                  <div className="text-sm sm:text-base md:text-lg">Telescopic</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold mb-1 text-gray-300">Rear</div>
                  <div className="text-sm sm:text-base md:text-lg">Dual</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold mb-1 text-gray-300">Kerb Weight</div>
                  <div className="text-sm sm:text-base md:text-lg">58.5 kg</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold mb-1 text-gray-300">Dimensions</div>
                  <div className="text-sm sm:text-base md:text-lg break-words">1800x660x1100mm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-800">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
              Ready to Experience {product.name}?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed px-4">
              Book a test ride today and discover the future of electric mobility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto inline-block">
                <button className="w-full sm:w-auto px-12 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-lg transition-all uppercase text-sm tracking-wide shadow-xl hover:shadow-2xl hover:scale-105">
                  BOOK TEST RIDE
                </button>
              </Link>
              <Link href="/models" className="w-full sm:w-auto inline-block">
                <button className="w-full sm:w-auto px-12 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all uppercase text-sm tracking-wide">
                  VIEW ALL MODELS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
