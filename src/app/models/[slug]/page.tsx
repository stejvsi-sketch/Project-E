'use client'

import Link from 'next/link'
import { Zap, Battery, Shield, ChevronLeft } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // Product data - will be fetched from database later
  const product = {
    name: 'NOVA-S',
    tagline: 'Effortless Elegance',
    subtitle: 'Practical Luxury',
    description: 'The ultimate smart device — Smart Bluetooth Connectivity, up to seamless mobile pairing, and backed by a 3-Year Warranty.',
    specs: [
      { value: '60', label: 'Actual Range/charge(km) Solo', icon: '60' },
      { value: '250', label: 'Rated Power (W)', icon: '250' },
      { value: '25', label: 'Speed(km/h) Solo GPS', icon: '25' },
      { value: '03', label: 'Driving Mode (Gear System)', icon: '03' },
    ],
    features: [
      {
        title: 'ALL DIGITAL CONSOLE BODY COLOR MIRROR',
        description: 'Speedometer tripmeter & odometer stay fully informed.',
        image: '📱'
      },
      {
        title: 'STYLISH ALLOY WHEELS & TUBELESS TYRES',
        description: 'Stylish alloy wheels with durable tubeless tyres for a sleek, smooth ride.',
        image: '⚙️'
      },
      {
        title: 'DISC BRAKING SYSTEM',
        description: 'Balanced and reliable braking performance',
        image: '🛞'
      },
      {
        title: 'TELESCOPIC & DUAL SUSPENSION',
        description: 'Comfortable ride with longer, comfortable seat across uneven roads and speed bumps',
        image: '🔧'
      },
    ],
    colors: [
      { name: 'M\'LiteEv Teal', code: 'bg-teal-400' },
      { name: 'Pearl White', code: 'bg-white' },
      { name: 'Midnight Black', code: 'bg-black' },
    ]
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Back Button */}
      <div className="container-custom pt-6">
        <Link href="/models" className="inline-flex items-center gap-2 text-white hover:text-teal-500 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Models</span>
        </Link>
      </div>

      {/* Hero Section with Specs */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Product Name */}
            <div className="text-white">
              <h1 className="text-6xl md:text-7xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold mb-2">{product.tagline}</p>
              <p className="text-2xl font-semibold">{product.subtitle}</p>
            </div>

            {/* Right - Product Image */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="text-[250px]">🛴</div>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white">
            {product.specs.map((spec, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-6xl font-black mb-2 font-mono tracking-tight">
                  {spec.icon}
                </div>
                <div className="text-sm font-semibold opacity-90 leading-tight">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elevate Your Ride */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4 text-center">
              Elevate Your Ride With {product.name}
            </h2>
            <p className="text-xl text-gray-600 mb-4 text-center max-w-3xl mx-auto">
              {product.description}
            </p>
            <div className="text-center mb-12">
              <Link href="/contact">
                <button className="px-10 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-md transition-all uppercase text-sm tracking-wide">
                  BOOK {product.name} NOW
                </button>
              </Link>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-gray-700 rounded-lg overflow-hidden h-64 flex items-end p-8"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20">
                    {feature.image}
                  </div>
                  <div className="relative z-10 text-white">
                    <p className="text-sm mb-2 opacity-80">{feature.description}</p>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            3 Amazing Colours
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Color Buttons */}
            <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-full py-4 px-8 ${
                    index === 0
                      ? 'bg-white/20 backdrop-blur-sm border-2 border-white'
                      : color.code
                  } text-white font-semibold rounded-lg hover:scale-105 transition-all`}
                >
                  {color.name}
                </button>
              ))}
            </div>

            {/* Right - Scooter Image */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="text-[250px]">🛴</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Specifications
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Motor & Performance */}
            <div className="bg-teal-600 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6 text-white">
                <Zap className="w-6 h-6" />
                <h3 className="text-xl font-bold">Motor & Performance</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-white">
                <div>
                  <div className="font-semibold mb-1">Range</div>
                  <div className="opacity-90">Upto 120 kms</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Battery</div>
                  <div className="opacity-90">Lead Acid / Lithium</div>
                </div>
              </div>
            </div>

            {/* Brake & Tyre */}
            <div className="bg-teal-600 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6 text-white">
                <Battery className="w-6 h-6" />
                <h3 className="text-xl font-bold">Brake & Tyre</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6 text-white">
                <div>
                  <div className="font-semibold mb-1">Brake Type</div>
                  <div className="opacity-90">Front Disc/Rear Drum</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Tyre Type</div>
                  <div className="opacity-90">Tubeless</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Front Tyre</div>
                  <div className="opacity-90">90/90/12</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Rear Tyre</div>
                  <div className="opacity-90">90/90/12</div>
                </div>
              </div>
              <div className="mt-4 text-white">
                <div className="font-semibold mb-1">Front wheel rim</div>
                <div className="opacity-90">Alloy</div>
              </div>
            </div>

            {/* Suspension & Dimension */}
            <div className="bg-teal-600 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6 text-white">
                <Shield className="w-6 h-6" />
                <h3 className="text-xl font-bold">Suspension & Dimension</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6 text-white">
                <div>
                  <div className="font-semibold mb-1">Front</div>
                  <div className="opacity-90">Telescopic</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Rear</div>
                  <div className="opacity-90">Dual</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Kerb weight without battery</div>
                  <div className="opacity-90">58.500 kg</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Dimensions (lxwxh) mm</div>
                  <div className="opacity-90">1800 x 660 x 1100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-dark">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Experience {product.name}?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a test ride today and feel the difference
          </p>
          <Link href="/contact">
            <button className="px-12 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-md transition-all uppercase text-sm tracking-wide shadow-lg hover:scale-105">
              BOOK TEST RIDE
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
