'use client'

import Link from 'next/link'
import { Battery, Zap, Shield, ChevronDown, ArrowRight, Gauge, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useState, useEffect } from 'react'

export default function ModelsPage() {
  // Track which M'LiteEv model is currently in viewport
  const [activeSection, setActiveSection] = useState(0)

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
      name: 'M\'LiteEv Urban Elite',
      tagline: 'Effortless Elegance, Practical Luxury',
      description: 'The Urban Elite is a dynamic electric scooter which has the comfort of any petrol scooter with slick design, a spectacular operating voltage and a loading capacity. Features include smart connectivity and riding comfort.',
      bgColor: 'from-red-700 to-red-800',
      slug: 'urban-elite',
      colors: [
        { name: 'Red', code: 'bg-red-700', border: 'border-red-500' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' }
      ],
      specs: [
        { icon: Battery, label: 'Range', value: '80 km' },
        { icon: Zap, label: 'Top Speed', value: '60 km/h' },
        { icon: Gauge, label: 'Power', value: '2000W' },
        { icon: Clock, label: 'Charge', value: '4 hrs' }
      ],
      price: '₹89,999'
    },
    {
      id: 2,
      name: 'M\'LiteEv City Pro',
      tagline: 'Ride with clarity and intelligence',
      description: 'Bright illumination, sleek dashboard, and smart connectivity. The City Pro combines style with substance for the modern urban commuter.',
      bgColor: 'from-gray-600 to-gray-700',
      slug: 'city-pro',
      colors: [
        { name: 'Gray', code: 'bg-gray-500', border: 'border-gray-300' },
        { name: 'Blue', code: 'bg-blue-500', border: 'border-blue-300' },
        { name: 'Silver', code: 'bg-gray-300', border: 'border-gray-200' }
      ],
      specs: [
        { icon: Battery, label: 'Range', value: '70 km' },
        { icon: Zap, label: 'Top Speed', value: '55 km/h' },
        { icon: Gauge, label: 'Power', value: '1800W' },
        { icon: Clock, label: 'Charge', value: '3.5 hrs' }
      ],
      price: '₹79,999'
    },
    {
      id: 3,
      name: 'M\'LiteEv Metro X',
      tagline: 'Urban mobility at its finest',
      description: 'Navigate city streets with confidence. The Metro X features responsive handling, premium build quality, and all the modern amenities you need.',
      bgColor: 'from-teal-500 to-teal-600',
      slug: 'metro-x',
      colors: [
        { name: 'Teal', code: 'bg-teal-500', border: 'border-teal-300' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' }
      ],
      specs: [
        { icon: Battery, label: 'Range', value: '75 km' },
        { icon: Zap, label: 'Top Speed', value: '58 km/h' },
        { icon: Gauge, label: 'Power', value: '1900W' },
        { icon: Clock, label: 'Charge', value: '3.8 hrs' }
      ],
      price: '₹84,999'
    },
    {
      id: 4,
      name: 'M\'LiteEv Eco Plus',
      tagline: 'Sustainable performance',
      description: 'Eco-friendly without compromise. The Eco Plus delivers exceptional efficiency, extended range, and a lighter environmental footprint.',
      bgColor: 'from-green-500 to-green-600',
      slug: 'eco-plus',
      colors: [
        { name: 'Green', code: 'bg-green-500', border: 'border-green-300' },
        { name: 'White', code: 'bg-white', border: 'border-gray-300' },
        { name: 'Gray', code: 'bg-gray-500', border: 'border-gray-300' }
      ],
      specs: [
        { icon: Battery, label: 'Range', value: '90 km' },
        { icon: Zap, label: 'Top Speed', value: '50 km/h' },
        { icon: Gauge, label: 'Power', value: '1500W' },
        { icon: Clock, label: 'Charge', value: '3 hrs' }
      ],
      price: '₹69,999'
    },
    {
      id: 5,
      name: 'M\'LiteEv Sport',
      tagline: 'Unleash the thrill',
      description: 'For those who crave adrenaline. The Sport model features enhanced acceleration, superior handling, and aggressive styling for the ultimate ride.',
      bgColor: 'from-purple-500 to-purple-600',
      slug: 'sport',
      colors: [
        { name: 'Purple', code: 'bg-purple-500', border: 'border-purple-300' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' },
        { name: 'Red', code: 'bg-red-500', border: 'border-red-300' }
      ],
      specs: [
        { icon: Battery, label: 'Range', value: '65 km' },
        { icon: Zap, label: 'Top Speed', value: '70 km/h' },
        { icon: Gauge, label: 'Power', value: '2500W' },
        { icon: Clock, label: 'Charge', value: '4.5 hrs' }
      ],
      price: '₹99,999'
    },
    {
      id: 6,
      name: 'M\'LiteEv Classic',
      tagline: 'Timeless sophistication',
      description: 'Classic design meets modern technology. The Classic offers vintage aesthetics with contemporary electric performance.',
      bgColor: 'from-slate-600 to-slate-700',
      slug: 'classic',
      colors: [
        { name: 'Charcoal', code: 'bg-slate-600', border: 'border-slate-400' },
        { name: 'Graphite', code: 'bg-slate-700', border: 'border-slate-500' },
        { name: 'Pearl', code: 'bg-slate-200', border: 'border-slate-300' }
      ],
      specs: [
        { icon: Battery, label: 'Range', value: '70 km' },
        { icon: Zap, label: 'Top Speed', value: '52 km/h' },
        { icon: Gauge, label: 'Power', value: '1700W' },
        { icon: Clock, label: 'Charge', value: '3.5 hrs' }
      ],
      price: '₹74,999'
    },
    {
      id: 7,
      name: 'M\'LiteEv Cruiser',
      tagline: 'Comfort for long rides',
      description: 'Built for comfort on longer journeys. The Cruiser features enhanced suspension, spacious seating, and superior range for extended rides.',
      bgColor: 'from-blue-500 to-blue-600',
      slug: 'cruiser',
      colors: [
        { name: 'Blue', code: 'bg-blue-500', border: 'border-blue-300' },
        { name: 'Silver', code: 'bg-gray-300', border: 'border-gray-200' },
        { name: 'Black', code: 'bg-black', border: 'border-gray-400' }
      ],
      specs: [
        { icon: Battery, label: 'Range', value: '85 km' },
        { icon: Zap, label: 'Top Speed', value: '57 km/h' },
        { icon: Gauge, label: 'Power', value: '1950W' },
        { icon: Clock, label: 'Charge', value: '4 hrs' }
      ],
      price: '₹87,999'
    },
  ]

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.product-section')
    sections[index]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen relative">
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
          className={`product-section relative min-h-screen flex items-center bg-gradient-to-br ${product.bgColor} transition-all duration-500 pt-20`}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Product Image with Glow Effect */}
              <div className="relative h-96 lg:h-[600px] flex items-center justify-center order-1 lg:order-1">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl" />
                <div className="text-[200px] lg:text-[400px] transform hover:scale-110 transition-all duration-700 cursor-pointer relative z-10 drop-shadow-2xl">
                  🛴
                </div>
              </div>

              {/* Product Info */}
              <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-2 px-4 lg:px-0">
                {/* Model Number Badge */}
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <span className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                    Model {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  {product.name.replace('M\'LiteEv ', '')}
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl font-semibold opacity-90 italic">
                  {product.tagline}
                </p>

                <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-80">
                  {product.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                  {product.specs.map((spec, idx) => {
                    const Icon = spec.icon
                    return (
                      <div 
                        key={idx}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                      >
                        <Icon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <div className="text-xs opacity-70 uppercase tracking-wide">{spec.label}</div>
                        <div className="text-xl font-bold mt-1">{spec.value}</div>
                      </div>
                    )
                  })}
                </div>
                
                {/* Color Swatches */}
                <div className="pt-4">
                  <div className="text-sm font-semibold mb-3 opacity-80 uppercase tracking-wide">Available Colors:</div>
                  <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
                    {product.colors.map((color, idx) => (
                      <div 
                        key={idx} 
                        className="group relative cursor-pointer"
                      >
                        <div className={`w-12 h-12 rounded-full ${color.code} border-4 ${color.border} shadow-lg hover:scale-125 transition-all duration-300 hover:shadow-2xl`} />
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {color.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8 pb-4">
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
