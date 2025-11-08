import Link from 'next/link'
import { Battery, Zap, Shield, Filter, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { QuickConfigurator } from '@/components/QuickConfigurator'
import { SkeletonProductGrid } from '@/components/SkeletonLoader'

export default function ModelsPage() {
  // 7 Models with 3 colors each = 21 total variants
  const productHeros = [
    {
      id: 1,
      name: 'M\'LiteEv Urban Elite',
      tagline: 'Effortless Elegance, Practical Luxury',
      description: 'The Urban Elite is a dynamic electric scooter which has the comfort of any petrol scooter with slick design, a spectacular operating voltage and a loading capacity. Features include smart connectivity and riding comfort.',
      bgColor: 'from-red-500 to-red-600',
      slug: 'urban-elite',
      colors: ['Red', 'Black', 'White']
    },
    {
      id: 2,
      name: 'M\'LiteEv City Pro',
      tagline: 'Ride with clarity and intelligence',
      description: 'Bright illumination, sleek dashboard, and smart connectivity. The City Pro combines style with substance for the modern urban commuter.',
      bgColor: 'from-gray-600 to-gray-700',
      slug: 'city-pro',
      colors: ['Gray', 'Blue', 'Silver']
    },
    {
      id: 3,
      name: 'M\'LiteEv Metro X',
      tagline: 'Smart connectivity for modern riders',
      description: 'Bright illumination, sleek dashboard, and smart connectivity. Experience the future of urban mobility with the Metro X.',
      bgColor: 'from-teal-400 to-teal-500',
      slug: 'metro-x',
      colors: ['Teal', 'White', 'Black']
    },
    {
      id: 4,
      name: 'M\'LiteEv Eco Plus',
      tagline: 'Eco-friendly and economical',
      description: 'Perfect for daily commutes with excellent battery efficiency. The Eco Plus offers sustainable mobility without compromising on performance.',
      bgColor: 'from-green-500 to-green-600',
      slug: 'eco-plus',
      colors: ['Green', 'White', 'Gray']
    },
    {
      id: 5,
      name: 'M\'LiteEv Sport',
      tagline: 'Performance meets style',
      description: 'Designed for speed enthusiasts. The Sport model delivers thrilling performance with advanced features and aggressive styling.',
      bgColor: 'from-orange-500 to-orange-600',
      slug: 'sport',
      colors: ['Orange', 'Black', 'Red']
    },
    {
      id: 6,
      name: 'M\'LiteEv Classic',
      tagline: 'Timeless design, modern technology',
      description: 'Combining vintage aesthetics with cutting-edge electric technology. The Classic is perfect for those who appreciate heritage styling.',
      bgColor: 'from-amber-600 to-amber-700',
      slug: 'classic',
      colors: ['Beige', 'Brown', 'Cream']
    },
    {
      id: 7,
      name: 'M\'LiteEv Cruiser',
      tagline: 'Comfort for long rides',
      description: 'Built for comfort on longer journeys. The Cruiser features enhanced suspension, spacious seating, and superior range for extended rides.',
      bgColor: 'from-blue-500 to-blue-600',
      slug: 'cruiser',
      colors: ['Blue', 'Silver', 'Black']
    },
  ]

  const models = [
    { id: 1, name: 'Model A', slug: 'model-a', category: 'Commuter' },
    { id: 2, name: 'Model B', slug: 'model-b', category: 'City' },
    { id: 3, name: 'Model C', slug: 'model-c', category: 'Premium' },
  ]

  return (
    <div className="min-h-screen">
      {/* Full-Screen Product Heroes - Warivo Style */}
      {productHeros.map((product, index) => (
        <section
          key={product.id}
          className={`relative min-h-screen flex items-center bg-gradient-to-br ${product.bgColor}`}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Product Image - Centered on mobile, left on desktop */}
              <div className="relative h-80 lg:h-[600px] flex items-center justify-center order-1 lg:order-1">
                <div className="text-[200px] lg:text-[400px] transform hover:scale-105 transition-transform duration-700">
                  🛴
                </div>
              </div>

              {/* Product Info - Below image on mobile, right on desktop */}
              <div className="text-white space-y-4 lg:space-y-6 text-center lg:text-left order-2 lg:order-2 px-4 lg:px-0">
                <div className="inline-block mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                    Available in {product.colors.length} Colors
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {product.name.replace('M\'LiteEv ', '')}
                </h1>
                <p className="text-base md:text-xl lg:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90 px-2 lg:px-0">
                  {product.description}
                </p>
                
                {/* Color Options */}
                <div className="flex gap-3 items-center justify-center lg:justify-start pt-4">
                  <span className="text-sm font-semibold opacity-80">Colors:</span>
                  {product.colors.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xs font-bold">{color.charAt(0)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Link href={`/models/${product.slug}`}>
                    <button className="px-10 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-all uppercase text-sm tracking-wide mt-8">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
