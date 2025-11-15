'use client'

import { useState, use, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Zap, Battery, Shield, ChevronLeft, Gauge, Clock, CheckCircle2, Star } from 'lucide-react'
import { getModelVariantImages, getImageOrFallback, type ModelImage } from '@/lib/images'

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params Promise for Next.js 15+
  const { slug } = use(params)
  const [selectedColor, setSelectedColor] = useState(0)
  const [variantImages, setVariantImages] = useState<ModelImage[]>([])
  const [imagesLoading, setImagesLoading] = useState(true)

  // Load variant images for this model
  useEffect(() => {
    async function loadImages() {
      try {
        const images = await getModelVariantImages(slug)
        setVariantImages(images)
      } catch (error) {
        console.error('Error loading variant images:', error)
      } finally {
        setImagesLoading(false)
      }
    }

    loadImages()
  }, [slug])

  // M'LiteEv Product Data - New 7 Models
  const productData: Record<string, any> = {
    'sl-pro': {
      name: 'S.L Pro',
      tagline: 'Standard Line Excellence',
      description: 'The S.L Pro delivers reliable performance with 1000W motor power and versatile controller options. Perfect for daily commuting with premium build quality.',
      colors: [
        { name: 'Red', code: 'bg-red-700', border: 'border-red-500' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Blue', code: 'bg-blue-700', border: 'border-blue-500' },
        { name: 'Grey', code: 'bg-gray-500', border: 'border-gray-300' },
      ]
    },
    'dl-pro': {
      name: 'D.L Pro',
      tagline: 'Deluxe Line Performance',
      description: 'The D.L Pro offers enhanced deluxe features with 1000W motor power and versatile controller options. Superior comfort and style for discerning riders.',
      colors: [
        { name: 'Red', code: 'bg-red-700', border: 'border-red-500' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Blue', code: 'bg-blue-700', border: 'border-blue-500' },
        { name: 'Grey', code: 'bg-gray-500', border: 'border-gray-300' },
      ]
    },
    'cs-pro': {
      name: 'CS Pro',
      tagline: 'City Sport Performance',
      description: 'The CS Pro delivers enhanced performance with 1200W motor power and advanced controller system. Perfect for sport-oriented urban commuting.',
      colors: [
        { name: 'Red', code: 'bg-red-700', border: 'border-red-500' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Blue', code: 'bg-blue-700', border: 'border-blue-500' },
        { name: 'Grey', code: 'bg-gray-500', border: 'border-gray-300' },
      ]
    },
    'cs-pro-plus': {
      name: 'CS Pro +',
      tagline: 'City Sport Plus Excellence',
      description: 'The CS Pro + offers enhanced features with 1200W motor power and premium upgrades. Superior performance for demanding urban riders.',
      colors: [
        { name: 'Red', code: 'bg-red-700', border: 'border-red-500' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Blue', code: 'bg-blue-700', border: 'border-blue-500' },
        { name: 'Grey', code: 'bg-gray-500', border: 'border-gray-300' },
      ]
    },
    'vespa-pro': {
      name: 'Vespa Pro',
      tagline: 'Premium Classic Style',
      description: 'The Vespa Pro combines classic Italian design with modern electric performance. 1200W motor with premium features for sophisticated riders.',
      colors: [
        { name: 'Red', code: 'bg-red-700', border: 'border-red-500' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Blue', code: 'bg-blue-700', border: 'border-blue-500' },
        { name: 'Grey', code: 'bg-gray-500', border: 'border-gray-300' },
      ]
    },
    'vespa-pro-plus': {
      name: 'Vespa Pro +',
      tagline: 'Premium Classic Plus',
      description: 'The enhanced Vespa Pro + offers additional premium features with classic styling. Superior performance and luxury for discerning riders.',
      colors: [
        { name: 'Red', code: 'bg-red-700', border: 'border-red-500' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Blue', code: 'bg-blue-700', border: 'border-blue-500' },
        { name: 'Grey', code: 'bg-gray-500', border: 'border-gray-300' },
      ]
    },
    'cs-3': {
      name: 'CS 3',
      tagline: 'City Sport Generation 3',
      description: 'The latest CS 3 represents the pinnacle of City Sport engineering. Advanced 1200W motor with cutting-edge technology and premium features.',
      colors: [
        { name: 'Red', code: 'bg-red-700', border: 'border-red-500' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Blue', code: 'bg-blue-700', border: 'border-blue-500' },
        { name: 'Grey', code: 'bg-gray-500', border: 'border-gray-300' },
      ]
    },
  }

  const product = productData[slug] || productData['sl-pro']
  
  // Set specifications based on model type
  const is1000WModel = ['sl-pro', 'dl-pro'].includes(slug)
  const is1200WModel = ['cs-pro', 'cs-pro-plus', 'vespa-pro', 'vespa-pro-plus', 'cs-3'].includes(slug)
  
  product.keySpecs = [
    { icon: Battery, value: is1000WModel ? '48V/60V/72V' : '60V/72V', label: 'Controller' },
    { icon: Zap, value: is1000WModel ? '40-45 km/h' : '50-55 km/h', label: 'Top Speed' },
    { icon: Gauge, value: is1000WModel ? '1000W' : '1200W', label: 'Motor Power' },
    { icon: Shield, value: is1000WModel ? 'Disc/Drum' : 'Disc/Disc', label: 'Brake System' },
  ]
  product.features = [
    {
      title: 'Digital Console',
      description: 'Speedometer, tripmeter & odometer - stay fully informed with premium digital display.',
      image: '📱'
    },
    {
      title: 'Premium Tyres',
      description: `${is1000WModel ? '90-100-10' : '90-90-12'} tubeless tyres for optimal grip and performance.`,
      image: '🛞'
    },
    {
      title: 'Braking System',
      description: `${is1000WModel ? 'Front Disc/Rear Drum' : 'Front Disc/Rear Disc'} brakes for superior stopping power.`,
      image: '🔧'
    },
    {
      title: 'Controller System',
      description: `${is1000WModel ? '48V/60V/72V' : '60V/72V'} controller with multiple voltage options for flexibility.`,
      image: '⚡'
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
      <section className="pb-8 md:pb-12 pt-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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

            {/* Right - Product Image with Selected Color */}
            <div className="relative h-64 sm:h-80 lg:h-[600px] flex items-center justify-center overflow-hidden">
              <div className={`absolute inset-0 ${product.colors[selectedColor].code}/10 rounded-full blur-3xl`} />
              {/* Real Scooter Image or Fallback */}
              {imagesLoading ? (
                <div className="text-white text-lg animate-pulse">Loading...</div>
              ) : (() => {
                const selectedColorName = product.colors[selectedColor]?.name.toLowerCase()
                const variantImage = variantImages.find(img => img.color.toLowerCase() === selectedColorName)
                const imageData = getImageOrFallback(variantImage?.image_url || null)
                
                return imageData.type === 'image' ? (
                  <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                    <Image
                      src={imageData.value}
                      alt={`${product.name} ${selectedColorName}`}
                      fill
                      className="object-contain drop-shadow-2xl transform hover:scale-110 transition-all duration-700"
                      sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
                      priority
                    />
                  </div>
                ) : (
                  <div className="text-[120px] sm:text-[150px] md:text-[200px] lg:text-[250px] drop-shadow-2xl">
                    {imageData.value}
                  </div>
                )
              })()}
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

            {/* Right - Product Visualization with Color Change */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center bg-gray-800/30 rounded-3xl border border-gray-700 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br from-${product.colors[selectedColor].code.replace('bg-', '')}/10 to-transparent rounded-3xl transition-all duration-500`} />
              {/* Real Scooter Image */}
              {(() => {
                const selectedColorName = product.colors[selectedColor]?.name.toLowerCase()
                const variantImage = variantImages.find(img => img.color.toLowerCase() === selectedColorName)
                const imageData = getImageOrFallback(variantImage?.image_url || null)
                
                return imageData.type === 'image' ? (
                  <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
                    <Image
                      src={imageData.value}
                      alt={`${product.name} ${selectedColorName}`}
                      fill
                      className="object-contain drop-shadow-2xl transform hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 400px"
                    />
                  </div>
                ) : (
                  <div className="text-[120px] sm:text-[160px] md:text-[200px] drop-shadow-2xl">
                    {imageData.value}
                  </div>
                )
              })()}
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

          <div className="max-w-4xl mx-auto">
            {/* Complete Specifications */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
                <div>
                  <div className="text-sm font-semibold mb-2 text-teal-400">Controller</div>
                  <div className="text-lg font-bold">{is1000WModel ? '48V/60V/72V' : '60V/72V'}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2 text-teal-400">Motor Power</div>
                  <div className="text-lg font-bold">{is1000WModel ? '1000W' : '1200W'}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2 text-teal-400">Max Speed</div>
                  <div className="text-lg font-bold">{is1000WModel ? '40-45 Km/H' : '50-55 Km/H'}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2 text-teal-400">Brake System</div>
                  <div className="text-lg font-bold">{is1000WModel ? 'Front Disc/Rear Drum' : 'Front Disc/Rear Disc'}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2 text-teal-400">Tyre Size</div>
                  <div className="text-lg font-bold">{is1000WModel ? '90-100-10' : '90-90-12'}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2 text-teal-400">Colours Available</div>
                  <div className="text-lg font-bold">Red, White, Black + Blue, Grey</div>
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
