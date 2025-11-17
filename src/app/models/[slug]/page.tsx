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
      description: 'The Vespa Pro combines classic Indian design with modern electric performance. 1200W motor with premium features for sophisticated riders.',
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
  
  // Set specifications based on model type (exact values from brief)
  const is1000WModel = ['sl-pro', 'dl-pro'].includes(slug)
  const is1200WModel = ['cs-pro', 'cs-pro-plus', 'vespa-pro', 'vespa-pro-plus', 'cs-3'].includes(slug)

  product.keySpecs = [
    { icon: Battery, value: is1000WModel ? '48V/60V/72V' : '60V/72V', label: 'Controller' },
    { icon: Zap, value: is1000WModel ? '40-45Km/H' : '50-55Km/h', label: 'Max Speed' },
    { icon: Gauge, value: is1000WModel ? 'Motor Power 1000W' : 'Motor Power 1200W', label: 'Motor' },
    { icon: Shield, value: is1000WModel ? 'Front Disc/Rear Drum' : 'Front Disc/Rear Disc', label: 'Brake System' },
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

  // Filter to show only 3 main colors (red, white, black)
  const displayColors = product.colors.filter((color: any) => 
    ['red', 'white', 'black'].includes(color.name.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#f8f4ec] text-[#2f1f15] -mt-24 md:-mt-32">
      {/* Hero Section with Product Image */}
      <section className="pb-8 md:pb-12 pt-24 md:pt-32 bg-gradient-to-br from-[#fdf7f0] via-[#f4e1c8] to-[#e4c8a1]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Product Info */}
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight break-words text-[#2a1c12]">{product.name}</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-[#b8672f] italic font-semibold">{product.tagline}</p>
              </div>
              <p className="text-base sm:text-lg text-[#5c4635] leading-relaxed max-w-xl mx-auto lg:mx-0">
                {product.description}
              </p>

              {/* Key Specs - Quick View */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {product.keySpecs.map((spec: any, index: number) => {
                  const Icon = spec.icon
                  return (
                    <div key={index} className="bg-white/90 border border-[#eadcc7] rounded-xl p-3 sm:p-4 drop-shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#b8672f] mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-[#2a1c12] mb-1">{spec.value}</div>
                      <div className="text-[10px] sm:text-xs text-[#8a7360] uppercase tracking-wide leading-tight">{spec.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right - Product Image with Selected Color */}
            <div className="relative h-64 sm:h-80 lg:h-[600px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] lg:w-[560px] lg:h-[560px] rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.9),rgba(244,225,200,0.6),transparent_70%)] opacity-80" />
              </div>
              {/* Real Scooter Image only (no emoji fallback) */}
              {imagesLoading ? (
                <div className="w-64 h-64 rounded-full bg-[#e4c8a1]/30 animate-pulse"></div>
              ) : (() => {
                const selectedColorName = displayColors[selectedColor]?.name.toLowerCase()
                const variantImage = variantImages.find(img => img.color.toLowerCase() === selectedColorName)
                if (!variantImage) {
                  return <div className="w-64 h-64" />
                }

                const imageData = getImageOrFallback(variantImage.image_url)
                if (imageData.type !== 'image') {
                  return <div className="w-64 h-64" />
                }
                
                return (
                  <div className="relative z-10 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px]">
                    <Image
                      src={imageData.value}
                      alt={`${product.name} ${selectedColorName}`}
                      fill
                      className="object-contain drop-shadow-2xl transform hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, (max-width: 1024px) 480px, 580px"
                      priority
                      quality={95}
                    />
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 bg-[#f0e2cf]">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a1c12] mb-4">
                Premium Features
              </h2>
              <p className="text-base sm:text-lg text-[#6d5544] max-w-2xl mx-auto px-4">
                Experience cutting-edge technology and design that sets {product.name} apart
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {product.features.map((feature: any, index: number) => (
                <div
                  key={index}
                  className="group relative bg-white/90 rounded-2xl overflow-hidden h-64 flex items-end p-8 border border-[#eadcc7] hover:border-[#b8672f]/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b8672f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl sm:text-8xl md:text-9xl opacity-5 group-hover:opacity-15 transition-opacity">
                    {feature.image}
                  </div>
                  <div className="relative z-10 text-[#2a1c12]">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-[#b8672f] transition-colors">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6d5544] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/contact" className="w-full sm:w-auto inline-block">
                <button className="w-full sm:w-auto px-10 py-4 bg-[#b8672f] hover:bg-[#a45625] text-white font-semibold rounded-lg transition-all uppercase text-sm tracking-wide shadow-lg hover:shadow-xl">
                  BOOK TEST RIDE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-20 bg-[#fdf7f0]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a1c12] mb-4">
              Choose Your Color
            </h2>
            <p className="text-base sm:text-lg text-[#6d5544]">Available in 3 stunning colors (White & Blue also available)</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Interactive Color Selector */}
            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
              {displayColors.map((color: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`group w-full py-6 px-8 rounded-2xl transition-all duration-300 flex items-center gap-6 ${
                    selectedColor === index
                      ? 'bg-white border-2 border-[#b8672f] shadow-lg shadow-[#b8672f]/20'
                      : 'bg-white/60 border-2 border-[#eadcc7] hover:border-[#c98545]'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full ${color.code} border-4 ${color.border} shadow-lg transition-transform duration-300 ${selectedColor === index ? 'scale-110' : 'group-hover:scale-105'}`} />
                  <div className="text-left flex-1">
                    <div className={`text-xl font-bold transition-colors ${selectedColor === index ? 'text-[#b8672f]' : 'text-[#2a1c12] group-hover:text-[#b8672f]'}`}>
                      {color.name}
                    </div>
                    <div className="text-sm text-[#8a7360]">Available now</div>
                  </div>
                  {selectedColor === index && (
                    <CheckCircle2 className="w-6 h-6 text-[#b8672f]" />
                  )}
                </button>
              ))}
            </div>

            {/* Right - Product Visualization with Color Change */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center bg-white rounded-3xl border border-[#eadcc7] overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f3dfc4] to-transparent rounded-3xl transition-all duration-500" />
              {/* Real Scooter Image only (no emoji fallback) */}
              {(() => {
                const selectedColorName = displayColors[selectedColor]?.name.toLowerCase()
                const variantImage = variantImages.find(img => img.color.toLowerCase() === selectedColorName)
                if (!variantImage) {
                  return <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]" />
                }

                const imageData = getImageOrFallback(variantImage.image_url)
                if (imageData.type !== 'image') {
                  return <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]" />
                }
                
                return (
                  <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]">
                    <Image
                      src={imageData.value}
                      alt={`${product.name} ${selectedColorName}`}
                      fill
                      className="object-contain drop-shadow-2xl transform hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 400px"
                      quality={95}
                    />
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gradient-to-b from-[#f4e1c8] to-[#f0e2cf]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a1c12] mb-4">
              Technical Specifications
            </h2>
            <p className="text-base sm:text-lg text-[#6d5544] px-4">Detailed specifications for {product.name}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Complete Specifications */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-[#eadcc7]/80 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#2a1c12]">
                <div>
                  <div className="text-sm font-semibold mb-2 text-[#b8672f] uppercase tracking-wide">Controller</div>
                  <div className="text-lg font-bold">{is1000WModel ? '48V/60V/72V' : '60V/72V'}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2 text-[#b8672f] uppercase tracking-wide">Motor Power</div>
                  <div className="text-lg font-bold">{is1000WModel ? '1000W' : '1200W'}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2 text-[#b8672f] uppercase tracking-wide">Max Speed</div>
                  <div className="text-lg font-bold">{is1000WModel ? '40-45 Km/H' : '50-55 Km/H'}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2 text-[#b8672f] uppercase tracking-wide">Brake System</div>
                  <div className="text-lg font-bold">{is1000WModel ? 'Front Disc/Rear Drum' : 'Front Disc/Rear Disc'}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2 text-[#b8672f] uppercase tracking-wide">Tyre Size</div>
                  <div className="text-lg font-bold">{is1000WModel ? '90-100-10' : '90-90-12'}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-2 text-[#b8672f] uppercase tracking-wide">Colours Available</div>
                  <div className="text-lg font-bold">Red, White, Black (+ White & Blue variants)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#fdf7f0] via-[#f4e1c8] to-[#f0d5b2] border-t border-[#eadcc7]">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a1c12] mb-4 px-4">
              Ready to Experience {product.name}?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#6d5544] mb-8 leading-relaxed px-4">
              Book a test ride today and discover the future of electric mobility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto inline-block">
                <button className="w-full sm:w-auto px-12 py-4 bg-[#b8672f] hover:bg-[#a45625] text-white font-semibold rounded-lg transition-all uppercase text-sm tracking-wide shadow-lg">
                  BOOK TEST RIDE
                </button>
              </Link>
              <Link href="/models" className="w-full sm:w-auto inline-block">
                <button className="w-full sm:w-auto px-12 py-4 border-2 border-[#b8672f] text-[#b8672f] font-semibold rounded-lg hover:bg-[#b8672f] hover:text-white transition-all uppercase text-sm tracking-wide">
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
