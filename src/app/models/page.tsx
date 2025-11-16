'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Battery, Zap, Shield, ArrowRight, Gauge, Bike } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { ALL_MODELS } from '@/data/models'
import { getModelVariantImages, getImageOrFallback, type ModelImage } from '@/lib/images'

// Component to display product image with color selection and parallax effect
function ProductImage({ 
  modelSlug, 
  variantImages, 
  colors, 
  selectedColorIndex,
  isLoading 
}: { 
  modelSlug: string
  variantImages: ModelImage[]
  colors: Array<{ name: string, code: string, border: string }>
  selectedColorIndex: number
  isLoading: boolean
}) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  // Get the image for the selected color
  const selectedColor = colors[selectedColorIndex]?.name.toLowerCase()
  const variantImage = variantImages.find(img => img.color.toLowerCase() === selectedColor)

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return
      
      const rect = imageRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how much of the element is visible in viewport (0 to 1)
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = (viewportCenter - elementCenter) / windowHeight
      
      // Apply subtle parallax (max 30px movement)
      const offset = distanceFromCenter * 30
      setParallaxOffset(offset)
    }

    // Initial calculation
    handleScroll()
    
    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLoading, variantImage])

  // While loading or if no variant image exists yet, don't show any emoji/placeholder
  if (isLoading || !variantImage) {
    return (
      <div className="relative w-full h-full flex items-center justify-center" />
    )
  }

  const imageData = getImageOrFallback(variantImage.image_url)

  if (imageData.type !== 'image') {
    return (
      <div className="relative w-full h-full flex items-center justify-center" />
    )
  }

  return (
    <div ref={imageRef} className="relative w-full h-full flex items-center justify-center">
      <div 
        className="relative w-[380px] h-[380px] sm:w-[460px] sm:h-[440px] md:w-[560px] md:h-[540px] lg:w-[700px] lg:h-[660px] xl:w-[780px] xl:h-[740px] transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform'
        }}
      >
        <Image
          src={imageData.value}
          alt={`${modelSlug} ${selectedColor}`}
          fill
          className="object-contain drop-shadow-2xl transform hover:scale-105 transition-all duration-700 cursor-pointer"
          sizes="(max-width: 640px) 380px, (max-width: 768px) 460px, (max-width: 1024px) 560px, (max-width: 1280px) 700px, 780px"
          priority
          quality={95}
          loading="eager"
        />
      </div>
    </div>
  )
}

export default function ModelsPage() {
  // Track which M'LiteEv model is currently in viewport
  const [activeSection, setActiveSection] = useState(0)
  const [variantImages, setVariantImages] = useState<Record<string, ModelImage[]>>({})
  const [imagesLoading, setImagesLoading] = useState(true)
  const [selectedColors, setSelectedColors] = useState<Record<string, number>>({})

  // Load variant images for all models
  useEffect(() => {
    async function loadVariantImages() {
      try {
        const images: Record<string, ModelImage[]> = {}
        
        // Load images for each model
        for (const model of ALL_MODELS) {
          const modelImages = await getModelVariantImages(model.id)
          images[model.id] = modelImages
        }
        
        setVariantImages(images)
      } catch (error) {
        console.error('Error loading variant images:', error)
      } finally {
        setImagesLoading(false)
      }
    }

    loadVariantImages()
  }, [])

  // M'LiteEv Model Navigation - Detect which product section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.product-section')
      const windowHeight = window.innerHeight
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // M'LiteEv Complete Product Lineup - 7 Premium Electric Scooter Models
  const productHeros = [
    {
      id: 1,
      name: 'S.L Pro',
      tagline: 'Standard Line Excellence',
      description: 'The S.L Pro delivers reliable performance with 1000W motor power and versatile controller options. Perfect for daily commuting with premium build quality.',
      bgColor: 'from-red-700 to-red-900',
      slug: 'sl-pro',
      colors: [
        { name: 'Red', code: 'bg-red-600', border: 'border-red-400' },
        { name: 'White', code: 'bg-secondary-bg', border: 'border-text-heading' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-500' }
      ],
      specs: [
        { icon: Battery, label: 'Controller', value: '48V/60V/72V' },
        { icon: Zap, label: 'Top Speed', value: '40-45 km/h' },
        { icon: Gauge, label: 'Power', value: '1000W' },
        { icon: Shield, label: 'Brake', value: 'Front Disc/Rear Drum' }
      ],
      price: 'Contact for Price'
    },
    {
      id: 2,
      name: 'D.L Pro',
      tagline: 'Deluxe Line Performance',
      description: 'The D.L Pro offers enhanced deluxe features with 1000W motor power and versatile controller options. Superior comfort and style for discerning riders.',
      bgColor: 'from-slate-700 to-slate-900',
      slug: 'dl-pro',
      colors: [
        { name: 'Red', code: 'bg-red-600', border: 'border-red-400' },
        { name: 'White', code: 'bg-secondary-bg', border: 'border-text-heading' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-500' }
      ],
      specs: [
        { icon: Battery, label: 'Controller', value: '48V/60V/72V' },
        { icon: Zap, label: 'Top Speed', value: '40-45 km/h' },
        { icon: Gauge, label: 'Power', value: '1000W' },
        { icon: Shield, label: 'Brake', value: 'Front Disc/Rear Drum' }
      ],
      price: 'Contact for Price'
    },
    {
      id: 3,
      name: 'CS Pro',
      tagline: 'City Sport Performance',
      description: 'The CS Pro delivers enhanced performance with 1200W motor power and advanced controller system. Perfect for sport-oriented urban commuting.',
      bgColor: 'from-teal-700 to-teal-900',
      slug: 'cs-pro',
      colors: [
        { name: 'Red', code: 'bg-red-600', border: 'border-red-400' },
        { name: 'White', code: 'bg-secondary-bg', border: 'border-text-heading' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-500' }
      ],
      specs: [
        { icon: Battery, label: 'Controller', value: '60V/72V' },
        { icon: Zap, label: 'Top Speed', value: '50-55 km/h' },
        { icon: Gauge, label: 'Power', value: '1200W' },
        { icon: Shield, label: 'Brake', value: 'Front Disc/Rear Disc' }
      ],
      price: 'Contact for Price'
    },
    {
      id: 4,
      name: 'CS Pro +',
      tagline: 'City Sport Plus Excellence',
      description: 'The CS Pro + offers enhanced features with 1200W motor power and premium upgrades. Superior performance for demanding urban riders.',
      bgColor: 'from-emerald-700 to-emerald-900',
      slug: 'cs-pro-plus',
      colors: [
        { name: 'Red', code: 'bg-red-600', border: 'border-red-400' },
        { name: 'White', code: 'bg-secondary-bg', border: 'border-text-heading' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-500' }
      ],
      specs: [
        { icon: Battery, label: 'Controller', value: '60V/72V' },
        { icon: Zap, label: 'Top Speed', value: '50-55 km/h' },
        { icon: Gauge, label: 'Power', value: '1200W' },
        { icon: Shield, label: 'Brake', value: 'Front Disc/Rear Disc' }
      ],
      price: 'Contact for Price'
    },
    {
      id: 5,
      name: 'Vespa Pro',
      tagline: 'Premium Classic Style',
      description: 'The Vespa Pro combines classic Italian design with modern electric performance. 1200W motor with premium features for sophisticated riders.',
      bgColor: 'from-indigo-700 to-indigo-900',
      slug: 'vespa-pro',
      colors: [
        { name: 'Red', code: 'bg-red-600', border: 'border-red-400' },
        { name: 'White', code: 'bg-secondary-bg', border: 'border-text-heading' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-500' }
      ],
      specs: [
        { icon: Battery, label: 'Controller', value: '60V/72V' },
        { icon: Zap, label: 'Top Speed', value: '50-55 km/h' },
        { icon: Gauge, label: 'Power', value: '1200W' },
        { icon: Shield, label: 'Brake', value: 'Front Disc/Rear Disc' }
      ],
      price: 'Contact for Price'
    },
    {
      id: 6,
      name: 'Vespa Pro +',
      tagline: 'Premium Classic Plus',
      description: 'The enhanced Vespa Pro + offers additional premium features with classic styling. Superior performance and luxury for discerning riders.',
      bgColor: 'from-purple-700 to-purple-900',
      slug: 'vespa-pro-plus',
      colors: [
        { name: 'Red', code: 'bg-red-600', border: 'border-red-400' },
        { name: 'White', code: 'bg-secondary-bg', border: 'border-text-heading' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-500' }
      ],
      specs: [
        { icon: Battery, label: 'Controller', value: '60V/72V' },
        { icon: Zap, label: 'Top Speed', value: '50-55 km/h' },
        { icon: Gauge, label: 'Power', value: '1200W' },
        { icon: Shield, label: 'Brake', value: 'Front Disc/Rear Disc' }
      ],
      price: 'Contact for Price'
    },
    {
      id: 7,
      name: 'CS 3',
      tagline: 'City Sport Generation 3',
      description: 'The latest CS 3 represents the pinnacle of City Sport engineering. Advanced 1200W motor with cutting-edge technology and premium features.',
      bgColor: 'from-blue-700 to-blue-900',
      slug: 'cs-3',
      colors: [
        { name: 'Red', code: 'bg-red-600', border: 'border-red-400' },
        { name: 'White', code: 'bg-secondary-bg', border: 'border-text-heading' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-500' }
      ],
      specs: [
        { icon: Battery, label: 'Controller', value: '60V/72V' },
        { icon: Zap, label: 'Top Speed', value: '50-55 km/h' },
        { icon: Gauge, label: 'Power', value: '1200W' },
        { icon: Shield, label: 'Brake', value: 'Front Disc/Rear Disc' }
      ],
      price: 'Contact for Price'
    },
  ]

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.product-section')
    sections[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen relative overflow-hidden w-full max-w-full -mt-24 md:-mt-32">
      {/* Side Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {productHeros.map((product, index) => (
          <button
            key={product.id}
            onClick={() => scrollToSection(index)}
            className={`group relative transition-all duration-300 ${
              activeSection === index ? 'scale-125' : 'scale-100 opacity-50 hover:opacity-100'
            }`}
            aria-label={`Go to ${product.name}`}
          >
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === index 
                ? 'bg-white border-white' 
                : 'bg-transparent border-white/50 hover:border-white'
            }`} />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-900/90 text-white px-3 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {product.name.replace('M\'LiteEv ', '')}
            </span>
          </button>
        ))}
      </div>

      {/* Product Sections */}
      {productHeros.map((product, index) => (
        <section
          key={product.id}
          className={`product-section relative min-h-screen flex items-center bg-gradient-to-br ${product.bgColor} transition-all duration-500 ${index === 0 ? 'pt-28 md:pt-36' : 'pt-20 md:pt-24'} overflow-hidden`}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>

          <div className="container-custom relative z-10 px-4">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Product Image */}
              <div className="relative h-[400px] md:h-[560px] lg:h-[700px] xl:h-[780px] flex items-center justify-center order-1 lg:order-1">
                <ProductImage 
                  modelSlug={product.slug}
                  variantImages={variantImages[product.slug] || []}
                  colors={product.colors}
                  selectedColorIndex={selectedColors[product.slug] ?? 0}
                  isLoading={imagesLoading}
                />
              </div>

              {/* Product Info */}
              <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-2">
                {/* Model Number Badge */}
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <span className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                    Model {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight font-display text-white">
                  {product.name.replace('M\'LiteEv ', '')}
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl font-semibold text-accent-gold italic">
                  {product.tagline}
                </p>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-white/90">
                  {product.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 lg:gap-4 py-4 md:py-6">
                  {product.specs.map((spec, idx) => {
                    const Icon = spec.icon
                    return (
                      <div 
                        key={idx}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 group min-w-0"
                      >
                        <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mb-1 md:mb-2 group-hover:scale-110 transition-transform text-white" />
                        <div className="text-[10px] md:text-xs text-white/70 uppercase tracking-wide mb-0.5 md:mb-1">{spec.label}</div>
                        <div className="text-xs md:text-sm lg:text-base font-bold truncate text-white">{spec.value}</div>
                      </div>
                    )
                  })}
                </div>
                
                {/* Color Swatches */}
                <div className="pt-2 md:pt-4">
                  <div className="text-xs md:text-sm font-semibold mb-2 md:mb-3 opacity-80 uppercase tracking-wide">Available Colors:</div>
                  <div className="flex gap-2 md:gap-3 justify-center lg:justify-start flex-wrap">
                    {product.colors.map((color, idx) => {
                      const isSelected = (selectedColors[product.slug] ?? 0) === idx
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() =>
                            setSelectedColors(prev => ({ ...prev, [product.slug]: idx }))
                          }
                          className="group relative cursor-pointer focus:outline-none"
                          aria-label={`${product.name} ${color.name}`}
                        >
                          <div
                            className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full ${color.code} border-2 md:border-4 ${isSelected ? 'ring-4 ring-white' : color.border} shadow-lg hover:scale-125 transition-all duration-300`}
                          />
                          <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-semibold transition-opacity whitespace-nowrap ${isSelected ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100'}`}>
                            {color.name}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-4 md:pt-6 pb-4">
                  <Link href={`/models/${product.slug}`} className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all uppercase text-sm tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 flex items-center justify-center gap-2">
                      Explore Details
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all uppercase text-sm tracking-wider">
                      Book Test Ride
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
